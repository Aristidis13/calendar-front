import { calculateApiUrl, calculateParams } from './utils';
import { useCallback, useEffect, useMemo, useState } from 'react';

/**
 * Accepts a service object and parameters and performs a server call.
 * Returns a response with the data the server fetched, an error if exists or if the API is pending
 */
const useFetchApi = (service, params = {}, deps = []) => {
  const { url, id, type, fetchWithButton } = service || {};
  const [data, setData] = useState<unknown>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<object>(null);

  const fetchData = useCallback((parameters) => {
    const fetchParams = parameters || params;
    fetch(calculateApiUrl(url, type, fetchParams), calculateParams(type, fetchParams))
      .then((res) => {
        return res.json();
      })
      .then((dataObj) => {
        setData(() => dataObj);
      })
      .catch((err) => {
        setError(err);
      });
  }, deps);

  useEffect(() => {
    if (pending || data || error || fetchWithButton) return;
    fetchData();
  }, deps);

  /**
   * Pending state is handled outside of fetch for Separation of Concerns
   * and cleaner code.
   * Alternatively it can go in a .finally() at the end of fetch and getInitialized before fetch
   */
  useEffect(() => {
    if (data || error) setPending(false);
    else if (!data && !error) setPending(true);
  }, [data, error]);

  return useMemo(() => {
    return {
      fetchData,
      [id]: data,
      [`${id}Pending`]: pending,
      [`${id}Error`]: error,
    };
  }, [pending, data, error, fetchData]);
};

export default useFetchApi;
