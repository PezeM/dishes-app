import { formatFloat, formatInt } from '../inputFieldFormatters';

export type Dishes = 'pizza' | 'sandwich' | 'soup';
export type InputFormat = (value: any, name: string) => any;

export interface DishInputFieldInterface {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  format?: InputFormat;
}

export const extraDishInputFields: Record<Dishes, DishInputFieldInterface[]> = {
  pizza: [
    {
      name: 'no_of_slices',
      type: 'number',
      label: 'Number of pizza slices',
      placeholder: '0',
      format: formatInt,
    },
    {
      name: 'diameter',
      type: 'text',
      label: 'Diameter (in cm)',
      placeholder: '22',
      format: formatFloat,
    },
  ],
  sandwich: [
    {
      name: 'slices_of_bread',
      type: 'number',
      label: 'Number of bread slices',
      placeholder: '0',
      format: formatInt,
    },
  ],
  soup: [
    {
      name: 'spiciness_scale',
      type: 'number',
      label: 'Scale of spiciness (1-10)',
      placeholder: '0',
      format: formatInt,
    },
  ],
};
