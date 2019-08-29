import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[brxListColumn]'
})
export class ListColumnDirective {
  @HostBinding('class.brx-list-column') addColumnClass = true;

  constructor() {
  }

}
