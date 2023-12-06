export const validateName = (name) => {
  const minLength = 2;
  const maxLength = 60;

  if (!name || name.length < minLength || name.length > maxLength) {
    return false;
  }

  return true;
};
