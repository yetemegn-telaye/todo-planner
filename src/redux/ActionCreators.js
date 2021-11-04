import * as ActionTypes from './actionTypes';
import {baseUrl} from '../shared/baseUrl';



// just receives the updated response from the post_category  
export const add_category = (category)=> ({
    type: ActionTypes.ADD_CATEGORY,
    payload: category
});

// thunk to post new category to the server fetchs the updated categery and sends it to add_category action above
export const post_category = (cat_name, cat_description)=> (dispatch)=>{
    const newCat = {
        cat_name: cat_name,
        cat_description: cat_description
    };
    newCat.cat_createdDate = new Date().toISOString();
    return fetch(baseUrl + 'categories', {
        method: 'POST',
        body: JSON.stringify(newCat),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    } )
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error ' + response.status +': ' + response.statusText);
                error.response=response;
                throw error;
            }},
            error=>{
                var errmsg= new Error(error.message);
                throw errmsg;
            }
            )
        .then(response=>response.json())
        .then(response=>dispatch(add_category(response)))
        .catch(error=>{console.log('post comments ', error.message), 
            alert('Your Category is Not Created: ' + error.message)});
}


//just receives the updated response from the post_cattask  
export const add_cattask = (task) => ({
    type: ActionTypes.ADD_CATTASK,
    payload: task
});

//thunk to post new task to the server and fetches the updated categery and sends it to add_category action above
export const post_cattask= (cat_id, task_name)=>(dispatch)=>{
    const newTask = {
        categoryId: cat_id,
        name: task_name
    };
    newTask.description = 'something';
    newTask.createdDate = new Date().toISOString();
    newTask.dueDate = new Date().toISOString();
    newTask.completed = false;
    newTask.hrs = 3;
    return fetch(baseUrl + 'todos', {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin'
    })
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error= new Error('Error ' + response.status + ': ' + response.statusText);
                error.response=response;
                throw error;
            }},
            error=>{
                var errmsg = new Error(error.message);
                throw errmsg
            }
        )
        .then(response=>response.json())
        .then(response=>dispatch(add_cattask(response)))
        .catch(error=>{console.log('Error ' + error.message),
            alert('Your Task was not added '+ error.message)});
}




// thunk used to fetch all the categories 
export const fetchCats = ()=>(dispatch)=>{
    dispatch(catsLoading(true));
    return fetch(baseUrl + 'categories')
        .then(response=>{
            if(response.ok)
                return response;
            else{
                var error= new Error('Error ' + response.status + ': ' + response.statusText);
                error.response= response;
                throw error;
            }},
            error=>{
                var errmsg= new Error(error.message);
                throw errmsg;
            }
            )
        .then(response=>response.json())
        .then(categories=>dispatch(viewCats(categories)))
        .catch(error=>dispatch(catsFailed(error.message)));
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
    return fetch(baseUrl + 'todos')
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error= new Error('Error' + response.status + ': ' + response.statusText);
                error.response= response;
                throw error;
            }},
            error=>{
                var errmsg= new Error(error.message);
                throw errmsg;
            }
        )
        .then(response=> response.json())
        .then(todos=>dispatch(viewCatTasks(todos)))
        .catch(error=>dispatch(catTasksFailed(error.message)));
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


 
//EDIT A CATEGORY
export const edit_category = (cat,cat_name,cat_description)=> (dispatch)=>{
    const updatedCat = {
        cat_name: cat_name,
        cat_description: cat_description
    };
    updatedCat.cat_createdDate = new Date().toISOString();
    return fetch(baseUrl + 'categories/' + cat, {
        method: 'PUT',
        body: JSON.stringify(updatedCat),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    } )
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error ' + response.status +': ' + response.statusText);
                error.response=response;
                throw error;
            }},
            error=>{
                var errmsg= new Error(error.message);
                throw errmsg;
            }
            )
        .then(response=>response.json())
        .then(response=>dispatch(add_category(response)))
        .catch(error=>{console.log('update comments ', error.message), 
            alert('Your Category is Not UPDATED: ' + error.message)});
}




//EDIT A TASK
export const edit_cattask= (task_id,cat_id, task_name,task_desc,task_status,hrs)=>(dispatch)=>{
    const updatedTask = {
        categoryId: cat_id,
        name: task_name,
        description: task_desc,
        completed: task_status,
        hrs:hrs
    };
    
    updatedTask.createdDate = new Date().toISOString();
    updatedTask.dueDate = new Date().toISOString();

    return fetch(baseUrl + 'todos/' + task_id, {
        method: 'PUT',
        body: JSON.stringify(updatedTask),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin'
    })
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error= new Error('Error ' + response.status + ': ' + response.statusText);
                error.response=response;
                throw error;
            }},
            error=>{
                var errmsg = new Error(error.message);
                throw errmsg
            }
        )
        .then(response=>response.json())
        .then(response=>dispatch(add_cattask(response)))
        .catch(error=>{console.log('Error ' + error.message),
            alert('Your Task was NOT UPDATED '+ error.message)});
}


export const remove_cattask = (task) => ({
    type: ActionTypes.DELETE_CATTASK,
    payload: []
});

//DELETE A TASK
export const delete_cattask= (task_id)=>(dispatch)=>{
    

    return fetch(baseUrl + 'todos/' + task_id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin'
    })
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error= new Error('Error ' + response.status + ': ' + response.statusText);
                error.response=response;
                throw error;
            }},
            error=>{
                var errmsg = new Error(error.message);
                throw errmsg
            }
        )
        .then(response=>response.json())
        .then(response=>dispatch(remove_cattask(response)))
        .catch(error=>{console.log('Error ' + error.message),
          console.log('Your Task was not Removed '+ error.message)});
}


export const remove_category = () => ({
    type: ActionTypes.DELETE_CATEGORY,
    payload: []
});

//DELETE CATEGORY
export const delete_category = (cat_id)=> (dispatch)=>{
    
    return fetch(baseUrl + 'categories/' + cat_id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    } )
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error ' + response.status +': ' + response.statusText);
                error.response=response;
                throw error;
            }},
            error=>{
                var errmsg= new Error(error.message);
                throw errmsg;
            }
            )
        .then(response=>response.json())
        .then(()=>dispatch(remove_category()))
        .catch(error=>{console.log('update comments ', error.message), 
            alert('Your Category is Not DELETED: ' + error.message)});
}

