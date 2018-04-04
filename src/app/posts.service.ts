import { Post } from './post';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

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

  constructor() { }

  getPosts(): Observable<Post[]> {
    return of(dummyPosts);
  }

}
