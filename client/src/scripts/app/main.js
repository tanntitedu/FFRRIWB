'use strict';

import React from 'react';
import Router from 'react-router';
import Immutable from 'immutable';

import { AppFlux } from './AppFlux';

import App from './App';
import HomePage from './../components/Pages/Home';
import TodosPage from './../components/Todos/Todos';
import StoriesPage from './../components/Stories/Stories';

try {

  require('./main.scss');

  const flux = new AppFlux();

  const Route = Router.Route;
  const DefaultRoute = Router.DefaultRoute;

  var Pages = (
    <Route name="home" path="/" handler={App}>
      <DefaultRoute handler={HomePage}/>
      <Route name="todos" path="/todos" handler={TodosPage}/>
      <Route name="stories" path="/stories" handler={StoriesPage}/>
    </Route>
  );

  Router.run(Pages, function (Handler) {
    React.render(<Handler flux={flux}/>, document.getElementById('app'));
  });
} catch (e) {
  React.render(
    <div>
      <h2>Error: application could not load</h2>
            <pre>
                <strong>{e.toString()}</strong>
              {!!e.stack && (<div><br />{e.stack}</div>)}
            </pre>
    </div>, document.body
  );

  throw e;
}
