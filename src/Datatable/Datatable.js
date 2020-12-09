import React, { useState, useEffect } from 'react';
import styles from './Datatable.module.css';
import useFetch from '../Utils/useFetch';
import Row from './Row';
import { getDate, getTotalAmount } from '../Utils/helpers';

const Datatable = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const { data, getData } = useFetch({
    result: null,
    isLoading: false,
    error: false,
    page: 1,
  });

  /**
   * Effect that will setup the count to retreive the next page.
   */
  useEffect(() => {
    if (data.result && data.page === 1) {
      setTotalCount(
        Math.ceil(data.result.totalCount / data.result.transactions.length)
      );
    }
  }, [data.result, data.page]);

  /**
   * Effect that will set the transactions.
   */
  useEffect(() => {
    if (data.result) {
      setTransactions((t) => [...t, ...data.result.transactions]);
    }
  }, [data.result]);

  /**
   * Effect that will help to get data from server with different page.
   */
  useEffect(() => {
    if (data.result && data.page < totalCount) {
      getData(data.page + 1);
    }
  }, [data.result, totalCount, data.page, getData]);

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
            transactions.length ? getTotalAmount(transactions) : 'Value'
          }`}</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {transactions.length > 0 &&
          transactions.map((transaction, i) => (
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
