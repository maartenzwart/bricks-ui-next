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
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JwtUtils} from './utils';
import {FullNamePipe} from './pipes/full-name/full-name.pipe';
import {AdminSettingsCreateTenantComponent} from './main/settings/admin/admin-settings-tenants/admin-settings-create-tenant/admin-settings-create-tenant.component';
import {AdminSettingsTenantListComponent} from './main/settings/admin/admin-settings-tenants/admin-settings-tenant-list/admin-settings-tenant-list.component';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators';
import {CookieService} from 'ngx-cookie-service';
import {PipesModule} from './pipes/pipes.module';
import {AdminSettingsUsersCreateComponent} from './main/settings/admin/admin-settings-users/admin-settings-users-create/admin-settings-users-create.component';

export function jwtOptionsFactory(cookieService: CookieService) {
  return {
    tokenGetter: () => {
      return new JwtUtils(cookieService).getJwtToken();
    }
  };
}

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
    AdminSettingsTenantListComponent,
    AdminSettingsUsersCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HourRegistrationModule,
    BrxCommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        whitelistedDomains: ['localhost:3000']
      },
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [CookieService]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    PipesModule
  ],
  providers: [
    FullNamePipe,
    CookieService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    IconDashboardComponent,
    IconProjectLightComponent,
    IconClientLightComponent,
    IconHoursComponent,
    IconSettingsComponent,
    IconSearchComponent,
    IconProfileComponent,
    AdminSettingsUsersCreateComponent
  ]
})
export class AppModule {
}
