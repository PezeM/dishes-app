import React from 'react';
import { Control } from './Control';
import { FormLabel, Input } from '@chakra-ui/react';
import { FormError } from './FormError';
import { useField } from 'react-final-form';
import { InputFormat } from '../../constants/dishInputFields';

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  format?: InputFormat;

  [prop: string]: any;
}

export const InputControl = ({
  name,
  label,
  placeholder,
  format,
  type = 'text',
  ...props
}: Props) => {
  const { input, meta } = useField(name, { format: format });
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
