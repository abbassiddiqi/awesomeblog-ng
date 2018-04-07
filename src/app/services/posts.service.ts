import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from '../models/post';

@Injectable()
export class PostsService {
  private postsUrl = 'http://localhost:3000/api/posts';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl, this.httpOptions)
      .pipe(
        tap(() => { console.log('fetched posts'); }),
        catchError(this.handleError('getPosts', []))
      );
  }

  addPost(postData): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, postData, this.httpOptions)
      .pipe(
        tap(() => { console.log('added new post'); }),
        catchError(this.handleError<Post>('addPost'))
      );
  }

  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result);
    };
  }

}
