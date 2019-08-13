import {BrxRoutes} from '../../../interfaces/brx-route';
import {OrganisationSettingsUsersComponent} from './organisation-settings-users/organisation-settings-users.component';

export const organisationChildren: BrxRoutes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: OrganisationSettingsUsersComponent,
    title: 'Gebruikers'
  }
];
