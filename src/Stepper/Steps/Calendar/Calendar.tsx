import { ReactNode } from 'react';
import { BackButton, Title, Card } from '../../../common';
import './Calendar.css';
import { Calendar as AntCalendar } from 'antd';
import CLASSES from './Calendar.module.css';
import { CalendarHeader } from './Header';
import useDates from './useDates';
import { Dayjs } from 'dayjs';

/**
 * Creates the View for the Calendar Component
 * Calendar accepts the barber info and finds the program for this specific individual.
 * @returns {ReactNode} - The rendered Component
 */
const Calendar = (): ReactNode => {
  const { validRange, isDisabled, selectedDate, setSelectedDate } = useDates();

  const dateFullCellRender = (date: Dayjs) => {
    if (isDisabled(date)) {
      return <div className={CLASSES.disabledDate}>{date.date()}</div>;
    } else if (date.isSame(selectedDate, 'day')) {
      return <div className={CLASSES.selectedDate}>{date.date()}</div>;
    }
    return <div style={{ color: '#ccc' }}>{date.date()}</div>;
  };

  return (
    <div className="calendarWrapper">
      <BackButton name="SELECT YOUR BARBER" />
      <Card className="barberCard" title={<Title title={'CHOOSE TIME'} />}>
        <div className={CLASSES.calendarContainer}>
          <AntCalendar
            headerRender={CalendarHeader}
            validRange={validRange}
            fullscreen={false}
            className="calendar"
            fullCellRender={dateFullCellRender}
            onSelect={(date) => {
              setSelectedDate(() => date);
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default Calendar;
