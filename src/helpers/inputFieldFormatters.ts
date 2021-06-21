export const formatFloat = (value: any, name: string): any => {
  if (!value) return value;
  value = value.trim();
  return parseFloat(value.replace(',', '.'));
};

export const formatInt = (value: any, name: string): any => {
  if (!value) return value;
  value = value.trim();
  return parseInt(value);
};

export const formatTimeField = (value: any, name: string): any => {
  if (!value) return value;
  value = value.trim().replace(/[^\d]/g, '');

  if (value.length <= 2) return value;

  if (value.length <= 4) return `${value.slice(0, 2)}:${value.slice(2)}`;

  return `${value.slice(0, 2)}:${value.slice(2, 4)}:${value.slice(4, 6)}`;
};
