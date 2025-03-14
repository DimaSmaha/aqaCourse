import { faker } from "@faker-js/faker";

export const generateRandomLogin = () => {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};

export const checkoutData = {
  randomFirstName: faker.person.firstName(),
  randomLastName: faker.person.lastName(),
  randomPostalCode: faker.location.zipCode(),
};
