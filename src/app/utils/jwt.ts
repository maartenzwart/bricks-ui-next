import {BrxConfig} from '../config/app';
import {JwtHelperService} from '@auth0/angular-jwt';
import {CookieService} from 'ngx-cookie-service';
import {PLATFORM_ID} from '@angular/core';

const jwtHelperService = new JwtHelperService();

// const cookieService = new CookieService(document, PLATFORM_ID);

export class JwtHelper {

  constructor(private cookieService: CookieService) {
  }

  getJwtToken(): string {
    return this.cookieService.get(BrxConfig.jwt.key);
  }

  removeJwtToken(): void {
    console.log('REMOVING!!');
    this.cookieService.delete(BrxConfig.jwt.key);
  }

  setJwtToken(token: string): void {
    // TODO: SET SECURE!
    this.cookieService.set(BrxConfig.jwt.key, token, null, '/', 'localhost', false);
  }

  decodeJwtToken(token: string): object {
    return jwtHelperService.decodeToken(token);
  }

  isTokenExpired(token: string, offsetSeconds?: number): boolean {
    return jwtHelperService.isTokenExpired(token, offsetSeconds);
  }
}
