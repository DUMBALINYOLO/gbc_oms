import axios from 'axios';
import {
        ADD_CLASS,
        GET_CLASSES,
        GET_CLASS,
        EDIT_CLASS,
        ADD_STREAM,
        GET_STREAMS,
        EDIT_STREAM,
    } from '../types/classTypes';
import {
    classesURL,
    classstreamsURL,
    classsubjectsURL,
    classstudentsURL,
} from '../constants';
import { createMessage, returnErrors } from './messages';

// Get
export const getClasses = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(classesURL)
        .then(res => {
            dispatch({
                type: GET_CLASSES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


// Add
export const addClass = (classi, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.post(classesURL, classi)
        .then(res => {
            dispatch({
                type: ADD_CLASS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//get
export const getClass = (id, token) => dispatch =>{
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios.get(`http://127.0.0.1:8000/api/classes/classes/${id}`)
        .then(res => {
            dispatch({
                type: GET_CLASS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

//Edit
export const editClass = (id, classi, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/classes/classes/${id}/`, classi)
        .then(res => {
            dispatch({
                type: EDIT_CLASS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getStreams = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(classstreamsURL)
        .then(res => {
            dispatch({
                type: GET_STREAMS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


// Add
export const addStream = (stream, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.post(classstreamsURL, stream)
        .then(res => {
            dispatch({
                type: ADD_STREAM,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


//Edit
export const editStream = (id, stream, token) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/classes/class-streams/${id}/`, stream)
        .then(res => {
            dispatch({
                type: EDIT_STREAM,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}
