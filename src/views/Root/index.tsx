import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { routes } from '../../routes';
import { store } from '../../store';
import { MainTemplate } from '../../template/Main';
import { Articles } from '../Articles';
import { DetailsPage } from '../Details/';
import { LoginPage } from '../Login/';
import { Notes } from '../Notes';
import { RegisterPage } from '../Register/';
import { Twitters } from '../Twitters';

export const Root: React.FC = () => (
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
