import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {BrxUserProfile} from '../interfaces/brx-user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private jwtHelperService: JwtHelperService) {
  }

  getCurrentProfile(): BrxUserProfile {
    const jwtDecoded = this.jwtHelperService.decodeToken(this.jwtHelperService.tokenGetter());
    if (jwtDecoded) {
      return jwtDecoded;
    }
    return null;
  }
}
