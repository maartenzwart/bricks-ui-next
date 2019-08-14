import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {ProjectsComponent} from './views/projects/projects.component';
import {RelationsComponent} from './views/relations/relations.component';
import {SettingsComponent} from './views/settings/settings.component';
import {HourRegistrationModule} from './bricks/hour-registration/hour-registration.module';
import {NavigationModule} from './common/navigation/navigation.module';
import {IconsModule} from './common/icons/icons.module';
import {IconDashboardComponent} from './common/icons/icon-dashboard/icon-dashboard.component';
import {IconProjectLightComponent} from './common/icons/icon-project-light/icon-project-light.component';
import {IconClientLightComponent} from './common/icons/icon-client-light/icon-client-light.component';
import {IconHoursComponent} from './common/icons/icon-hours/icon-hours.component';
import {IconSettingsComponent} from './common/icons/icon-settings/icon-settings.component';
import {IconSearchComponent} from './common/icons/icon-search/icon-search.component';
import {IconProfileComponent} from './common/icons/icon-profile/icon-profile.component';
import {OrganisationComponent} from './views/settings/organisation/organisation.component';
import {AdminComponent} from './views/settings/admin/admin.component';
import {AdminSettingsTenantsComponent} from './views/settings/admin/admin-settings-tenants/admin-settings-tenants.component';
import {AdminSettingsUsersComponent} from './views/settings/admin/admin-settings-users/admin-settings-users.component';
import {OrganisationSettingsUsersComponent} from './views/settings/organisation/organisation-settings-users/organisation-settings-users.component';
import {ProjectsListComponent} from './views/projects/projects-list/projects-list.component';
import {ListComponent} from './common/list/list.component';
import {OrderByPipe} from './pipes/order-by/order-by.pipe';

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
    ListComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HourRegistrationModule,
    NavigationModule,
    IconsModule
  ],
  providers: [],
  exports: [],
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
