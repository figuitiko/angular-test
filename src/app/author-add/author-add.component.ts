import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.less']
})
export class AuthorAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      AuthorName: ['', Validators.required ],
      AuthorNationality: ['', Validators.required ],
      AuthorBirthDate: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }
}
