import {Component, OnInit} from '@angular/core';
import {IconDashboardComponent} from '../../icons/icon-dashboard/icon-dashboard.component';
import {IconProjectLightComponent} from '../../icons/icon-project-light/icon-project-light.component';
import {IconClientLightComponent} from '../../icons/icon-client-light/icon-client-light.component';
import {IconHoursComponent} from '../../icons/icon-hours/icon-hours.component';
import {IconSettingsComponent} from '../../icons/icon-settings/icon-settings.component';
import {IconProfileComponent} from '../../icons/icon-profile/icon-profile.component';
import {Route} from '../../../interfaces/route';

@Component({
  selector: 'brx-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  routesLeft: Route[] = [
    {
      path: 'dashboard',
      icon: IconDashboardComponent,
      title: 'Dashboard'
    }, {
      path: 'projects',
      icon: IconProjectLightComponent,
      title: 'Projecten'
    }, {
      path: 'relations',
      icon: IconClientLightComponent,
      title: 'Relaties'
    }, {
      path: 'hour-registration',
      icon: IconHoursComponent,
      title: 'Urenregistratie'
    }, {
      path: 'settings',
      icon: IconSettingsComponent,
      title: 'Instellingen'
    }
  ];

  routesRight: Route[] = [
    {
      path: 'profile',
      icon: IconProfileComponent,
      title: 'Max van de Laar'
    }, {
      path: 'logout',
      title: 'Uitloggen'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
