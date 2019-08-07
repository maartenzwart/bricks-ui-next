import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AssessComponent} from './assess/assess.component';
import {ManageComponent} from './manage/manage.component';
import {HourRegistrationComponent} from './hour-registration.component';
//
const routes: Routes = [
  {
    path: 'hour-registration',
    component: HourRegistrationComponent,
    children: [
      {
        path: '',
        redirectTo: 'registration',
        pathMatch: 'full'
      }, {
        path: 'assess',
        component: AssessComponent
      }, {
        path: 'manage',
        component: ManageComponent
      }
    ]
  }
];

// const routes: Routes = [{}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HourRegistrationRoutingModule {}
