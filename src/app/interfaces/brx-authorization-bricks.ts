import {BrxAuthorizationRoles} from './brx-authorization-role';

export interface BrxAuthorizationBricks {
  id: string;
  name: string;
  roles: BrxAuthorizationRoles;
}
