import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { FormsDataModel } from '../models/formsData.model';
import { AddData } from '../actions/form.actions';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  
  dataFromRoute: FormsDataModel;
  angForm: FormGroup;
  submitted = false;
  themes: string[] = ['Тема 1', 'Тема 2', 'Тема 3', 'Тема 4'];
  
  
  constructor(private fb: FormBuilder,
              private store: Store,
              private router: Router) {
  }
  
  ngOnInit(): void {
    this.dataFromRoute = history.state.hasOwnProperty('data')
      ? history.state.data[0]
      : {};
    
    this.createForm();
  }
  
  createForm() {
    this.angForm = this.fb.group({
      name: [this.dataFromRoute.name || '', [
        Validators.required,
        Validators.minLength(2)]
      ],
      email: [this.dataFromRoute.email || '', [
        Validators.required,
        Validators.email]
      ],
      theme: [this.dataFromRoute.theme || '', [
        Validators.required]
      ],
      message: ['']
    });
  }
  
  get f() {
    return this.angForm.controls;
  }
  
  onClickSubmit(email, name, theme) {
    this.submitted = true;
    
    if (this.angForm.invalid) {
      return;
    }
    
    const data = {name, email, theme};
    this.store.dispatch(new AddData(data));
    this.router.navigateByUrl('');
    
  }
  
  onClickReset() {
    this.submitted = false;
    this.angForm.reset();
  }
}
