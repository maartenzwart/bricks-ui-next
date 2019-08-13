import {Component, OnInit} from '@angular/core';
import {organisationChildren} from './routes-children';

@Component({
  selector: 'brx-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {
  routes = organisationChildren;

  constructor() {
  }

  ngOnInit() {
  }

}
