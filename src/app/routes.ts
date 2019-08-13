import {Routes} from '@angular/router';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {ProjectsComponent} from './views/projects/projects.component';
import {RelationsComponent} from './views/relations/relations.component';
import {settingsRoute} from './views/settings/routes';

export function routes() {
  const appRoutes: Routes = [
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
    }
  ];

  const settingsRoutes = settingsRoute();
  appRoutes.push(settingsRoutes);

  return appRoutes;
}


