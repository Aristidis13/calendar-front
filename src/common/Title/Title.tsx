import { Typography } from 'antd';
import CLASSES from './Title.module.css';
import { ReactNode } from 'react';

interface ITitleProps {
  secondaryTitle?: ReactNode;
  title: ReactNode;
}

/**
 * Presents a Title that appears in the Modal
 * @param {object} props - The props for the Component
 * @param {ReactNode} [props.secondaryTitle] - The secondary title
 * @param {ReactNode} props.title - The title
 *
 * @returns {ReactNode} - the Title Component
 */
const Title = ({ secondaryTitle, title }: ITitleProps): ReactNode => {
  return title ? (
    <div className={CLASSES.titleContainer}>
      <Typography className={`${CLASSES.text} ${CLASSES.serviceTitle}`}>{title}</Typography>
      {secondaryTitle && (
        <Typography className={`${CLASSES.text} ${CLASSES.serviceSecondaryTitle}`}>
          {secondaryTitle}
        </Typography>
      )}
    </div>
  ) : null;
};

export default Title;
