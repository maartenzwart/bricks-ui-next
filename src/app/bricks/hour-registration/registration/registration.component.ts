import { Component, OnInit } from '@angular/core';
import {BrxRoutes} from '../../../interfaces/brx-route';

@Component({
  selector: 'brx-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
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
