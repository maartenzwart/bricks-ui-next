import {BrxConfig} from '../config/app';
import {JwtHelperService} from '@auth0/angular-jwt';

const jwtHelperService = new JwtHelperService();


function getJwtToken(): string {
  return localStorage.getItem(BrxConfig.jwt.key);
}

function removeJwtToken(): void {
  localStorage.removeItem(BrxConfig.jwt.key);
}

function setJwtToken(token: string): void {
  localStorage.setItem(BrxConfig.jwt.key, token);
}

function decodeJwtToken(token: string): object {
  return jwtHelperService.decodeToken(token);
}

export const jwt = {
  getJwtToken,
  removeJwtToken,
  setJwtToken,
  decodeJwtToken
};
