// REFERENCE: https://github.com/VivekAlhat/Tailwind-Calendar/blob/main/src/App.tsx
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isSameMonth,
  isToday,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
  getWeekOfMonth,
  getMonth,
} from 'date-fns';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { capitalizeFirstLetter } from './functions';
import { useState } from 'react';

function Calendar() {
  const today = startOfToday();
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
  ];

  const [currMonth, setCurrMonth] = useState(() => format(today, 'MMM-yyyy'));

  const firstDayOfMonth = parse(currMonth, 'MMM-yyyy', new Date());

  // INIT: Take today as the time mark to get the first day of the current week
  const [firstDayOfCurrWeek, setfirstDayOfCurrWeek] = useState(() =>
    startOfWeek(today)
  );

  const getPrevWeek = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();

    let firstDayOfPrevWeek = startOfWeek(
      add(firstDayOfCurrWeek, { weeks: -1 })
    );
    const lastDayOfPrevWeek = endOfWeek(firstDayOfPrevWeek);

    // CASE 1: First day of current week = first day of month
    if (getMonth(startOfWeek(firstDayOfCurrWeek)) !== getMonth(currMonth)) {
      firstDayOfPrevWeek = startOfWeek(firstDayOfCurrWeek);
      setfirstDayOfCurrWeek(firstDayOfPrevWeek);
      setCurrMonth(format(firstDayOfPrevWeek, 'MMM-yyyy'));
      // CASE 2: Last day of previous week is last day of previous month
    } else if (getMonth(lastDayOfPrevWeek) !== getMonth(currMonth)) {
      setfirstDayOfCurrWeek(firstDayOfPrevWeek);
      setCurrMonth(format(firstDayOfPrevWeek, 'MMM-yyyy'));
      // CASE 3: First day of previous week = first day of month
    } else if (getMonth(firstDayOfPrevWeek) !== getMonth(currMonth)) {
      firstDayOfPrevWeek = firstDayOfMonth;
      setfirstDayOfCurrWeek(firstDayOfPrevWeek);
      setCurrMonth(format(firstDayOfPrevWeek, 'MMM-yyyy'));
      // CASE 4: Still in current month
    } else {
      setfirstDayOfCurrWeek(firstDayOfPrevWeek);
    }
  };

  const getNextWeek = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    /* Get the first day of next week by + 1 week to the first day of the current week (Sunday)
    EDGE CASE 1: First day of current week (firstDayOfCurrWeek) is first day of current month and doesn't start from Sunday
    EDGE CASE 2: First day of current week on Sunday

    Calculate first day of next week as start of the week of (firstDayOfCurrWeek + 1 week)
    */
    const firstDayOfNextWeek = startOfWeek(
      add(firstDayOfCurrWeek, { weeks: 1 })
    );
    const lastDayOfCurWeek = endOfWeek(firstDayOfCurrWeek);
    // CASE 1: Month ends during the last week
    if (getMonth(lastDayOfCurWeek) !== getMonth(currMonth)) {
      setfirstDayOfCurrWeek(startOfMonth(lastDayOfCurWeek));
      setCurrMonth(format(lastDayOfCurWeek, 'MMM-yyyy'));
      // CASE 2: Month ends after the last week
    } else if (getMonth(firstDayOfNextWeek) !== getMonth(currMonth)) {
      setfirstDayOfCurrWeek(firstDayOfNextWeek);
      setCurrMonth(format(firstDayOfNextWeek, 'MMM-yyyy'));
      // CASE 3: Still in the current month
    } else {
      setfirstDayOfCurrWeek(firstDayOfNextWeek);
    }
  };

  const daysInWeek = eachDayOfInterval({
    start: firstDayOfCurrWeek,
    end:
      getMonth(endOfWeek(firstDayOfCurrWeek)) !== getMonth(currMonth)
        ? endOfMonth(currMonth)
        : endOfWeek(firstDayOfCurrWeek),
  });
  // const getPrevMonth = (event: React.MouseEvent<SVGSVGElement>) => {
  //   event.preventDefault();
  //   const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
  //   setCurrMonth(format(firstDayOfPrevMonth, 'MMM-yyyy'));
  // };

  // const getNextMonth = (event: React.MouseEvent<SVGSVGElement>) => {
  //   event.preventDefault();
  //   const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
  //   setCurrMonth(format(firstDayOfNextMonth, 'MMM-yyyy'));
  // };

  return (
    <div className='my-20 flex h-full w-full justify-end bg-yellow'>
      <div className='h-full w-[900px] bg-platinum'>
        <div className='flex items-center justify-between px-2 pt-2'>
          <div className='flex flex-col space-y-2 text-xl font-semibold'>
            <span>{format(firstDayOfMonth, 'MMMM yyyy')}</span>
            <span>Week {getWeekOfMonth(firstDayOfCurrWeek)}</span>
          </div>
          <div className='flex items-center justify-evenly gap-6   sm:gap-12'>
            <FaAngleLeft
              className='h-6 w-6 cursor-pointer'
              onClick={getPrevWeek}
            />
            <FaAngleRight
              className='h-6 w-6 cursor-pointer'
              onClick={getNextWeek}
            />
          </div>
        </div>
        <hr className='my-6' />
        {/* row displays the dates in a week  */}
        <div className='grid grid-cols-7 place-items-center gap-6 bg-rose sm:gap-12'>
          {days.map((day, idx) => {
            return (
              <div key={idx} className='font-semibold'>
                {capitalizeFirstLetter(day)}
              </div>
            );
          })}
        </div>
        {/* display the date in month */}
        <div className='bg - mt-8 grid grid-cols-7 place-items-center gap-6 bg-onyx sm:gap-12'>
          {daysInWeek.map((day, idx) => {
            return (
              <div key={idx} className={colStartClasses[getDay(day)]}>
                <p
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full font-semibold  hover:text-white ${
                    isSameMonth(day, today) ? 'text-gray-900' : 'text-gray-400'
                  } ${!isToday(day) && 'hover:bg-blue-500'} ${
                    isToday(day) && 'bg-red-500 text-white'
                  }`}
                >
                  {format(day, 'd')}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
