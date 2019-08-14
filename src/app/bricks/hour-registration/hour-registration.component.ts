import { Component, OnInit } from '@angular/core';
import {BrxRoute} from '../../interfaces/brx-route';

@Component({
  selector: 'brx-hour-registration',
  templateUrl: './hour-registration.component.html',
  styleUrls: ['./hour-registration.component.scss']
})
export class HourRegistrationComponent implements OnInit {
  routes: BrxRoute[] = [{
    path: 'registration',
    title: 'Mijn uren',
    firstItem: true
  }, {
    path: 'assess',
    title: 'Goedkeuren'
  }, {
    path: 'manage',
    title: 'Beheer'
  }];

  constructor() { }

  ngOnInit() {
  }

}
