import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BrxRoutes} from '../../../interfaces/brx-route';

@Component({
  selector: 'brx-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() routes: BrxRoutes;
  @Output() tabClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

}
