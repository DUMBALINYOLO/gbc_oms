import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter as Router} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
import 'sanitize.css/sanitize.css';



ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('app')
);
