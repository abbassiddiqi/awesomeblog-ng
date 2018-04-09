import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './components/posts/posts.component';
import { PostAddComponent } from './components/post-add/post-add.component';
import { PostShowComponent } from './components/post-show/post-show.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/new',
    component: PostAddComponent
  },
  {
    path: 'posts/:id',
    component: PostShowComponent
  },
  {
    path: 'posts/:id/edit',
    component: PostAddComponent
  },
  {
    path: '',
    component: PostsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
