import {Component, Input, OnInit} from '@angular/core';
import {BrxRoute} from '../../../interfaces/brx-route';

@Component({
  selector: 'brx-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() routes: BrxRoute[];

  constructor() {
  }

  ngOnInit() {
  }

}
