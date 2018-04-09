import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CommentsService } from './../../services/comments.service';
import { Comment } from './../../models/comment';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent implements OnInit {
  @Input()
  parentId: string;

  @Output() commentAdded = new EventEmitter<Comment>();

  content: string;

  constructor(
    private commentsService: CommentsService
  ) { }

  ngOnInit() {
  }

  addComment(): void {
    this.content = this.content.trim();
    if (!this.content) {
      return;
    }
    const commentData = {
      content: this.content
    };
    this.commentsService.addComment(this.parentId, commentData)
      .subscribe((comment) => {
        this.commentAdded.emit(comment);
        this.content = '';
      });
  }

}
