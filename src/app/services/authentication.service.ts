import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {BrxConfig} from '../config/app';
import {Router} from '@angular/router';
import {BrxAuthUser} from '../interfaces/brx-auth-user';
import {JwtUtils} from '../utils';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private jwtHelper: JwtHelperService, private router: Router) {
  }

  isAuthenticated(): boolean {
    const token = JwtUtils.getJwtToken();
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(user: BrxAuthUser): any {
    // TODO: REMOVE TMP TOKEN
    const tmpJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZ2l2ZW5OYW1lIjoiTWF4IiwiaW5zZXJ0aW9uIjoidmFuIGRlIiwiZmFtaWx5TmFtZSI6IkxhYXIiLCJpZCI6ImExMTA5YjllLTQyODktNGUxYy1iNWNkLWYxYmRlMjE1MzE5YyIsImVtYWlsIjoibWF4LnZhbmRlbGFhckBsdW1pbmlzLmV1IiwiaWF0IjoxNTE2MjM5MDIyfQ.TqylLlmLAROT3QOdEOfMFp0Hoc5BlB5JcYPVLgQtUFc';
    if (user.email && user.password) {
      JwtUtils.setJwtToken(tmpJWT);
      this.router.navigate(['/']);
    }
  }

  logout(): void {
    JwtUtils.removeJwtToken();
    this.router.navigate([BrxConfig.jwt.logoutPath]);
  }
}
