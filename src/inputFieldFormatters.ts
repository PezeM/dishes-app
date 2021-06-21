export const formatFloat = (value: any, name: string): any => {
  if (!value) return value;
  return value.replace(',', '.');
};

export const formatInt = (value: any, name: string): any => {
  if (!value) return value;
  return parseInt(value);
};
