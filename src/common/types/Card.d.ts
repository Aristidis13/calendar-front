import { ReactEventHandler, ReactNode } from 'react';

interface ICardProps {
  children: ReactNode;
  title?: ReactNode;
  secondaryTitle?: ReactNode;
  className?: string;
  onClick?: ReactEventHandler;
}
