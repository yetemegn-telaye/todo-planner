import * as ActionTypes from './actionTypes';


export const Todos = (state= {
    isLoading: true,
    errMsg: null,
    todos: []
}, action)=>{
    switch (action.type) {
        case ActionTypes.VIEW_CATTASKS:
            return {...state, isLoading: false, errMsg: null, todos: action.payload};
        case ActionTypes.CATTASKS_FAILED:
            return {...state, isLoading: false, errMsg: action.payload, todos: []};
        case ActionTypes.ADD_CATTASK:
            var cat_task = action.payload;
            cat_task.id = state.length;
            cat_task.description = 'something';
            cat_task.createdDate = new Date().toISOString();
            cat_task.dueDate = new Date().toISOString();
            cat_task.completed = 'false';
            cat_task.hrs = 3;
            return {...state, todos: state.todos.concat(cat_task)};
        default:
            return state;
    }
}