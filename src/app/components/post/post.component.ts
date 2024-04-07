import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  private url = `https://6612573e95fdb62f24ee7584.mockapi.io/`;
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUsers(this.url + 'posts').subscribe({
      next: (result: any) => {
        console.log('Data:', result);
        this.data = result;
      },
      error: (error) => {
        console.error('Fehler:', error);
      },
      complete: () => {
        console.log('Observable finish');
      },
    } as Observer<any>);
  }
}
