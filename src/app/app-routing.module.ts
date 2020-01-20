
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibroAddComponent } from './libro-add/libro-add.component';
import { LibroEditComponent } from './libro-edit/libro-edit.component';
import { LibroGetComponent } from './libro-get/libro-get.component';
import {AuthorAddComponent} from './author-add/author-add.component';
import {AuthorEditComponent} from './author-edit/author-edit.component';
import {AuthorGetComponent} from './author-get/author-get.component';

const routes: Routes = [
  {
    path: 'libro/create',
    component: LibroAddComponent
  },
  {
    path: 'libro/edit/:id',
    component: LibroEditComponent
  },
  {
    path: 'libros',
    component: LibroGetComponent
  },
  {
    path: 'author/create',
    component: AuthorAddComponent
  },
  {
    path: 'author/edit/:id',
    component: AuthorEditComponent
  },
  {
    path: 'authors',
    component: AuthorGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
