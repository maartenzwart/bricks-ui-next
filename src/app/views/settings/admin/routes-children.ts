import {AdminSettingsTenantsComponent} from './admin-settings-tenants/admin-settings-tenants.component';
import {AdminSettingsUsersComponent} from './admin-settings-users/admin-settings-users.component';
import {BrxRoutes} from '../../../interfaces/brxRoute';

export const adminChildren: BrxRoutes = [
  {
    path: '',
    redirectTo: 'tenants',
    pathMatch: 'full'
  }, {
    path: 'tenants',
    component: AdminSettingsTenantsComponent,
    title: 'Tenants'
  },
  {
    path: 'users',
    component: AdminSettingsUsersComponent,
    title: 'Gebruikers'
  }
];
