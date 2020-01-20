import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthorsService} from '../authors.service';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.less']
})
export class AuthorEditComponent implements OnInit {

  angForm: FormGroup;
  author: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private as: AuthorsService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      AuthorName: ['', Validators.required ],
      AuthorNationality: ['', Validators.required ],
      AuthorBirthDate: ['', Validators.required ],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.as.editAuthor(params['id']).subscribe(res => {
        this.author = res;
      });
    });
  }
  updateAuthor(AuthorName, AuthorNationality, AuthorBirthDate) {
    this.route.params.subscribe(params => {
      this.as.updateAuthor(AuthorName, AuthorNationality, AuthorBirthDate,  params.id);
      this.router.navigate(['authors']);
    });
  }

}
