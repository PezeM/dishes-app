import { FieldState } from 'final-form';

export type ValidatorType = (value: any, allValues: Object, meta?: FieldState<any>) => any;

export const validateMinMaxIntValue =
  (min: number, max: number, errorMsg = 'Enter a valid number') =>
  (value: any, _: Object, __?: FieldState<any>) => {
    if (!value) return errorMsg;
    value = parseInt(value);
    if (isNaN(value)) return errorMsg;

    if (value > max || value < min) {
      return errorMsg;
    }

    return undefined;
  };

export const validateMinMaxFloatValue =
  (min: number, max: number, errorMsg = 'Enter a valid number') =>
  (value: any, _: Object, __?: FieldState<any>) => {
    if (!value) return errorMsg;
    value = parseFloat(value);
    if (isNaN(value)) return errorMsg;

    if (value > max || value < min) {
      return errorMsg;
    }

    return undefined;
  };

export const validateIsRequired =
  (errorMsg = 'Field is required') =>
  (value: any, _: Object, __?: FieldState<any>) => {
    if (!value) return errorMsg;

    return undefined;
  };

export const validateRegex =
  (regex: RegExp, errorMsg = 'Enter a valid field') =>
  (value: any, _: Object, __?: FieldState<any>) => {
    if (!value) return errorMsg;
    if (!regex.test(value)) return errorMsg;

    return undefined;
  };
