import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AssessComponent} from './assess/assess.component';
import {ManageComponent} from './manage/manage.component';
import {HourRegistrationComponent} from './hour-registration.component';
import {RegistrationComponent} from './registration/registration.component';
import {AgendaComponent} from './registration/agenda/agenda.component';
import {TableComponent} from './registration/table/table.component';


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
      component: RegistrationComponent,
      children: [{
        path: '',
        redirectTo: 'agenda',
        pathMatch: 'full'
      }, {
        path: 'agenda',
        component: AgendaComponent
      }, {
        path: 'table',
        component: TableComponent
      }]
    }, {
      path: 'assess',
      component: AssessComponent
    }, {
      path: 'manage',
      component: ManageComponent
    }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HourRegistrationRoutingModule {}
