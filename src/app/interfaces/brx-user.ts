export interface BrxUser {
  id: string;
  givenName: string;
  insertion: string;
  familyName: string;
  avatar: string;
  tenant: {
    id: string;
    name: string;
  };
  email: string;
  isActive: boolean;
  lastLogin: number;
  bricks: {
    id: string;
    roles: { id: string; name: string; }[];
    name: string;
  }[];
}

export type BrxUsers = BrxUser[];
