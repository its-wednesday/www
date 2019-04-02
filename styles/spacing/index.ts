const SPACING_VALUE = 8;

export const spacing = (multiple = 1) => {
  const parsed = Math.floor(multiple);

  return parsed * SPACING_VALUE;
}
