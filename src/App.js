import React from 'react';
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Test from './containers/Test.js'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={Test} />
    </Router>
  )
}

export default App;
