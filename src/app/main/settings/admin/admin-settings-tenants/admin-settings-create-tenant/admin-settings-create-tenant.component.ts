import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {BrxAddress} from '../../../../../interfaces/brx-address';
import {AddressService} from '../../../../../services/address.service';
import {RxFormBuilder, RxwebValidators} from '@rxweb/reactive-form-validators';
import {AdminTenantService} from '../../../../../services/settings/admin/admin-tenant.service';
import {BrxValidators} from '../../../../../common/forms/validators';
import {BrxUser, BrxUsers} from '../../../../../interfaces/brx-user';
import {AdminUserService} from '../../../../../services/settings/admin/admin-user.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'brx-admin-settings-create-tenant',
  templateUrl: './admin-settings-create-tenant.component.html',
  styleUrls: ['./admin-settings-create-tenant.component.scss']
})
export class AdminSettingsCreateTenantComponent implements OnInit {
  @Output() cancelled: EventEmitter<boolean> = new EventEmitter<boolean>();
  createNewEmployee = false;
  allUsers: BrxUsers;

  tenantForm = this.fb.group({
    id: [null],
    name: ['', [Validators.required]],
    addresses: this.fb.array([this.createAddress(0)]),
    phoneNumbers: this.fb.array([this.createPhoneNumber(0)]),
    emailAddresses: this.fb.array([this.createEmailAddress(0)]),
    user: this.fb.group({
      existing: [null, this.newUserRequired(false)],
      email: ['', [this.newUserRequired(true), Validators.email]],
      givenName: ['', this.newUserRequired(true)],
      insertion: [''],
      familyName: ['', this.newUserRequired(true)]
    })
  });

  errorMessages = {
    name: [{
      key: 'required',
      message: 'Dit veld is verplicht'
    }, {
      key: 'email',
      message: 'Dit is geen geldig e-mailadres'
    }],
    address: [{
      key: 'required',
      message: 'Dit veld is verplicht'
    }, {
      key: 'digits',
      message: 'Alleen cijfers zijn toegestaan'
    }, {
      key: 'email',
      message: 'Dit is geen geldig e-mailadres'
    }]
  };

  constructor(private fb: FormBuilder, private addressService: AddressService, private adminTenantService: AdminTenantService, private adminUserService: AdminUserService) {
    adminTenantService.announceCreatingNewTenant(true);
    adminUserService.getUsersWithoutTenant().pipe(first()).subscribe(result => this.allUsers = result);
  }

  ngOnInit() {
  }

  newUserRequired(newUser: boolean): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (this.createNewEmployee) {
        if ((control.value === null || control.value === undefined || control.value === '') && newUser) {
          return {required: true};
        }
        return null;
      } else {
        if (!newUser) {
          console.log('EXISTING USER!');
          console.log('VALUE', control.value === null || control.value === undefined ? {required: true} : null, control.value);
          return control.value === null || control.value === undefined ? {required: true} : null;
        }
        return null;
      }
    };
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

  setCreateNewEmployee(bool: boolean): void {
    this.createNewEmployee = bool;
    this.tenantForm.get('user').reset();
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

  getAddressArray(): FormArray {
    return this.tenantForm.get('addresses') as FormArray;
  }

  getEmailArray(): FormArray {
    return this.tenantForm.get('emailAddresses') as FormArray;
  }

  getPhoneNumberArray(): FormArray {
    return this.tenantForm.get('phoneNumbers') as FormArray;
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

  onSubmit() {
    this.adminTenantService.announceCreatingNewTenant(false);
    const formUser = this.tenantForm.get('user').value;
    let tenantUser: BrxUser;
    if (formUser.existing === null || formUser.existing === undefined) {
      delete formUser.existing;
      tenantUser = formUser;
    } else {
      tenantUser = formUser.existing;
    }

    const formTenant = this.tenantForm.value;
    delete formTenant.user;
    const {tenant, user} = this.adminTenantService.postTenant(formTenant, tenantUser);
    tenant.subscribe(result => {
      console.log('TENANT RESULT', result);
    });
    user.subscribe(result => {
      console.log('USER RESULT', result);
    });
  }
}
