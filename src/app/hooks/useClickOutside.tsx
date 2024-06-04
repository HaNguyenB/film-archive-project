import { useEffect } from 'react';

// REF: https://dev.to/rashed_iqbal/how-to-handle-outside-clicks-in-react-with-typescript-4lmc

interface ValidRefTarget {
  contains(target: EventTarget | null): null;
}

export default function useClickOutside(
  ref: React.RefObject<ValidRefTarget>,
  callback: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, ref]);
}
