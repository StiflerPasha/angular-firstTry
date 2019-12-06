import { State, Action, StateContext, Selector } from '@ngxs/store';
import { FormsDataModel } from '../models/formsDataModel';
import { AddData } from '../actions/form.actions';

export class FormStateModel {
  formsData: FormsDataModel;
}

@State<FormStateModel>({
  name: 'FormState',
  defaults: {
    formsData: {name: '', theme: '', email: ''}
  }
})

export class FormState {
  
  @Selector()
  static getData(state: FormStateModel) {
    return state.formsData;
  }
  
  @Action(AddData)
  add({getState, patchState}: StateContext<FormStateModel>, {payload}: AddData) {
    const state = getState();
    patchState({
      formsData: {...state.formsData, ...payload}
    });
  }
}
