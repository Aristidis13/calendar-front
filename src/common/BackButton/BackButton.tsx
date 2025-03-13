import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { ReactNode, useContext } from 'react';
import { StepsContext } from '../../context';
import CLASSES from './BackButton.module.css';
import { BackButtonProps } from '../types/BackButton';

/**
 * The Back Button  for each Step
 * @param {object} props - The Component props
 * @param {ReactNode} props.name - The name for the button
 * @returns {ReactNode} - The Button
 */
const BackButton = ({ name }: BackButtonProps): ReactNode => {
  const { prev } = useContext(StepsContext) as any;
  return (
    <Button type="text" variant="text" onClick={prev} ghost className={CLASSES.backBtn}>
      <span className="text">
        <LeftOutlined /> {name}
      </span>
    </Button>
  );
};

export default BackButton;
