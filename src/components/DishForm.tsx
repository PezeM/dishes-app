import { Box, Button, InputLeftElement, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Form } from 'react-final-form';
import { InputControl } from './FormInputs/InputControl';
import { SelectInputControl } from './FormInputs/SelectInputControl';
import {
  Dishes,
  DishInputFieldInterface,
  extraDishInputFields,
} from '../constants/dishInputFields';
import { validateRegex, validateIsRequired } from '../helpers/inputFieldValidators';
import { formatTimeField } from '../helpers/inputFieldFormatters';
import { postFetch } from '../constants/api';
import { FormApi } from 'final-form';
import { InputFieldIcon } from './Icons';
import { TimeIcon } from '@chakra-ui/icons';

export const DishForm = () => {
  const [extraFormInputs, setExtraFormInputs] = useState<DishInputFieldInterface[] | undefined>();
  const toast = useToast();

  const onSubmit = async (values: Object, form: FormApi) => {
    try {
      const response = await postFetch('dishes', values);
      const data = await response.json();

      if (!response.ok) {
        const error = data ? data : response.status;
        console.log('error', error);
        toast({
          title: 'Error',
          description: `Error creating dish: ${error.type ? error.type : error}`,
          status: 'error',
          duration: 5000,
        });
        return;
      }

      toast({
        title: 'Dish created',
        description: 'Dish has been successfully created!',
        status: 'success',
        duration: 5000,
      });

      form.restart();
      setExtraFormInputs(undefined);
    } catch (error) {
      toast({
        title: 'Error',
        description: `Error creating dish: ${error}`,
        status: 'error',
        duration: 5000,
      });
    }
  };

  const onDishTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setExtraFormInputs(extraDishInputFields[e.target.value as Dishes]);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <Box p={4} mt={4} mb={2} textAlign="left" as="form" onSubmit={handleSubmit}>
          <InputControl
            name={'name'}
            label={'Dish name'}
            placeholder={'Enter dish name'}
            leftInputElement={
              <InputLeftElement
                pointerEvents={'none'}
                children={<InputFieldIcon color="gray.400" />}
              />
            }
            validator={validateRegex(new RegExp(/^[a-zA-Z\s]{3,30}$/), 'Enter a valid dish name')}
          />
          <InputControl
            name={'preparation_time'}
            label={'Preparation time'}
            placeholder={'00:00:00'}
            mt={4}
            leftInputElement={
              <InputLeftElement pointerEvents={'none'} children={<TimeIcon color="gray.400" />} />
            }
            parser={formatTimeField}
            validator={validateRegex(
              new RegExp(/^[0-9]+[:][0-5][0-9][:][0-5][0-9]$/),
              'Enter valid preparation time',
            )}
          />

          <SelectInputControl
            mt={4}
            name={'type'}
            label={'Type'}
            placeholder={'Select dish type'}
            onChange={onDishTypeChange}
            validator={validateIsRequired('Dish type is required')}
          >
            <option value="pizza">🍕 Pizza</option>
            <option value="soup">🥣 Soup</option>
            <option value="sandwich">🥪 Sandwich</option>
          </SelectInputControl>

          {extraFormInputs &&
            extraFormInputs.map((extraInput, index) => (
              <InputControl {...extraInput} key={index} mt={4} />
            ))}

          <Button
            width="full"
            type="submit"
            mt={4}
            isLoading={submitting}
            loadingText={'Submitting'}
            colorScheme={'blue'}
            spinnerPlacement="end"
          >
            Submit
          </Button>
        </Box>
      )}
    />
  );
};
