import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {BrxAuthUser} from '../../interfaces/brx-auth-user';

@Component({
  selector: 'brx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  user: BrxAuthUser = {email: '', password: ''};

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }

  login(email, pwd, form) {
    form.submitted = true;
    if (!email.errors && this.user.email && !pwd.errors && this.user.password) {
      return this.authService.login(this.user);
    }
  }
}
