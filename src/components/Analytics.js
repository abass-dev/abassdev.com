import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    const trackingId = process.env.REACT_APP_GA_TRACKING_ID;

    if (trackingId && process.env.NODE_ENV !== 'development') {
      // Initialize Google Analytics only if not in development
      ReactGA.initialize(trackingId);
    }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      ReactGA.set({ page: location.pathname }); // Update page view
      ReactGA.pageview(location.pathname); // Track the page view
    }
  }, [location]);

  return null;
};

export default Analytics;
