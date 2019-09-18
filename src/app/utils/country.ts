import {countries as Countries} from 'countries-list';
import {BrxExtendsCountries, BrxExtendsCountry} from '../interfaces/brx-extends-country';

const countries: BrxExtendsCountries = [];
for (const key of Object.keys(Countries)) {
  const country: BrxExtendsCountry = Object.assign({}, Countries[key]);
  country.abbreviation = key;
  countries.push(country);
}

function getCountryByPhoneCode(value: string) {
  const term = value.toLowerCase().trim();
  return countries.find(country =>
    country.phone.toLowerCase() === term ||
    `00${country.phone.toLowerCase()}` === term ||
    `+${country.phone}` === term);
}

export const CountryHelper = {
  getCountryByPhoneCode
};
