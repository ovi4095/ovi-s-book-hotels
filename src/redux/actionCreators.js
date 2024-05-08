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
        .then(images => dispatch(loadRooms(images)));
        
    }
        
}