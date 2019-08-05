import {Routes} from '@angular/router';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {ProjectsComponent} from './views/projects/projects.component';
import {RelationsComponent} from './views/relations/relations.component';
import {SettingsComponent} from './views/settings/settings.component';


export const routes: Routes = [
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
  }
];

