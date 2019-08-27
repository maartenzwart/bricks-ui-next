import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'brx-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent implements OnInit {
  @Input() type = 'button';
  @Input() outline = false;
  @Input() disabled = false;

  constructor() {
  }

  ngOnInit() {
  }

}
