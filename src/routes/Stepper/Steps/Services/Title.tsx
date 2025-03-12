import { Typography } from 'antd';
import CLASSES from './styles.module.css';
import { ReactNode } from 'react';

interface ITitleProps {
  secondaryTitle: ReactNode;
  title: ReactNode;
}

const Title = ({ secondaryTitle, title }: ITitleProps): ReactNode => {
  return (
    <div className={CLASSES.titleContainer}>
      <Typography className={`${CLASSES.text} ${CLASSES.serviceTitle}`}>{title}</Typography>
      <Typography className={`${CLASSES.text} ${CLASSES.serviceSecondaryTitle}`}>
        {secondaryTitle}
      </Typography>
    </div>
  );
};

export default Title;
