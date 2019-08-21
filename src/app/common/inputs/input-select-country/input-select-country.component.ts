import {Component, forwardRef, HostBinding, Input, OnInit} from '@angular/core';
import {countries as Countries} from 'countries-list/dist';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {InputErrorMessages} from '../../../interfaces/input-error-message';
import {BrxExtendsCountries, BrxExtendsCountry} from '../../../interfaces/brx-extends-country';

@Component({
  selector: 'brx-input-select-country',
  templateUrl: './input-select-country.component.html',
  styleUrls: ['./input-select-country.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSelectCountryComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputSelectCountryComponent),
      multi: true,
    }]
})
export class InputSelectCountryComponent implements OnInit, ControlValueAccessor {
  @HostBinding('class')
  @Input()
  sizeClasses = 'col-lg-6 col-md-8 col-sm-10 col-12';
  @Input() label = '';
  @Input() name: string;
  @Input() errorMessages: InputErrorMessages;

  private inputValue: BrxExtendsCountry | string;
  private countries: BrxExtendsCountries = [];
  private errors: ValidationErrors;
  private objectKeys = Object.keys;

  constructor() {
    for (const key of Object.keys(Countries)) {
      const country: BrxExtendsCountry = Object.assign({}, Countries[key]);
      country.abbreviation = key;
      this.countries.push(country);
    }
  }

  get value(): BrxExtendsCountry | string {
    return this.inputValue;
  }

  set value(val: BrxExtendsCountry | string) {
    if (val === null || val === undefined || val === '') {
      this.inputValue = null;
    } else if (typeof val === 'string' || val instanceof String) {
      this.inputValue = this.getCountryByString(val.toString()) || '';
    } else {
      this.inputValue = val;
    }
    this.propagateChange(this.inputValue);
  }

  ngOnInit() {
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

  getCountryByString(value: string) {
    return this.countries.find(country =>
      country.abbreviation.toLowerCase() === value.toLowerCase() ||
      country.name.toLowerCase() === value.toLowerCase() ||
      country.native.toLowerCase() === value.toLowerCase());
  }

  writeValue(val: string): void {
    const country = this.getCountryByString(val);
    if (country !== null && country !== undefined) {
      this.value = country;
      this.propagateChange(this.value);
    } else {
      this.value = null;
      this.propagateChange(this.value);
    }
  }

  public validate(c: FormControl) {
    if (c.errors && c.dirty) {
      this.errors = c.errors;
    } else {
      this.errors = null;
    }
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] : this.countries.filter(country => country.name.toLowerCase().indexOf(term.toLowerCase()) > -1 || country.native.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

  formatter(country): string {
    return `${country.name} | ${country.native}`;
  }

  inputFormatter(country) {
    return country.native || country.name;
  }
}
