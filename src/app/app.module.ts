import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';

import { PostsService } from './services/posts.service';
import { CommentsService } from './services/comments.service';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostAddComponent } from './components/post-add/post-add.component';
import { PostShowComponent } from './components/post-show/post-show.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentShowComponent } from './components/comment-show/comment-show.component';
import { CommentAddComponent } from './components/comment-add/comment-add.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    PostAddComponent,
    PostShowComponent,
    CommentsComponent,
    CommentShowComponent,
    CommentAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    PostsService,
    CommentsService,
    Location
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
