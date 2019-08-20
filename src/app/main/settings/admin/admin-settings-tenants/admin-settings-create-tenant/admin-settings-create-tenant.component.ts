import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BrxAddress} from '../../../../../interfaces/brx-address';
import {AddressService} from '../../../../../services/address.service';

@Component({
  selector: 'brx-admin-settings-create-tenant',
  templateUrl: './admin-settings-create-tenant.component.html',
  styleUrls: ['./admin-settings-create-tenant.component.scss']
})
export class AdminSettingsCreateTenantComponent implements OnInit {

  tenantForm = this.fb.group({
    name: ['', [Validators.required]],
    addresses: this.fb.array([this.createAddress()])
  });

  errorMessages = {
    name: [{
      key: 'required',
      message: 'Dit veld is verplicht'
    }],
    address: [{
      key: 'required',
      message: 'Dit veld is verplicht'
    }]
  };

  createAddress(): FormGroup {
    return this.fb.group({
      street: ['', Validators.required],
      houseNumber: [''],
      suffix: [''],
      postalCode: [''],
      city: [''],
      country: [''],
      isPrimary: [false]
    });
  }

  addAddress(): void {
    const addresses = this.tenantForm.get('addresses') as FormArray;
    addresses.controls.unshift(this.createAddress());
  }

  getAddressByApi(index: number) {
    const addressesArray = this.tenantForm.get('addresses') as FormArray;
    const addressGroup = addressesArray.at(index) as FormGroup;
    const address: BrxAddress = addressGroup.value;
    if (address.postalCode && address.houseNumber) {
      this.addressService.getAddressByPostalCodeAndHouseNumber(address.postalCode, address.houseNumber).subscribe(result => {
        addressGroup.patchValue(result);
      });
    }
  }

  removeAddress(index: number) {
    const addressesArray = this.tenantForm.get('addresses') as FormArray;
    addressesArray.removeAt(index);
  }

  get name() {
    return this.tenantForm.get('name');
  }

  constructor(private fb: FormBuilder, private addressService: AddressService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.tenantForm.value);
  }

}
