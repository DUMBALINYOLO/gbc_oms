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
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(curriculumsURL)
        .then(res => {
            dispatch({
                type: GET_CURRICULUMS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Delete
export const deleteCurriculum = (id, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.delete(curriculumsURL, id)
        .then(res => {
            dispatch({
                type: DELETE_CURRICULUM,
                payload: id
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Add
export const addCurriculum = (curriculum, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.post(curriculumsURL, curriculum)
        .then(res => {
            dispatch({
                type: ADD_CURRICULUM,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//get
export const getCurriculum = (id, token) => dispatch =>{
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios.get(`http://127.0.0.1:8000/api/curriculum/curriculums/${id}`)
        .then(res => {
            dispatch({
                type: GET_CURRICULUM,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

//Edit
export const editCurriculum = (id, curriculum, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/curriculum/curriculums/${id}/`, curriculum)
        .then(res => {
            dispatch({
                type: EDIT_CURRICULUM,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}



// Get
export const getSubjects = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(subjectsURL)
        .then(res => {
            dispatch({
                type: GET_SUBJECTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Delete
export const deleteSubject = (id, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.delete(subjectsURL, id)
        .then(res => {
            dispatch({
                type: DELETE_SUBJECT,
                payload: id
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Add
export const addSubject = (subject, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.post(subjectsURL, subject)
        .then(res => {
            dispatch({
                type: ADD_SUBJECT,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//get
export const getSubject = (id, token) => dispatch =>{
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios.get(`http://127.0.0.1:8000/api/curriculum/subjects/${id}`)
        .then(res => {
            dispatch({
                type: GET_SUBJECT,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

//Edit
export const editSubject = (id, subject, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/curriculum/subjects/${id}/`, subject)
        .then(res => {
            dispatch({
                type: EDIT_SUBJECT,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}
