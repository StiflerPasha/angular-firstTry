import { FormsDataModel } from '../models/formsData.model';

export class AddData {
  static readonly type = '[FORM] Add';
  
  constructor(public payload: FormsDataModel) {
  }
}
