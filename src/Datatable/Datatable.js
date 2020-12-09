import React from 'react';
import styles from './Datatable.module.css';
import Row from './Row';
import { getDate, getTotalAmount } from '../Utils/helpers';

const Datatable = ({ transactions }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Company</th>
          <th>Account</th>
          <th>{`$${getTotalAmount(transactions)}`}</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {transactions.map((transaction, i) => (
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
