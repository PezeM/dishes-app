import React from 'react';
import { FormErrorMessage } from '@chakra-ui/react';
import { useField } from 'react-final-form';

interface Props {
  name: string
}

export const FormError = ({ name }: Props) => {
  const { meta: { error } } = useField(name, {
    subscription: {
      error: true,
    },
  });

  return <FormErrorMessage>{error}</FormErrorMessage>;
};