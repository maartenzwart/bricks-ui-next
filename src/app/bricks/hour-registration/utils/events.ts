import {CalendarEvent} from 'angular-calendar';
import * as uuidv4 from 'uuid/v4';
import moment from 'moment';
import StartOf = moment.unitOfTime.StartOf;

export function newEvent({title, start, end}: { title?: string, start: Date, end: Date }): CalendarEvent {
  return {
    id: uuidv4(),
    title: title || 'New Event',
    start,
    end,
    resizable: {
      beforeStart: true, // this allows you to configure the sides the event is resizable from
      afterEnd: true
    },
    draggable: true,

    // TODO remove mock data
    meta: {
      activity: {
        id: 1,
        name: 'Test Activity'
      },
      project: {
        id: 1,
        name: 'Test Project'
      },
      relation: {
        id: 1,
        name: 'Test relation'
      }
    }
  };
}

export function calculateDuration({start, end}: CalendarEvent): number {
  return moment.duration(moment(end).diff(moment(start))).asMinutes();
}

export function calculateTotalDuration(events: CalendarEvent[]): number {
  let duration = 0;
  events.forEach(event => duration = duration + calculateDuration(event));
  return duration;
}

export function isSameDate(date1: Date, date2: Date, granularity: StartOf = 'day'): boolean {
  return moment(date1).isSame(moment(date2), granularity);
}
