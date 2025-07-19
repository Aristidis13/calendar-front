import { ReactNode } from 'react';

type TItems = {
  key: string | number;
  label: ReactNode;
  children: ReactNode;
}[];

export interface ICollapseProps {
  items: TItems;
}
