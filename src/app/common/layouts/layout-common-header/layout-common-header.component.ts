import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'brx-layout-common-header',
  templateUrl: './layout-common-header.component.html',
  styleUrls: ['./layout-common-header.component.scss']
})
export class LayoutCommonHeaderComponent implements OnInit, OnDestroy {
  @Input() filterLabel = 'Filter';
  @Input() filterPlaceholder = '';
  @Input() filter: string;
  @Input() createLabel = '';
  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() createClick: EventEmitter<any> = new EventEmitter<any>();
  filterTerm: FormControl = new FormControl();
  filterSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    if (this.filter) {
      this.filterTerm.setValue(this.filter);
    }

    this.filterSubscription = this.filterTerm.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged()
      ).subscribe(term => {
        this.filter = term ? term.toLowerCase() : null;
        this.filterChange.emit(this.filter);
      });
  }

  ngOnDestroy(): void {
    this.filterSubscription.unsubscribe();
  }

}
