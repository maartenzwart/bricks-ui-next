import {BrxConfig} from '../config/app';

function getJwtToken() {
  return localStorage.getItem(BrxConfig.jwt.key);
}

export const jwt = {
  getJwtToken
};
