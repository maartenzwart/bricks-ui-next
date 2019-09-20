import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {BrxListHeaders, BrxListType} from '../../interfaces/brx-list-header';

@Component({
  selector: 'brx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() headers: BrxListHeaders = [];
  @Input() items: any[] = [];
  @Input() orderByKey = 'id';
  @Input() orderByReversed = false;
  @Output() sorting: EventEmitter<{ reversed: boolean, key: string }> = new EventEmitter<{ reversed: boolean, key: string }>();
  brxListType = BrxListType;
  filteredItems: any[] = [];

  @Input() filterTerm = '';
  @Input() filterKeys: string[] = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filterTerm) {
      this.handleFilter(changes.filterTerm.currentValue);
    }
    if (changes.items) {
      this.handleFilter(this.filterTerm);
    }
  }

  handleFilter(term: string) {
    if (!this.items) {
      return;
    }
    const filterBy = term ? term.toLowerCase() : null;
    this.filteredItems = filterBy ? this.items.filter(item => {
      let keys = Object.keys(item);
      if (this.filterKeys.length > 0) {
        keys = this.filterKeys;
      }

      let match = false;
      keys.forEach(key => {
        let value = item[key];
        if (typeof value === 'string' || value instanceof String) {
          value = value.toLowerCase();
          if (value.indexOf(filterBy) > -1) {
            match = true;
          }
        } else {
          if (value === filterBy) {
            match = true;
          }
        }
      });
      return match;
    }) : this.items;
  }

  ngOnInit() {
    this.sorting.emit({reversed: this.orderByReversed, key: this.orderByKey});
    this.filteredItems = this.items;
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
