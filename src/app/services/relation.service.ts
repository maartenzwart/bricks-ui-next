import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorHandlingService} from '../common/services/error-handling.service';
import {Observable} from 'rxjs';
import {BRX_API} from '../config/api';
import {catchError} from 'rxjs/operators';
import {BrxRelations} from '../interfaces/brx-relation';

@Injectable({
  providedIn: 'root'
})
export class RelationService {

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlingService) {
  }

  getRelations(): Observable<BrxRelations> {
    return this.http.get<BrxRelations>(BRX_API.relations.all()).pipe(
      catchError(this.errorHandlerService.handleError<BrxRelations>('getRelations', []))
    );
  }
}
