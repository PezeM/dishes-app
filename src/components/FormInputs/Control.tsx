import React from 'react';
import { useField } from 'react-final-form';
import { FormControl } from '@chakra-ui/react';

interface Props {
  name: string;
  children: React.ReactNode;

  [prop: string]: any;
}

export const Control = ({ name, ...props }: Props) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } });

  return <FormControl {...props} isInvalid={error && touched} />;
};