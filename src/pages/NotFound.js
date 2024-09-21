import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import InArticle from '../utils/InArticle';

const PageNotFound = () => (
  <HelmetProvider>
    <div className="not-found">
      <Helmet title="404 Not Found">
        <meta
          name="description"
          content="The content you are looking for cannot be found."
        />
      </Helmet>
      <h1>Page Not Found</h1>
      <p>
        Return <Link to="/">home</Link>.
      </p>
      <InArticle />
    </div>
  </HelmetProvider>
);

export default PageNotFound;
