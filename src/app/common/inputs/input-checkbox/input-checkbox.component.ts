import {Component, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output} from '@angular/core';
import {BrxInputErrorMessages} from '../../../interfaces/brx-input-error-message';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'brx-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCheckboxComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputCheckboxComponent),
      multi: true,
    }]
})
export class InputCheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() label = '';
  @Input() checkboxLabel = '';
  @Input() name: string;
  @Input() errorMessages: BrxInputErrorMessages;
  @Input() autocomplete: string;
  @Output() inputClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() disabled: string;
  private objectKeys = Object.keys;
  private inputValue = false;
  private errors: ValidationErrors;

  get value(): boolean {
    return this.inputValue;
  }

  set value(val: boolean) {
    this.inputValue = val;
    this.propagateChange(this.inputValue);
  }

  constructor() {
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

  public validate(c: FormControl) {
    if (c.errors && c.dirty) {
      this.errors = c.errors;
    } else {
      this.errors = null;
    }
  }

  checkboxChanged() {
    this.inputClick.emit(this.value);
  }

  clicked() {
    if (!this.disabled) {
      this.value = !this.value;
    }
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

  writeValue(val: boolean): void {
    this.value = val;
    this.propagateChange(this.value);
  }
}
