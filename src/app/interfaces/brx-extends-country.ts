import {Country} from 'countries-list';

export interface BrxExtendsCountry extends Country {
  abbreviation: string;
}

export type BrxExtendsCountries = BrxExtendsCountry[];
