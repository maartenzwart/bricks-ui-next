import { Component, OnInit } from '@angular/core';
import {BrxRoutes} from '../../../interfaces/brxRoute';

@Component({
  selector: 'brx-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  routes: BrxRoutes = [{
    path: '/hour-registration/registration',
    title: 'Mijn uren',
    firstItem: true
  }, {
    path: '/hour-registration/assess',
    title: 'Goedkeuren'
  }, {
    path: '/hour-registration/manage',
    title: 'Beheer'
  }];

  tabRoutes: BrxRoutes = [
    {
      path: 'agenda',
      title: 'Agenda'
    }, {
      path: 'table',
      title: 'Time Sheet'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
