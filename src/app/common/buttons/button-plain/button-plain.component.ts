import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'brx-button-plain',
  templateUrl: './button-plain.component.html',
  styleUrls: ['./button-plain.component.scss']
})
export class ButtonPlainComponent implements OnInit {
  @Input() type = 'button';

  constructor() {
  }

  ngOnInit() {
  }

}
