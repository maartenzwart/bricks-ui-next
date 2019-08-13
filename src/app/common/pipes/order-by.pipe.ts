import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  static isString(value: any) {
    return typeof value === 'string' || value instanceof String;
  }

  static caseInsensitiveSort(a: any, b: any) {
    if (OrderByPipe.isString(a) && OrderByPipe.isString(b)) {
      return a.localeCompare(b);
    }
    return OrderByPipe.defaultCompare(a, b);
  }

  static defaultCompare(a: any, b: any) {
    if (a === b) {
      return 0;
    }
    if (a == null) {
      return 1;
    }
    if (b == null) {
      return -1;
    }
    return a > b ? 1 : -1;
  }

  static dateCompare(a: Date, b: Date) {
    if (a == null) {
      return -1;
    }
    if (b == null) {
      return 1;
    }

    const dateA = moment(a);
    const dateB = moment(b);

    if (dateA.isSame(dateB, 'day')) {
      return 0;
    }
    return dateA.isAfter(dateB, 'day') ? -1 : 1;
  }

  static parseExpression(expression: string): string[] {
    expression = expression.replace(/\[(\w+)]/g, '.$1');
    expression = expression.replace(/^\./, '');
    return expression.split('.');
  }

  static getValue(object: any, expression: string[]) {
    for (let i = 0, n = expression.length; i < n; ++i) {
      const k = expression[i];
      if (!(k in object)) {
        return;
      }
      if (typeof object[k] === 'function') {
        object = object[k]();
      } else {
        object = object[k];
      }
    }

    return object;
  }

  static setValue(object: any, value: any, expression: string[]) {
    let i;
    for (i = 0; i < expression.length - 1; i++) {
      object = object[expression[i]];
    }

    object[expression[i]] = value;
  }

  transform<T>(value: T[], expression?: any, reverse?: boolean, isCaseInsensitive: boolean = false, isDate?: boolean, comparator?: any): T[] {
    if (!value) {
      return value;
    }

    if (Array.isArray(expression)) {
      return this.multiExpressionTransform(value, expression, reverse, isCaseInsensitive, isDate, comparator);
    }

    if (Array.isArray(value)) {
      return this.sortArray<T>(value.slice(), expression, reverse, isCaseInsensitive, isDate, comparator);
    }

    if (typeof value === 'object') {
      return this.transformObject(Object.assign({}, value), expression, reverse, isCaseInsensitive, isDate, comparator);
    }

    return value;
  }

  private sortArray<T>(value: T[], expression?: any, reverse?: boolean, isCaseInsensitive?: boolean, isDate?: boolean, comparator?: any): T[] {
    const isDeepLink = expression && expression.indexOf('.') !== -1;

    if (isDeepLink) {
      expression = OrderByPipe.parseExpression(expression);
    }

    let compareFn: any;

    if (comparator && typeof comparator === 'function') {
      compareFn = comparator;
    } else {
      if (isDate) {
        compareFn = OrderByPipe.dateCompare;
      } else {
        compareFn = isCaseInsensitive ? OrderByPipe.caseInsensitiveSort : OrderByPipe.defaultCompare;
      }
    }

    const array: any[] = value.sort((a: any, b: any): number => {
      if (!expression) {
        return compareFn(a, b);
      }

      if (!isDeepLink) {
        if (a && b) {
          return compareFn(a[expression], b[expression]);
        }
        return compareFn(a, b);
      }

      return compareFn(OrderByPipe.getValue(a, expression), OrderByPipe.getValue(b, expression));
    });

    if (reverse) {
      return array.reverse();
    }

    return array;
  }

  private transformObject(
    value: any | any[],
    expression?: any,
    reverse?: boolean,
    isCaseInsensitive?: boolean,
    isDate?: boolean,
    comparator?: any
  ): any {
    const parsedExpression = OrderByPipe.parseExpression(expression);
    let lastPredicate = parsedExpression.pop();
    let oldValue = OrderByPipe.getValue(value, parsedExpression);

    if (!Array.isArray(oldValue)) {
      parsedExpression.push(lastPredicate);
      lastPredicate = null;
      oldValue = OrderByPipe.getValue(value, parsedExpression);
    }

    if (!oldValue) {
      return value;
    }

    OrderByPipe.setValue(value, this.transform(oldValue, lastPredicate, reverse, isCaseInsensitive, isDate), parsedExpression);
    return value;
  }

  private multiExpressionTransform(value: any, expressions: any[], reverse: boolean, isCaseInsensitive: boolean = false, isDate?: boolean, comparator?: any): any {
    return expressions.reverse().reduce((result: any, expression: any) => {
      return this.transform(result, expression, reverse, isCaseInsensitive, isDate, comparator);
    }, value);
  }
}
