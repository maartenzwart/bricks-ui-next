import {Component, ElementRef, forwardRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {BrxInputErrorMessages} from '../../../interfaces/brx-input-error-message';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors} from '@angular/forms';
import {RelationService} from '../../../services/relation.service';
import {debounceTime, distinctUntilChanged, first, map} from 'rxjs/operators';
import {BrxRelation, BrxRelations} from '../../../interfaces/brx-relation';
import {BrxProject} from '../../../interfaces/brx-project';
import {Observable} from 'rxjs';

@Component({
  selector: 'brx-input-select-customer',
  templateUrl: './input-select-customer.component.html',
  styleUrls: ['./input-select-customer.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSelectCustomerComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputSelectCustomerComponent),
      multi: true,
    }]
})
export class InputSelectCustomerComponent implements OnInit, ControlValueAccessor {
  @HostBinding('class')
  @Input()
  sizeClasses = 'col-lg-6 col-md-8 col-sm-10 col-12';
  @Input() label = '';
  @Input() name: string;
  @Input() placeholder = '';
  @Input() errorMessages: BrxInputErrorMessages;
  @Input() data: BrxRelations;
  @ViewChild('searchInput', {static: true}) searchInput: ElementRef;
  private inputValue: BrxRelation;
  private errors: ValidationErrors;
  private objectKeys = Object.keys;


  constructor(private relationService: RelationService) {
  }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.relationService.getRelations().pipe(first()).subscribe(result => this.data = result);
  }

  get value(): BrxRelation {
    return this.inputValue;
  }

  set value(val: BrxRelation) {
    this.inputValue = val;
    this.propagateChange(this.inputValue);
  }

  getErrorMessage(key: string) {
    const errorMsg = this.errorMessages.find(err => err.key.toLowerCase() === key.toLowerCase());
    if (!errorMsg) {
      return JSON.stringify(this.errors[key]);
    }
    return errorMsg.message;
  }

  propagateChange(_: any) {
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(val: BrxRelation): void {
    this.value = val;
    this.propagateChange(this.value);
  }

  validate(c: FormControl) {
    if (c.errors && c.dirty) {
      this.errors = c.errors;
    } else {
      this.errors = null;
    }
  }

  formatter(item: BrxRelation): string {
    return item.name;
  }

  inputFormatter(item: BrxRelation): string {
    return item.name || '';
  }

  change() {
    if (!this.value) {
      this.searchInput.nativeElement.value = '';
    } else {
      this.propagateChange(this.value);
    }
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? [] : this.data.filter((item: BrxRelation) => {
          const sTerm = term.toLowerCase().trim();
          return item.name.toLowerCase().indexOf(sTerm) > -1 ||
            item.id.toLowerCase().indexOf(sTerm) > -1;
        })
      )
    );

}
