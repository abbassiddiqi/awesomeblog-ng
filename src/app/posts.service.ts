import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const dummyPosts: Post[] = [
  {
    id: '1',
    title: 'Is this a title?',
    content: 'Is this the content of the post'
  },
  {
    id: '2',
    title: 'Is this a second title?',
    content: 'Is this the content of the second post'
  }
];

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
        catchError(this.handleError('getPosts', []))
      );
  }

  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result);
    };
  }

}
