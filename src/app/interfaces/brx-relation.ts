import {BrxAddresses} from './brx-address';
import {BrxPhoneNumbers} from './brx-phone-number';
import {BrxEmailAddresses} from './brx-email-address';
import {BrxContacts} from './brx-contact';

export interface BrxRelation {
  id: string;
  name: string;
}

export type BrxRelations = BrxRelation[];

export interface BrxRelationOrganisation {
  id?: string;
  name: string;
  chamberOfCommerce: string;
  addresses: BrxAddresses;
  phoneNumbers: BrxPhoneNumbers;
  emailAddresses: BrxEmailAddresses;
  contacts: BrxContacts;
}

