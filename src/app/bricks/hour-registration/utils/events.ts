import {CalendarEvent} from 'angular-calendar';

export function newEvent({id, title, start, end}: { id: number, title?: string, start: Date, end: Date}): CalendarEvent {
  return {
    id,
    title: title || 'New Event',
    start,
    end,
    resizable: {
      beforeStart: true, // this allows you to configure the sides the event is resizable from
      afterEnd: true
    },
    draggable: true,
    meta: {}
  };
}
