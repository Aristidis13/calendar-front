import { TServices } from './types/Services';

/**
 * The data for  the optional step of Services
 */
const services: TServices = {
  title: 'Choose your Service',
  services: [
    {
      id: 0,
      label: 'Παιδικό (ηλικίες κάτω των 14)',
      price: 10,
      img: '/kids.jpg',
    },
    {
      id: 1,
      label: 'Κούρεμα και Περιποίηση Γενειάδας',
      price: 15,
      img: '/beard.webp',
    },
    { id: 2, label: 'Κούρεμα', price: 12, img: '/haircut.png' },
    { id: 3, label: 'Ξυρισμα', price: 2, img: '/shave.jpg' },
  ],
};

export { services };
