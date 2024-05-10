import { useEffect } from 'react';

const useChangeTabName = (tabName: string) => {
  useEffect(() => {
    document.title = tabName;
  }, []);
};

export default useChangeTabName;
