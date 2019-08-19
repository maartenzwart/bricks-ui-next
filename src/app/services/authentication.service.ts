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
    const tmpJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZmlyc3ROYW1lIjoiTWF4IiwiaW5zZXJ0aW9uIjoidmFuIGRlIiwibGFzdE5hbWUiOiJMYWFyIiwiaWQiOiJhMTEwOWI5ZS00Mjg5LTRlMWMtYjVjZC1mMWJkZTIxNTMxOWMiLCJlbWFpbCI6Im1heC52YW5kZWxhYXJAbHVtaW5pcy5ldSIsImlhdCI6MTUxNjIzOTAyMn0.Wi4vpsmDkMXaCZmkz4DnvClmd1YwoIOsIFSP_0sM4O0';
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
