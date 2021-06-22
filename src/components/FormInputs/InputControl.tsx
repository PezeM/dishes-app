import React from 'react';
import { Control } from './Control';
import { FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FormError } from '../FormError';
import { useField } from 'react-final-form';
import { FormInputProps } from '../../types/inputs';
import { CheckIcon } from '@chakra-ui/icons';

export const InputControl = ({
  name,
  label,
  placeholder,
  parser,
  validator,
  leftInputElement,
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
      <InputGroup>
        {leftInputElement}
        <Input
          {...input}
          isInvalid={meta.error && meta.touched}
          id={name}
          placeholder={placeholder}
          type={type}
          value={input.value || ''} // https://github.com/final-form/react-final-form/issues/529#issuecomment-548915527
        />
        {!meta.error && meta.touched && (
          <InputRightElement children={<CheckIcon color="green.400" />} />
        )}
      </InputGroup>

      <FormError name={name} />
    </Control>
  );
};
