import {Component, forwardRef, HostBinding, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {BrxInputErrorMessages} from '../../../interfaces/brx-input-error-message';
import {NgbTypeahead, NgbTypeaheadSelectItemEvent} from '@ng-bootstrap/ng-bootstrap';
import {merge, Observable, Subject} from 'rxjs';
import {BrxExtendsCountries, BrxExtendsCountry} from '../../../interfaces/brx-extends-country';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors} from '@angular/forms';
import {StringUtils} from '../../../utils';
import {countries as Countries} from 'countries-list';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

@Component({
  selector: 'brx-input-phone-number-country-code',
  templateUrl: './input-phone-number-country-code.component.html',
  styleUrls: ['./input-phone-number-country-code.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPhoneNumberCountryCodeComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputPhoneNumberCountryCodeComponent),
      multi: true,
    }]
})
export class InputPhoneNumberCountryCodeComponent implements OnInit, OnChanges, ControlValueAccessor {
  @HostBinding('class')
  @Input()
  class = 'input-group-text';

  @Input() label = '';
  @Input() name: string;
  @Input() errorMessages: BrxInputErrorMessages;
  @Input() default;
  @ViewChild('countryCode', {static: true}) countryCode: HTMLElement;
  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  private countryValue: BrxExtendsCountry | string;
  private countries: BrxExtendsCountries = [];
  private errors: ValidationErrors;
  private objectKeys = Object.keys;
  private StringUtils = StringUtils;


  constructor() {
    for (const key of Object.keys(Countries)) {
      const country: BrxExtendsCountry = Object.assign({}, Countries[key]);
      country.abbreviation = key;
      this.countries.push(country);
    }
  }

  ngOnInit() {
    if (this.default) {
      this.value = this.default;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.default && changes.default.currentValue && changes.default.currentValue.phone &&
      (this.value === null || this.value === undefined || this.value === '')) {
      this.value = changes.default.currentValue;
    }
  }

  get value(): BrxExtendsCountry | string {
    return this.countryValue;
  }

  set value(val: BrxExtendsCountry | string) {
    if (val === null || val === undefined || val === '') {
      if (this.default) {
        this.value = this.default;
      } else {
        this.countryValue = this.getCountryByString('31');
      }
    } else if (typeof val === 'string' || val instanceof String) {
      this.countryValue = this.getCountryByString(val.toString()) || this.countryValue;
    } else {
      this.countryValue = val;
    }
    this.propagateChange(this.countryValue);
  }

  validate(c: FormControl) {
    if (c.errors && c.dirty) {
      this.errors = c.errors;
    } else {
      this.errors = null;
    }
  }

  selectItem(item: NgbTypeaheadSelectItemEvent) {
    console.log(item);
  }

  getCountryByString(value: string) {
    return this.countries.find(country =>
      country.abbreviation.toLowerCase() === value.toLowerCase() ||
      country.name.toLowerCase() === value.toLowerCase() ||
      country.native.toLowerCase() === value.toLowerCase() ||
      `+${country.phone}` === value);
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
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(val: string): void {
    if (val !== null && val !== undefined) {
      this.value = val;
    } else {
      this.value = null;
    }
  }

  setValue(val, event): void {
    if (!val) {
      if (!this.value) {
        this.value = this.default || this.getCountryByString('+31');
      }
      event.target.value = this.value;
      return;
    }
    this.value = val;
  }

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.countries : this.countries.filter(country => {
          const searchTerm = StringUtils.normalize(term).toLowerCase();
          return StringUtils.normalize(country.name).toLowerCase().indexOf(searchTerm) > -1 ||
            StringUtils.normalize(country.native).toLowerCase().indexOf(searchTerm) > -1 ||
            country.phone.toLowerCase().indexOf(searchTerm) > -1 ||
            `+${country.phone}`.toLowerCase().indexOf(searchTerm) > -1 ||
            `00${country.phone}`.toLowerCase().indexOf(searchTerm) > -1;
        }).slice(0, 10))
      ));
  };

  inputFormatter(country) {
    return country && country.phone ? `+${country.phone}` : '';
  }
}

