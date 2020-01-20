import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {LibrosService} from '../libros.service';
import {Router} from '@angular/router';
import Author from '../Author';
import {AuthorsService} from '../authors.service';

@Component({
  selector: 'app-libro-add',
  templateUrl: './libro-add.component.html',
  styleUrls: ['./libro-add.component.less']
})
export class LibroAddComponent implements OnInit {

  LibroName: string;
  LibroEditorial: string;
  LibroIdiom: string;
  LibroDescription: string;
  LibroAuthorId: number;
  angForm: FormGroup;
  authors: Author[];

  constructor(private fb: FormBuilder, private ls: LibrosService, private router: Router, private as: AuthorsService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      LibroName: ['', Validators.required ],
      LibroEditorial: ['', Validators.required ],
      LibroIdiom: ['', Validators.required ],
      LibroDescription: ['', Validators.required ],
    });
  }
  addBook(LibroName, LibroEditorial, LibroIdiom, LibroDescription, LibroAuthor) {

    this.ls.addLibro(LibroName, LibroEditorial, LibroIdiom, LibroDescription, LibroAuthor);
   // this.router.navigate(['libros']);
  }

  ngOnInit() {
    this.as
      .getAuthors()
      .subscribe((data: Author[]) => {
        this.authors = data;
      });
  }

}




