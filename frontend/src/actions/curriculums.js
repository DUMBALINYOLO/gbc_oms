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

// Get
export const getCurriculums = () => dispatch => {
    axios.get(curriculumsURL)
        .then(res => {
            dispatch({
                type: GET_CURRICULUMS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete
export const deleteCurriculum = (id) => dispatch => {
    axios.delete(curriculumsURL, id)
        .then(res => {
            dispatch({
                type: DELETE_CURRICULUM,
                payload: id
            });
        }).catch(err => console.log(err))
}

// Add
export const addCurriculum = (curriculum) => dispatch => {
    axios.post(curriculumsURL, curriculum)
        .then(res => {
            dispatch({
                type: ADD_CURRICULUM,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//get
export const getCurriculum = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/curriculum/curriculums/${id}`)
        .then(res => {
            dispatch({
                type: GET_CURRICULUM,
                payload: res.data
            });
        }).catch(err => console.log(err))

}

//Edit
export const editCurriculum = (id, curriculum) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/curriculum/curriculums/${id}/`, curriculum)
        .then(res => {
            dispatch({
                type: EDIT_CURRICULUM,
                payload: res.data
            });
        }).catch(err => console.log(err))

}



// Get
export const getSubjects = () => dispatch => {
    axios.get(subjectsURL)
        .then(res => {
            dispatch({
                type: GET_SUBJECTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete
export const deleteSubject = (id) => dispatch => {
    axios.delete(subjectsURL, id)
        .then(res => {
            dispatch({
                type: DELETE_SUBJECT,
                payload: id
            });
        }).catch(err => console.log(err))
}

// Add
export const addSubject = (subject) => dispatch => {
    axios.post(subjectsURL, subject)
        .then(res => {
            dispatch({
                type: ADD_SUBJECT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//get
export const getSubject = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/curriculum/subjects/${id}`)
        .then(res => {
            dispatch({
                type: GET_SUBJECT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}

//Edit
export const editSubject = (id, subject) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/curriculum/subjects/${id}/`, subject)
        .then(res => {
            dispatch({
                type: EDIT_SUBJECT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}