import { ReactNode } from 'react';
import { TLabelProps } from './types/Label';
import { Typography } from 'antd';
import CLASSES from './Label.module.css';

/**
 * The Label to Present above the form
 * @returns {ReactNode}
 */
const Label = ({ message }: TLabelProps): ReactNode => {
  return <Typography className={CLASSES.label}>{message}</Typography>;
};

export default Label;
