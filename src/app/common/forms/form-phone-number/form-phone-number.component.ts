import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BrxExtendsCountry} from '../../../interfaces/brx-extends-country';

@Component({
  selector: 'brx-form-phone-number',
  templateUrl: './form-phone-number.component.html',
  styleUrls: ['./form-phone-number.component.scss']
})
export class FormPhoneNumberComponent implements OnInit {
  @HostBinding('class.col-12') addXSColumn = true;

  @Input() brxFormGroup: FormGroup;
  @Input() numberOfPhoneNumbers: number;
  @Input() country: BrxExtendsCountry;
  @Output() brxFormGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() addPhoneNumber: EventEmitter<any> = new EventEmitter<any>();
  @Output() removePhoneNumber: EventEmitter<any> = new EventEmitter<any>();
  @Input() errorMessages;

  constructor() {
  }

  ngOnInit() {
  }

}
