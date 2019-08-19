import {Component, OnInit} from '@angular/core';
import {IconDashboardComponent} from '../../icons/icon-dashboard/icon-dashboard.component';
import {IconProjectLightComponent} from '../../icons/icon-project-light/icon-project-light.component';
import {IconClientLightComponent} from '../../icons/icon-client-light/icon-client-light.component';
import {IconHoursComponent} from '../../icons/icon-hours/icon-hours.component';
import {IconSettingsComponent} from '../../icons/icon-settings/icon-settings.component';
import {IconProfileComponent} from '../../icons/icon-profile/icon-profile.component';
import {BrxRoute} from '../../../interfaces/brx-route';
import {AuthenticationService} from '../../../services/authentication.service';
import {UserProfileService} from '../../../services/user-profile.service';
import {FullNamePipe} from '../../../pipes/full-name/full-name.pipe';

@Component({
  selector: 'brx-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  profileRoute = {
    title: '',
    icon: IconProfileComponent
  };

  routesLeft: BrxRoute[] = [
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

  // routesRight: BrxRoute[] = [
  //   {
  //     path: 'profile',
  //     icon: IconProfileComponent,
  //     title: this.userFullName
  //   }
  // ];

  constructor(private authenticationService: AuthenticationService, private userProfileService: UserProfileService, private fullNamePipe: FullNamePipe) {
  }

  logOut() {
    this.authenticationService.logout();
  }

  ngOnInit() {
    const userProfile = this.userProfileService.getCurrentProfile();
    if (userProfile) {
      this.profileRoute.title = this.fullNamePipe.transform(userProfile.name);
    }
  }

}
