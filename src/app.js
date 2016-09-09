import React from 'react'
import { render } from 'react-dom';
import { Router, Route, hashHistory, Redirect } from 'react-router';
import $ from 'jquery';

import Layout from './layout/layout';

import PlanningPage from './pages/planning';
import GroomingPage from './pages/grooming';
import LoginPage from './pages/login';
import RetroPage from './pages/retro';

const routerElement = (
	<Router history={hashHistory}>
		<Redirect from="/" to="/login" />
    <Route path="/" component={Layout}>
      <Route path="planning" component={PlanningPage} />
      <Route path="grooming" component={GroomingPage} />
      <Route path="retro" component={RetroPage} />
			<Route path="login" component={LoginPage} />
    </Route>
  </Router>
);

$(function() {
	render(routerElement, document.getElementById('layout'));
});