import * as ActionTypes from './actionTypes';

export const Categories = (state={
    isLoading: true,
    errMsg: null,
    categories: []
}, action)=>{
    switch (action.type) {
        case ActionTypes.CATS_LOADING:
            return {...state, isLoading: true, categories: [], errMsg: null};
        case ActionTypes.VIEW_CATS:
            return {...state, isLoading:false, categories: action.payload, errMsg: null};
        case ActionTypes.CATS_FAILED:
            return {...state, isLoading: false, categories: [], errMsg: action.payload};
        case ActionTypes.ADD_CATEGORY:
            var category = action.payload;
            category.cat_id = state.length;
            category.cat_createdDate = new Date().toISOString();
            return {...state, categories: state.categories.concat(category)};
        default:
            return state;
    }
}