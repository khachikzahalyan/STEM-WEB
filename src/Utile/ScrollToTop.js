import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleClick = (e) => {
      const link = e.target.closest('a');
      if (link && link.getAttribute('href') === pathname) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
