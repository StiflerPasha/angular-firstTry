import { Component } from '@angular/core';

import { Store, Select } from '@ngxs/store';
import { FormsDataModel } from '../models/formsData.model';
import { FormState } from '../state/form.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  
  @Select(FormState.getData)
  formData$: Observable<FormsDataModel>;
  
  @Select(FormState.hasData)
  hasData$: Observable<boolean>;
  
  constructor(private store: Store) {
    //this.formData$ = this.store.select(state => state.formsData.formsData);
  }
}
