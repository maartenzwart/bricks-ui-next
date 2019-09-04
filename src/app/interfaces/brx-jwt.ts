import {BrxAuthorizationBricks} from './brx-authorization-bricks';

export interface BrxJWT {
  id?: string;
  email: string;
  givenName: string;
  insertion?: string;
  familyName: string;
  bricks?: BrxAuthorizationBricks[];
  tenant?: {
    id: string;
    name: string
  };
  avatar?: string;
}

