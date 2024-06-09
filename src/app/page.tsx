'use client';

import React from 'react';
import useChangeTabName from './hooks/useChangeTabName';
import Calendar from './components/Calendar';
import InterestForm from './components/InterestForm';
import HomeTitle from './components/HomeTitle';
import InformationContainer from './components/InformationContainer';
import Carousel from './components/Carousel';
import { FaMapPin } from 'react-icons/fa';

export default function Home() {
  useChangeTabName('Home');
  return (
    <div className='divide-y-2 divide-rose '>
      <HomeTitle />
      <Calendar />

      <InformationContainer
        imgSrc='https://www.oberlin.edu/sites/default/files/styles/width_760/public/content/basic-page/header-image/apollo_marquee-dale_preston_83.jpg?itok=J4jk651l'
        titleUrl='https://www.oberlin.edu/life-at-oberlin/museum-and-the-arts/apollo'
        locationUrl='https://www.google.com/maps?f=d&hl=en&saddr&daddr=19++East+College+Street,+Oberlin,+OH+44074@41.291557,-82.216713&ie=UTF8&z=15'
        imgAlt='Apollo Theater'
        title='The Apollo Theater '
        description='in Oberlin is synonymous with consistent family friendly movies shown at reasonable prices. Since 1913, the downtown movie house has opened its doors to enthusiastic patrons, ready to see the latest offering shown reel-to-reel from a single screen.'
        addressLine1='19 E. College St'
        addressLine2='Oberlin, OH 44074'
        icon={<FaMapPin />}
      />

      <div className='flex-grow bg-jet'>
        <Carousel />
      </div>
      <InterestForm />
    </div>
  );
}
