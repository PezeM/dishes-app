import React from 'react';
import { FormErrorMessage } from '@chakra-ui/react';
import { useField } from 'react-final-form';
import { WarningIcon } from '@chakra-ui/icons';

interface Props {
  name: string;
}

export const FormError = ({ name }: Props) => {
  const {
    meta: { error },
  } = useField(name, {
    subscription: {
      error: true,
    },
  });

  return (
    <FormErrorMessage>
      <WarningIcon mr={1} /> {error}
    </FormErrorMessage>
  );
};
