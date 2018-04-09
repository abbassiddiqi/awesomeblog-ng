import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from '../models/post';

@Injectable()
export class PostsService {
  private baseUrl = 'https://morning-gorge-53054.herokuapp.com/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getPosts(skip: number = 0, limit: number = 5): Observable<Post[]> {
    const url = `${this.baseUrl}/posts?filter[skip]=${skip}&&filter[limit]=${limit}`;
    return this.http.get<Post[]>(url, this.httpOptions)
      .pipe(
        tap(() => { console.log('fetched posts'); }),
        catchError(this.handleError('getPosts', []))
      );
  }

  getPostsCount(): Observable<object> {
    const url = `${this.baseUrl}/posts/count`;
    return this.http.get(url, this.httpOptions)
      .pipe(
        tap(() => { console.log('fetched posts count'); }),
        catchError(this.handleError<object>('getPostsCount'))
      );
  }

  getPost(id: string): Observable<Post> {
    const url = `${this.baseUrl}/posts/${id}`;
    return this.http.get<Post>(url, this.httpOptions)
      .pipe(
        tap(() => { console.log('fetched post for id ', id); }),
        catchError(this.handleError<Post>('getPost'))
      );
  }

  addPost(postData): Observable<Post> {
    return this.http.put<Post>(this.baseUrl, postData, this.httpOptions)
      .pipe(
        tap(() => { console.log('added new post'); }),
        catchError(this.handleError<Post>('addPost'))
      );
  }

  deletePost(postId): Observable<any> {
    const url = `${this.baseUrl}/posts/${postId}`;
    return this.http.delete(url, this.httpOptions)
      .pipe(
        tap(() => { console.log(`deleting post with id=${postId}`); }),
        catchError(this.handleError('deletePost'))
      );
  }

  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result);
    };
  }

}
