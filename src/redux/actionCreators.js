import axios from 'axios'
import * as actionTypes from './actionTypes'
import { baseUrl } from './baseUrl'

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

export const addBooking = (booking, booked) => dispatch => {
    axios.post(baseUrl+'booking.json', booking)
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
    return dispatch => {
        dispatch(bookedLoading());
        axios.get(baseUrl+"booked.json")
        .then(response => response.data)
        .then(booked => dispatch(loadBooked(booked)));
        
    }
        
}