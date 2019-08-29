import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BrxListHeaders, BrxListType} from '../../interfaces/brx-list-header';

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
  @Output() sorting: EventEmitter<{ reversed: boolean, key: string }> = new EventEmitter<{ reversed: boolean, key: string }>();
  brxListType = BrxListType;

  constructor() {
  }

  ngOnInit() {
    console.log(this.headers);
    this.sorting.emit({reversed: this.orderByReversed, key: this.orderByKey});
  }

  handleSort(key: string, sortable: boolean) {
    if (!sortable) {
      return;
    }
    this.orderByReversed = this.orderByKey !== key ? false : !this.orderByReversed;
    this.orderByKey = key;
    this.sorting.emit({reversed: this.orderByReversed, key: this.orderByKey});
  }
}
