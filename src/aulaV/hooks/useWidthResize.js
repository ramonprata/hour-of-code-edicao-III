import { useState, useEffect } from 'react';

export const useWidthResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWidthResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleWidthResize);
    return () => {
      window.removeEventListener('resize', handleWidthResize);
    };
  }, [width]);

  return {
    width,
    isMoble: width < 460,
  };
};
