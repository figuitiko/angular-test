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
}
