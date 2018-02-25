import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import promiseMiddleware  from 'redux-promise-middleware'

//REDUCER
import reducers from './reducers';

//COMPONENTS
import App from './components/App';


//CSS



const createStoreWithMiddleware = applyMiddleware(promiseMiddleware(), loadingBarMiddleware(),)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
            <div>
                <App />
            </div>
    </Provider>,
    document.getElementById('root'));
    