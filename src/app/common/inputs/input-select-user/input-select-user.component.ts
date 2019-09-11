import {Component, ElementRef, forwardRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors} from '@angular/forms';
import {BrxInputErrorMessages} from '../../../interfaces/brx-input-error-message';
import {BrxUser, BrxUsers} from '../../../interfaces/brx-user';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, first, map} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'brx-input-select-user',
  templateUrl: './input-select-user.component.html',
  styleUrls: ['./input-select-user.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSelectUserComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputSelectUserComponent),
      multi: true,
    }]
})
export class InputSelectUserComponent implements OnInit, ControlValueAccessor {
  @HostBinding('class')
  @Input()
  sizeClasses = 'col-lg-6 col-md-8 col-sm-10 col-12';
  @Input() label = '';
  @Input() name: string;
  @Input() placeholder = '';
  @Input() errorMessages: BrxInputErrorMessages;
  @Input() users: BrxUsers;
  @Input() disabled = false;
  @ViewChild('searchInput', {static: true}) searchInput: ElementRef;

  private inputValue: BrxUser;
  private errors: ValidationErrors;
  private objectKeys = Object.keys;

  static formatSearch(user: BrxUser): string {
    console.log('FORMATTING', user);
    if (!user) {
      return '';
    }
    const {givenName, insertion, familyName} = user;
    let fullName = givenName;
    fullName += insertion ? ` ${insertion} ` : ' ';
    fullName += familyName;
    return fullName;
  }

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    if (this.users === null || this.users === undefined) {
      this.loadData();
    }
  }

  public loadData() {
    this.userService.getUsers().pipe(first()).subscribe(result => this.users = result);
  }

  get value(): BrxUser {
    return this.inputValue;
  }

  set value(val: BrxUser) {
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
    this.disabled = isDisabled;
  }

  writeValue(val: BrxUser): void {
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

  formatter(user: BrxUser): string {
    return InputSelectUserComponent.formatSearch(user);
  }

  inputFormatter(user: BrxUser): string {
    return InputSelectUserComponent.formatSearch(user);
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
      map(term => term.length < 1 ? [] : this.users.filter((user: BrxUser) => {
          const sTerm = term.toLowerCase().trim();
          return user.givenName.toLowerCase().indexOf(sTerm) > -1 ||
            user.insertion.toLowerCase().indexOf(sTerm) > -1 ||
            user.familyName.toLowerCase().indexOf(sTerm) > -1 ||
            user.email.toLowerCase().indexOf(sTerm) > -1;
        })
      )
    );
}
