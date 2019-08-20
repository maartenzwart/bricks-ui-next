import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'brx-icon-delete',
  templateUrl: './icon-delete.component.html',
  styleUrls: ['./icon-delete.component.scss']
})
export class IconDeleteComponent implements OnInit {
  @Input() color = '#757575';

  constructor() {
  }

  ngOnInit() {
  }

}
