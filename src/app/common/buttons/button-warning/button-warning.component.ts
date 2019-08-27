import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'brx-button-warning',
  templateUrl: './button-warning.component.html',
  styleUrls: ['./button-warning.component.scss']
})
export class ButtonWarningComponent implements OnInit {
  @Input() type = 'button';

  constructor() {
  }

  ngOnInit() {
  }

}
