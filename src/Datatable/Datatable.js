import React from 'react';
import styles from './Datatable.module.css';
import useFetch from '../Utils/useFetch';
import Row from './Row';

const Datatable = ({ total }) => {
  const { data, getData } = useFetch({
    result: null,
    isLoading: false,
    error: false,
    page: 1,
  });

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Data</th>
          <th>Company</th>
          <th>Account</th>
          <th>{`$${total}`}</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {data.result &&
          data.result.transactions.map((transaction, i) => (
            <Row
              key={i}
              date={transaction.Date}
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
