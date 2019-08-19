import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {BrxConfig} from '../config/app';
import {Router} from '@angular/router';
import {AuthUser} from '../interfaces/auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private jwtHelper: JwtHelperService, private router: Router) {
  }

  isAuthenticated(): boolean {
    const token = this.getJwtToken();
    return !this.jwtHelper.isTokenExpired(token);
  }

  getJwtToken(): string {
    return localStorage.getItem(BrxConfig.jwt.key);
  }

  login(user: AuthUser): any {
    const tmpJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    if (user.email && user.password) {
      localStorage.setItem(BrxConfig.jwt.key, tmpJWT);
      this.router.navigate(['/']);
    }
  }

  logout(): void {
    localStorage.removeItem(BrxConfig.jwt.key);
    this.router.navigate([BrxConfig.jwt.logoutPath]);
  }
}
