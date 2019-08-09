import {Component, Input, OnInit} from '@angular/core';
import {Route} from '../../../interfaces/route';

@Component({
  selector: 'brx-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {
  @Input() routes: Route[] = [];

  constructor() {
  }

  ngOnInit() {
  }
}
