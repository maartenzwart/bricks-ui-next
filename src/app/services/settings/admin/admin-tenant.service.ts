import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ErrorHandlingService} from '../../error-handling.service';
import {EMPTY, Observable} from 'rxjs';
import {catchError, flatMap, tap} from 'rxjs/operators';
import {BrxTenant} from '../../../interfaces/brx-tenant';
import {BrxUserProfile} from '../../../interfaces/brx-user-profile';
import {BRX_API} from '../../../config/api';

@Injectable({
  providedIn: 'root'
})
export class AdminTenantService {

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlingService) {
  }

  postTenant(tmpTenant: BrxTenant, tmpUser: BrxUserProfile): { tenant: Observable<BrxTenant>, user: Observable<BrxUserProfile> } {
    const tenant = this.http.post<BrxTenant>(BRX_API.adminSettings.tenants.all(), tmpTenant).pipe(
      tap(response => {
        console.log('POST TENANT', tmpTenant, response);
      }),
      catchError(this.errorHandlerService.handleError<BrxTenant>('postTenant', null))
    );
    const user = this.http.post<BrxUserProfile>(BRX_API.users.all(), tmpUser).pipe(
      catchError(this.errorHandlerService.handleError<BrxUserProfile>('postUser', null))
    );
    return {
      tenant,
      user
    };
  }

}
