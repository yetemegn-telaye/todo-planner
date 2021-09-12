import * as ActionTypes from './actionTypes';
import {TODOS} from '../shared/todos';

export const Todos = (state= TODOS, action)=>{
    switch (action.type) {
        case ActionTypes.ADD_CATTASK:
            var cat_task = action.payload;
            cat_task.id = state.length;
            cat_task.description = 'something';
            cat_task.createdDate = new Date().toISOString();
            cat_task.dueDate = new Date().toISOString();
            cat_task.completed = 'false';
            cat_task.hrs = 3;
            return state.concat(cat_task);
        default:
            return state;
    }
}