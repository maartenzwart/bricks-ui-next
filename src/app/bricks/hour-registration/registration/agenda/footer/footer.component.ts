import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'brx-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
