// REFERENCE: https://github.com/VivekAlhat/Tailwind-Calendar/blob/main/src/App.tsx
import {
  add,
  endOfWeek,
  format,
  getDay,
  isSameMonth,
  isToday,
  startOfToday,
  startOfWeek,
  getWeekOfMonth,
  getMonth,
  eachDayOfInterval,
} from 'date-fns';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { capitalizeFirstLetter } from './functions';
import { useState } from 'react';
import clsx from 'clsx';

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

  // INIT: Take today as the time mark to get the first day of the current week
  const [firstDayOfCurrWeek, setfirstDayOfCurrWeek] = useState(() =>
    startOfWeek(today)
  );

  const getPrevWeek = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    const firstDayOfPrevWeek = startOfWeek(
      add(firstDayOfCurrWeek, { weeks: -1 })
    );
    setfirstDayOfCurrWeek(firstDayOfPrevWeek);
    if (getMonth(firstDayOfPrevWeek) !== getMonth(currMonth))
      setCurrMonth(format(firstDayOfPrevWeek, 'MMM-yyyy'));
  };

  const getNextWeek = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    const firstDayOfNextWeek = startOfWeek(
      add(firstDayOfCurrWeek, { weeks: 1 })
    );
    setfirstDayOfCurrWeek(firstDayOfNextWeek);
    if (getMonth(firstDayOfNextWeek) !== getMonth(currMonth))
      setCurrMonth(format(firstDayOfNextWeek, 'MMM-yyyy'));
  };

  const daysInWeek = eachDayOfInterval({
    start: firstDayOfCurrWeek,
    end: endOfWeek(firstDayOfCurrWeek),
  });

  return (
    <div className='my-20 flex h-full w-full justify-end bg-yellow'>
      <div className='h-full w-[900px] bg-platinum'>
        <div className='flex items-center justify-between px-2 pt-2'>
          <div className='flex flex-col space-y-2 text-xl font-semibold'>
            <div>
              <span>{format(currMonth, 'MMMM yyyy')} </span>
              <span
                className={clsx({
                  hidden:
                    getMonth(firstDayOfCurrWeek) ===
                    getMonth(endOfWeek(firstDayOfCurrWeek)),
                })}
              >
                - {format(endOfWeek(firstDayOfCurrWeek), 'MMMM yyyy')}
              </span>
            </div>
            <div>
              <span>Week {getWeekOfMonth(firstDayOfCurrWeek)} </span>
              <span
                className={clsx({
                  hidden:
                    getMonth(firstDayOfCurrWeek) ===
                    getMonth(endOfWeek(firstDayOfCurrWeek)),
                })}
              >
                - Week {getWeekOfMonth(endOfWeek(firstDayOfCurrWeek))}
              </span>
            </div>
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
