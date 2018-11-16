import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './containers/NotFound';
import AppLayout from './containers/App/App';
import BlogLayout from './containers/Blog/Blog';
import MySpaceLayout from './containers/MySpace/MySpace';
import Header from './components/Header/Header';


export default function () {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" name="home" component={AppLayout} />
          <Route exact path="/blog" name="home" component={BlogLayout} />
          <Route exact path="/myspace" name="home" component={MySpaceLayout} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
