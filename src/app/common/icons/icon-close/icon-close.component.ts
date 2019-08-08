import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'brx-icon-close',
  templateUrl: './icon-close.component.html',
  styleUrls: ['./icon-close.component.scss']
})
export class IconCloseComponent implements OnInit {
  @Input() scale = 1;
  @Input() stroke = '#424242';

  constructor() {
  }

  ngOnInit() {
  }

}
