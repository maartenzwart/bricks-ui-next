import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorHandlingService} from './error-handling.service';
import {Observable} from 'rxjs';
import {BRX_API} from '../config/api';
import {catchError} from 'rxjs/operators';
import {BrxRelation, BrxRelationOrganisation, BrxRelations} from '../interfaces/brx-relation';

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

  createRelation(relation: BrxRelation): Observable<BrxRelation> {
    return this.http.post<BrxRelation>(BRX_API.relations.all(), relation).pipe(
      catchError(this.errorHandlerService.handleError<BrxRelation>('createRelation', null))
    );
  }

  createOrganisation(organisation: BrxRelationOrganisation): Observable<BrxRelationOrganisation> {
    return this.http.post<BrxRelationOrganisation>(BRX_API.relations.organisation.all(), organisation).pipe(
      catchError(this.errorHandlerService.handleError<BrxRelationOrganisation>('createRelationOrganisation', null))
    );
  }
}
