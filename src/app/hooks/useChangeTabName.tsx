import { useEffect } from 'react';
// REF: https://legacy.reactjs.org/docs/hooks-effect.html

const useChangeTabName = (tabName: string) => {
  useEffect(() => {
    document.title = tabName;
  }, []);
};

export default useChangeTabName;
