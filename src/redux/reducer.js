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
            // console.log('room Payload:', action.payload)
            return {
                ...roomState,
                isLoading: false,
                rooms: action.payload
            }
        default:
            return roomState;
    }
}

const bookedReducer = (bookedState = { isLoading: true, booked: []}, action) => {
    switch (action.type) {
        case actionTypes.BOOKED_LOADING:
            return {
                ...bookedState,
                isLoading: true,
                booked: []
            }
        case actionTypes.LOAD_BOOKED:
            // console.log('bookedState Payload:', action.payload)
            let booked = [];
            for (let key in action.payload) {
                booked.push({
                    ...action.payload[key],
                    key: key,
                })
            }
            return {
                ...bookedState,
                isLoading: false,
                booked: booked
            }
        default:
            return bookedState;
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
    booked: bookedReducer,
    auth: authReducer,
})