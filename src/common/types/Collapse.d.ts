import { ReactNode } from 'react';

type TItems = {
  key: string | number;
  label: ReactNode;
  children: ReactNode;
}[];

interface ICollapseProps {
  items: TItems;
}
