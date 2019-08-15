import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WeekDay} from 'calendar-utils';

@Component({
  selector: 'brx-hr-header',
  templateUrl: './hr-header.component.html',
  styleUrls: ['./hr-header.component.scss']
})
export class HrHeaderComponent implements OnInit {
  @Input() view: string;

  @Input() viewDate: Date;

  @Input() days: WeekDay[];

  @Input() totalRegistration = 0;

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
