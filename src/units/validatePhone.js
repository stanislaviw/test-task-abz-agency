export const validatePhoneNumber = (phoneNumber) => {
  const phonePattern = /^[\+]{0,1}380([0-9]{9})$/;

  return phonePattern.test(phoneNumber);
};
