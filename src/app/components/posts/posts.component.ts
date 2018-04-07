import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PageEvent } from '@angular/material/paginator';

import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  postsCount = 0;
  pageIndex = 0;
  pageSize = 5;
  pageSizeOptions = [5, 10, 20];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
    this.getPostsCount();
  }

  getPostsCount(): void {
    this.postsService.getPostsCount()
      .subscribe((result) => {
        this.postsCount = result.count || 0;
      });
  }

  getPosts(): void {
    const skip = this.pageIndex * this.pageSize;
    const limit = this.pageSize;
    this.postsService.getPosts(skip, limit)
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  onPageChange($event: PageEvent): void {
    this.pageSize = $event.pageSize;
    this.pageIndex = $event.pageIndex;

    this.getPosts();
  }

}
