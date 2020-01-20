import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LibrosService } from './libros.service';

describe('LibrosService', () => {
  let librosService: LibrosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        librosService
      ],
    });

    librosService = TestBed.get(librosService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`should fetch libro as an Observable`, async(inject([HttpTestingController, LibrosService],
    (httpClient: HttpTestingController, librosService: LibrosService) => {

      const LibrosItems = [
        {
          'LibroName': 'el buen libro',
          "LibroEditorial": "gente buena",
          "LibroIdiom": "english",
          "LibroDescription":"el buen libro",
          "LibroAuthor":"frank"

        },
        {
          'LibroName': 'el buen libro',
          "LibroEditorial": "gente buena",
          "LibroIdiom": "english",
          "LibroDescription":"el buen libro",
          "LibroAuthor":"frank"
        },
        {
          'LibroName': 'el buen libro',
          "LibroEditorial": "gente buena",
          "LibroIdiom": "english",
          "LibroDescription":"el buen libro",
          "LibroAuthor":"frank"
        }
      ];


      librosService.getLibros()
        .subscribe((libros: any) => {
          expect(libros.length).toBe(3);
        });

      let req = httpMock.expectOne('http://localhost:4000/libros');
      expect(req.request.method).toBe("GET");

      req.flush(LibrosItems);
      httpMock.verify();

    })));
  it(`should set libro as an Observable`, async(inject([HttpTestingController, LibrosService],
    (httpClient: HttpTestingController, librosService: LibrosService) => {


      const librosItem = {
        'LibroName': 'el buen libro',
        "LibroEditorial": "gente buena",
        "LibroIdiom": "english",
        "LibroDescription":"el buen libro",
        "LibroAuthor":"frank"
      };

      librosService.addLibro(librosItem.LibroName, librosItem.LibroEditorial, librosItem.LibroIdiom, librosItem.LibroDescription, librosItem.LibroAuthor).subscribe((data: any) => {
        expect(data.LibroName).toBe('el buen libro');
      });

      let req = httpMock.expectOne('http://localhost:4000/libros/add');
      expect(req.request.method).toBe("POST");

      req.flush(librosItem);
      httpMock.verify();

    })));
  it(`should set libro as an Observable`, async(inject([HttpTestingController, LibrosService],
    (httpClient: HttpTestingController, librosService: LibrosService) => {


      const librosItem = {
        'id': '5e254a54efa81f7c202be97a',
        'LibroName': 'el buen libro',
        "LibroEditorial": "gente buena",
        "LibroIdiom": "english",
        "LibroDescription":"el buen libro",
        "LibroAuthor":"frank"

      };

      librosService.updateLibro(librosItem.LibroName, librosItem.LibroEditorial, librosItem.LibroEditorial, librosItem.LibroIdiom, librosItem.LibroDescription, librosItem.LibroAuthor, librosItem.id).subscribe((data: any) => {
        expect(data.LibroName).toBe('el buen libro');
      });

      let req = httpMock.expectOne(`http://localhost:4000/libros/update/${librosItem.id}`);
      expect(req.request.method).toBe("PUT");

      req.flush(librosItem);
      httpMock.verify();

    })));
  it(`should set libro as an Observable`, async(inject([HttpTestingController, LibrosService],
    (httpClient: HttpTestingController, librosService: LibrosService) => {


      const librosItem = {
        'id': '5e254a54efa81f7c202be97a',
        'LibroName': 'el buen libro',
        "LibroEditorial": "gente buena",
        "LibroIdiom": "english",
        "LibroDescription":"el buen libro",
        "LibroAuthor":"frank"

      };

      librosService.deleteLibro( librosItem.id).subscribe((data: any) => {
        expect(data.LibroName).toBe('frank');
      });

      let req = httpMock.expectOne(`http://localhost:4000/libros/delete/${librosItem.id}`);
      expect(req.request.method).toBe("DELETE");

      req.flush(librosItem);
      httpMock.verify();

    })));
});
