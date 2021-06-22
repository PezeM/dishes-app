import { formatFloat, formatInt } from '../helpers/inputFieldFormatters';
import {
  validateMinMaxFloatValue,
  validateMinMaxIntValue,
  ValidatorType,
} from '../helpers/inputFieldValidators';
import React from 'react';
import { InputLeftElement } from '@chakra-ui/react';
import { PizzaSliceIcon, CircleIcon, ScaleIcon } from '../components/Icons';

export type Dishes = 'pizza' | 'sandwich' | 'soup';
export type InputFormat = (value: any, name: string) => any;

export interface DishInputFieldInterface {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  parser?: InputFormat;
  validator?: ValidatorType;
  leftInputElement?: React.ReactNode;
}

export const extraDishInputFields: Record<Dishes, DishInputFieldInterface[]> = {
  pizza: [
    {
      name: 'no_of_slices',
      type: 'number',
      label: 'Number of pizza slices',
      placeholder: '1',
      leftInputElement: (
        <InputLeftElement pointerEvents={'none'} children={<PizzaSliceIcon color="gray.400" />} />
      ),
      parser: formatInt,
      validator: validateMinMaxIntValue(1, 99, 'Enter a valid number of slices between 1 and 99'),
    },
    {
      name: 'diameter',
      type: 'number',
      label: 'Diameter (in cm)',
      placeholder: '22',
      leftInputElement: (
        <InputLeftElement pointerEvents={'none'} children={<CircleIcon color="gray.400" />} />
      ),
      parser: formatFloat,
      validator: validateMinMaxFloatValue(
        10.0,
        40.0,
        'Enter a valid diameter size between 10.0 and 40.0',
      ),
    },
  ],
  sandwich: [
    {
      name: 'slices_of_bread',
      type: 'number',
      label: 'Number of bread slices',
      placeholder: '1',
      leftInputElement: (
        <InputLeftElement pointerEvents={'none'} children={<PizzaSliceIcon color="gray.400" />} />
      ),
      parser: formatInt,
      validator: validateMinMaxIntValue(1, 99, 'Enter a valid number of slices between 1 and 99'),
    },
  ],
  soup: [
    {
      name: 'spiciness_scale',
      type: 'number',
      label: 'Scale of spiciness (1-10)',
      placeholder: '1',
      leftInputElement: (
        <InputLeftElement pointerEvents={'none'} children={<ScaleIcon color="gray.400" />} />
      ),
      parser: formatInt,
      validator: validateMinMaxIntValue(
        1,
        10,
        'Enter a valid scale of spiciness between 1 and 10',
      ),
    },
  ],
};
