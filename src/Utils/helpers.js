import { months } from './constants';

/**
 * Get Formatted Date in Month Day, YYYY
 * @param {string} date - date string
 */
export const getDate = (date) => {
  const formatedDate = new Date(date);
  return `${
    months[formatedDate.getMonth()]
  } ${formatedDate.getDate()}, ${formatedDate.getFullYear()}`;
};
/**
 * Get Total Amount of all transactions
 * @param {Array} data - array of transactions
 */
export const getTotalAmount = (data) => {
  return data
    .reduce((total, curr) => {
      return total + Number(curr.Amount);
    }, 0)
    .toFixed(2);
};
