/* eslint-disable */

import '@babel/polyfill';
import 'whatwg-fetch';

import 'sanitize.css/sanitize.css';

import * as intl from 'intl';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

// global styles
import './style.scss';

declare global {
  interface Window { Intl: any; }
}

// apply polyfill
if (!window.Intl) {
  window.Intl = intl;
}

ReactDOM.render(<App />, document.getElementById('app'));
