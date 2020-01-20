import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LibrosService} from '../libros.service';

@Component({
  selector: 'app-libro-edit',
  templateUrl: './libro-edit.component.html',
  styleUrls: ['./libro-edit.component.less']
})
export class LibroEditComponent implements OnInit {

  angForm: FormGroup;
  libro: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ls: LibrosService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      LibroName: ['', Validators.required ],
      LibroEditorial: ['', Validators.required ],
      LibroIdiom: ['', Validators.required ],
      LibroAuthor: ['', Validators.required ],
      LibroDescription: ['', Validators.required ],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ls.editLibro(params['id']).subscribe(res => {
        this.libro = res;
      });
    });
  }

  updateLibro(LibroName, LibroEditorial, LibroIdiom, LibroAuthor, LibroDescription) {
    this.route.params.subscribe(params => {
      this.ls.updateLibro(LibroName, LibroEditorial, LibroIdiom, LibroAuthor, LibroDescription,  params.id);
      this.router.navigate(['libros']);
    });
  }

}
