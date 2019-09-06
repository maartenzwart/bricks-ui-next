import {Component, forwardRef, HostBinding, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors} from '@angular/forms';
import {BrxInputErrorMessages} from '../../../interfaces/brx-input-error-message';

@Component({
  selector: 'brx-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDateComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputDateComponent),
      multi: true,
    }]
})
export class InputDateComponent implements OnInit, ControlValueAccessor {
  @HostBinding('class')
  @Input()
  sizeClasses = 'col-xl-1 col-lg-1 col-md-3 col-sm-6 col-12';

  @Input() label = '';
  @Input() name: string;
  @Input() errorMessages: BrxInputErrorMessages;
  private objectKeys = Object.keys;
  private inputValue = '';
  private errors: ValidationErrors;

  get value(): string {
    return this.inputValue;
  }

  set value(val: string) {
    if (val === null || val === undefined) {
      return;
    }
    this.inputValue = val;
    this.propagateChange(this.inputValue);
  }

  constructor() {
  }

  ngOnInit() {
  }

  getErrorMessage(key: string) {
    if (!this.errorMessages) {
      return;
    }
    const errorMsg = this.errorMessages.find(err => err.key.toLowerCase() === key.toLowerCase());
    if (!errorMsg) {
      return JSON.stringify(this.errors[key]);
    }
    return errorMsg.message;
  }

  propagateChange(_: any) {
  }

  validate(c: FormControl) {
    if (c.errors && c.dirty) {
      this.errors = c.errors;
    } else {
      this.errors = null;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(val: string): void {
    if (val !== null && val !== undefined) {
      this.value = val;
      this.propagateChange(this.value);
    }
  }

}
