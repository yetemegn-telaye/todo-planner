import * as ActionTypes from './actionTypes';

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