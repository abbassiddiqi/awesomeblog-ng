import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PostsService } from '../../services/posts.service';
import { Post } from './../../models/post';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  id: string;
  title: string;
  content: string;

  action = 'Add new';

  constructor(
    private location: Location,
    private postsService: PostsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = idParam;
      this.action = 'Update';
      this.loadPost();
    }
  }

  loadPost(): void {
    this.postsService.getPost(this.id)
      .subscribe((post: Post) => {
        this.id = post.id;
        this.title = post.title;
        this.content = post.content;
      },
      (err) => {
        console.log(err);
      });
  }

  goBack(): void {
    this.location.back();
  }

  addPost(): void {
    this.title = this.title.trim();
    this.content = this.content.trim();

    if (!this.title || !this.content) { return; }
    const postData: any = {
      title: this.title,
      content: this.content
    };

    if (this.id) {
      postData.id = this.id;
    }

    this.postsService.addPost(postData)
      .subscribe((res) => {
        this.goBack();
      },
      (err) => {
        console.log(err);
      });
  }

}
