import React from 'react';
import { useField } from 'react-final-form';
import { Control } from './Control';
import { FormLabel, Select } from '@chakra-ui/react';
import { FormError } from '../FormError';
import { FormInputProps } from '../../types/inputs';

interface Props extends Omit<FormInputProps, 'validator' | 'type' | 'leftInputElement'> {
  children: React.ReactNode;
}

export const SelectInputControl = ({
  name,
  label,
  validator,
  children,
  placeholder,
  ...props
}: Props) => {
  const { input, meta } = useField(name, {
    validate: validator,
  });

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
