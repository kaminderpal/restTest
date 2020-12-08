import React from 'react';

const Row = ({ date, company, amount, account }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{company}</td>
      <td>{account}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Row;
