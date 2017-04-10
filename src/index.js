// React modules
import React from 'react';
import ReactDOM from 'react-dom';

// Redux and Router modules and files
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Import components
import App from './containers/App';
import Main from './components/Main';

// Configuring redux store
import configureStore from './store/configureStore';

// Import onEnter callbacks
import { onProjectsEnter } from './routes/route-callbacks';

// Define store from configureStore
const store = configureStore();

// Define routes and configure history to be synced with redux store
const history = syncHistoryWithStore(browserHistory, store);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} onEnter={onProjectsEnter(store)}>
        <IndexRoute component={Main} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
