import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise'
import { loadingBarMiddleware } from 'react-redux-loading-bar'


//REDUCER
import reducers from './reducers';

//COMPONENTS
import App from './components/App';


//CSS



const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,loadingBarMiddleware())(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
            <div>
                <App />
            </div>
    </Provider>,
    document.getElementById('root'));
    