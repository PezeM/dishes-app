import { InputFormat } from '../constants/dishInputFields';
import { ValidatorType } from '../helpers/inputFieldValidators';

export interface FormInputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  parser?: InputFormat;
  validator?: ValidatorType;

  [prop: string]: any;
}
