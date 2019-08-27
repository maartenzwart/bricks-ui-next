import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'brx-button-dark',
  templateUrl: './button-dark.component.html',
  styleUrls: ['./button-dark.component.scss']
})
export class ButtonDarkComponent implements OnInit {
  @Input() type = 'button';

  constructor() {
  }

  ngOnInit() {
  }

}
