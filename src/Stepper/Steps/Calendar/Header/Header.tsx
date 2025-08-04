import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { ReactNode, useCallback, useContext } from 'react';

import CLASSES from './Header.module.css';
import { SERVICES } from '../../../../../constants.js';
import { StepsContext } from '../../../../context';
import { Typography } from 'antd';
import dayjs from 'dayjs';
import useFetchApi from '../../../../common-hooks/useFetchApi';

const MONTH_CALCULATIONS = {
  ADD: 'add',
  SUBSTRACT: 'substract',
};

const Header = ({ value, onChange }: unknown): ReactNode => {
  const { reservation } = useContext(StepsContext) as unknown;
  const selectedDate = dayjs(reservation.date).format('YYYY-MM-DD');
  const apiParams = { selectedDate, barberId: reservation.barber.id, shopId: reservation.shop.id };
  const { getMonth, getMonthError, fetchData } = useFetchApi(SERVICES.getMonth, apiParams);
  const year = value.year();
  const month = value.format('MMMM');

  const today = dayjs();

  const previousArrowAppears = dayjs(value.startOf('month')).isAfter(today);
  const nextArrowAppears = value.endOf('month').isBefore(today.add(1, 'year'));

  const handleChange = useCallback(
    (type) => {
      const newVal =
        type === MONTH_CALCULATIONS.SUBSTRACT ? value.subtract(1, 'month')
        : type === MONTH_CALCULATIONS.ADD ? value.add(1, 'month')
        : value;
      onChange(newVal);
      fetchData({ ...apiParams, selectedDate: newVal.format('YYYY-MM-DD') });
    },
    [value]
  );

  return (
    <div className={CLASSES.container}>
      <Typography.Title className={CLASSES.title} level={4}>
        {month + ' ' + year}
      </Typography.Title>
      <div className={CLASSES.arrowsWrapper}>
        {previousArrowAppears && (
          <div
            onTouchStartCapture={() => {
              handleChange(MONTH_CALCULATIONS.SUBSTRACT);
            }}
            onClick={() => {
              handleChange(MONTH_CALCULATIONS.SUBSTRACT);
            }}
            className={CLASSES.arrowWrapper}
          >
            <LeftCircleOutlined style={{ fontSize: 25 }} />
          </div>
        )}
        {nextArrowAppears && (
          <div
            onTouchStartCapture={() => {
              handleChange(MONTH_CALCULATIONS.ADD);
            }}
            onClick={() => {
              handleChange(MONTH_CALCULATIONS.ADD);
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
