/**
 * Custom hook to fetch data from server
 * GetData fn will return data based on page number.
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { BASE_TRANSACTION_URL } from './constants';

const useFetch = (initialState) => {
  const isFetching = useRef(true);
  const [data, setData] = useState(initialState);

  const getData = useCallback(
    (page) => {
      setData({ ...initialState, page });
      isFetching.current = true;
    },
    [initialState]
  );

  useEffect(() => {
    if (isFetching.current) {
      isFetching.current = false;
      const fetchData = async () => {
        try {
          setData({ ...data, isLoading: true });
          const response = await fetch(
            `${BASE_TRANSACTION_URL}/${data.page}.json`
          );
          const result = await response.json();
          setData({ ...data, result, isLoading: false });
        } catch (error) {
          setData({ ...data, result: null, isLoading: false, error });
        }
      };
      fetchData();
    }
  }, [isFetching, data]);

  return { data, getData };
};

export default useFetch;
