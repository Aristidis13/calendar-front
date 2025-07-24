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

export { calculateApiUrl };
