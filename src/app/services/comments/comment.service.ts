import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  comment: any = [];

  constructor() {}

  saveComment() {
    let commentJSON = JSON.stringify(this.comment);
    localStorage.setItem('comment', commentJSON);
  }
}
