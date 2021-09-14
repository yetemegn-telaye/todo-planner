import {Todos} from './todos';
import {Categories} from './categories';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



export const ConfigureStore = ()=>{
    const store = createStore(
        combineReducers({
            todos: Todos,
            categories: Categories
        }), 
        applyMiddleware(thunk,logger)
    );
    return store;
}