import { Component, OnInit } from '@angular/core';
import {BrxRoutes} from '../../../interfaces/brx-route';

@Component({
  selector: 'brx-hr-registration',
  templateUrl: './hr-registration.component.html',
  styleUrls: ['./hr-registration.component.scss']
})
export class HrRegistrationComponent implements OnInit {
  tabRoutes: BrxRoutes = [
    {
      path: 'agenda',
      title: 'Agenda'
    }, {
      path: 'table',
      title: 'Tabel'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
