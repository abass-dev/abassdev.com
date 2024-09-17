import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component ensures the page scrolls to the top
 * whenever the route changes. Useful for single-page applications
 * where routing doesn't trigger a full page reload.
 */
// See https://reacttraining.com/react-router/web/guides/scroll-restoration/scroll-to-top

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
