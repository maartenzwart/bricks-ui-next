import { Component, OnInit } from '@angular/core';
import {BrxRoute} from '../../interfaces/brx-route';

@Component({
  selector: 'brx-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  routes: BrxRoute[] = [{
    path: 'organisation',
    title: 'Organisatie',
    firstItem: true
  }, {
    path: 'admin',
    title: 'Admin'
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
