import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {WeekViewAllDayEvent, DayViewEvent} from 'calendar-utils';
import {PlacementArray} from 'positioning';
import {brxIconEdit} from '../../../../../common/icons/svg';

@Component({
  selector: 'brx-hr-agenda-event',
  templateUrl: './hr-agenda-event.component.html',
  styleUrls: ['./hr-agenda-event.component.scss']
})
export class HrAgendaEventComponent implements OnInit, AfterViewInit {
  brxIconEdit = brxIconEdit;

  @ViewChild('container', {read: ViewContainerRef, static: false}) container: ViewContainerRef;

  @Input() weekEvent: WeekViewAllDayEvent | DayViewEvent;

  @Input() tooltipPlacement: PlacementArray;

  @Input() tooltipAppendToBody: boolean;

  @Input() tooltipDisabled: boolean;

  @Input() customTemplate: TemplateRef<any>;

  @Input() eventTitleTemplate: TemplateRef<any>;

  @Input() eventActionsTemplate: TemplateRef<any>;

  @Input() tooltipTemplate: TemplateRef<any>;

  @Output() eventClicked: EventEmitter<any> = new EventEmitter();

  @Output() editClicked: EventEmitter<any> = new EventEmitter();

  @Output() afterRender: EventEmitter<any> = new EventEmitter();

  onEdit(event) {
    this.editClicked.emit(event);
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.afterRender.emit(this.weekEvent.event);
  }


}
