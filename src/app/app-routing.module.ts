import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {ProjectsComponent} from './views/projects/projects.component';
import {RelationsComponent} from './views/relations/relations.component';
import {SettingsComponent} from './views/settings/settings.component';
import {OrganisationComponent} from './views/settings/organisation/organisation.component';
import {OrganisationSettingsUsersComponent} from './views/settings/organisation/organisation-settings-users/organisation-settings-users.component';
import {AdminComponent} from './views/settings/admin/admin.component';
import {AdminSettingsTenantsComponent} from './views/settings/admin/admin-settings-tenants/admin-settings-tenants.component';
import {AdminSettingsUsersComponent} from './views/settings/admin/admin-settings-users/admin-settings-users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  }, {
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'projects',
    component: ProjectsComponent,
  }, {
    path: 'relations',
    component: RelationsComponent,
  }, {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {
        path: '',
        redirectTo: 'organisation',
        pathMatch: 'full'
      }, {
        path: 'organisation',
        component: OrganisationComponent,
        children: [{
          path: '',
          redirectTo: 'users',
          pathMatch: 'full'
        }, {
          path: 'users',
          component: OrganisationSettingsUsersComponent,
        }]
      }, {
        path: 'admin',
        component: AdminComponent,
        children: [{
          path: '',
          redirectTo: 'tenants',
          pathMatch: 'full'
        }, {
          path: 'tenants',
          component: AdminSettingsTenantsComponent
        }, {
          path: 'users',
          component: AdminSettingsUsersComponent
        }]
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
