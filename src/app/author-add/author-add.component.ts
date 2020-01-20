import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthorsService} from '../authors.service';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.less'],
  providers: [DatePipe]
})
export class AuthorAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private  as: AuthorsService, private router: Router, private datePipe: DatePipe) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      AuthorName: ['', Validators.required ],
      AuthorNationality: ['', Validators.required ],
      AuthorBirthDate: [this.datePipe.transform(new Date(), 'medium')]
    });
  }
  addAuthors(AuthorName, AuthorNationality, AuthorBirthDate) {
    this.as.addAuthor(AuthorName, AuthorNationality, AuthorBirthDate);
    this.router.navigate(['authors']);
  }

  ngOnInit() {
  }
}
