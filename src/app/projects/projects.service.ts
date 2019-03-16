import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Project, ProjectDetails } from './project';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  apiUrl = 'https://api.github.com';
  username = 'slavabelaev';
  contentApiUrl = 'https://raw.githubusercontent.com';
  contentApiUserUrl = this.contentApiUrl + '/' + this.username + '/';
  private params = {
    client_id: 'd3912c53bb6454449923',
    client_secret: 'f8a18006358fc6e234dc42709ee89f93fa149efb'
  }

  constructor(private http: HttpClient) {}

  getRepositories(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/users/${this.username}/repos`, {
      params: this.params
    }).pipe(
      catchError(this.handleError('getRepositories', []))
    );
  }

  getRepositoryDetails(repositoryName): Observable<ProjectDetails> {
    return this.http.get<ProjectDetails>(`${this.contentApiUrl}/${this.username}/${repositoryName}/master/package.json`, {
      params: this.params
    }).pipe(
      catchError(this.handleError('getRepositoryDetails', {}))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
