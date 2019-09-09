import {Injectable} from '@angular/core';
import {BrxConfig} from '../config/app';
import {Router} from '@angular/router';
import {BrxAuthUser} from '../interfaces/brx-auth-user';
import {JwtUtils} from '../utils';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ErrorHandlingService} from './error-handling.service';
import {BRX_API} from '../config/api';
import {catchError, first} from 'rxjs/operators';
import {BrxJWT} from '../interfaces/brx-jwt';
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private jwtUtils = new JwtUtils(this.cookieService);

  private loginErrorMessage = new Subject<HttpErrorResponse>();

  loginErrorMessage$ = this.loginErrorMessage.asObservable();

  announceLoginErrorMessage(error: HttpErrorResponse) {
    this.loginErrorMessage.next(error);
  }

  constructor(private cookieService: CookieService, private router: Router, private http: HttpClient, private errorHandlerService: ErrorHandlingService) {
  }

  isAuthenticated(): boolean {
    const token = this.jwtUtils.getJwtToken();
    return !this.jwtUtils.isTokenExpired(token);
  }

  login(user: BrxAuthUser) {
    this.http.post<{ jwt: string, error?: HttpErrorResponse }>(BRX_API.authentication.login(), {
      email: user.email,
      password: user.password
    }).pipe(
      first(),
      catchError((error: HttpErrorResponse): Observable<{ jwt: string, error: HttpErrorResponse }> => {
        console.error(error); // log to console instead
        console.error(`login failed: ${error.message}`);
        return of({jwt: null, error});
      })
    ).subscribe(result => {
      const {jwt, error} = result;

      // TODO: REMOVE DEV OVERRIDE!!!
      const tmpJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZ2l2ZW5OYW1lIjoiTWF4IiwiaW5zZXJ0aW9uIjoidmFuIGRlIiwiZmFtaWx5TmFtZSI6IkxhYXIiLCJpZCI6ImExMTA5YjllLTQyODktNGUxYy1iNWNkLWYxYmRlMjE1MzE5YyIsImVtYWlsIjoibWF4LnZhbmRlbGFhckBsdW1pbmlzLmV1IiwiaWF0IjoxNTE2MjM5MDIyLCJ0ZW5hbnRJZCI6MX0.XooelLySF_aRz89WutMfDAs8KVEe9C9Y4cc1Q2G_YTU';
      this.jwtUtils.setJwtToken(tmpJWT);
      this.router.navigate(['/']);
      return;
      // OVERRIDE ENDS HERE!!!

      if (error) {
        this.announceLoginErrorMessage(error);
      }
      if (!error && jwt) {
        console.log('SETTING THE TOKEN', result.jwt);
        this.jwtUtils.setJwtToken(result.jwt);
        this.router.navigate(['/']);
      }
    });
  }


  logout(): void {
    this.jwtUtils.removeJwtToken();
    this.router.navigate([BrxConfig.jwt.logoutPath]);
  }
}
