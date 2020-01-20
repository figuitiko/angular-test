import { Component, OnInit } from '@angular/core';
import Author from '../Author';
import {AuthorsService} from '../authors.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-author-get',
  templateUrl: './author-get.component.html',
  styleUrls: ['./author-get.component.less']
})
export class AuthorGetComponent implements OnInit {

  authors: Author[];
  constructor(private  as: AuthorsService, private router: Router) { }

  ngOnInit() {
    this.as
      .getAuthors()
      .subscribe((data: Author[]) => {
        this.authors = data;
      });
  }
  deleteAuthor(id, ind) {
    this.as.deleteAuthor(id).subscribe(res => {
      this.authors.splice(ind, 1);
    });
  }

}
