import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ErrorHandlingService} from '../../error-handling.service';
import {EMPTY, Observable, Subject} from 'rxjs';
import {catchError, flatMap, tap} from 'rxjs/operators';
import {BrxTenant, BrxTenants} from '../../../interfaces/brx-tenant';
import {BrxUserProfile} from '../../../interfaces/brx-user-profile';
import {BRX_API} from '../../../config/api';

@Injectable({
  providedIn: 'root'
})
export class AdminTenantService {
  private creatingNewTenantSource = new Subject<boolean>();

  creatingNewTenantSource$ = this.creatingNewTenantSource.asObservable();

  announceCreatingNewTenant(state: boolean) {
    this.creatingNewTenantSource.next(state);
  }

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlingService) {
  }

  postTenant(tmpTenant: BrxTenant, tmpUser: BrxUserProfile): { tenant: Observable<BrxTenant>, user: Observable<BrxUserProfile> } {
    const tenant = this.http.post<BrxTenant>(BRX_API.adminSettings.tenants.all(), tmpTenant).pipe(
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

  getTenants(): Observable<BrxTenants> {
    return this.http.get<BrxTenants>(BRX_API.tenants.all()).pipe(
      catchError(this.errorHandlerService.handleError<BrxTenants>('getTenants', []))
    );
  }
}
