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

import Articles from './Articles';
import DetailsPage from './DetailsPage';
import Notes from './Notes';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Twitters from './Twitters';

import routes from '../routes/index';

const Root = () => (
  <Provider store={store}>
    <Router>
      <MainTemplate>
        <Switch>
          <Route
            exact
            path={routes.home}
            component={() => <Redirect to="/notes" />}
          />
          <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.register} component={RegisterPage} />
          <Route exact path={routes.notes} component={Notes} />
          <Route path={routes.note} component={DetailsPage} />
          <Route exact path={routes.articles} component={Articles} />
          <Route path={routes.article} component={DetailsPage} />
          <Route exact path={routes.twitters} component={Twitters} />
          <Route path={routes.twitter} component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </Router>
  </Provider>
);

export default Root;
