import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './main/dashboard/dashboard.component';
import {ProjectsComponent} from './main/projects/projects.component';
import {RelationsComponent} from './main/relations/relations.component';
import {SettingsComponent} from './main/settings/settings.component';
import {HourRegistrationModule} from './bricks/hour-registration/hour-registration.module';
import {IconDashboardComponent} from './common/icons/icon-dashboard/icon-dashboard.component';
import {IconProjectLightComponent} from './common/icons/icon-project-light/icon-project-light.component';
import {IconClientLightComponent} from './common/icons/icon-client-light/icon-client-light.component';
import {IconHoursComponent} from './common/icons/icon-hours/icon-hours.component';
import {IconSettingsComponent} from './common/icons/icon-settings/icon-settings.component';
import {IconSearchComponent} from './common/icons/icon-search/icon-search.component';
import {IconProfileComponent} from './common/icons/icon-profile/icon-profile.component';
import {OrganisationComponent} from './main/settings/organisation/organisation.component';
import {AdminComponent} from './main/settings/admin/admin.component';
import {AdminSettingsTenantsComponent} from './main/settings/admin/admin-settings-tenants/admin-settings-tenants.component';
import {AdminSettingsUsersComponent} from './main/settings/admin/admin-settings-users/admin-settings-users.component';
import {OrganisationSettingsUsersComponent} from './main/settings/organisation/organisation-settings-users/organisation-settings-users.component';
import {ProjectsListComponent} from './main/projects/projects-list/projects-list.component';
import {BrxCommonModule} from './common/brx-common.module';
import {LoginComponent} from './main/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JwtUtils} from './utils';
import {FullNamePipe} from './pipes/full-name/full-name.pipe';
import {AdminSettingsCreateTenantComponent} from './main/settings/admin/admin-settings-tenants/admin-settings-create-tenant/admin-settings-create-tenant.component';
import {AdminSettingsTenantListComponent} from './main/settings/admin/admin-settings-tenants/admin-settings-tenant-list/admin-settings-tenant-list.component';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectsComponent,
    RelationsComponent,
    SettingsComponent,
    OrganisationComponent,
    AdminComponent,
    AdminSettingsTenantsComponent,
    AdminSettingsUsersComponent,
    OrganisationSettingsUsersComponent,
    ProjectsListComponent,
    LoginComponent,
    AdminSettingsCreateTenantComponent,
    AdminSettingsTenantListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HourRegistrationModule,
    BrxCommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: JwtUtils.getJwtToken,
        whitelistedDomains: ['localhost:3000']
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  providers: [FullNamePipe],
  bootstrap: [AppComponent],
  entryComponents: [
    IconDashboardComponent,
    IconProjectLightComponent,
    IconClientLightComponent,
    IconHoursComponent,
    IconSettingsComponent,
    IconSearchComponent,
    IconProfileComponent
  ]
})
export class AppModule {
}
