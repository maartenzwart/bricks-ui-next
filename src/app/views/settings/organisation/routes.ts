import {BrxRoute} from '../../../interfaces/brxRoute';
import {OrganisationComponent} from './organisation.component';
import {organisationChildren} from './routes-children';

export const organisationRoute: BrxRoute = {
  path: 'organisation',
  component: OrganisationComponent,
  children: organisationChildren
};
