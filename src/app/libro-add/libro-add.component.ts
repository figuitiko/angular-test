import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {LibrosService} from '../libros.service';

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
  LibroAuthor
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private ls: LibrosService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      LibroName: ['', Validators.required ],
      LibroEditorial: ['', Validators.required ],
      LibroIdiom: ['', Validators.required ],
      LibroAuthor: ['', Validators.required],
      LibroDescription: ['', Validators.required ]
    });
  }
  addBook(LibroName, LibroEditorial, LibroIdiom, LibroDescription, LibroAuthor) {
    this.ls.addLibro(LibroName, LibroEditorial, LibroIdiom, LibroDescription, LibroAuthor);
  }

  ngOnInit() {
  }

}




