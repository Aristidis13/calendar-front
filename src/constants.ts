const BASE_URL = 'http://localhost:3000/api/';

/**
 * The Steps to make the process of booking
 */
const STEPS = {
  SERVICES: 'SERVICES',
  SHOP: 'SHOP',
  BARBER: 'BARBER',
  CALENDAR: 'CALENDAR',
  CONTACT_INFO: 'CONTACT_INFO',
  CONFIRMATION: 'CONFIRMATION',
};

/**
 * PROVIDES THE URLS FOR THE APIS TO CALL
 */
const SERVICES = {
  getShopData: {
    url: BASE_URL + 'getShopData',
    id: 'getShopData',
  },
};

export { SERVICES, STEPS };
