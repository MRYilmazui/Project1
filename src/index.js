import React from 'react';
import ReactDOM from 'react-dom';
import {ThroughProvider} from 'react-through'

import './index.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <ThroughProvider>
      <App/>
    </ThroughProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
