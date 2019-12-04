import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';

import MainTemplate from '../../template/MainTemplate';
import Notes from '../Notes';
import Articles from '../Articles';
import Twitters from '../Twitters';
import DetailsPage from '../../template/DetailsPage';

import routes from '../../routes/index';

const Root = () => (
  // Theme provider pass props.theme to all childs.
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
);

export default Root;
