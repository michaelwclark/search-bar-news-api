import { combineReducers } from 'redux';

//REDUCERS 

import news from './allNews'


const rootReducer = combineReducers({
   
    news,
    loadingBar: loadingBarReducer

});

export default rootReducer;
