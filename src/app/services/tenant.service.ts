import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorHandlingService} from './error-handling.service';
import {Observable} from 'rxjs';
import {BRX_API} from '../config/api';
import {catchError} from 'rxjs/operators';
import {BrxTenant, BrxTenants} from '../interfaces/brx-tenant';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlingService) {
  }

  getTenants(): Observable<BrxTenants> {
    return this.http.get<BrxTenants>(BRX_API.tenants.all()).pipe(
      catchError(this.errorHandlerService.handleError<BrxTenants>('getTenants', []))
    );
  }

  postTenant(tenant: BrxTenant): Observable<BrxTenant> {
    return this.http.post<BrxTenant>(BRX_API.tenants.all(), tenant).pipe(
      catchError(this.errorHandlerService.handleError<BrxTenant>('postTenant', null))
    );
  }
}
