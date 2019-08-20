import {BrxAddresses} from './brx-address';
import {BrxEmailAddresses} from './brx-email-address';
import {BrxPhoneNumbers} from './brx-phone-number';

export interface BrxTenant {
  id: string;
  name: string;
  addresses: BrxAddresses;
  emailAddresses: BrxEmailAddresses;
  phoneNumbers: BrxPhoneNumbers;
}

export type BrxTenants = BrxTenant[];
