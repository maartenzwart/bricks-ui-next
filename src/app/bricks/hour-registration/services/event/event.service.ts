import {Injectable} from '@angular/core';
import {events as mockEvents} from './mock';
import {EMPTY, Observable} from 'rxjs';
import {CalendarEvent} from 'angular-calendar';
import {catchError, delay, flatMap, map, mergeMap, tap} from 'rxjs/operators';
import * as moment from 'moment';
import {DayViewHourSegment, EventAction} from 'calendar-utils';
import {newEvent} from '../../utils/events';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {BRX_REGISTER_API} from '../../config/api';
import {ServerEvent} from '../../interfaces/server-event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<CalendarEvent[]> {
    return this.http.get<ServerEvent[]>(BRX_REGISTER_API.events.all())
      .pipe(
        map((registrations: ServerEvent[]) => {
          const events: CalendarEvent[] = [];

          registrations.forEach((item: ServerEvent) => {
            try {
              const event: CalendarEvent = {
                id: item.id,
                title: item.meta.activity.name,
                start: moment.unix(item.start).toDate(),
                end: moment.unix(item.end).toDate(),
                meta: item.meta,
                draggable: true,
                resizable: {
                  beforeStart: true,
                  afterEnd: true
                }
              };
              events.push(event);
            } catch (e) {
              console.warn('Something went wrong with registration', item);
              console.warn(e);
            }

          });
          return events;
        })
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

    // TODO: Remove mock meta
    event.meta = {
      activity: {
        id: 0,
        name: event.title
      },
      project: {
        id: 0,
        name: 'Project 1'
      },
      relation: {
        id: 0,
        name: 'Relation 1'
      },
      status: 'incomplete'
    };

    console.log('NEW EVENT', event);
    return event;
  }

  postEvent(event: CalendarEvent): Observable<any> {
    const registration: ServerEvent = {
      id: event.id,
      start: moment(event.start).unix(),
      end: moment(event.end).unix(),
      meta: event.meta
    };

    console.log('POST EVENt', event);

    const post = this.http.post<any>(BRX_REGISTER_API.events.all(), registration).pipe(
      tap(response => {
        console.log('POST EVENT', event, response);
      })
    );

    const update = this.http.put<any>(BRX_REGISTER_API.events.byId(event.id), registration).pipe(
      tap(response => {
        console.log('UPDATE EVENT', event, response);
      })
    );

    return this.http.head(BRX_REGISTER_API.events.byId(event.id), {observe: 'response'})
      .pipe(
        flatMap((response) => {
          console.log(response);
          if (response.status === 200) {
            return update;
          } else {
            return EMPTY;
          }
        }),
        catchError((httpError: HttpErrorResponse) => {
          if (httpError.status === 404) {
            return post;
          } else {
            return EMPTY;
          }
        })
      );
  }
}
