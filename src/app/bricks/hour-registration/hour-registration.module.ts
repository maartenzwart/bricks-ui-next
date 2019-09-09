import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {HrManageComponent} from './manage/hr-manage.component';
import {HrAssessComponent} from './assess/hr-assess.component';
import {HourRegistrationComponent} from './hour-registration.component';
import {HourRegistrationRoutingModule} from './hour-registration-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HrRegistrationComponent} from './registration/hr-registration.component';
import {HrAgendaComponent} from './registration/agenda/hr-agenda.component';
import {HrTimeSheetComponent} from './registration/timeSheet/hr-time-sheet.component';
import {HrAgendaEventComponent} from './registration/agenda/event/hr-agenda-event.component';
import {HrAgendaHeaderComponent} from './registration/agenda/header/hr-agenda-header.component';
import {HrAgendaFooterComponent} from './registration/agenda/footer/hr-agenda-footer.component';
import {PipesModule} from '../../pipes/pipes.module';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {HrHeaderComponent} from './components/header/hr-header/hr-header.component';
import {BrxCommonModule} from '../../common/brx-common.module';
import {DurationFormatPipe} from '../../pipes/duration/durationFormat.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {HrManageActivitiesComponent} from './manage/hr-manage-activities/hr-manage-activities.component';
import {HrManageJobsComponent} from './manage/hr-manage-jobs/hr-manage-jobs.component';
import {HrManageJobsFormComponent} from './manage/hr-manage-jobs/hr-manage-jobs-form/hr-manage-jobs-form.component';
import {HrManageActivitiesFormComponent} from './manage/hr-manage-activities/hr-manage-activities-form/hr-manage-activities-form.component';

@NgModule({
  declarations: [
    HrManageComponent,
    HrAssessComponent,
    HourRegistrationComponent,
    HrRegistrationComponent,
    HrAgendaComponent,
    HrTimeSheetComponent,
    HrAgendaEventComponent,
    HrAgendaHeaderComponent,
    HrAgendaFooterComponent,
    HrHeaderComponent,
    HrManageJobsFormComponent,
    HrManageActivitiesComponent,
    HrManageJobsComponent,
    HrManageActivitiesFormComponent
  ],
  imports: [
    CommonModule,
    HourRegistrationRoutingModule,
    BrxCommonModule,
    HttpClientModule,
    PipesModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ReactiveFormsModule
  ],
  providers: [DatePipe, DurationFormatPipe]
})
export class HourRegistrationModule {
}
