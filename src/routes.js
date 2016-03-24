// =======================================
// routes.js
// =======================================
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// import components you need
import Login from './components/login';
import Register from './components/register';

export default (
  <Router history={browserHistory}>
    <Route path="login" component={Login} />
    <Route path="register" component={Register} />
  </Router>
)