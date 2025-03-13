import { Card as AntCard } from 'antd';
import CLASSES from './Card.module.css';
import { ICardProps } from '../types/Card';
import { Title } from '../Title';

const Card = ({ children, title, secondaryTitle, className, onClick }: ICardProps) => {
  return (
    <AntCard
      className={className + ' ' + CLASSES.card}
      variant="borderless"
      title={<Title title={title} secondaryTitle={secondaryTitle} />}
      onClick={onClick}
    >
      {children}
    </AntCard>
  );
};

export default Card;
