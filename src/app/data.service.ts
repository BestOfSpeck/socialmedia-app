import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  private url = `https://6612573e95fdb62f24ee7584.mockapi.io/`;

  postdata: any;
  userdata: any;
  matchedData: any[] = [];

  initData() {
    this.loadPostData();
    this.loadUserData();
    this.matchData();
  }

  getUsers(url: string): Observable<any> {
    return this.http.get(url);
  }

  matchData() {
    if (this.postdata && this.userdata) {
      this.matchedData = [];
      this.postdata.forEach((post: any) => {
        const matchedUser = this.userdata.find(
          (user: any) => user.id === post.userId
        );
        if (matchedUser) {
          this.matchedData.push({ post, user: matchedUser });
        }
      });
      console.log('Matched Data:', this.matchedData);
    }
  }

  loadPostData() {
    this.getUsers(this.url + 'posts').subscribe({
      next: (result: any) => {
        console.log('PostData:', result);
        this.postdata = result;
      },
      error: (error) => {
        console.error('Fehler:', error);
      },
      complete: () => {},
    });
  }
  loadUserData() {
    this.getUsers(this.url + 'users').subscribe({
      next: (result: any) => {
        console.log('UserData:', result);
        this.userdata = result;
      },
      error: (error) => {
        console.error('Fehler:', error);
      },
      complete: () => {},
    });
  }
}
