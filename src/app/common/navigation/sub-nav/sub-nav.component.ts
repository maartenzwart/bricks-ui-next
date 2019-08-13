import {Component, Input, OnInit} from '@angular/core';
import {BrxRoute} from '../../../interfaces/brx-route';

@Component({
  selector: 'brx-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {
  @Input() routes: BrxRoute[] = [];

  constructor() {
  }

  ngOnInit() {
  }
}
