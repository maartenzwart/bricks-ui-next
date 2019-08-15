import {ChangeDetectorRef, Component, Inject, LOCALE_ID, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CalendarUtils, DateAdapter, getWeekViewPeriod} from 'angular-calendar';
import {WeekDay, CalendarEvent} from 'calendar-utils';

@Component({
  selector: 'brx-table',
  templateUrl: './hr-time-sheet.component.html',
  styleUrls: ['./hr-time-sheet.component.scss']
})
export class HrTimeSheetComponent implements OnInit, OnChanges {
  viewDate: Date = new Date();
  view = 'week';
  weekStartsOn = 1;
  excludeDays: number[] = [];
  daysInWeek = 7;
  weekendDays = [6, 0];
  days: WeekDay[];
  locale: string;
  events: CalendarEvent[] = [];

  constructor(private cd: ChangeDetectorRef, @Inject(LOCALE_ID) locale: string, protected utils: CalendarUtils, protected dateAdapter: DateAdapter) {
    this.locale = locale;
  }

  ngOnInit() {
    this.refreshHeader();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHANGEEE', changes);
    this.refreshHeader();
  }

  refreshHeader(): void {
    this.days = this.utils.getWeekViewHeader({
      viewDate: this.viewDate,
      weekStartsOn: this.weekStartsOn,
      excluded: this.excludeDays,
      weekendDays: this.weekendDays,
      ...getWeekViewPeriod(
        this.dateAdapter,
        this.viewDate,
        this.weekStartsOn,
        this.excludeDays,
        this.daysInWeek
      )
    });
  }

}
