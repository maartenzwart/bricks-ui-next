import {Component, Input, OnInit} from '@angular/core';
import {BrxListHeaders} from '../../interfaces/brx-list-header';

@Component({
  selector: 'brx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() headers: BrxListHeaders = [];
  @Input() items: any[] = [];
  @Input() orderByKey = 'id';
  @Input() orderByReversed = false;

  constructor() {
  }

  ngOnInit() {
  }

  handleSort(event) {
    this.orderByReversed = this.orderByKey !== event ? false : !this.orderByReversed;
    this.orderByKey = event;
  }
}
