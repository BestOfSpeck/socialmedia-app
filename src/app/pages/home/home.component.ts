import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
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
        this.loadPostData();
      },
    } as Observer<any>);
  }

  loadPostData() {
    console.log('finish');
  }
}
