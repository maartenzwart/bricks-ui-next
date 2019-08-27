import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'brx-button-create',
  templateUrl: './button-create.component.html',
  styleUrls: ['./button-create.component.scss']
})
export class ButtonCreateComponent implements OnInit {
  @Input() type = 'button';

  constructor() {
  }

  ngOnInit() {
  }

}
