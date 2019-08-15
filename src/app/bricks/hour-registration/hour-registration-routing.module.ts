import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HrAssessComponent} from './assess/hr-assess.component';
import {HrManageComponent} from './manage/hr-manage.component';
import {HourRegistrationComponent} from './hour-registration.component';
import {HrRegistrationComponent} from './registration/hr-registration.component';
import {HrAgendaComponent} from './registration/agenda/hr-agenda.component';
import {HrTableComponent} from './registration/table/hr-table.component';


const routes: Routes = [
  {
    path: 'hour-registration',
    component: HourRegistrationComponent,
    children: [{
      path: '',
      redirectTo: 'registration',
      pathMatch: 'full'
    }, {
      path: 'registration',
      component: HrRegistrationComponent,
      children: [{
        path: '',
        redirectTo: 'agenda',
        pathMatch: 'full'
      }, {
        path: 'agenda',
        component: HrAgendaComponent
      }, {
        path: 'table',
        component: HrTableComponent
      }]
    }, {
      path: 'assess',
      component: HrAssessComponent
    }, {
      path: 'manage',
      component: HrManageComponent
    }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HourRegistrationRoutingModule {}
