import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brx-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  routes = [
    {
      path: 'dashboard',
      title: 'Dashboard'
    }, {
      path: 'projects',
      title: 'Projecten'
    }, {
      path: 'relations',
      title: 'Relaties'
    }, {
      path: 'hour-registration',
      title: 'Urenregistratie'
    }, {
      path: 'settings',
      title: 'Instellingen'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
