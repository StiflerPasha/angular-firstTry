import { State, Action, StateContext, Selector } from '@ngxs/store';
import { FormsDataModel } from '../models/formsData.model';
import { AddData } from '../actions/form.actions';

export class FormStateModel {
  formsData: FormsDataModel[];
  hasData: boolean;
}

@State<FormStateModel>({
  name: 'formsData',
  defaults: {
    formsData: [],
    hasData: false
  }
})

export class FormState {
  
  @Selector()
  static getData(state: FormStateModel) {
    return state.formsData;
  }
  
  @Selector()
  static hasData(state: FormStateModel) {
    return state.hasData;
  }
  
  @Action(AddData)
  add({patchState}: StateContext<FormStateModel>, {payload}: AddData) {
    patchState({
      formsData: [payload],
      hasData: true
    });
  }
}
