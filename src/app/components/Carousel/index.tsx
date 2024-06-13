import { useState, useRef, useEffect } from 'react';

// Data
import data from './data.json';

import { IoChevronBackCircle, IoChevronForwardCircle } from 'react-icons/io5';
import { BiSolidCameraMovie } from 'react-icons/bi';

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLInputElement>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      if (carousel.current.offsetWidth < 560)
        return currentIndex + 1 >= data.resources.length;
      else
        return (
          carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
        );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className='carousel px-10 py-5'>
      <h2 className='flex w-full gap-4 text-3xl font-semibold uppercase leading-8 text-rose'>
        <span className='text-4xl'>
          <BiSolidCameraMovie />
        </span>
        <div className='flex flex-col overflow-clip break-words sm:inline sm:flex-row'>
          <span>Check out student-host screening at&nbsp;</span>
          <a
            className=' duration-200 hover:text-white '
            href='https://www.instagram.com/oberlinfilmcoop/?hl=en'
          >
            @oberlinfilmcoop
          </a>
        </div>
      </h2>
      <div className='overflow-hidde relative flex flex-col space-y-1 '>
        <div className='self-end px-2'>
          <button
            onClick={movePrev}
            className='z-10 m-0 p-0 text-center text-5xl text-platinum opacity-75 transition-all duration-300 ease-in-out hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-50'
            disabled={isDisabled('prev')}
          >
            <IoChevronBackCircle />
          </button>
          <button
            onClick={moveNext}
            className='z-10 m-0 p-0 text-5xl text-platinum opacity-75 transition-all duration-300 ease-in-out hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-50'
            disabled={isDisabled('next')}
          >
            <IoChevronForwardCircle />
          </button>
        </div>
        <div
          ref={carousel}
          className='carousel-container relative z-0 flex h-full w-full touch-pan-x snap-x snap-mandatory overflow-hidden scroll-smooth'
        >
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className='carousel-item md:1/4 relative w-full shrink-0 snap-center px-2 sm:w-1/3 lg:w-1/5 '
              >
                <a
                  href={resource.link}
                  target='_blank'
                  className='z-0 block aspect-square h-full w-full bg-cover bg-left-top bg-no-repeat bg-origin-padding'
                  style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                  rel='noreferrer'
                ></a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
