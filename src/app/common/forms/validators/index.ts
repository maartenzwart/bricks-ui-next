import {AbstractControl, ValidatorFn} from '@angular/forms';
import {BrxExtendsCountry} from '../../../interfaces/brx-extends-country';

function CountryCode(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }
    const regex = /\+?\d+/;
    const country: BrxExtendsCountry = control.value;
    return country && country.phone && regex.test(country.phone) ? null : {countryCode: true};
  };
}

function Digits(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }
    const regex = /^\d+$/;
    return regex.test(control.value) ? null : {digits: true};
  };
}

export const BrxValidators = {
  CountryCode,
  Digits
};
