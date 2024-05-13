import * as actionTypes from './actionTypes'
import axios from 'axios'
import { APIKEY, signINUrl, signUpUrl } from './baseUrl'


export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token: token,
            userId: userId,
        }
    }
}

export const authLoading = (isLoading) => {
    return {
        type: actionTypes.AUTH_LOADING,
        payload: isLoading,
    }
}

export const authFailed = errMsg => {
    return {
        type: actionTypes.AUTH_FAILED,
        payload: errMsg,
    }
}

export const auth =(data, mode) => dispatch => {
    dispatch(authLoading(true));
    const authData = data;
    let authUrl = null;

    if(mode === "Sign Up") {
        authUrl = signUpUrl
    }else {
        authUrl = signINUrl;
    }

    const API_KEY = APIKEY;
    axios.post(authUrl+API_KEY, authData)
    .then(response => {
        dispatch(authLoading(false));
        const expirationTime = new Date((new Date().getTime()) + (response.data.expiresIn * 1000))
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('userId', response.data.localId);
        localStorage.setItem('expirationTime', expirationTime);
        dispatch(authSuccess(response.data.idToken, response.data.localId))
    })
    .catch(err =>{
        console.log("Error Message:", err)
        dispatch(authLoading(false));
        dispatch(authFailed(err.response.data.error.message));
    });
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationTime');
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const authCheck = () => dispatch => {
    const token = localStorage.getItem('token');
    if(!token) {
        dispatch(logout());
    } else {
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if(expirationTime <= new Date()) {
            dispatch(logout());
        } else {
            const userId =localStorage.getItem('userId');
            dispatch(authSuccess(token, userId));
        }
    }
}