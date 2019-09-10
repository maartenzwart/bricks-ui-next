import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {BrxInputErrorMessages} from '../../interfaces/brx-input-error-message';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'brx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {

  loginErrorSubscription: Subscription;
  loginError = '';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  errorMessages: BrxInputErrorMessages = [{
    key: 'required',
    message: 'Dit veld is verplicht'
  }, {
    key: 'email',
    message: 'Dit is geen geldig e-mailadres'
  }];

  constructor(private authService: AuthenticationService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }

    this.loginErrorSubscription = this.authService.loginErrorMessage$.subscribe(error => {
      if (error.status === 401) {
        this.loginError = 'Email/wachtwoord incorrect';
        return;
      }
      this.loginError = error.statusText;
    });
  }

  ngOnDestroy(): void {
    this.loginErrorSubscription.unsubscribe();
  }

  login() {
    this.loginError = '';
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value);
    }
  }
}
