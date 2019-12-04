import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/index';

import MainTemplate from '../template/MainTemplate';
import Notes from './Notes';
import Articles from './Articles';
import Twitters from './Twitters';
import DetailsPage from './DetailsPage';

import routes from '../routes/index';

const Root = () => (
  <Provider store={store}>
    <MainTemplate>
      <Router>
        <Switch>
          <Route
            exact
            path={routes.home}
            component={() => <Redirect to="/notes" />}
          />
          <Route exact path={routes.notes} component={Notes} />
          <Route path={routes.note} component={DetailsPage} />
          <Route exact path={routes.articles} component={Articles} />
          <Route path={routes.article} component={DetailsPage} />
          <Route exact path={routes.twitters} component={Twitters} />
          <Route path={routes.twitter} component={DetailsPage} />
        </Switch>
      </Router>
    </MainTemplate>
  </Provider>
);

export default Root;
