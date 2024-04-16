import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../../services/comments/comment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  data: any;

  commentInput = '';

  @ViewChild('inputElement', { static: true }) inputElement!: ElementRef;
  constructor(
    private dataService: DataService,
    private commentService: CommentService
  ) {
    this.dataService.initData();
    this.data = this.dataService.matchedData;
  }

  submitComment(postIndex: number) {
    let commentText = this.commentInput;

    this.commentService.comment.push({
      text: commentText,
      postIndex: postIndex,
    });

    this.commentService.saveComment();
  }
}
