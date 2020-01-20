import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroAddComponent } from './libro-add/libro-add.component';
import { LibroGetComponent } from './libro-get/libro-get.component';
import { LibroEditComponent } from './libro-edit/libro-edit.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LibrosService} from './libros.service';
import { AuthorAddComponent } from './author-add/author-add.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorGetComponent } from './author-get/author-get.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroAddComponent,
    LibroGetComponent,
    LibroEditComponent,
    AuthorAddComponent,
    AuthorEditComponent,
    AuthorGetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
