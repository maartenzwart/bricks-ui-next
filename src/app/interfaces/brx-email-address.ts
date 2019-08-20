export interface BrxEmailAddress {
  email: string;
  isPrimary: boolean;
  type: BrxEmailAddressType;
}

export type BrxEmailAddresses = BrxEmailAddress[];

export enum BrxEmailAddressType {
  MAIN = 'main',
  SUPPORT = 'support',
  OFFICE = 'office',
  OTHER = 'other'
}
