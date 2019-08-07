import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageComponent} from './manage/manage.component';
import {AssessComponent} from './assess/assess.component';
import {HourRegistrationComponent} from './hour-registration.component';
import {HourRegistrationRoutingModule} from './hour-registration-routing.module';
import {NavigationModule} from '../../common/navigation/navigation.module';
import {RegistrationModule} from './registration/registration.module';


@NgModule({
  declarations: [
    ManageComponent,
    AssessComponent,
    HourRegistrationComponent
  ],
  imports: [
    CommonModule,
    HourRegistrationRoutingModule,
    NavigationModule,
    RegistrationModule
  ]
})
export class HourRegistrationModule {
}
