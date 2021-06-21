import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { DishForm } from './DishForm';

export const DishFormContainer = () => {
  return (
    <Box
      align={'center'}
      p={2}
      m={'auto auto'}
      width={'full'}
      maxWidth={'500px'}
      boxShadow={'lg'}
      minHeight={'200px'}
      borderRadius={4}
      borderWidth={1}
    >
      <Heading>Dish form</Heading>
      <DishForm />
    </Box>
  );
};