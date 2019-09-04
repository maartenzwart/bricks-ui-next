import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorHandlingService} from '../../error-handling.service';
import {BRX_API} from '../../../config/api';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {BrxUser, BrxUsers} from '../../../interfaces/brx-user';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlingService) {
  }

  getUsers(): Observable<BrxUsers> {
    return this.http.get<BrxUsers>(BRX_API.users.all()).pipe(
      catchError(this.errorHandlerService.handleError<BrxUsers>('getUsers', []))
    );
  }

  getUsersWithoutTenant(): Observable<BrxUsers> {
    return this.http.get<BrxUsers>(BRX_API.users.all()).pipe(
      catchError(this.errorHandlerService.handleError<BrxUsers>('getUsersWithoutTenant', []))
    );
  }

  updateUser(user: BrxUser): Observable<BrxUser> {
    return this.http.put<BrxUser>(BRX_API.users.byId(user.id), user).pipe(
      catchError(this.errorHandlerService.handleError<BrxUser>('updateUser', null))
    );
  }
}
