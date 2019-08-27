import {AbstractControl, ValidatorFn} from '@angular/forms';

function CountryCode(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }
    const regex = /\+?\d+/;
    return /\+?\d+/.test(control.value) ? null : {countryCode: true};
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
