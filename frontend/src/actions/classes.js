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

// Get
export const getClasses = () => dispatch => {
    axios.get(classesURL)
        .then(res => {
            dispatch({
                type: GET_CLASSES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


// Add
export const addClass = (classi) => dispatch => {
    axios.post(classesURL, classi)
        .then(res => {
            dispatch({
                type: ADD_CLASS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//get
export const getClass = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/classes/classes/${id}`)
        .then(res => {
            dispatch({
                type: GET_CLASS,
                payload: res.data
            });
        }).catch(err => console.log(err))

}

//Edit
export const editClass = (id, classi) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/classes/classes/${id}/`, classi)
        .then(res => {
            dispatch({
                type: EDIT_CLASS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getStreams = () => dispatch => {
    axios.get(classstreamsURL)
        .then(res => {
            dispatch({
                type: GET_STREAMS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


// Add
export const addStream = (stream) => dispatch => {
    axios.post(classstreamsURL, stream)
        .then(res => {
            dispatch({
                type: ADD_STREAM,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


//Edit
export const editStream = (id, stream) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/classes/class-streams/${id}/`, stream)
        .then(res => {
            dispatch({
                type: EDIT_STREAM,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



