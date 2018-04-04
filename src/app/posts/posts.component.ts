import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts.service';
import { Post } from '../Post';

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
    this.posts = this.postsService.getPosts();
  }

}
