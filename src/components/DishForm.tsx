import { Box, Button } from '@chakra-ui/react';
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

export const DishForm = () => {
  const [extraFormInputs, setExtraFormInputs] = useState<DishInputFieldInterface[] | undefined>();

  const onSubmit = (e: any) => {
    console.log('onSubmit', e);
  };

  const onDishTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setExtraFormInputs(extraDishInputFields[e.target.value as Dishes]);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, errors, submitting }) => (
        <Box mt={8} mb={2} textAlign="left" as="form" onSubmit={handleSubmit}>
          <InputControl
            name={'name'}
            label={'Dish name'}
            placeholder={'Enter dish name'}
            validator={validateRegex(new RegExp(/^[a-zA-Z\s]{3,30}$/), 'Enter a valid dish name')}
          />
          <InputControl
            name={'preparation_time'}
            label={'Preparation time'}
            placeholder={'00:00:00'}
            mt={4}
            parser={formatTimeField}
            validator={validateRegex(
              new RegExp(/^[0-9]+[:][0-5][0-9][:][0-5][0-9]$/),
              'Enter valid preparation time',
            )}
          />

          <SelectInputControl
            mt={4}
            name={'dish'}
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
            extraFormInputs.map((value, index) => (
              <InputControl
                name={value.name}
                label={value.label}
                type={value.type}
                placeholder={value.placeholder}
                parser={value.parser}
                validator={value.validator}
                key={index}
                mt={4}
              />
            ))}

          <Button
            width="full"
            type="submit"
            mt={4}
            isLoading={submitting}
            loadingText={'Submitting'}
          >
            Submit
          </Button>
        </Box>
      )}
    />
  );
};
