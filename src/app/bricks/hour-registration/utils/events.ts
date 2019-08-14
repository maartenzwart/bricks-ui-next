import {CalendarEvent} from 'angular-calendar';
import * as uuidv4 from 'uuid/v4';

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
