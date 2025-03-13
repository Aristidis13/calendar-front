import { ReactNode } from 'react';

/**
 * Type for a service
 */
export type TService = {
  id: string | number;
  label: string;
  price: number;
  img?: string;
};

/**
 * Type for Services Mock
 */
export type TServices = {
  title: string;
  services: TService[];
};
