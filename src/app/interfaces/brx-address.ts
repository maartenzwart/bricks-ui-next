import {BrxEmailAddresses} from './brx-email-address';
import {BrxPhoneNumbers} from './brx-phone-number';

export interface BrxAddress {
  street: string;
  houseNumber: number;
  suffix?: string;
  city: string;
  postalCode: string;
  country: string;
  isPrimary: boolean;
  type?: BrxAddressType;
  emailAddresses?: BrxEmailAddresses;
  phoneNumbers?: BrxPhoneNumbers;
}

export type BrxAddresses = BrxAddress[];

export enum BrxAddressType {
  MAIN = 'main',
  FINANCIAL = 'financial',
  OTHER = 'other'
}


export interface BrxPostalCodeApiAddress {
  response: {
    numFound: number;
    docs: {
      straatnaam: string;
      huisnummer: number;
      postcode: string;
      woonplaatsnaam: string;
      provincienaam: string;
    }[]
  };
}
