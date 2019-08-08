import {Injectable} from '@angular/core';
import {events as mockEvents} from './mock';
import {Observable, of} from 'rxjs';
import {CalendarEvent} from 'angular-calendar';
import {delay, map} from 'rxjs/operators';
import * as moment from 'moment';
import {DayViewHourSegment, EventAction} from 'calendar-utils';
import {newEvent} from '../../utils/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() {
  }

  getEvents(): Observable<CalendarEvent[]> {
    return of(mockEvents).pipe(
      map(events => {
        // events.forEach(event => event.actions = actions);
        return events;
      }),
      delay(100)
    );
  }

  createDragEvent(events: CalendarEvent[], segment: DayViewHourSegment): CalendarEvent {
    const event = newEvent({id: events.length, start: segment.date, end: moment(segment.date).add(30, 'minutes').toDate()});
    event.meta.createEvent = true;
    event.meta.tmpEvent = true;
    return event;
  }

  createNewEvent(events: CalendarEvent[], startDate: Date, actions: EventAction[], endDate?: Date): CalendarEvent {
    const event = newEvent({id: events.length, start: startDate, end: endDate || moment(startDate).add(30, 'minutes').toDate()});
    event.actions = actions;
    return event;
  }
}
