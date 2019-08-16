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
    ProjectsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HourRegistrationModule,
    BrxCommonModule
  ],
  providers: [],
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
