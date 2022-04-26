import React from 'react';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';

import App from './App';
import FirstHeader from './first/FirstHeader';
import FirstContentContainer from './first/FirstContentContainer';
import SecondHeader from './second/SecondHeader';
import SecondContent from './second/SecondContent';

const first = {
  header: FirstHeader,
  content: FirstContentContainer,
};

const second = {
  header: SecondHeader,
  content: SecondContent,
};

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="first" components={first} />
      <Route path="second" components={second} />
    </Route>
  </Router>
);
