import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Post } from './../../models/post';
import { PostsService } from './../../services/posts.service';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.css']
})
export class PostShowComponent implements OnInit {
  postId: string;
  post: Post;

  constructor(
    private postService: PostsService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.postId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    this.postService.getPost(this.postId)
      .subscribe((post) => {
        this.post = post;
      });
  }

  deletePost(postId): void {
    this.postService.deletePost(postId)
      .subscribe(() => {
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
