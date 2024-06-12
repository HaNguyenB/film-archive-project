import { useState, useRef, useEffect } from 'react';

// Data
import data from './data.json';

import { IoChevronBackCircle, IoChevronForwardCircle } from 'react-icons/io5';
import { BiSolidCameraMovie } from 'react-icons/bi';

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLInputElement>(null);
  const carouselItem = useRef<HTMLInputElement>(null);

  console.log(currentIndex);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      256 * currentIndex <= maxScrollWidth.current
    ) {
      console.log(carousel.current.offsetWidth);
      console.log('maxscroll', maxScrollWidth);
      console.log(carouselItem.current?.offsetWidth);

      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
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
      <h2 className='flex gap-4 text-3xl font-semibold uppercase leading-8 text-rose'>
        <span>
          <BiSolidCameraMovie />
        </span>
        <div className='flex flex-col  overflow-clip break-words sm:inline sm:flex-row'>
          <span>Check out student-host screening at&nbsp;</span>
          <a
            className=' duration-200 hover:text-white '
            href='https://www.instagram.com/oberlinfilmcoop/?hl=en'
          >
            @oberlinfilmcoop
          </a>
        </div>
      </h2>
      <div className='relative overflow-hidden pt-5'>
        <div className='top left absolute flex h-full w-full justify-between px-4'>
          <button
            onClick={movePrev}
            className='z-10 m-0 scale-[3] p-0 text-center text-white opacity-100 transition-all duration-300 ease-in-out hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-50'
            disabled={isDisabled('prev')}
          >
            <IoChevronBackCircle />
          </button>
          <button
            onClick={moveNext}
            className='z-10 m-0 scale-[3] p-0 text-white opacity-100 transition-all duration-300 ease-in-out hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-50'
            disabled={isDisabled('next')}
          >
            <IoChevronForwardCircle />
          </button>
        </div>
        <div
          ref={carousel}
          className='carousel-container relative z-0 flex touch-pan-x snap-x snap-mandatory gap-2 overflow-hidden scroll-smooth'
        >
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                ref={carouselItem}
                className='carousel-item relative h-64 w-64 scale-95 snap-center sm:scale-100'
              >
                <a
                  href={resource.link}
                  className='z-0 block aspect-square h-full w-full bg-cover bg-left-top bg-no-repeat bg-origin-padding'
                  style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                >
                  <img
                    src={resource.imageUrl || ''}
                    alt={resource.title}
                    className='hidden aspect-square w-full'
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
