import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  uri = 'http://localhost:4000/libros';

  constructor(private http: HttpClient) { }

  addLibro(LibroName, LibroEditorial, LibroIdiom, LibroAuthor, LibroDescription) {
    const obj = {
      LibroName,
      LibroEditorial,
      LibroIdiom,
      LibroAuthor,
      LibroDescription,
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
  getLibros() {
    return this
      .http
      .get(`${this.uri}`);
  }
  editLibro(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }
  updateLibro(LibroName, LibroEditorial, LibroIdiom, LibroAuthor, LibroDescription, id) {
    const obj = {
      LibroName,
      LibroEditorial,
      LibroIdiom,
      LibroAuthor,
      LibroDescription

    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteLibro(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}
