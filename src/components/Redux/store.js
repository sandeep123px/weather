import { createStore,applyMiddleware } from 'redux';

import thunk from 'redux-thunk'
import getweatherRedu from './Reducers/weatherReducers'


const myMiddlewares = applyMiddleware(thunk) 

const store = createStore(
    getweatherRedu ,
      myMiddlewares
);

export default store;
