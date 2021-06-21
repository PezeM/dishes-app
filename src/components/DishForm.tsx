import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { Form } from 'react-final-form';
import { InputControl } from './FormInputs/InputControl';
import { SelectInputControl } from './FormInputs/SelectInputControl';

export const DishForm = () => {
  const onSubmit = (e: any) => {
    console.log('onSubmit', e);
  };

  const onDishTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit} render={({
                                         handleSubmit,
                                         form,
                                         errors,
                                         submitting,
                                         pristine,
                                         values,
                                       }) => (
      <Box mt={8} mb={2} textAlign='left' as='form' onSubmit={handleSubmit}>
        <InputControl name={'name'} label={'Dish name'} placeholder={'Enter dish name'} isRequired />
        <InputControl name={'preparation_time'} label={'Preparation time'} placeholder={'00:00:00'} isRequired mt={4} />

        <SelectInputControl mt={4} name={'dish'} label={'Type'} placeholder={'Select dish type'} onChange={onDishTypeChange}>
          <option value='pizza'>🍕 Pizza</option>
          <option value='soup'>🥣 Soup</option>
          <option value='sandwich'>🥪 Sandwich</option>
        </SelectInputControl>

        <Button width='full' type='submit' mt={4}>Submit</Button>
      </Box>
    )} />
  );
};