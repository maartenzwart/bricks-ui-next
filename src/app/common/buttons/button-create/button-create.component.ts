import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'brx-button-create',
  templateUrl: './button-create.component.html',
  styleUrls: ['./button-create.component.scss']
})
export class ButtonCreateComponent implements OnInit {
  @Input() type = 'button';
  @Input() disabled = false;

  @HostListener('click', ['$event'])
  click(event: MouseEvent) {
    event.cancelBubble = this.disabled;
  }

  constructor() {
  }

  ngOnInit() {
  }
}
