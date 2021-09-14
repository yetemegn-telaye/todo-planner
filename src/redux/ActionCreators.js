import * as ActionTypes from './actionTypes';
import {CATEGORIES} from '../shared/categories';
import {TODOS} from '../shared/todos';



export const add_category = (cat_name, cat_description)=> ({
    type: ActionTypes.ADD_CATEGORY,
    payload: {
        cat_name: cat_name,
        cat_description: cat_description
    }
});

export const add_cattask = (cat_id, task_name) => ({
    type: ActionTypes.ADD_CATTASK,
    payload: {
        categoryId: cat_id,
        name: task_name
    }
});

// thunk used to fetch all the categories 
export const fetchCats = ()=>(dispatch)=>{
    dispatch(catsLoading(true));
    setTimeout(()=>{
        dispatch(viewCats(CATEGORIES));
    }, 3000
    );
}

// action method used inside the thunk to load the categories
export const catsLoading=()=>({
    type: ActionTypes.CATS_LOADING
});
// action method used inside the thunk to view all the categories
export const viewCats = (categories)=>({
    type: ActionTypes.VIEW_CATS,
    payload: categories
});
// action method used inside the thunk to display error message when failed
export const catsFailed = (errmsg)=>({
    type: ActionTypes.CATS_FAILED,
    payload: errmsg
});

// thunk for fetching tasks in category 
 export const fetchCatTasks = ()=>(dispatch)=>{
     setTimeout(()=>{
         dispatch(viewCatTasks(TODOS));
     }, 3000
     );
 }

 // load the tasks in cats

 export const viewCatTasks= (todos)=>({
     type: ActionTypes.VIEW_CATTASKS,
     payload: todos
 });

 // when cattasks failed to view

 export const catTasksFailed = (errmsg) => ({
     type: ActionTypes.CATTASKS_FAILED,
     payload: errmsg
 });