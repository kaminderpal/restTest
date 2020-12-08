import { months } from './constants';

export const getDate = (date) => {
  const formatedDate = new Date(date);
  return `${
    months[formatedDate.getMonth()]
  } ${formatedDate.getDate()}, ${formatedDate.getFullYear()}`;
};
