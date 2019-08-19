import { Component } from '@angular/core';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'brx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bricks-ui-angular';

  constructor(private authService: AuthenticationService) {
  }

  loggedIn() {
    return this.authService.isAuthenticated();
  }
}
