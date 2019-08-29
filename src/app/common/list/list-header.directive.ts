import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[brxListHeader]'
})
export class ListHeaderDirective {
  @HostBinding('class.brx-list-header') addHeaderClass = true;
  @HostBinding('class.brx-list-cell') addCellClass = true;

  constructor() {
  }

}
