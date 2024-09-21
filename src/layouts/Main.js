import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <HelmetProvider>
    <ScrollToTop />
    <Helmet
      titleTemplate="%s | Abass Dev"
      defaultTitle="Abass Dev"
      defer={false}
    >
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      {props.homePage ? (
        <div>
          {!props.fullPage && <SideBar />}
          <div id="main">{props.children}</div>
        </div>
      ) : (
        <div>
          <div id="main">{props.children}</div>
          {!props.fullPage && <SideBar />}
        </div>
      )}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  homePage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  homePage: false,
  title: null,
  description: "Abass Dev's personal website.",
};

export default Main;
