import {SettingsComponent} from './settings.component';
import {adminRoute} from './admin/routes';
import {BrxRoute} from '../../interfaces/brx-route';
import {organisationRoute} from './organisation/routes';


export function settingsRoute(): BrxRoute {
  const route: BrxRoute = {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {
        path: '',
        redirectTo: 'organisation',
        pathMatch: 'full'
      }
    ]
  };
  route.children.push(organisationRoute);
  route.children.push(adminRoute);

  return route;

}
