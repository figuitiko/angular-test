import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthorsService } from './authors.service';

describe('AuthorsService', () => {
  let authorService: AuthorsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AuthorsService
      ],
    });

    authorService = TestBed.get(AuthorsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`should fetch author as an Observable`, async(inject([HttpTestingController, AuthorsService],
    (httpClient: HttpTestingController, authorService: AuthorsService) => {

      const authorsItem = [
        {
          'AuthorName': 'frank',
          "AuthorNationality": "CUba",
          "AuthorBirthDate": "12-12-1990"

        },
        {
          "AuthorName": "bibi",
          "AuthorNationality": "Mex",
          "AuthorBirthDate": "12-12-1990"
        },
        {
          "AuthorName": "lolo",
          "AuthorNationality": "CUba",
          "AuthorBirthDate": "12-12-1990"
        }
      ];


      AuthorsService.getAuthors()
        .subscribe((authors: any) => {
          expect(authors.length).toBe(3);
        });

      let req = httpMock.expectOne('http://localhost:4000/authors');
      expect(req.request.method).toBe("GET");

      req.flush(authorsItem);
      httpMock.verify();

    })));
  it(`should set author as an Observable`, async(inject([HttpTestingController, AuthorsService],
    (httpClient: HttpTestingController, authorService: AuthorsService) => {


      const authorsItem = {
          'AuthorName': 'frank',
          "AuthorNationality": "CUba",
          "AuthorBirthDate": "12-12-1990"

        };

      authorService.addAuthor(authorsItem.AuthorName, authorsItem.AuthorNationality, authorsItem.AuthorBirthDate ).subscribe((data: any) => {
        expect(data.AuthorName).toBe('frank');
      });

      let req = httpMock.expectOne('http://localhost:4000/authors/add');
      expect(req.request.method).toBe("POST");

      req.flush(authorsItem);
      httpMock.verify();

    })));
  it(`should set author as an Observable`, async(inject([HttpTestingController, AuthorsService],
    (httpClient: HttpTestingController, authorService: AuthorsService) => {


      const authorsItem = {
        'id': '5e254a43efa81f7c202be979',
        'AuthorName': 'frank',
        "AuthorNationality": "CUba",
        "AuthorBirthDate": "12-12-1990"

      };

      authorService.updateAuthor(authorsItem.AuthorName, authorsItem.AuthorNationality, authorsItem.AuthorBirthDate, authorsItem.id).subscribe((data: any) => {
        expect(data.AuthorName).toBe('frank');
      });

      let req = httpMock.expectOne(`http://localhost:4000/authors/update/${authorsItem.id}`);
      expect(req.request.method).toBe("PUT");

      req.flush(authorsItem);
      httpMock.verify();

    })));
  it(`should set author as an Observable`, async(inject([HttpTestingController, AuthorsService],
    (httpClient: HttpTestingController, authorService: AuthorsService) => {


      const authorsItem = {
        'id': '5e254a43efa81f7c202be979',
        'AuthorName': 'frank',
        "AuthorNationality": "CUba",
        "AuthorBirthDate": "12-12-1990"

      };

      authorService.deleteAuthor( authorsItem.id).subscribe((data: any) => {
        expect(data.AuthorName).toBe('frank');
      });

      let req = httpMock.expectOne(`http://localhost:4000/authors/delete/${authorsItem.id}`);
      expect(req.request.method).toBe("DELETE");

      req.flush(authorsItem);
      httpMock.verify();

    })));
});
