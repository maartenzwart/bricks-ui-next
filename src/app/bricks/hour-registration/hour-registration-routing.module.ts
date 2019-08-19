import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HrAssessComponent} from './assess/hr-assess.component';
import {HrManageComponent} from './manage/hr-manage.component';
import {HourRegistrationComponent} from './hour-registration.component';
import {HrRegistrationComponent} from './registration/hr-registration.component';
import {HrAgendaComponent} from './registration/agenda/hr-agenda.component';
import {HrTimeSheetComponent} from './registration/timeSheet/hr-time-sheet.component';
import {AuthenticationGuard} from '../../services/authentication.guard';


const routes: Routes = [
  {
    path: 'hour-registration',
    component: HourRegistrationComponent,
    canActivate: [AuthenticationGuard],
    children: [{
      path: '',
      redirectTo: 'registration',
      pathMatch: 'full',
      canActivate: [AuthenticationGuard]
    }, {
      path: 'registration',
      component: HrRegistrationComponent,
      canActivate: [AuthenticationGuard],
      children: [{
        path: '',
        redirectTo: 'agenda',
        pathMatch: 'full',
        canActivate: [AuthenticationGuard]
      }, {
        path: 'agenda',
        component: HrAgendaComponent,
        canActivate: [AuthenticationGuard]
      }, {
        path: 'table',
        component: HrTimeSheetComponent,
        canActivate: [AuthenticationGuard]
      }]
    }, {
      path: 'assess',
      component: HrAssessComponent,
      canActivate: [AuthenticationGuard]
    }, {
      path: 'manage',
      component: HrManageComponent,
      canActivate: [AuthenticationGuard]
    }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HourRegistrationRoutingModule {}
