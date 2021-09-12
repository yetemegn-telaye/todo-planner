import {Todos} from './todos';
import {Categories} from './categories';
import {createStore, combineReducers} from 'redux';


export const ConfigureStore = ()=>{
    const store = createStore(
        combineReducers({
            todos: Todos,
            categories: Categories
        })
    )
    return store;
}