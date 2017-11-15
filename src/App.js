import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';
import promiseMiddleware from 'redux-promise-middleware';

require('./css/index.scss');
import reducers from './reducers';
import HomePage from './containers/homePage';

const Root = (props) => {
    return <div className="root">
        <HomePage {...props} />
    </div>;
};

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Root} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
