import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  ROOT,
  MEXICO_PAGE,
  ABOUT_PAGE,
  BELIZE_PAGE,
  CONTACT_PAGE
} from './routes/index';
import './index.css';
import Home from './containers/Home';
import Mexico from './containers/Mexico';
import About from './containers/About';
import Belize from './containers/Belize';
import Contact from './containers/Contact';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path={ROOT} component={Home} />
      <Route path={MEXICO_PAGE} component={Mexico} />
      <Route path={ABOUT_PAGE} component={About} />
      <Route path={BELIZE_PAGE} component={Belize} />
      <Route path={CONTACT_PAGE} component={Contact} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
