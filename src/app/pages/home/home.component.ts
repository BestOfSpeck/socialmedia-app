import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private dataService: DataService) {
    this.dataService.initData();
    this.data = this.dataService.matchedData;
  }

  data: any;
}
