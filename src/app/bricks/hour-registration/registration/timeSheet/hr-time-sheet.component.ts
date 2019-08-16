import {Component, Inject, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';
import {CalendarUtils, DateAdapter, getWeekViewPeriod} from 'angular-calendar';
import {WeekDay, CalendarEvent} from 'calendar-utils';
import {BrxListHeader, BrxListHeaders} from '../../../../interfaces/brx-list-header';
import {DatePipe} from '@angular/common';
import {HrEventService} from '../../services/event/hr-event.service';
import * as moment from 'moment';
import {calculateDuration, calculateTotalDuration, isSameDate} from '../../utils/events';
import {DurationFormatPipe} from '../../../../pipes/duration/durationFormat.pipe';

// ISO-8601, Europe
moment.updateLocale('en', {
  week: {
    dow: 1, // First day of week is Monday
    doy: 4  // First week of year must contain 4 January (7 + 1 - 4)
  }
});

@Component({
  selector: 'brx-hr-time-sheet',
  templateUrl: './hr-time-sheet.component.html',
  styleUrls: ['./hr-time-sheet.component.scss']
})
export class HrTimeSheetComponent implements OnInit {
  viewDate: Date = new Date();
  view = 'week';
  days: WeekDay[];
  locale: string;
  items: {
    project: { id: string | number, name: string },
    totalDuration: number,
    registrations: { day: number, events: CalendarEvent[] }[]
  }[] = [];
  listHeaders: BrxListHeaders = [];


  constructor(
    private eventService: HrEventService,
    private durationFormatPipe: DurationFormatPipe,
    @Inject(LOCALE_ID) locale: string, protected utils: CalendarUtils, protected dateAdapter: DateAdapter, private datePipe: DatePipe) {
    this.locale = locale;
    moment.locale(locale);
  }

  getPresetDuration(registrations: { day: number, events: CalendarEvent[] }[], day): string {
    const registration = registrations.find(reg => reg.day === day);
    if (!registration) {
      return '';
    }

    return this.getTotalDayDuration(registration.events);
  }

  ngOnInit() {
    this.refresh();
  }

  refresh(): void {
    this.setDays();
    this.refreshHeader();
    this.getEvents();
  }

  setDays() {
    const days = [];
    const currentDay = moment(this.viewDate);
    for (let x = 0; x < 7; x++) {
      days.push({
        date: currentDay.weekday(x).toDate(),
        day: x,
      });
    }
    this.days = days;
  }

  getEvents() {
    const currentDay = moment(this.viewDate);

    const range = {
      start: currentDay.weekday(0).toDate(),
      end: currentDay.weekday(6).toDate()
    };
    this.eventService.getEvents(range).subscribe(events => {
      const groupEvents: {
        project: { id: string | number, name: string },
        registrations: { day: number, events: CalendarEvent[] }[],
        totalDuration: number
      }[] = [];
      events.forEach(event => {
        const project = event.meta.project;
        const day = moment(event.start).day() === 0 ? 6 : moment(event.start).day() - 1;
        let groupExists = false;
        groupEvents.forEach(groupEvent => {
          if (groupEvent.project.id === project.id) {
            groupExists = true;

            const registration = groupEvent.registrations.find(reg => reg.day === day);
            if (registration) {
              registration.events.push(event);
            } else {
              groupEvent.registrations.push({day, events: [event]});
            }
          }
        });
        if (!groupExists) {
          groupEvents.push({project, registrations: [{day, events: [event]}], totalDuration: 0});
        }
      });
      groupEvents.forEach(group => {
        group.totalDuration = 0;
        group.registrations.forEach(reg => {
          group.totalDuration += calculateTotalDuration(reg.events);
        });
      });
      this.items = groupEvents;
    });
  }

  refreshHeader(): void {
    this.setHeaders();
  }

  isSameDay(eventDate: Date, headerDate: Date): boolean {
    return isSameDate(eventDate, headerDate);
  }

  calculateFormattedDuration(event: CalendarEvent): string {
    return this.durationFormatPipe.transform(calculateDuration(event));
  }

  getTotalDayDuration(events: CalendarEvent[]): string {
    return this.durationFormatPipe.transform(calculateTotalDuration(events));
  }

  setHeaders(): void {
    this.listHeaders = [];

    const firstHeader: BrxListHeader = {
      index: 0,
      key: 'job',
      title: 'Klussen'
    };

    this.listHeaders.push(firstHeader);
    this.days.forEach(day => {
      const index = day.day;
      this.listHeaders.push({
        index: day.day + 1,
        key: day.day,
        title: this.datePipe.transform(day.date, 'EEEEEE | dd', undefined, this.locale),
        meta: {date: day.date}
      });
    });

    this.listHeaders.push({
      index: 7,
      key: 'total',
      title: 'Totaal'
    });
  }

}
