import React from 'react';
import {render} from 'react-dom';
import RedBox from 'redbox-react';

import AppRoot from './app-root';
import './app.css';

const axios = require('axios').default;

const appEl = document.querySelector('.app-root');
let rootEl = document.createElement('div');
rootEl.className = "wrapper-element";

async function apiData() {
  let res = 'Nil';
  try {
    res = await axios.get("http://api:8080/");
    res = res.data;
  } catch (error) {
    return error.message;
  }
  return res;
}

let renderApp = () => {
  apiData().then(res => {
    render(
      <AppRoot data={res}/>,
      rootEl
    );
  });
};

/* Hot Replacement support, won't be bundled to production */
if (module.hot) {
  const renderAppHot = renderApp;
  const renderError = error => {
    render(
      <RedBox error={error}/>,
      rootEl
    );
  };

  renderApp = () => {
    try {
      renderAppHot();
    } catch (error) {
      renderError(error);
    }
  };

  module.hot.accept('./app-root', () => {
    setTimeout(renderApp);
  });
}

renderApp();
appEl.appendChild(rootEl);
