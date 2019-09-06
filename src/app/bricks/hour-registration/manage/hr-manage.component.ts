import {Component, OnInit} from '@angular/core';
import {BrxRoutes} from '../../../interfaces/brx-route';

@Component({
  selector: 'brx-manage',
  templateUrl: './hr-manage.component.html',
  styleUrls: ['./hr-manage.component.scss']
})
export class HrManageComponent implements OnInit {
  routes: BrxRoutes = [{
    title: 'Beheer Urenklussen',
    path: 'jobs'
  }, {
    title: 'Uursoorten',
    path: 'activities'
  }];

  constructor() {
  }

  ngOnInit() {
  }
}
