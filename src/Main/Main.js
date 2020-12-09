import React, { useState, useEffect } from 'react';
import Datatable from '../Datatable';
import styles from './Main.module.css';
import useFetch from '../Utils/useFetch';

const Main = () => {
  const [transactions, setTransactions] = useState([]);
  const [maxPage, setMaxPage] = useState(0);

  /**
   * Fetch hook to get data from server.
   */
  const { data, getData } = useFetch({
    result: null,
    isLoading: false,
    error: false,
    page: 1,
  });

  /**
   * Effect that will setup the maxpage
   * MaxPage means no. of times we gonna make fetch call.
   */
  useEffect(() => {
    if (data.result && data.page === 1) {
      setMaxPage(
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
    if (data.result && data.page < maxPage) {
      getData(data.page + 1);
    }
  }, [data.result, maxPage, data.page, getData]);

  return (
    <div className={styles.main}>
      {data.isLoading && 'Transactions are loading...'}
      {data.error && 'Error Occurred while loading the transactions'}
      {transactions.length > 0 && <Datatable transactions={transactions} />}
    </div>
  );
};

export default Main;
