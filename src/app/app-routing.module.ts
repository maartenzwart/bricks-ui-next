import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './main/dashboard/dashboard.component';
import {ProjectsComponent} from './main/projects/projects.component';
import {RelationsComponent} from './main/relations/relations.component';
import {SettingsComponent} from './main/settings/settings.component';
import {OrganisationComponent} from './main/settings/organisation/organisation.component';
import {OrganisationSettingsUsersComponent} from './main/settings/organisation/organisation-settings-users/organisation-settings-users.component';
import {AdminComponent} from './main/settings/admin/admin.component';
import {AdminSettingsTenantsComponent} from './main/settings/admin/admin-settings-tenants/admin-settings-tenants.component';
import {AdminSettingsUsersComponent} from './main/settings/admin/admin-settings-users/admin-settings-users.component';
import {LoginComponent} from './main/login/login.component';
import {AuthenticationGuard} from './services/authentication.guard';
import {AdminSettingsCreateTenantComponent} from './main/settings/admin/admin-settings-tenants/admin-settings-create-tenant/admin-settings-create-tenant.component';
import {AdminSettingsTenantListComponent} from './main/settings/admin/admin-settings-tenants/admin-settings-tenant-list/admin-settings-tenant-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
    canActivate: [AuthenticationGuard]
  }, {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard]
  }, {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [AuthenticationGuard]
  }, {
    path: 'relations',
    component: RelationsComponent,
    canActivate: [AuthenticationGuard]
  }, {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        redirectTo: 'organisation',
        pathMatch: 'full',
        canActivate: [AuthenticationGuard]
      }, {
        path: 'organisation',
        component: OrganisationComponent,
        canActivate: [AuthenticationGuard],
        children: [{
          path: '',
          redirectTo: 'users',
          pathMatch: 'full',
          canActivate: [AuthenticationGuard]
        }, {
          path: 'users',
          component: OrganisationSettingsUsersComponent,
          canActivate: [AuthenticationGuard]
        }]
      }, {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthenticationGuard],
        children: [{
          path: '',
          redirectTo: 'tenants',
          pathMatch: 'full',
          canActivate: [AuthenticationGuard]
        }, {
          path: 'tenants',
          component: AdminSettingsTenantsComponent,
          canActivate: [AuthenticationGuard],
          children: [{
            path: '',
            redirectTo: 'list',
            pathMatch: 'full',
            canActivate: [AuthenticationGuard]
          }, {
            path: 'list',
            component: AdminSettingsTenantListComponent,
            canActivate: [AuthenticationGuard]
          }, {
            path: 'create',
            component: AdminSettingsCreateTenantComponent,
            canActivate: [AuthenticationGuard]
          }]
        }, {
          path: 'users',
          component: AdminSettingsUsersComponent,
          canActivate: [AuthenticationGuard]
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
