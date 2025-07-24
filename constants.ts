const BASE_URL = 'http://localhost:3000/api/';

/**
 * THE TYPES OF API CALLS AVAILABLE TO THE APPLICATION
 */
const SERVICE_TYPES = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
};

/**
 * PROVIDES THE URLS FOR THE APIS TO CALL
 */
const SERVICES = {
  getShopData: {
    url: BASE_URL + 'getShopData',
    id: 'getShopData',
    type: SERVICE_TYPES.GET,
  },
  getImage: {
    url: BASE_URL + 'img',
    id: 'getImage',
    type: SERVICE_TYPES.GET,
  },
};

export { SERVICE_TYPES, SERVICES };
