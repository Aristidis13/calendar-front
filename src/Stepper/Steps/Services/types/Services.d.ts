/**
 * Type for a service
 */
export type TService = {
  id: string | number;
  label: string;
  price: number;
};

/**
 * Type for Services Mock
 */
export type TServices = {
  title: string;
  services: TService[];
};
