import { FormsDataModel } from '../models/formsDataModel';

export class AddData {
  static readonly type = '[FORM] Add';
  
  constructor(public payload: FormsDataModel) {
  }
}
