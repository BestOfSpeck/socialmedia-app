import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrl: './all-user.component.scss',
})
export class AllUserComponent implements OnInit {
  private url = `https://6612573e95fdb62f24ee7584.mockapi.io/`;
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUsers(this.url + 'users').subscribe({
      next: (result: any) => {
        this.data = result;
        console.log(this.data);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Data is ready');
      },
    } as Observer<any>);
  }
}
