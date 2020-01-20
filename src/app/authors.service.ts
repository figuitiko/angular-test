import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  uri = 'http://localhost:4000/authors';
  constructor(private http: HttpClient) { }
 // metodo recibe nombre del autor , nacionalidad, fecha de nacimiento
  // registra una nueva tupla en la base de datos
  addAuthor(AuthorName, AuthorNationality, AuthorBirthDate) {
    const obj = {
      AuthorName,
      AuthorNationality,
      AuthorBirthDate
    };
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
  // Devuelve la vista con el form de edit con todos los datos del libro segun su ID
  editAuthor(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

   // recibe nombre del autor, nacionalidad  y fecha de nacimiento
   // modifica en la base de datos los cambios efectuados por el usuario
  updateAuthor(AuthorName, AuthorNationality, AuthorBirthDate, id) {
    const obj = {
      AuthorName,
      AuthorNationality,
      AuthorBirthDate
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  // devuelve la lista de autores registrados en la base de datos
  getAuthors() {
    return this
      .http
      .get(`${this.uri}`);
  }
  // Elimina un record en la base de datos recibiendo su id
  deleteAuthor(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}
