import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import MainTemplate from '../../template/MainTemplate';
import Notes from '../Notes';
import Articles from '../Articles';
import Twitters from '../Twitters';

const Root = () => (
  // Theme provider pass props.theme to all childs.
  <MainTemplate>
    <Router>
      <Switch>
        <Route path="/" exact component={Notes} />
        <Route path="/articles" exact component={Articles} />
        <Route path="/twitters" exact component={Twitters} />
      </Switch>
    </Router>
  </MainTemplate>
);

export default Root;
