import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent implements OnInit {
  @Input() postData: any;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.postData.id);
  }
}
