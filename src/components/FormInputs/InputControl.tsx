import React from 'react';
import { Control } from './Control';
import { FormLabel, Input } from '@chakra-ui/react';
import { FormError } from '../FormError';
import { useField } from 'react-final-form';
import { FormInputProps } from '../../types/inputs';

export const InputControl = ({
  name,
  label,
  placeholder,
  parser,
  validator,
  type = 'text',
  ...props
}: FormInputProps) => {
  const { input, meta } = useField(name, {
    parse: parser,
    validate: validator,
  });
  placeholder = placeholder ? placeholder : label;

  return (
    <Control name={name} {...props}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        {...input}
        isInvalid={meta.error && meta.touched}
        id={name}
        placeholder={placeholder}
        type={type}
        value={input.value || ''} // https://github.com/final-form/react-final-form/issues/529#issuecomment-548915527
      />
      <FormError name={name} />
    </Control>
  );
};
