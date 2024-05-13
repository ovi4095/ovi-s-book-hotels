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
            console.log('Booked Reducer:', booked)
            return {
                ...bookedState,
                isLoading: false,
                booked: booked
            }
        default:
            return bookedState;
    }
}

const bookingReducer = (bookingState = { isLoading: true, booking: []}, action) => {
    switch (action.type) {
        case actionTypes.BOOKING_LOADING:
            return {
                ...bookingState,
                isLoading: true,
                booking: []
            }
        case actionTypes.LOAD_BOOKING:
            // console.log('bookingState Payload:', action.payload)
            let booking = [];
            for (let key in action.payload) {
                booking.push({
                    ...action.payload[key],
                    key: key,
                })
            }
            console.log('booking reducer', booking)
            return {
                ...bookingState,
                isLoading: false,
                booking: booking
            }
        default:
            return bookingState;
    }
}

const reviewReducer = (reviewState = {isLoading: true, reviews:[]}, action) => {
    switch(action.type) {
        case actionTypes.LOAD_REVIEWS:
            let reviews = [];
            for (let key in action.payload) {
                reviews.push({
                    ...action.payload[key],
                })
            }
            // console.log("Review in Reducer:", reviews)
            return {
                ...reviewState,
                reviews: reviews,
                isLoading: false
            }
        case actionTypes.REVIEWS_LOADING:
            return {
                ...reviewState,
                isLoading: true,
                reviews: []
            }
        default:
            return reviewState;
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
    reviews: reviewReducer,
    booked: bookedReducer,
    booking: bookingReducer,
    auth: authReducer,
})