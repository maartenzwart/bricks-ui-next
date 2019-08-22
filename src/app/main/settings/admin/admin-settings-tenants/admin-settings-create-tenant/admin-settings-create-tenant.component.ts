import {Component, OnChanges, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
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
    addresses: this.fb.array([this.createAddress(0)])
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

  createAddress(numberOfAddresses: number): FormGroup {
    return this.fb.group({
      street: [''],
      houseNumber: [''],
      suffix: [''],
      postalCode: [''],
      city: [''],
      country: [''],
      isPrimary: [numberOfAddresses === 0]
    });
  }

  addressChangePrimary(index: number, newValue: boolean) {
    if (!newValue) {
      return;
    }
    const addresses = this.getAddressArray();
    addresses.controls.forEach((address: FormGroup, i: number) => {
      address.patchValue({isPrimary: i === index});
    });
  }

  addAddress(): void {
    const addresses = this.getAddressArray();
    addresses.controls.unshift(this.createAddress(addresses.length));
  }

  getAddressByApi(index: number) {
    const addressGroup = this.getAddressGroup(index);
    const address: BrxAddress = addressGroup.value;
    if (address.postalCode && address.houseNumber) {
      this.addressService.getAddressByPostalCodeAndHouseNumber(address.postalCode, address.houseNumber).subscribe(result => {
        addressGroup.patchValue(result);
      });
    }
  }

  getAddressArray(): FormArray {
    return this.tenantForm.get('addresses') as FormArray;
  }

  getAddressGroup(index: number): FormGroup {
    const addressArray = this.getAddressArray();
    return addressArray.at(index) as FormGroup;
  }

  removeAddress(index: number) {
    const addressesArray = this.getAddressArray();
    addressesArray.removeAt(index);
  }

  constructor(private fb: FormBuilder, private addressService: AddressService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.tenantForm.value);
  }

}
