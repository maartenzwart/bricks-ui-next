import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BrxExtendsCountry} from '../../../interfaces/brx-extends-country';

@Component({
  selector: 'brx-form-email',
  templateUrl: './form-email.component.html',
  styleUrls: ['./form-email.component.scss']
})
export class FormEmailComponent implements OnInit {
  @HostBinding('class.col-12') addXSColumn = true;

  @Input() brxFormGroup: FormGroup;
  @Input() showRemoveButton: boolean;
  @Output() brxFormGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() addEmail: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeEmail: EventEmitter<any> = new EventEmitter<any>();
  @Input() errorMessages;

  constructor() {
  }

  ngOnInit() {
  }

}
