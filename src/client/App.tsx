import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import Router from './router';

import store from './store';

export class App extends React.Component {
  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <IntlProvider locale="en">
          <Router />
        </IntlProvider>
      </Provider>
    );
  }
}

export default hot(module)(App);
