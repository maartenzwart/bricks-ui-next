import { Component, OnInit } from '@angular/core';
import {BrxRoute} from '../../../interfaces/brxRoute';

@Component({
  selector: 'brx-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  routes: BrxRoute[] = [{
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

  constructor() { }

  ngOnInit() {
  }

}
