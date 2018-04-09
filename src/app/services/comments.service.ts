import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

import { Comment } from '../models/comment';

@Injectable()
export class CommentsService {
  baseUrl = 'https://morning-gorge-53054.herokuapp.com/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getComments(parentId: string, limit: number = 10, skip: number = 0): Observable<Comment[]> {
    const url = `${this.baseUrl}/posts/${parentId}/comments`;
    return this.http.get<Comment[]>(url, this.httpOptions)
      .pipe(
        tap(() => { console.log('fetched comments'); }),
        catchError(this.handleError<Comment[]>('getComments'))
      );
  }

  addComment(parentId: string, comment: any): Observable<Comment> {
    const url = `${this.baseUrl}/posts/${parentId}/comments`;
    return this.http.post<Comment>(url, comment, this.httpOptions)
      .pipe(
        tap(() => { console.log('created a new comment'); }),
        catchError(this.handleError<Comment>('addComment'))
      );
  }

  deleteComment(id: string): Observable<any> {
    const url = `${this.baseUrl}/comments/${id}`;
    return this.http.delete(url, this.httpOptions)
      .pipe(
        tap(() => { console.log(`delete comment with id: ${id}`); }),
        catchError(this.handleError('addComment'))
      );
  }

  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result);
    };
  }

}
