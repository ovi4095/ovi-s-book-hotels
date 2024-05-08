import { combineReducers } from "redux";
import * as actionTypes from './actionTypes';

const categoryReducer = (categoryState = { isLoading: true, categories: []}, action) => {
        switch (action.type) {
            case actionTypes.CATEGORIES_LOADING:
                return {
                    ...categoryState,
                    isLoading: true,
                    categories: []
                }
            case actionTypes.LOAD_CATEGORIES:
                return {
                    ...categoryState,
                    isLoading: false,
                    categories: action.payload
                }
            default:
                return categoryState;
        }
}

const roomReducer = (roomState = { isLoading: true, rooms: []}, action) => {
    switch (action.type) {
        case actionTypes.ROOMS_LOADING:
            return {
                ...roomState,
                isLoading: true,
                rooms: []
            }
        case actionTypes.LOAD_ROOMS:
            console.log('room Payload:', action.payload)
            return {
                ...roomState,
                isLoading: false,
                rooms: action.payload
            }
        default:
            return roomState;
    }
}

const commentReducer = (commentState = {isLoading: true, comments:[]}, action) => {
    switch(action.type) {
        case actionTypes.LOAD_COMMENTS:
            let comments = [];
            for (let key in action.payload) {
                comments.push({
                    ...action.payload[key],
                })
            }
            return {
                ...commentState,
                comments: comments,
                isLoading: false
            }
        case actionTypes.COMMENTS_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            }
        default:
            return commentState;
    }
}

const authReducer = (authState = {token: null, userId: null, authLoading: false, authFailedMsg: null}, action) => {
    switch(action.type) {
        case actionTypes.AUTH_SUCCESS:
            return {
                ...authState,
                token: action.payload.token,
                userId: action.payload.userId,
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...authState,
                authFailedMsg: null,
                token: null,
                userId: null,
            }
        case actionTypes.AUTH_LOADING:
            return {
                ...authState,
                authLoading: action.payload,
            }
        case actionTypes.AUTH_FAILED:
            // console.log('form reducer error:', action.payload)
            return {
                ...authState,
                authFailedMsg: action.payload,
            }
        default:
            return authState;
    }
}




export const Reducer = combineReducers({
    categories: categoryReducer,
    rooms: roomReducer,
    comments: commentReducer,
    auth: authReducer,
})