import {BrxRoute} from '../../../interfaces/brx-route';
import {OrganisationComponent} from './organisation.component';
import {organisationChildren} from './routes-children';

export const organisationRoute: BrxRoute = {
  path: 'organisation',
  component: OrganisationComponent,
  children: organisationChildren
};
