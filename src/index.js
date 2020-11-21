import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style';
import './static/iconfont/iconfont.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/reducer/index';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <Router routes={routes}>
        {/* 要解析，不解析不作用 */}
        {routes}
      </Router>
    </Provider>
  </Fragment>,
  document.getElementById('root')
);
