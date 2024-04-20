import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {
  @Input() postData: any;

  data: any;
  commentData: any;

  constructor() {
    this.data = this.postData;
    console.log(this.data.post.text);
  }
}
