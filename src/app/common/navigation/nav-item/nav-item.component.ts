import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'brx-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input() path = '/';
  @Input() label = 'Home';
  @Input() firstItem = false;

  constructor() {
  }

  ngOnInit() {
  }


}
