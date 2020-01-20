import { Component, OnInit } from '@angular/core';
import Libro from '../Libro';
import {LibrosService} from '../libros.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-libro-get',
  templateUrl: './libro-get.component.html',
  styleUrls: ['./libro-get.component.less']
})
export class LibroGetComponent implements OnInit {

  libros: Libro[];
  constructor(private ls: LibrosService, private router: Router) { }

  ngOnInit() {
    this.ls
      .getLibros()
      .subscribe((data: Libro[]) => {
        this.libros = data;
      });
  }
  deleteLibro(id, ind) {
    this.ls.deleteLibro(id).subscribe(res => {
      this.libros.splice(ind, 1);

    });
  }
}
