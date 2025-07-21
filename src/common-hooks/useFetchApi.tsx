import { useEffect, useMemo, useState } from 'react';

/**
 * Accepts a service object and parameters and performs a server call.
 * Returns a response with the data the server fetched, an error if exists or if the API is pending
 */
const useFetchApi = (service, params) => {
  const { url, id } = service || {};
  const [data, setData] = useState<unknown>(undefined);
  const [error, setError] = useState<object>(undefined);
  const [dataFetched, setDataFetched] = useState<boolean>(false);

  useEffect(() => {
    if (data || error) return;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((dataObj) => {
        setData(() => dataObj);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setDataFetched(true);
      });
  }, [url, params, data, error]);

  return useMemo(() => {
    return data || error ?
        {
          [id]: data,
          [`${id}Error`]: error,
        }
      : {};
  }, [dataFetched, data, error]);
};

export default useFetchApi;
