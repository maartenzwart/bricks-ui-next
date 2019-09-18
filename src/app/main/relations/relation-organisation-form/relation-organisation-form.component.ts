import {Component, Input, OnInit} from '@angular/core';
import {BrxRoutes} from '../../../interfaces/brx-route';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BrxValidators} from '../../../common/forms/validators';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {BrxInputErrorMessages} from '../../../interfaces/brx-input-error-message';
import {RelationService} from '../../../services/relation.service';
import {first} from 'rxjs/operators';
import {BrxRelationOrganisation} from '../../../interfaces/brx-relation';
import {CountryUtils} from '../../../utils';

@Component({
  selector: 'brx-relation-organisation-form',
  templateUrl: './relation-organisation-form.component.html',
  styleUrls: ['./relation-organisation-form.component.scss']
})
export class RelationOrganisationFormComponent implements OnInit {
  @Input() organisation: BrxRelationOrganisation = null;
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
    addresses: this.fb.array([this.createAddress()]),
    emailAddresses: this.fb.array([this.createEmailAddress()]),
    phoneNumbers: this.fb.array([this.createPhoneNumber()])
  });

  newContactForm = this.createContact();

  constructor(private activeModal: NgbActiveModal, private fb: FormBuilder, private relationService: RelationService) {
  }

  patchChildren(formArray: FormArray, originalArray: any[], newFormGroup: () => FormGroup): FormArray {
    formArray.clear();
    originalArray.reverse();
    originalArray.forEach(item => {
      const newItem = newFormGroup();
      newItem.patchValue(item);
      formArray.insert(0, newItem);
    });
    return formArray;
  }


  ngOnInit() {
    if (this.organisation && this.organisation.id) {
      this.organisationForm.patchValue(this.organisation);
      const contacts = this.organisationForm.get('contacts') as FormArray;
      const emailAddresses = this.organisationForm.get('emailAddresses') as FormArray;
      const phoneNumbers = this.organisationForm.get('phoneNumbers') as FormArray;
      const addresses = this.organisationForm.get('addresses') as FormArray;

      addresses.clear();
      this.organisation.addresses.reverse();
      this.organisation.addresses.forEach(item => {
        const newItem = this.createAddress();
        newItem.patchValue(item);
        this.patchChildren(newItem.get('emailAddresses') as FormArray, item.emailAddresses, this.createEmailAddress.bind(this));
        this.patchChildren(newItem.get('phoneNumbers') as FormArray, item.phoneNumbers, this.createPhoneNumber.bind(this));
        addresses.insert(0, newItem);
      });

      this.patchChildren(emailAddresses, this.organisation.emailAddresses, this.createEmailAddress.bind(this));
      this.patchChildren(phoneNumbers, this.organisation.phoneNumbers, this.createPhoneNumber.bind(this));

      contacts.clear();
      this.organisation.contacts.forEach(contact => {
        const newContact = this.createContact();
        newContact.patchValue(contact);
        contacts.insert(0, newContact);
      });
    }
  }

  createContact(): FormGroup {
    return this.fb.group({
      id: [null],
      givenName: ['', [Validators.required]],
      insertion: [''],
      familyName: ['', [Validators.required]],
      emailAddresses: this.fb.array([this.createEmailAddress()]),
      addresses: this.fb.array([this.createAddress()]),
      phoneNumbers: this.fb.array([this.createPhoneNumber()])
    });
  }

  createAddress(): FormGroup {
    return this.fb.group({
      street: [''],
      houseNumber: [''],
      suffix: [''],
      postalCode: [''],
      city: [''],
      country: [''],
      type: [''],
      phoneNumbers: this.fb.array([this.createPhoneNumber()]),
      emailAddresses: this.fb.array([this.createEmailAddress()]),
    });
  }

  createPhoneNumber(): FormGroup {
    return this.fb.group({
      phoneNumber: [''],
      type: [''],
      country: [CountryUtils.getCountryByPhoneCode('+31')]
    });
  }

  createEmailAddress(): FormGroup {
    return this.fb.group({
      email: ['', Validators.email],
      type: [''],
    });
  }

  addAddress(): void {
    const addresses = this.getAddressArray();
    addresses.controls.unshift(this.createAddress());
  }

  addEmail(index: number): void {
    const emails = this.getEmailArray();
    emails.insert(index, this.createEmailAddress());
  }

  addPhoneNumber(index: number): void {
    const phones = this.getPhoneNumberArray();
    phones.insert(index, this.createPhoneNumber());
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

  tabClick(tab: string) {
    this.routes.forEach(route => route.tabActive = route.tab === tab);
  }

  tabActive(tab: string) {
    return this.routes.find(route => route.tab.toLowerCase() === tab.toLowerCase()).tabActive;
  }

  cancel() {
    this.activeModal.dismiss();
  }

  findInvalidControlsRecursive(formToInvestigate: FormGroup | FormArray): string[] {
    const invalidControls: any[] = [];
    const recursiveFunc = (form: FormGroup | FormArray) => {
      Object.keys(form.controls).forEach(field => {
        const control = form.get(field) as AbstractControl;
        if (control.invalid) {
          invalidControls.push({field, control});
        }
        if (control instanceof FormGroup) {
          recursiveFunc(control);
        } else if (control instanceof FormArray) {
          recursiveFunc(control);
        }
      });
    };
    recursiveFunc(formToInvestigate);
    return invalidControls;
  }

  submit() {
    console.log('Submit', this.organisationForm.value);
    console.log('main', this.organisationForm.errors);
    console.log('ERRORS?', this.findInvalidControlsRecursive(this.organisationForm));
    if (this.organisationForm.valid) {
      this.relationService.createOrUpdateOrganisation(this.organisationForm.value).pipe(first()).subscribe(result => {
        this.activeModal.close(result);
      });
    }
  }
}
