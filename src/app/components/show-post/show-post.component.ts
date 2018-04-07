import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Post } from './../../models/post';
import { PostsService } from './../../services/posts.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  post: Post;

  constructor(
    private postService: PostsService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id)
      .subscribe((post) => {
        this.post = post;
      });
  }

  goBack(): void {
    this.location.back();
  }

}
