import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import ReactGA from 'react-ga4'; // Importing Google Analytics
import Main from './layouts/Main'; // Fallback for lazy-loaded pages
import './static/css/main.scss'; // Importing main styles

// Importing all the necessary page components
import About from './pages/About';
import Contact from './pages/Contact';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Stats from './pages/Stats';

// Google Analytics Tracking ID (replace with your actual tracking ID)
const TRACKING_ID = 'G-N8ZTB9NPSP'; // Replace with your own GA Tracking ID

// Function to initialize Google Analytics
const initializeGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

// Component to track page views on every route change
const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    initializeGA(); // Initialize GA on the first render
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search }); // Send pageview on route change
  }, [location]);

  return null;
};

const { PUBLIC_URL } = process.env; // Set the base URL for the app

// Main App Component
const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      {/* Track page views across routes */}
      <TrackPageView />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} /> {/* Fallback route for 404 pages */}
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
