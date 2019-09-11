import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorHandlingService} from './error-handling.service';
import {Observable} from 'rxjs';
import {BrxProject, BrxProjects} from '../interfaces/brx-project';
import {BRX_API} from '../config/api';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlingService) {
  }

  getProjects(): Observable<BrxProjects> {
    return this.http.get<BrxProjects>(BRX_API.projects.all()).pipe(
      catchError(this.errorHandlerService.handleError<BrxProjects>('getProjects', []))
    );
  }

  createProject(project: BrxProject): Observable<BrxProject> {
    return this.http.post<BrxProject>(BRX_API.projects.all(), project).pipe(
      catchError(this.errorHandlerService.handleError<BrxProject>('createProject', null))
    );
  }
}
