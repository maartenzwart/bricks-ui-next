export interface BrxPhoneNumber {
  phoneNumber: string;
  isPrimary: boolean;
  type: BrxPhoneNumberType;
  countryCode: string;
}

export type BrxPhoneNumbers = BrxPhoneNumber[];

export enum BrxPhoneNumberType {
  MAIN = 'main',
  SUPPORT = 'support',
  MOBILE = 'mobile',
  OFFICE = 'office',
  OTHER = 'other'
}
