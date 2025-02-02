import axios from 'axios'
import * as actionTypes from './actionTypes'
import { baseUrl } from './baseUrl'

// Category Section

export const loadCategories = categories => ({
    type: actionTypes.LOAD_CATEGORIES,
    payload: categories
})

export const categoriesLoading = () => ({
    type: actionTypes.CATEGORIES_LOADING
})

export const fetchCategories = () => {
    return dispatch => {
        dispatch(categoriesLoading());
        axios.get(baseUrl+"category.json")
        .then(response => response.data)
        .then(categories => dispatch(loadCategories(categories)));
        }
        
}



// Room Section

export const loadRooms = rooms => ({
    type: actionTypes.LOAD_ROOMS,
    payload: rooms
})

export const roomsLoading = () => ({
    type: actionTypes.ROOMS_LOADING
})

export const fetchRooms = () => {
    return dispatch => {
        dispatch(roomsLoading());
        axios.get(baseUrl+"rooms.json")
        .then(response => response.data)
        .then(rooms => dispatch(loadRooms(rooms)));
        
    }
        
}

// Booking Section

export const addBooking = (booking, booked) => (dispatch, getState) => {
    let token = getState().auth.token;
    let userId = getState().auth.userId;
    axios.post(baseUrl+`${userId}/booking.json?auth=${token}`, booking)
    .then(response => response.data)
    .catch(error => console.log(error))
    
    axios.post(baseUrl+'booked.json', booked)
    .then(response => response.data)
    .catch(error => console.log(error))
}

export const loadBooked = booked => ({
    type: actionTypes.LOAD_BOOKED,
    payload: booked
})

export const bookedLoading = () => ({
    type: actionTypes.BOOKED_LOADING
})

export const fetchBooked = () => {
    return (dispatch) => {
        dispatch(bookedLoading());
        axios.get(baseUrl+"booked.json")
        .then(response => response.data)
        .then(booked => dispatch(loadBooked(booked)))
        .catch(error => console.log("DATA BASE ERROR:", error));
        
    }
        
}

export const loadBooking = booking => ({
    type: actionTypes.LOAD_BOOKING,
    payload: booking
})

export const bookingLoading = () => ({
    type: actionTypes.BOOKING_LOADING
})

export const fetchBooking = () => {
    return (dispatch, getState) => {
        let token = getState().auth.token;
        let userId = getState().auth.userId;
        console.log("User Id", userId,token)
        dispatch(bookingLoading());
        axios.get(baseUrl+`${userId}/booking.json?auth=${token}`)
        .then(response => response.data)
        .then(booking => dispatch(loadBooking(booking)))
        .catch(error => console.log("DATA BASE ERROR:", error));
    }
        
}

export const removeBooking = (bookingKey, bookedKey) => (dispatch, getState) =>{
    let token = getState().auth.token;
    let userId = getState().auth.userId;
    
    axios.delete(baseUrl+`${userId}/booking/${bookingKey}.json?auth=${token}`)
    .then(() => alert("Canceled Booking Successfully!"))
    .catch((error) => {
        setTimeout(()=>{
            alert('Failed to Canceled Booking!')
        }, 1000)
        console.log("Cancel Booking Error:", error)
    })
    
    axios.delete(baseUrl+`booked/${bookedKey}.json`)
    .then(() => console.log("Booking Data removed Successfully!"))
    .catch((error) => {
        alert('Failed to remove Booking Data!')
        console.log("Booking Data removing Error:", error)
    })
}

// Review Section

export const reviewsLoading = () => ({
    type: actionTypes.REVIEWS_LOADING
}) 

export const loadReviews = reviews => ({
    type: actionTypes.LOAD_REVIEWS,
    payload: reviews
})

export const addReviews = (review) => dispatch => {
    axios.post(baseUrl+'reviews.json', review)
        .then(response => response.data)
        .catch(error => console.log(error))
    
}

export const fetchReviews = () => dispatch => {
    dispatch(reviewsLoading());
    axios.get(baseUrl+"reviews.json")
    .then(response => response.data)
    .then(reviews => {
            // console.log('comment loading in actioncreator', reviews)
            dispatch(loadReviews(reviews))
        });
    }