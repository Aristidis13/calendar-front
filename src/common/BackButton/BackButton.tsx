import { ReactNode, useContext } from 'react';

import { BackButtonProps } from '../types/BackButton';
import { Button } from 'antd';
import CLASSES from './BackButton.module.css';
import { LeftOutlined } from '@ant-design/icons';
import { StepsContext } from '../../context';

/**
 * The Back Button  for each Step
 * @param {object} props - The Component props
 * @param {ReactNode} props.name - The name for the button
 * @returns {ReactNode} - The Button
 */
const BackButton = ({ name }: BackButtonProps): ReactNode => {
  const { prev } = useContext(StepsContext) as unknown;
  return (
    <Button type="text" variant="text" onClick={prev} ghost className={CLASSES.backBtn}>
      <span className="text">
        <LeftOutlined /> {name}
      </span>
    </Button>
  );
};

export default BackButton;
