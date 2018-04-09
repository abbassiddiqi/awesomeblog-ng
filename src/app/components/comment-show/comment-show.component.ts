import { CommentsService } from './../../services/comments.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Comment } from './../../models/comment';

@Component({
  selector: 'app-comment-show',
  templateUrl: './comment-show.component.html',
  styleUrls: ['./comment-show.component.css']
})
export class CommentShowComponent implements OnInit {

  @Input() comment: Comment;
  @Output() commentDeleted = new EventEmitter<Comment>();

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
  }

  deleteComment(): void {
    this.commentsService.deleteComment(this.comment.id)
      .subscribe((comment) => {
        this.commentDeleted.emit(this.comment);
      });
  }

}
