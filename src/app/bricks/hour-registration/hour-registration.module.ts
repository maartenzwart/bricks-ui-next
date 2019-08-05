import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from './registration/registration.component';
import {ManageComponent} from './manage/manage.component';
import {AssessComponent} from './assess/assess.component';
import {HourRegistrationComponent} from './hour-registration.component';
import {HourRegistrationRoutingModule} from './hour-registration-routing.module';
import {NavigationModule} from '../../common/navigation/navigation.module';


@NgModule({
  declarations: [
    RegistrationComponent,
    ManageComponent,
    AssessComponent,
    HourRegistrationComponent,
  ],
  imports: [
    CommonModule,
    HourRegistrationRoutingModule,
    NavigationModule
  ]
})
export class HourRegistrationModule {
}
