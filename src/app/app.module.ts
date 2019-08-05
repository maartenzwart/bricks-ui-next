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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectsComponent,
    RelationsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HourRegistrationModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
