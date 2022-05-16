import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './custom.scss';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div className="lds-ripple"><div></div><div></div></div>}>
       <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();