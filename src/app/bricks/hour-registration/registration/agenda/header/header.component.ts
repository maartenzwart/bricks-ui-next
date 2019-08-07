import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CalendarEvent, WeekDay} from 'calendar-utils';
import * as moment from 'moment';
import 'moment/locale/nl';
import 'moment/locale/nl-be';
import 'moment/locale/en-gb';
import {DayTotals} from './header.interfaces';

@Component({
  selector: 'brx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() view: string;

  @Input() viewDate: Date;

  @Input() days: WeekDay[];

  @Input() events: CalendarEvent[];

  @Input() locale = 'nl';

  @Output() dayHeaderClicked: EventEmitter<{ day: WeekDay }> = new EventEmitter<{ day: WeekDay; }>();

  @Output() eventDropped: EventEmitter<{ event: CalendarEvent; newStart: Date; }> = new EventEmitter<{ event: CalendarEvent; newStart: Date }>();

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

  dayTotals = new DayTotals();

  private trackByEventId(index: number, event: CalendarEvent) {
    return event.id ? event.id : event;
  }

  constructor() {
  }

  ngOnInit() {
    console.log(this.days);
    moment.locale(this.locale);
    this.calculateTotals();
  }

  calculateTotals(): void {
    this.dayTotals = new DayTotals();

    this.days.forEach(day => {
      this.events.forEach(event => {
        const sameDay = moment(day.date).isSame(event.start, 'day');
        if (sameDay) {
          this.dayTotals[day.day] = this.dayTotals[day.day] + moment.duration(moment(event.end).diff(moment(event.start))).asMinutes();
        }
      });
    });
    for (let x = 0; x < 7; x++) {
      this.dayTotals.total += this.dayTotals[x];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateTotals();
  }

}
