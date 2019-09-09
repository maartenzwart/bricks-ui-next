import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorHandlingService} from './error-handling.service';
import {BRX_API} from '../config/api';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {BrxActivities, BrxActivity} from '../interfaces/brx-activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlingService) {
  }

  getActivities(): Observable<BrxActivities> {
    return this.http.get<BrxActivities>(BRX_API.activities.all()).pipe(
      catchError(this.errorHandlerService.handleError<BrxActivities>('getActivities', []))
    );
  }

  createOrUpdateActivity(activity: BrxActivity): Observable<BrxActivity> {
    return activity.id ? this.updateActivity(activity) : this.createActivity(activity);
  }

  createActivity(activity: BrxActivity): Observable<BrxActivity> {
    return this.http.post<BrxActivity>(BRX_API.activities.all(), activity).pipe(
      catchError(this.errorHandlerService.handleError<BrxActivity>('postActivity', null))
    );
  }

  updateActivity(activity: BrxActivity): Observable<BrxActivity> {
    return this.http.put<BrxActivity>(BRX_API.activities.byId(activity.id), activity).pipe(
      catchError(this.errorHandlerService.handleError<BrxActivity>('updateActivity', null))
    );
  }

  removeActivity(activity: BrxActivity): Observable<BrxActivity> {
    return this.http.delete<BrxActivity>(BRX_API.activities.byId(activity.id)).pipe(
      catchError(this.errorHandlerService.handleError<BrxActivity>('removeActivity', null))
    );
  }

}
