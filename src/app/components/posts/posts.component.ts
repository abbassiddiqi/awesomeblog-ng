import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 50];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postsService.getPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

}
