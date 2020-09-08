export const Remove = (array: Array<any>, value: any): Array<any> => {
  const index = [...array].indexOf(value);
  array.splice(index, 1);
  return array;
};

export const UniqueKey = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return `_${Math.random().toString(36).substr(2, 9)}`;
};
