import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'brx-icon-job',
  templateUrl: './icon-job.component.html',
  styleUrls: ['./icon-job.component.scss']
})
export class IconJobComponent implements OnInit {
  @Input() fill = '#FFFFFF';
  @Input() stroke?: string;
  @Input() scale = 1;

  constructor() {
  }

  ngOnInit() {
  }

}
