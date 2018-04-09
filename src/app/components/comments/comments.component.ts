import { CommentsService } from './../../services/comments.service';
import { Component, OnInit, Input } from '@angular/core';

import { Comment } from './../../models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() parentId: string;
  comments: Comment[];

  constructor(
    private commentsService: CommentsService
  ) { }

  ngOnInit() {
    this.getComments();
  }

  getComments(): void {
    this.commentsService.getComments(this.parentId)
      .subscribe((comments) => {
        this.comments = comments;
      });
  }

  onCommentAdded(comment: Comment): void {
    this.comments.push(comment);
  }

  onCommentDeleted($event: Comment): void {
    this.comments = this.comments.filter((comment) => comment.id !== $event.id);
  }

}
