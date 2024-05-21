import { format } from 'date-fns';

export const MAY_EVENTS = [
  {
    title: 'Davinci Resolve Workshop',
    description: 'Wednesday May 1st\n7PM\nApollo Editing Lab',
    date: format(new Date('5-1-2024'), 'eee d'),
    key: Math.random(),
  },
  {
    title: 'Open Department Meeting',
    description:
      'With Department Chair GEOFF PINGREE. \n Thusday at 6PM \n Mudd 443 \n Bring any questions about Prague, the Apollo, major requirements, new classes and faculty, etc.',
    date: format(new Date('5-9-2024'), 'eee d'),
    key: Math.random(),
  },

  {
    title: 'Student Screening',
    description: 'Apollo Theater\n Sunday May 12 \n At 7PM',
    date: format(new Date('5-17-2024'), 'eee d'),
    key: Math.random(),
  },
];
