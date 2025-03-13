import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';

const useDates = () => {
  const today = dayjs().startOf('day');
  const validRange = [today, today.add(1, 'year')] as any;
  const [selectedDate, setSelectedDate] = useState(today);

  // Effect to initialize the data
  useEffect(() => {
    // Fetch the data for this month
  }, []);

  /**
   * Checks if some Date should be disabled
   * @param {Dayjs} date - The date
   * @returns {boolean} - if the date should be disabled
   */
  const isDisabled = (date: Dayjs): boolean => {
    const isPastDate = date.isBefore(validRange[0]);
    const isAfterAYearFromToday = date.isAfter(validRange[1]);

    const noAvailableSlotsForTheDay = false;

    return isPastDate || isAfterAYearFromToday || noAvailableSlotsForTheDay;
  };

  return { validRange, isDisabled, selectedDate, setSelectedDate };
};

export default useDates;
