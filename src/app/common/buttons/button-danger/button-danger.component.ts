import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'brx-button-danger',
  templateUrl: './button-danger.component.html',
  styleUrls: ['./button-danger.component.scss']
})
export class ButtonDangerComponent implements OnInit {
  @Input() type = 'button';

  constructor() {
  }

  ngOnInit() {
  }

}
