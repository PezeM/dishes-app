import React from 'react';
import { useField } from 'react-final-form';
import { Control } from './Control';
import { FormLabel, Select } from '@chakra-ui/react';
import { FormError } from './FormError';

interface Props {
  name: string;
  label: string;
  children: React.ReactNode;
  placeholder?: string;

  [prop: string]: any;
}

export const SelectInputControl = ({ name, label, children, placeholder, ...props }: Props) => {
  const { input, meta } = useField(name);
  placeholder = placeholder ? placeholder : label;

  return (
    <Control name={name} {...props}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Select placeholder={placeholder} id={name} {...input} isInvalid={meta.error && meta.touched}>
        {children}
      </Select>
      <FormError name={name} />
    </Control>
  );
};