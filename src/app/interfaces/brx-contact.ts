import {BrxEmailAddresses} from './brx-email-address';
import {BrxAddresses} from './brx-address';
import {BrxPhoneNumbers} from './brx-phone-number';

export interface BrxContact {
  id: string;
  givenName: string;
  insertion: string;
  familyName: string;
  birthDate: Date;
  emailAddresses: BrxEmailAddresses;
  addresses: BrxAddresses;
  phoneNumbers: BrxPhoneNumbers;
}

export type BrxContacts = BrxContact[];
