import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'brx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  routes = [{
    path: 'tenants',
    title: 'Tenants'
  }, {
    path: 'users',
    title: 'Gebruikers'
  }
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
