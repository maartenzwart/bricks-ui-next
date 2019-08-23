import {Component, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors} from '@angular/forms';
import {InputErrorMessages} from '../../../interfaces/input-error-message';

@Component({
  selector: 'brx-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    }]
})
export class InputTextComponent implements OnInit, ControlValueAccessor {
  @HostBinding('class')
  @Input()
  sizeClasses = 'col-lg-6 col-md-8 col-sm-10 col-12';

  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() label = '';
  @Input() name: string;
  @Input() errorMessages: InputErrorMessages;
  @Input() autocomplete: string;
  @Input() brxType;
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

  propagateChange(_: any) {
  }

  constructor() {
  }

  ngOnInit() {
  }

  getErrorMessage(key: string) {
    console.log(this.errorMessages);
    if (!this.errorMessages) {
      return;
    }
    const errorMsg = this.errorMessages.find(err => err.key.toLowerCase() === key.toLowerCase());
    if (!errorMsg) {
      return JSON.stringify(this.errors[key]);
    }
    return errorMsg.message;
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
