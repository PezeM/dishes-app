import { InputFormat } from '../constants/dishInputFields';
import { ValidatorType } from '../helpers/inputFieldValidators';
import React from 'react';

export interface FormInputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  parser?: InputFormat;
  validator?: ValidatorType;
  leftInputElement?: React.ReactNode;

  [prop: string]: any;
}
