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
            var task = action.payload;
            return {...state, todos: state.todos.concat(task)};
        case ActionTypes.DELETE_CATTASK:
            var task = action.payload;
            return {...state, todos: state.todos.concat(task)};
        default:
            return state;
    }
}