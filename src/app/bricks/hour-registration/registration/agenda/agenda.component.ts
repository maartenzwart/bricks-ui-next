import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {addDays, addHours, addMinutes, endOfWeek, startOfDay} from 'date-fns';
import {CalendarEvent, CalendarEventTimesChangedEvent} from 'angular-calendar';
import {fromEvent, Observable, Subject, timer} from 'rxjs';
import {finalize, first, takeUntil} from 'rxjs/operators';
import {DayViewHourSegment, EventAction} from 'calendar-utils';
import * as moment from 'moment';
import {EventService} from '../../services/event/event.service';
import {brxIconEdit, brxIconResize} from '../../../../common/icons/svg';

function floorToNearest(amount: number, precision: number) {
  return Math.floor(amount / precision) * precision;
}

function ceilToNearest(amount: number, precision: number) {
  return Math.ceil(amount / precision) * precision;
}

@Component({
  selector: 'brx-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  view = 'week';
  viewDate: Date = new Date();
  dragToCreateActive = false;
  newEvent: CalendarEvent;

  refresh: Subject<any> = new Subject();

  events$: CalendarEvent[];

  actions: EventAction[] = [{
    label: brxIconEdit.asString,
    cssClass: 'brx-event-action-edit',
    onClick: ({event}: { event: CalendarEvent }): void => {
      // this.events$ = this.events$.filter(iEvent => iEvent !== event);
      console.log('Event edit', event);
    }
  }];

  externalEvents: CalendarEvent[] = [
    {
      title: 'Event 1',
      color: {primary: 'blue', secondary: 'gray'},
      start: new Date(),
      draggable: true
    },
    {
      title: 'Event 2',
      color: {primary: 'red', secondary: 'gray'},
      start: new Date(),
      draggable: true
    }
  ];

  constructor(private elRef: ElementRef, private cdr: ChangeDetectorRef, private eventService: EventService) {
  }

  ngOnInit(): void {
    this.listenForMouseDown();
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe(events => {
      events.forEach(event => event.actions = this.actions);
      this.events$ = events;
      console.log(events);
    });
  }

  hoursSegmentRendered(): void {
    this.scrollToWorkingHours();
  }

  eventRendered(event: CalendarEvent): void {
    this.enableDrag();
  }

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    const externalEventIndex = this.externalEvents.indexOf(event);
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }

    if (externalEventIndex > -1) {
      const tempEvent: CalendarEvent = this.eventService.createNewEvent(this.events$, newStart, this.actions, newEnd);
      event.id = this.events$.length;
      const newEvent = Object.assign(tempEvent, event);
      event = newEvent;
      this.events$.push(newEvent);
      console.log(this.events$);
    }
    this.eventService.postEvent(event).subscribe(response => {
      console.log('RESPONSE', response);
    }, error => {
      console.error('ERROR', error);
    });
    this.events$ = [...this.events$];
    this.refresh.next();
  }

  handleEventClick(event) {
    console.log('event: ', event);
  }

  headerClicked(event) {
    console.log('HEADER CLICK', event);
  }

  startDragToCreate(segment: DayViewHourSegment, mouseDownEvent: MouseEvent, segmentElement: HTMLElement) {
    const dragToSelectEvent: CalendarEvent = this.eventService.createDragEvent(this.events$, segment);
    this.events$ = [...this.events$, dragToSelectEvent];
    const segmentPosition = segmentElement.getBoundingClientRect();

    this.dragToCreateActive = true;
    const endOfView = endOfWeek(this.viewDate, {weekStartsOn: 1});

    fromEvent(document, 'mousemove')
      .pipe(
        finalize(() => {
          delete dragToSelectEvent.meta.createEvent;
          this.newEvent = dragToSelectEvent;
          this.dragToCreateActive = false;
          this.refreshView();

          this.newEvent = Object.assign({}, dragToSelectEvent);

          const keyboardEvent = fromEvent(document, 'keyup').pipe(
            first(),
            finalize(() => {
              if (this.newEvent && this.newEvent.meta.tmpEvent) {
                const index = this.events$.findIndex((event: CalendarEvent) => event.id === this.newEvent.id);
                this.events$.splice(index, index);
              }
              this.refreshView();
              this.newEvent = null;
            })
          );
          const keyboardEventListener = keyboardEvent.subscribe((key: KeyboardEvent) => {
            if (key.code.toLowerCase() === 'enter') {
              delete dragToSelectEvent.meta.tmpEvent;
              return;
            }
          });
        }),
        takeUntil(fromEvent(document, 'mouseup'))
      )
      .subscribe((mouseMoveEvent: MouseEvent) => {
        const minutesDiff = ceilToNearest(
          mouseMoveEvent.clientY - segmentPosition.top,
          30
        );

        const daysDiff =
          floorToNearest(
            mouseMoveEvent.clientX - segmentPosition.left,
            segmentPosition.width
          ) / segmentPosition.width;

        const newEnd = addDays(addMinutes(segment.date, minutesDiff), daysDiff);
        if (newEnd > segment.date && newEnd < endOfView) {
          dragToSelectEvent.end = newEnd;
        }
        this.refreshView();
      });
  }

  scrollToWorkingHours(): void {
    const target = document.querySelector('.hour-7-half');
    target.scrollIntoView();

    // Correct view scroll position for scrolling to specific time on agenda in line above
    const body = document.querySelector('body');
    body.scrollIntoView();
  }

  private listenForMouseDown() {
    fromEvent(window, 'mousedown').subscribe((mouseEvent: MouseEvent) => {
      console.log(mouseEvent.target);
      // Don't remove the new event, the user is resizing it
      if (mouseEvent.target instanceof Element) {
        const classList = mouseEvent.target.classList;
        if (classList.contains('brx-resize') || classList.contains('brx-icon-resize')) {
          return;
        }
      }

      // If clicked after making new event, remove the new event. NOTE: check if statement above this
      if (this.newEvent) {
        const index = this.events$.findIndex((event: CalendarEvent) => event.id === this.newEvent.id);
        this.events$.splice(index, index);
        this.newEvent = null;
        this.enableDrag();
        this.refreshView();
      }
    });
  }

  private enableDrag(): void {
    const dragElements = this.elRef.nativeElement.querySelectorAll('.cal-resize-handle');
    dragElements.forEach(item => {
      if (!item.classList.contains('brx-resize')) {
        item.classList.add('brx-resize');
        this.addDragIcon(item);
      }
    });
  }

  private refreshView(): void {
    this.events$ = [...this.events$];
    this.cdr.detectChanges();
  }

  private addDragIcon(item: HTMLElement): void {
    item.appendChild(brxIconResize.asNode());
  }
}
