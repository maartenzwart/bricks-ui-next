import {BrxAuthorizationBricks} from './brx-authorization-bricks';

export interface BrxJWT {
  id: string;
  email: string;
  name: {
    firstName: string;
    insertion: string;
    lastName: string;
  };
  bricks: BrxAuthorizationBricks[];
  tenant: {
    id: string;
    name: string
  };
  avatar: string;
}

