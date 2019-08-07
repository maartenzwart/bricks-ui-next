import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './registration.component';
import {AgendaComponent} from './agenda/agenda.component';
import {TableComponent} from './table/table.component';

const routes: Routes = [
  {
    path: 'hour-registration/registration',
    component: RegistrationComponent,
    children: [
      {
        path: '',
        redirectTo: 'agenda',
        pathMatch: 'full'
      }, {
        path: 'agenda',
        component: AgendaComponent
      }, {
        path: 'table',
        component: TableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule {}
