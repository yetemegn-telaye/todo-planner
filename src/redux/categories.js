import {CATEGORIES} from '../shared/categories';
import * as ActionTypes from './actionTypes';

export const Categories = (state= CATEGORIES, action)=>{
    switch (action.type) {
        case ActionTypes.ADD_CATEGORY:
            var category = action.payload;
            category.cat_id = state.length;
            category.cat_createdDate = new Date().toISOString();
            return state.concat(category);
        default:
            return state;
    }
}