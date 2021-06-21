import React from 'react';
import { Control } from './Control';
import { FormLabel, Input } from '@chakra-ui/react';
import { FormError } from './FormError';
import { useField } from 'react-final-form';

interface Props {
  name: string;
  label: string;
  placeholder?: string;

  [prop: string]: any;
}

export const InputControl = ({ name, label, placeholder, ...props }: Props) => {
  const { input, meta } = useField(name);
  placeholder = placeholder ? placeholder : label;

  return (
    <Control name={name} {...props}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        {...input}
        isInvalid={meta.error && meta.touched}
        id={name}
        placeholder={placeholder}
      />
      <FormError name={name} />
    </Control>
  );
};