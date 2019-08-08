import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationComponent} from './registration.component';
import {NavigationModule} from '../../../common/navigation/navigation.module';
import {RouterModule} from '@angular/router';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AgendaComponent} from './agenda/agenda.component';
import { TableComponent } from './table/table.component';
import {RegistrationRoutingModule} from './registration-routing.module';
import { EventComponent } from './agenda/event/event.component';
import {PipesModule} from '../../../pipes/pipes.module';
import { HeaderComponent } from './agenda/header/header.component';
import {IconsModule} from '../../../common/icons/icons.module';



@NgModule({
  declarations: [
    RegistrationComponent,
    AgendaComponent,
    TableComponent,
    EventComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    NavigationModule,
    RouterModule,
    RegistrationRoutingModule,
    BrowserAnimationsModule,
    PipesModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    IconsModule
  ]
})
export class RegistrationModule { }
