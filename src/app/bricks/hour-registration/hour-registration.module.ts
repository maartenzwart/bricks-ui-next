import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageComponent} from './manage/manage.component';
import {AssessComponent} from './assess/assess.component';
import {HourRegistrationComponent} from './hour-registration.component';
import {HourRegistrationRoutingModule} from './hour-registration-routing.module';
import {NavigationModule} from '../../common/navigation/navigation.module';
import {HttpClientModule} from '@angular/common/http';
import {RegistrationComponent} from './registration/registration.component';
import {AgendaComponent} from './registration/agenda/agenda.component';
import {TableComponent} from './registration/table/table.component';
import {EventComponent} from './registration/agenda/event/event.component';
import {HeaderComponent} from './registration/agenda/header/header.component';
import {FooterComponent} from './registration/agenda/footer/footer.component';
import {PipesModule} from '../../pipes/pipes.module';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {IconsModule} from '../../common/icons/icons.module';


@NgModule({
  declarations: [
    ManageComponent,
    AssessComponent,
    HourRegistrationComponent,
    RegistrationComponent,
    AgendaComponent,
    TableComponent,
    EventComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HourRegistrationRoutingModule,
    NavigationModule,
    HttpClientModule,
    PipesModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    IconsModule
  ]
})
export class HourRegistrationModule {
}
