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
import {ErrorHandlingService} from '../../../../common/services/error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlingService) {
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
        }),
        catchError(this.errorHandlerService.handleError<CalendarEvent[]>('getEvents', []))
      );
  }

  createDragEvent(segment: DayViewHourSegment): CalendarEvent {
    const event = newEvent({start: segment.date, end: moment(segment.date).add(30, 'minutes').toDate()});
    event.meta.createEvent = true;
    event.meta.tmpEvent = true;
    return event;
  }

  createAutoFillEvent(duration: string, startDate: Date | string, actions: EventAction[]): CalendarEvent {
    let start: Date;
    if (typeof startDate === 'string' || startDate instanceof String) {
      start = moment(startDate, 'YYYYMMDD').add(8, 'hours').toDate();
    } else {
      start = startDate;
    }
    return this.createNewEvent(start, actions, moment(start).add(duration, 'minutes').toDate());
  }

  createNewEvent(startDate: Date, actions: EventAction[], endDate?: Date): CalendarEvent {
    const event = newEvent({start: startDate, end: endDate || moment(startDate).add(30, 'minutes').toDate()});
    event.actions = actions;
    return event;
  }

  postEvent(event: CalendarEvent): Observable<any> {
    const registration: ServerEvent = {
      id: event.id,
      start: moment(event.start).unix(),
      end: moment(event.end).unix(),
      meta: event.meta
    };

    const post = this.http.post<any>(BRX_REGISTER_API.events.all(), registration).pipe(
      tap(response => {
        console.log('POST EVENT', event, response);
      }),
      catchError(this.errorHandlerService.handleError<CalendarEvent>('postEvent', null))
    );

    const update = this.http.put<any>(BRX_REGISTER_API.events.byId(event.id), registration).pipe(
      tap(response => {
        console.log('UPDATE EVENT', event, response);
      }),
      catchError(this.errorHandlerService.handleError<CalendarEvent>('postEvent', null))
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
