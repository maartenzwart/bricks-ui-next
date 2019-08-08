import {addDays, addHours, addMinutes, startOfDay} from 'date-fns';
import {CalendarEvent} from 'angular-calendar';

export const events: CalendarEvent[] = [
  {
    start: addHours(startOfDay(addDays(new Date(), 2)), 9),
    end: addMinutes(addHours(startOfDay(addDays(new Date(), 2)), 12), 9),
    title: 'Event 1',
    color: {
      primary: 'red',
      secondary: 'blue'
    },
    draggable: true,
    meta: {
      project: 'Bricks Urenmodule',
      relation: 'Key2Solutions',
      proposed: true
    },
    resizable: {
      beforeStart: true, // this allows you to configure the sides the event is resizable from
      afterEnd: true
    }
  },
  {
    start: addHours(startOfDay(addDays(new Date(), 1)), 8),
    end: addHours(startOfDay(addDays(new Date(), 1)), 10),
    title: 'Event 2',
    draggable: true,
    resizable: {
      beforeStart: true, // this allows you to configure the sides the event is resizable from
      afterEnd: true
    },
    color: {
      primary: 'pink',
      secondary: 'gray'
    },
    meta: {
      project: 'Bricks Urenmodule',
      relation: 'Key2Solutions'
    }
  },
  {
    start: addHours(startOfDay(new Date()), 14),
    end: addHours(startOfDay(new Date()), 17),
    title: 'Design',
    draggable: true,
    resizable: {
      beforeStart: true, // this allows you to configure the sides the event is resizable from
      afterEnd: true
    },
    meta: {
      project: 'Bricks Urenmodule',
      relation: 'Key2Solutions'
    },
    color: {
      primary: 'green',
      secondary: 'gray'
    }
  }
];
