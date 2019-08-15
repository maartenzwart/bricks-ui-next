import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'brx-hr-agenda-footer',
  templateUrl: './hr-agenda-footer.component.html',
  styleUrls: ['./hr-agenda-footer.component.scss']
})
export class HrAgendaFooterComponent implements OnInit {
  message = 'Deze week nog geen 40 uur geboekt';

  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  closeClicked() {
    this.close.emit(true);
  }

  ngOnInit() {
  }

}
