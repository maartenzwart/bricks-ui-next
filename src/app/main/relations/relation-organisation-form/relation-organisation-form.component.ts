import {Component, OnInit} from '@angular/core';
import {BrxRoutes} from '../../../interfaces/brx-route';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BrxValidators} from '../../../common/forms/validators';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {BrxInputErrorMessages} from '../../../interfaces/brx-input-error-message';
import {RelationService} from '../../../services/relation.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'brx-relation-organisation-form',
  templateUrl: './relation-organisation-form.component.html',
  styleUrls: ['./relation-organisation-form.component.scss']
})
export class RelationOrganisationFormComponent implements OnInit {
  routes: BrxRoutes = [{
    title: 'Organisatie',
    tab: '#organisation',
    tabActive: true
  }, {
    title: 'Contactpersonen',
    tab: '#contacts',
    tabActive: false
  }];

  errorMessages: BrxInputErrorMessages = [{
    key: 'required',
    message: 'Dit veld is verplict'
  }];

  organisationForm = this.fb.group({
    id: [null],
    name: ['', Validators.required],
    contacts: this.fb.array([]),
    addresses: this.fb.array([this.createAddress(0)]),
    emailAddresses: this.fb.array([this.createEmailAddress(0)]),
    phoneNumbers: this.fb.array([this.createPhoneNumber(0)])
  });

  newContactForm = this.createContact();

  constructor(private activeModal: NgbActiveModal, private fb: FormBuilder, private relationService: RelationService) {
  }

  createContact(): FormGroup {
    return this.fb.group({
      id: [null],
      givenName: ['', [Validators.required]],
      insertion: [''],
      familyName: ['', [Validators.required]],
      emailAddresses: this.fb.array([this.createEmailAddress(0)]),
      addresses: this.fb.array([this.createAddress(0)]),
      phoneNumbers: this.fb.array([this.createPhoneNumber(0)])
    });
  }

  createAddress(numberOfAddresses: number): FormGroup {
    return this.fb.group({
      street: [''],
      houseNumber: [''],
      suffix: [''],
      postalCode: [''],
      city: [''],
      country: [''],
      type: [''],
      phoneNumbers: this.fb.array([this.createPhoneNumber(0)]),
      emailAddresses: this.fb.array([this.createEmailAddress(0)]),
    });
  }

  createPhoneNumber(amount: number): FormGroup {
    return this.fb.group({
      phoneNumber: [null, BrxValidators.Digits()],
      type: [''],
      country: ['+31', BrxValidators.CountryCode()]
    });
  }

  createEmailAddress(amount: number): FormGroup {
    return this.fb.group({
      email: ['', Validators.email],
      type: [''],
    });
  }

  addAddress(): void {
    const addresses = this.getAddressArray();
    addresses.controls.unshift(this.createAddress(addresses.length));
  }

  addEmail(index: number): void {
    const emails = this.getEmailArray();
    emails.insert(index, this.createEmailAddress(emails.length));
  }

  addPhoneNumber(index: number): void {
    const phones = this.getPhoneNumberArray();
    phones.insert(index, this.createPhoneNumber(phones.length));
  }

  addContact(): void {
    if (this.newContactForm.valid) {
      const contacts = this.organisationForm.get('contacts') as FormArray;
      const newContact = this.createContact();
      newContact.patchValue(this.newContactForm.value);
      contacts.insert(0, newContact);
      this.newContactForm.reset(this.createContact().value);
      this.newContactForm.reset();
    }
  }

  getAddressArray(): FormArray {
    return this.organisationForm.get('addresses') as FormArray;
  }

  getEmailArray(): FormArray {
    return this.organisationForm.get('emailAddresses') as FormArray;
  }

  getPhoneNumberArray(): FormArray {
    return this.organisationForm.get('phoneNumbers') as FormArray;
  }

  removeAddress(index: number) {
    const addressesArray = this.getAddressArray();
    addressesArray.removeAt(index);
  }

  removeEmail(index: number): void {
    const emails = this.getEmailArray();
    emails.removeAt(index);
  }

  removePhoneNumber(index: number): void {
    const phones = this.getPhoneNumberArray();
    phones.removeAt(index);
  }

  ngOnInit() {
  }

  tabClick(tab: string) {
    this.routes.forEach(route => route.tabActive = route.tab === tab);
  }

  tabActive(tab: string) {
    return this.routes.find(route => route.tab.toLowerCase() === tab.toLowerCase()).tabActive;
  }

  cancel() {
    this.activeModal.dismiss();
  }

  submit() {
    if (this.organisationForm.valid) {
      this.relationService.createOrganisation(this.organisationForm.value).pipe(first()).subscribe(result => {
        console.log('RESULT', result);
        this.activeModal.close(result);
      });
    }
  }
}
