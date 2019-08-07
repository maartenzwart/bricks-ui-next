import {AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {addDays, addHours, addMinutes, startOfDay} from 'date-fns';
import {CalendarEvent, CalendarEventTimesChangedEvent} from 'angular-calendar';
import {Subject} from 'rxjs';

@Component({
  selector: 'brx-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit, AfterViewInit {
  view = 'week';
  viewDate: Date = new Date();


  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: addHours(startOfDay(addDays(new Date(), 2)), 5),
      end: addMinutes(addHours(startOfDay(addDays(new Date(), 2)), 9), 9),
      title: 'Event 1',
      color: {
        primary: 'red',
        secondary: 'blue'
      },
      draggable: true,
      meta: {
        project: 'Bricks Urenmodule',
        relation: 'Key2Solutions',
        proposed: true,
        actions: {
          editClicked: ({event}: { event: CalendarEvent }): void => {
            console.log('EDIT CLICKED', event);
          }
        }
      },
      actions: [
        {
          label: 'x',
          onClick: ({event}: { event: CalendarEvent }): void => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            console.log('Event deleted', event);
          }
        },
        {
          label: 'edit',
          onClick: ({event}: { event: CalendarEvent }): void => {
            console.log('Event Edit', event);
          }
        }
      ],
      resizable: {
        beforeStart: true, // this allows you to configure the sides the event is resizable from
        afterEnd: true
      }
    },
    {
      start: addHours(startOfDay(addDays(new Date(), 1)), 2),
      end: addHours(startOfDay(addDays(new Date(), 1)), 4),
      title: 'Event 2',
      draggable: true,
      resizable: {
        beforeStart: true, // this allows you to configure the sides the event is resizable from
        afterEnd: true
      },
      color: {
        primary: 'yellow',
        secondary: 'gray'
      },
      meta: {
        project: 'Bricks Urenmodule',
        relation: 'Key2Solutions'
      },
      actions: [
        {
          label: 'x',
          onClick: ({event}: { event: CalendarEvent }): void => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            console.log('Event deleted', event);
          }
        }
      ]
    },
    {
      start: addHours(startOfDay(new Date()), 4),
      end: addHours(startOfDay(new Date()), 5),
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
      },
      actions: [
        {
          label: 'x',
          onClick: ({event}: { event: CalendarEvent }): void => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            console.log('Event deleted', event);
          }
        },
        {
          label: 'edit',
          onClick: ({event}: { event: CalendarEvent }): void => {
            console.log('Event Edit', event);
          }
        }
      ]
    }
  ];

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd
                    }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    console.log(event);
    this.refresh.next();
    this.enableDrag();
  }

  handleEventClick(event) {
    console.log('event: ', event);
  }

  constructor(private elRef: ElementRef) {
  }

  headerClicked(event) {
    console.log('HEADER CLICK', event);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.enableDrag();
  }

  private calculateTotals(): void {

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

  private addDragIcon(item: HTMLElement): void {
    const dragIcon = `<svg width="12px"
      height="7px"
      viewBox="0 0 12 7"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-337.000000, -655.000000)" fill="#F7F7F7">
            <g transform="translate(251.000000, 593.000000)">
              <g transform="translate(86.000000, 62.000000)">
                <rect x="0" y="0" width="12" height="1"></rect>
                <rect x="0" y="3" width="12" height="1"></rect>
                <rect x="0" y="6" width="12" height="1"></rect>
              </g>
            </g>
          </g>
        </g>
      </svg>`;
    item.appendChild(this.createElementFromHTML(dragIcon));
  }

  private createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  }

}
