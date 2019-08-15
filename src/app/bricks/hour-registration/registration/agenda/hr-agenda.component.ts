import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {addDays, addMinutes, endOfWeek} from 'date-fns';
import {CalendarEvent, CalendarEventTimesChangedEvent} from 'angular-calendar';
import {fromEvent, Subject} from 'rxjs';
import {finalize, first, takeUntil} from 'rxjs/operators';
import {DayViewHourSegment, EventAction} from 'calendar-utils';
import {EventService} from '../../services/event/event.service';
import {brxIconEdit, brxIconResize} from '../../../../common/icons/svg';
import {DurationFormatPipe} from '../../../../pipes/duration/durationFormat.pipe';
import * as moment from 'moment';

function floorToNearest(amount: number, precision: number) {
  return Math.floor(amount / precision) * precision;
}

function ceilToNearest(amount: number, precision: number) {
  return Math.ceil(amount / precision) * precision;
}

@Component({
  selector: 'brx-hr-agenda',
  templateUrl: './hr-agenda.component.html',
  styleUrls: ['./hr-agenda.component.scss'],
  providers: [DurationFormatPipe]
})
export class HrAgendaComponent implements OnInit, OnDestroy {
  view = 'week';
  viewDate: Date = new Date();
  dragToCreateActive = false;
  newEvent: CalendarEvent;
  showNotification = true;
  mouseClickListener;
  showAutoAdd = [false, false, false, false, false, false, false];

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

  constructor(private elRef: ElementRef, private cdr: ChangeDetectorRef, private eventService: EventService, private durationFormatPipe: DurationFormatPipe) {
  }

  ngOnInit(): void {
    this.listenForMouseDown();
    this.getEvents();
  }

  ngOnDestroy(): void {
    this.mouseClickListener.unsubscribe();
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe(events => {
      events.forEach(event => event.actions = this.actions);
      this.events$ = events;
    });
  }

  notificationClosed(): void {
    this.showNotification = false;
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
      const tempEvent: CalendarEvent = this.eventService.createNewEvent(newStart, this.actions, newEnd);
      event.id = this.events$.length;
      const newEvent = Object.assign(tempEvent, event);
      event = newEvent;
      this.events$.push(newEvent);
    }
    this.saveEvent(event);
    this.events$ = [...this.events$];
    this.refresh.next();
  }

  saveEvent(event: CalendarEvent) {
    this.eventService.postEvent(event).subscribe(response => {
      console.log('RESPONSE', response);
    }, error => {
      console.error('ERROR', error);
    });
  }

  handleEventClick(event) {
    console.log('event: ', event);
  }

  headerClicked(event) {
    console.log('HEADER CLICK', event);
  }

  onDayHover(e: { index: number, target: Element, duration: number, date: string, type: string }) {
    const {index, target, duration, type, date} = e;
    const eventElems = target.querySelectorAll('.cal-event-container');
    let lastElement = eventElems[eventElems.length - 1];
    if (type === 'mousedown') {
      const buttons = target.querySelectorAll('.brx-auto-fill-button');
      buttons.forEach(button => button.remove());
      return false;
    }
    if (type === 'mouseenter' && duration < 480 && !this.showAutoAdd[index]) {
      this.showAutoAdd[index] = true;
      let addToHeader = false;
      if (!lastElement) {
        lastElement = target;
        addToHeader = true;
      }
      this.addAutoFillButton(lastElement, duration, date, index, addToHeader);
    } else {
      this.showAutoAdd[index] = false;
      const addedToHeader = !lastElement;
      this.removeAutoFillButton(addedToHeader);
    }
  }

  addAutoFillButton(element: Element, duration: number, date: string, index: number, toHeader: boolean = false) {
    console.log('Index', index);
    const durationToAdd = 480 - duration;
    const eventElem = element.querySelector('.brx-cal-event');
    let eventId = '';
    if (eventElem) {
      eventId = eventElem.getAttribute('event-id');
    }

    let html = `<div class="btn brx-btn-primary brx-btn pointer brx-auto-fill-button"
                              data-duration="${durationToAdd}"
                              data-event-id="${eventId}"
                              data-date="${date}">+${this.durationFormatPipe.transform(durationToAdd)} UUR</div>`;
    if (toHeader) {

      const copyBtn = `<div class="btn brx-btn-primary brx-btn pointer brx-copy-previous-day-button">
          KOPIE ${moment(date, 'YYYYMMDD').subtract(1, 'day').format('dd').toUpperCase()}
          </div>`;
      html = `<div class="brx-auto-fill-button-header">${index !== 0 ? copyBtn : ''}${html}</div>`;
    }

    const container = document.createElement('div');
    container.innerHTML = html;
    const button = container.querySelector('div');
    if (toHeader) {
      element.prepend(button);
      // Listener added at this.listenForMouseDown() since it is placed in a higher DOM element
    } else {
      element.append(button);
      button.addEventListener('click', this.addAutoFillEvent.bind(this));
    }
  }

  addAutoFillEvent(e) {
    const target = e.target;
    const duration = target.getAttribute('data-duration');
    const eventId = target.getAttribute('data-event-id');
    const date = target.getAttribute('data-date');
    const lastEvent = this.events$.find(event => event.id.toString() === eventId);
    const newEvent = this.eventService.createAutoFillEvent(duration, lastEvent ? lastEvent.end : date, this.actions);
    this.events$.push(newEvent);
    this.saveEvent(newEvent);
    this.events$ = [...this.events$];
    target.remove();
    this.refresh.next();
  }

  removeAutoFillButton(toHeader: boolean = false) {
    const selector = !toHeader ? '.brx-auto-fill-button' : '.brx-auto-fill-button-header';
    const buttons = document.querySelectorAll(selector);
    if (buttons.length > 0) {
      buttons.forEach(button => {
        if (!toHeader) {
          button.removeEventListener('click', this.addAutoFillEvent, true);
        }
        button.remove();
      });
    }
  }

  startDragToCreate(segment: DayViewHourSegment, mouseDownEvent: MouseEvent, segmentElement: HTMLElement) {
    const dragToSelectEvent: CalendarEvent = this.eventService.createDragEvent(segment);
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
              this.saveEvent(this.newEvent);
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
    this.mouseClickListener = fromEvent(window, 'mousedown').subscribe((mouseEvent: MouseEvent) => {
      // Don't remove the new event, the user is resizing it
      if (mouseEvent.target instanceof Element) {
        const classList = mouseEvent.target.classList;
        if (classList.contains('brx-resize') || classList.contains('brx-icon-resize')) {
          return;
        }

        // Add listener for auto-fill button since it is placed in a higher DOM element
        if (classList.contains('brx-auto-fill-button')) {
          this.addAutoFillEvent(mouseEvent);
        }
        if (classList.contains('brx-copy-previous-day-button')) {
          console.log('COPY CLICKED!');
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
