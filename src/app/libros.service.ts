import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  uri = 'http://localhost:4000/libros';

  constructor(private http: HttpClient) { }
 // Recibe el nombre del libro , editorial, idioma , descripcion y autor y registra un nuevo record en la base de datos
  addLibro(LibroName, LibroEditorial, LibroIdiom, LibroDescription, LibroAuthor) {
    const obj = {
      LibroName,
      LibroEditorial,
      LibroIdiom,
      LibroDescription,
      LibroAuthor
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
  // Devuelve todos los libros en la base de datos
  getLibros() {
    return this
      .http
      .get(`${this.uri}`);
  }
  // Devuelve la vista con el form de edit con todos los datos del libro segun su ID
  editLibro(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }
  // Recibe nombre , editorial, autor, idioma , descripcion y el ID del libro y actualiza el record segun los cambios hechos por el usuario
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
  // Elimina un record en la base datos segun el ID del elemento seleccionado
  deleteLibro(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}
