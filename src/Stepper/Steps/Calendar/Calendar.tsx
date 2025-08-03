import './Calendar.css';

import { BackButton, Card, Title } from '../../../common';
import { ReactNode, useContext, useEffect } from 'react';

import { Calendar as AntCalendar } from 'antd';
import CLASSES from './Calendar.module.css';
import { CalendarHeader } from './Header';
import { Dayjs } from 'dayjs';
import { SERVICES } from '../../../../constants';
import { StepsContext } from '../../../context';
import useDates from './useDates';
import useFetchApi from '../../../common-hooks/useFetchApi';

/**
 * Creates the View for the Calendar Component
 * Calendar accepts the barber info and finds the program for this specific individual.
 * @returns {ReactNode} - The rendered Component
 */
const Calendar = (): ReactNode => {
  const { selectDate, selectHour, reservation } = useContext(StepsContext) as unknown;
  const { today, validRange, isDisabled, selectedDate, setSelectedDate } = useDates();

  const dateFullCellRender = (date: Dayjs) => {
    if (isDisabled(date)) return <div className={CLASSES.disabledDate}>{date.date()}</div>;
    else if (date.isSame(selectedDate, 'day'))
      return <div className={CLASSES.selectedDate}>{date.date()}</div>;

    return <div style={{ color: '#ccc' }}>{date.date()}</div>;
  };

  const { getDay, getDayError, fetchData } = useFetchApi(
    SERVICES.getDay,
    {
      selectedDate: reservation.date || today.format('YYYY-MM-DD'),
    },
    [reservation.date]
  );

  useEffect(() => {
    if (getDayError)
      console.error('Error while fetcing available hours:' + JSON.stringify(getDayError));
  }, []);

  return (
    <div className={CLASSES.calendarWrapper}>
      <BackButton name="SELECT YOUR BARBER" />
      <Card className="barberCard" title={<Title title="CHOOSE TIME" />}>
        <div className={CLASSES.cardContent}>
          <div className={CLASSES.calendarContainer}>
            <AntCalendar
              headerRender={CalendarHeader}
              validRange={validRange}
              fullscreen={false}
              className="calendar"
              fullCellRender={dateFullCellRender}
              onSelect={(date) => {
                setSelectedDate(() => date);
                selectDate(date);
                fetchData({ selectedDate: date.format('YYYY-MM-DD') });
              }}
            />
          </div>
          <div className={CLASSES.hoursContainer}>
            <div className={CLASSES.dateTitle}>{selectedDate.format('dddd DD MMMM')}</div>
            <div className={CLASSES.slotsContainer}>
              {(getDay || []).map((slot) => (
                <div
                  className={CLASSES.slot}
                  key={slot}
                  onClick={() => {
                    selectHour(slot);
                  }}
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Calendar;
