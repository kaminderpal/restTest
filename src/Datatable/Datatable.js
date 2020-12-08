import React from 'react';
import styles from './Datatable.module.css';
import useFetch from '../Utils/useFetch';
import Row from './Row';
import { getDate, getTotalAmount } from '../Utils/helpers';

const Datatable = ({ total }) => {
  const { data, getData } = useFetch({
    result: null,
    isLoading: false,
    error: false,
    page: 1,
  });
  if (data.isLoading) return 'Transactions are loading...';
  if (data.error) return 'Error Occurred while loading the transactions';
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Company</th>
          <th>Account</th>
          <th>{`$${
            data.result && data.result.transactions
              ? getTotalAmount(data.result.transactions)
              : 'Value'
          }`}</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {data.result &&
          data.result.transactions.map((transaction, i) => (
            <Row
              key={i}
              date={getDate(transaction.Date)}
              amount={transaction.Amount}
              account={transaction.Ledger}
              company={transaction.Company}
            />
          ))}
      </tbody>
    </table>
  );
};

export default Datatable;
