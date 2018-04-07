import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { PostsService } from '../../services/posts.service';
import { Post } from './../../models/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(
    private location: Location,
    private postsService: PostsService
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  addPost(title: string, content: string): void {
    title = title.trim();
    content = content.trim();
    if (!title || !content) { return; }
    const postData = {
      title,
      content
    };
    this.postsService.addPost(postData)
      .subscribe((res) => {
        this.goBack();
      },
      (err) => {
        console.log(err);
      });
  }

}
