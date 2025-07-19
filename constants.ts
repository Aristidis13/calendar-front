const BASE_URL = 'http://localhost:3000/api/';

/**
 * PROVIDES THE URLS FOR THE APIS TO CALL
 */
const SERVICES = {
  getShopData: {
    url: BASE_URL + 'getShopData',
    id: 'getShopData',
  },
  getImage: {
    url: BASE_URL + '/img/{imgId}',
    id: 'getImage',
  },
};

export { SERVICES };
