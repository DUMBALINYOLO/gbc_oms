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
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(classesURL, config)
        .then(res => {
            dispatch({
                type: GET_CLASSES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


// Add
export const addClass = (classi, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.post(classesURL, classi,config)
        .then(res => {
            dispatch({
                type: ADD_CLASS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//get
export const getClass = (id, token) => dispatch =>{
      const config =  {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
            'Accept': 'application/json',
          }
      };
      axios.get(`${classesURL}${id}/`, config)
        .then(res => {
            dispatch({
                type: GET_CLASS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

//Edit
export const editClass = (id, classi, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${classesURL}${id}/`, classi, config)
        .then(res => {
            dispatch({
                type: EDIT_CLASS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getStreams = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(classstreamsURL, config)
        .then(res => {
            dispatch({
                type: GET_STREAMS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


// Add
export const addStream = (stream, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.post(classstreamsURL, stream, config)
        .then(res => {
            dispatch({
                type: ADD_STREAM,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


//Edit
export const editStream = (id, stream, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${classstreamsURL}${id}/`, stream, config)
        .then(res => {
            dispatch({
                type: EDIT_STREAM,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}
