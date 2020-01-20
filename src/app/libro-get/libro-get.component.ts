import { Component, OnInit } from '@angular/core';
import Libro from '../Libro';
import {LibrosService} from '../libros.service';

@Component({
  selector: 'app-libro-get',
  templateUrl: './libro-get.component.html',
  styleUrls: ['./libro-get.component.less']
})
export class LibroGetComponent implements OnInit {

  libros: Libro[];
  constructor(private ls: LibrosService) { }

  ngOnInit() {
    this.ls
      .getLibros()
      .subscribe((data: Libro[]) => {
        this.libros = data;
      });
  }
  deleteLibro(id) {
    this.ls.deleteLibro(id).subscribe(res => {
      this.libros.splice(id, 1);
    });
  }
}
