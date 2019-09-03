import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BrxAddress} from '../../../interfaces/brx-address';
import {AddressService} from '../../../services/address.service';
import {BrxValidators} from '../validators';

@Component({
  selector: 'brx-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.scss']
})
export class FormAddressComponent implements OnInit {
  @Input() brxFormGroup: FormGroup;
  @Output() brxFormGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  errorMessages = {
    phone: [{
      key: 'digits',
      message: 'Alleen cijfers zijn toegestaan'
    }],
    email: [{
      key: 'email',
      message: 'Dit is geen geldig e-mailadres'
    }]
  };

  constructor(private addressService: AddressService, private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  getAddressByApi() {
    const address: BrxAddress = this.brxFormGroup.value;
    if (address.postalCode && address.houseNumber) {
      this.addressService.getAddressByPostalCodeAndHouseNumber(address.postalCode, address.houseNumber).subscribe(result => {
        this.brxFormGroup.patchValue(result);
      });
    }
  }

  addPhoneNumber(index: number): void {
    const phones = this.brxFormGroup.get('phoneNumbers') as FormArray;
    phones.insert(index, this.createPhoneNumber(phones.length));
  }

  removePhoneNumber(index: number): void {
    const phones = this.brxFormGroup.get('phoneNumbers') as FormArray;
    phones.removeAt(index);
  }

  createPhoneNumber(amount: number): FormGroup {
    const address: BrxAddress = this.brxFormGroup.value;
    return this.fb.group({
      phoneNumber: [null, BrxValidators.Digits()],
      type: [''],
      country: [address.country || '+31', BrxValidators.CountryCode()]
    });
  }

  addEmail(index: number): void {
    const emails = this.brxFormGroup.get('emailAddresses') as FormArray;
    emails.insert(index, this.createEmailAddress(emails.length));
  }

  removeEmail(index: number): void {
    const emails = this.brxFormGroup.get('emailAddresses') as FormArray;
    emails.removeAt(index);
  }

  createEmailAddress(amount: number): FormGroup {
    return this.fb.group({
      email: ['', Validators.email],
      type: [''],
    });
  }


}
