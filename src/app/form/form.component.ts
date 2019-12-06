import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddData } from '../actions/form.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  angForm: FormGroup;
  themes: string[] = ['Тема 1', 'Тема 2', 'Тема 3', 'Тема 4'];
  
  constructor(private fb: FormBuilder,
              private store: Store,
              private router: Router) {
    this.createForm();
  }
  
  createForm() {
    this.angForm = this.fb.group({
      name: [''],
      email: [''],
      theme: [''],
      message: ['']
    });
  }
  
  onClickSubmit(email, name, theme, msg) {
    const data = {name, email, theme};
    this.store.dispatch(new AddData(data));
    this.router.navigate(['']);
  }
  
  onClickReset() {
    this.angForm.reset();
  }
}
