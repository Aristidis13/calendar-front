import { SERVICE_TYPES } from '../../constants';

/**
 * Calculates the URL endPoint
 * @param {string} baseUrl - The url to use as endPoint
 * @param {string} type - The API type
 * @param {object} params - The params of the object
 * @return {string} - the api
 */
const calculateApiUrl = (baseUrl, type, params) => {
  const queryString = new URLSearchParams(params).toString();
  switch (type) {
    case SERVICE_TYPES.GET:
      return `${baseUrl}?` + queryString;
    default:
      return baseUrl;
  }
};

/**
 * Calculate what object will send to the fetch endPoint regarding the parameters
 * @param {Object.values(SERVICE_TYPES)}method - The method of the api (POST, GET, PUT)
 * @param {Object} body - The body
 */
const calculateParams = (method, body) => {
  if (method === SERVICE_TYPES.POST) {
    return {
      method: SERVICE_TYPES.POST,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  return {};
};

export { calculateApiUrl, calculateParams };
