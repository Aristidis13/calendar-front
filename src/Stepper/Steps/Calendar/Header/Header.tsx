import { Typography } from 'antd';
import CLASSES from './Header.module.css';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';
import dayjs from 'dayjs';

const Header = ({ value, onChange }: any): ReactNode => {
  const year = value.year();
  const month = value.format('MMMM');

  const today = dayjs();

  const previousArrowAppears = dayjs(value.startOf('month')).isAfter(today);
  const nextArrowAppears = value.endOf('month').isBefore(today.add(1, 'year'));

  return (
    <div className={CLASSES.container}>
      <Typography.Title className={CLASSES.title} level={4}>
        {month + ' ' + year}
      </Typography.Title>
      <div className={CLASSES.arrowsWrapper}>
        {previousArrowAppears && (
          <div
            onTouchStartCapture={() => {
              onChange(value.subtract(1, 'month'));
            }}
            onClick={() => {
              onChange(value.subtract(1, 'month'));
            }}
            className={CLASSES.arrowWrapper}
          >
            <LeftCircleOutlined style={{ fontSize: 25 }} />
          </div>
        )}
        {nextArrowAppears && (
          <div
            onTouchStartCapture={() => {
              onChange(value.add(1, 'month'));
            }}
            onClick={() => {
              onChange(value.add(1, 'month'));
            }}
            className={CLASSES.arrowWrapper}
          >
            <RightCircleOutlined style={{ fontSize: 25 }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
