import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SavedPostsComponent } from './pages/saved-posts/saved-posts.component';
import { LikedPostsComponent } from './pages/liked-posts/liked-posts.component';
import { FollowerPostsComponent } from './pages/follower-posts/follower-posts.component';
import { AllUserComponent } from './pages/all-user/all-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'savedPosts', component: SavedPostsComponent },
  { path: 'likedPosts', component: LikedPostsComponent },
  { path: 'followerPosts', component: FollowerPostsComponent },
  { path: 'allUser', component: AllUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
