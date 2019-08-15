import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CalendarEvent, WeekDay} from 'calendar-utils';
import * as moment from 'moment';
import 'moment/locale/nl';
import 'moment/locale/nl-be';
import 'moment/locale/en-gb';
import {HrDayTotals} from '../../../interfaces/hr-header.interfaces';
import {fromEvent, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'brx-hr-agenda-header',
  templateUrl: './hr-agenda-header.component.html',
  styleUrls: ['./hr-agenda-header.component.scss']
})
export class HrAgendaHeaderComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() view: string;

  @Input() viewDate: Date;

  @Input() days: WeekDay[];

  @Input() events: CalendarEvent[];

  @Input() externalEvents: CalendarEvent[];

  @Input() locale = 'nl';

  @Output() dayHeaderClicked: EventEmitter<{ day: WeekDay }> = new EventEmitter<{ day: WeekDay; }>();

  @Output() eventDropped: EventEmitter<{ event: CalendarEvent; newStart: Date; }> = new EventEmitter<{ event: CalendarEvent; newStart: Date }>();

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

  @Output() afterRender: EventEmitter<any> = new EventEmitter();

  @Output() dayHover: EventEmitter<{ index: number, target: Element, duration: number, date: string, type: string }> = new EventEmitter();

  dayTotals = new HrDayTotals();

  jobsOpen = false;

  columnListeners: { enter: Subscription, leave: Subscription, click: Subscription }[] = [];

  viewRendered = false;

  constructor() {
  }

  ngOnInit() {
    moment.locale(this.locale);
    this.calculateTotals();
  }

  calculateTotals(): void {
    this.dayTotals = new HrDayTotals();

    this.days.forEach(day => {
      this.events.forEach(event => {
        const sameDay = moment(day.date).isSame(event.start, 'day');
        const dayNumber = day.day === 0 ? 6 : day.day - 1; // Because the week starts on a monday not on a sunday
        if (sameDay) {
          this.dayTotals[dayNumber] = this.dayTotals[dayNumber] + moment.duration(moment(event.end).diff(moment(event.start))).asMinutes();
        }
      });
    });
    for (let x = 0; x < 7; x++) {
      this.dayTotals.total += this.dayTotals[x];
    }
  }

  setHoverListeners(): void {
    const columnDays = document.querySelectorAll('.cal-day-column');
    const headers = document.querySelectorAll('.brx-weekday-header');
    this.columnListeners.forEach(listener => {
      listener.enter.unsubscribe();
      listener.leave.unsubscribe();
      listener.click.unsubscribe();
    });
    this.columnListeners = [];
    columnDays.forEach((column, i) => {
      const value = {
        index: i,
        target: column,
        duration: this.dayTotals[i],
        date: headers[i].getAttribute('date'),
        type: null
      };
      const listener = {
        enter: fromEvent(column, 'mouseenter').subscribe((mouseEvent: MouseEvent) => {
          value.type = mouseEvent.type;
          this.dayHover.emit(value);
        }),
        leave: fromEvent(column, 'mouseleave').subscribe((mouseEvent: MouseEvent) => {
          value.type = mouseEvent.type;
          this.dayHover.emit(value);
        }),
        click: fromEvent(column, 'mousedown').subscribe((mouseEvent: MouseEvent) => {
          value.type = mouseEvent.type;
          this.dayHover.emit(value);
        })
      };
      this.columnListeners.push(listener);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateTotals();
    if (this.viewRendered) {
      this.setHoverListeners();
    }
  }

  ngAfterViewInit(): void {
    this.viewRendered = true;
    this.afterRender.emit();
    this.setHoverListeners();
  }

  toggleJobs() {
    this.jobsOpen = !this.jobsOpen;
  }

  closeJobs() {
    this.jobsOpen = false;
  }
}
