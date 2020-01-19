
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibroAddComponent } from './libro-add/libro-add.component';
import { LibroEditComponent } from './libro-edit/libro-edit.component';
import { LibroGetComponent } from './libro-get/libro-get.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
