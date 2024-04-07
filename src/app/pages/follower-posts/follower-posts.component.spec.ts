import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerPostsComponent } from './follower-posts.component';

describe('FollowerPostsComponent', () => {
  let component: FollowerPostsComponent;
  let fixture: ComponentFixture<FollowerPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FollowerPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FollowerPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
