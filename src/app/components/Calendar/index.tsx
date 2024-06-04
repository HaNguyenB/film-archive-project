// REFERENCE: https://github.com/VivekAlhat/Tailwind-Calendar/blob/main/src/App.tsx
import {
  add,
  endOfWeek,
  format,
  startOfToday,
  startOfWeek,
  getMonth,
  eachDayOfInterval,
} from 'date-fns';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { useState } from 'react';
import clsx from 'clsx';
import { MAY_EVENTS } from '../EventCard/data';
import EventCard from '../EventCard';

function Calendar() {
  const today = startOfToday();

  const [currMonth, setCurrMonth] = useState(() => format(today, 'MMM-yyyy'));

  // INIT: Take today as the time mark to get the first day of the current week
  const [firstDayOfCurrWeek, setfirstDayOfCurrWeek] = useState(() =>
    startOfWeek(today)
  );

  const getPrevWeek = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const firstDayOfPrevWeek = startOfWeek(
      add(firstDayOfCurrWeek, { weeks: -1 })
    );
    setfirstDayOfCurrWeek(firstDayOfPrevWeek);
    if (getMonth(firstDayOfPrevWeek) !== getMonth(currMonth))
      setCurrMonth(format(firstDayOfPrevWeek, 'MMM-yyyy'));
  };

  const getNextWeek = (event: React.MouseEvent<HTMLButtonElement>) => {
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

  const test = daysInWeek.map((day, idx) => {
    const res = MAY_EVENTS.find((event) => {
      if (format(day, 'eee d') === event.date) return event;
    });
    if (res !== undefined)
      return (
        <EventCard
          date={res.date}
          key={idx}
          imgSrc='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
          title={res.title}
          description={res.description}
        ></EventCard>
      );
    return null;
  });

  return (
    <div className='mx-auto w-[600px] max-w-full border-2 bg-platinum'>
      <div className='flex items-center justify-between px-2 pt-2'>
        <div className='flex flex-col space-y-2 text-xl font-semibold'>
          <div>
            <span>{format(currMonth, 'MMMM ')} </span>
            <span
              className={clsx({
                hidden:
                  getMonth(firstDayOfCurrWeek) ===
                  getMonth(endOfWeek(firstDayOfCurrWeek)),
              })}
            >
              - {format(endOfWeek(firstDayOfCurrWeek), 'MMMM ')}
            </span>
          </div>
          <div>
            <span>
              {format(daysInWeek[0], 'eee d')} -{' '}
              {format(daysInWeek[6], 'eee d')}
            </span>
          </div>
        </div>
        <div className='flex items-center justify-evenly gap-6'>
          <button type='button' onClick={getPrevWeek} title='Previous Week'>
            <FaAngleLeft className='h-6 w-6' />
          </button>
          <button type='button' onClick={getNextWeek} title='Next Week'>
            <FaAngleRight className='h-6 w-6' />
          </button>
        </div>
      </div>

      <hr className='my-5 border' />

      <div className='flex space-x-2 border-t-2 p-2 '>
        {test}
        <div className={clsx({ hidden: !test.every((x) => x === null) })}>
          No events this week
        </div>
      </div>
    </div>
  );
}

export default Calendar;
