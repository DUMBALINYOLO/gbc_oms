import axios from 'axios';
import {
    ADD_CURRICULUM,
    GET_CURRICULUMS,
    DELETE_CURRICULUM,
    GET_CURRICULUM,
    EDIT_CURRICULUM,
    ADD_SUBJECT,
    GET_SUBJECTS,
    DELETE_SUBJECT,
    GET_SUBJECT,
    EDIT_SUBJECT,
} from '../types/curriculumTypes';
import { subjectsURL, curriculumsURL } from '../constants';
import { createMessage, returnErrors } from './messages';


// Get
export const getCurriculums = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(curriculumsURL, headers)
        .then(res => {
            dispatch({
                type: GET_CURRICULUMS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Delete
export const deleteCurriculum = (id, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.delete(curriculumsURL, id, headers)
        .then(res => {
            dispatch({
                type: DELETE_CURRICULUM,
                payload: id
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Add
export const addCurriculum = (curriculum, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(curriculumsURL, curriculum, headers)
        .then(res => {
            dispatch({
                type: ADD_CURRICULUM,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//get
export const getCurriculum = (id, token) => dispatch =>{
      const headers ={
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
            'Accept': 'application/json',
      };
      axios.get(`${curriculumsURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_CURRICULUM,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

//Edit
export const editCurriculum = (id, curriculum, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${curriculumsURL}${id}/`, curriculum, headers)
        .then(res => {
            dispatch({
                type: EDIT_CURRICULUM,
                payload: res.data
            });
        }).catch(err => console.log(err))

}



// Get
export const getSubjects = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(subjectsURL, headers)
        .then(res => {
            dispatch({
                type: GET_SUBJECTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Delete
export const deleteSubject = (id, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.delete(subjectsURL, id, headers)
        .then(res => {
            dispatch({
                type: DELETE_SUBJECT,
                payload: id
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Add
export const addSubject = (subject, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(subjectsURL, subject, headers)
        .then(res => {
            dispatch({
                type: ADD_SUBJECT,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//get
export const getSubject = (id, token) => dispatch =>{
      const headers ={
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
            'Accept': 'application/json',
      };
      axios.get(`${subjectsURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_SUBJECT,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

//Edit
export const editSubject = (id, subject, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${subjectsURL}${id}/`, subject, headers)
        .then(res => {
            dispatch({
                type: EDIT_SUBJECT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
