import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[brxListCell]'
})
export class ListCellDirective {
  @HostBinding('class.brx-list-row') addRowClass = true;
  @HostBinding('class.brx-list-cell') addCellClass = true;

  constructor() {
  }

}
