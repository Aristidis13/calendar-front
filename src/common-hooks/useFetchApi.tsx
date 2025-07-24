import { useEffect, useMemo, useState } from 'react';

import { calculateApiUrl } from './utils';

/**
 * Accepts a service object and parameters and performs a server call.
 * Returns a response with the data the server fetched, an error if exists or if the API is pending
 */
const useFetchApi = (service, params = {}) => {
  const { url, id } = service || {};
  const [data, setData] = useState<unknown>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<object>(null);

  useEffect(() => {
    if (pending || data || error) return;
    fetch(calculateApiUrl(url, service.type, params))
      .then((res) => {
        return res.json();
      })
      .then((dataObj) => {
        setData(() => dataObj);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

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
      [id]: data,
      [`${id}Pending`]: pending,
      [`${id}Error`]: error,
    };
  }, [pending, data, error]);
};

export default useFetchApi;
