import {Component, OnInit} from '@angular/core';
import {adminChildren} from './routes-children';

@Component({
  selector: 'brx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  routes = adminChildren;

  constructor() {
  }

  ngOnInit() {
  }
}
