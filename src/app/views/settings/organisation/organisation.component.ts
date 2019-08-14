import {Component, OnInit} from '@angular/core';
import {BrxRoutes} from '../../../interfaces/brx-route';

@Component({
  selector: 'brx-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {
  routes: BrxRoutes = [{
    path: 'users',
    title: 'Gebruikers'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
