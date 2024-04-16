import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { FollowerPostsComponent } from './pages/follower-posts/follower-posts.component';
import { LikedPostsComponent } from './pages/liked-posts/liked-posts.component';
import { SavedPostsComponent } from './pages/saved-posts/saved-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { AllUserComponent } from './pages/all-user/all-user.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    FollowerPostsComponent,
    LikedPostsComponent,
    SavedPostsComponent,
    AllUserComponent,
    CommentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
