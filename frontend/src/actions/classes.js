import axios from 'axios';
import {
        ADD_CLASS,
        GET_CLASSES,
        GET_CLASS,
        EDIT_CLASS,
        ADD_CLASS_SUBJECT,
        GET_CLASS_SUBJECTS,
        GET_CLASS_SUBJECT,
        EDIT_CLASS_SUBJECT,
        GET_CLASS_STUDENTS,
        GET_CLASS_STUDENT,
        ADD_STREAM,
        GET_STREAMS,
        EDIT_STREAM,
        ADD_ENROLLMENT,
        GET_ENROLLMENTS,
        EDIT_ENROLLMENT,
        GET_STUDY_MODE_CHOICES,
    } from '../types/classTypes';
import {
    classesURL,
    classstreamsURL,
    classsubjectsURL,
    classstudentsURL,
    enrollmentsURL,
    studymodechoicesURL
} from '../constants';
import { createMessage, returnErrors } from './messages';


export const getStudyModeChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(studymodechoicesURL, headers)
        .then(res => {
            dispatch({
                type: GET_STUDY_MODE_CHOICES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Get
export const getClasses = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(classesURL, headers)
        .then(res => {
            dispatch({
                type: GET_CLASSES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


// Add
export const addClass = (classi, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(classesURL, classi,headers)
        .then(res => {
            dispatch({
                type: ADD_CLASS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//get
export const getClass = (id, token) => dispatch =>{
      const headers ={
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
            'Accept': 'application/json',
      };
      axios.get(`${classesURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_CLASS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

//Edit
export const editClass = (id, classi, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${classesURL}${id}/`, classi, headers)
        .then(res => {
            dispatch({
                type: EDIT_CLASS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getStreams = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(classstreamsURL, headers)
        .then(res => {
            dispatch({
                type: GET_STREAMS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


// Add
export const addStream = (stream, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(classstreamsURL, stream, headers)
        .then(res => {
            dispatch({
                type: ADD_STREAM,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


//Edit
export const editStream = (id, stream, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${classstreamsURL}${id}/`, stream, headers)
        .then(res => {
            dispatch({
                type: EDIT_STREAM,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//get
export const getSubjects = (id, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${classsubjectsURL}?id=${id}`, headers)
        .then(res => {
            dispatch({
                type: GET_CLASS_SUBJECTS,
                payload: res.data
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
    axios.post(classsubjectsURL, subject,headers)
        .then(res => {
            dispatch({
                type: ADD_CLASS_SUBJECT,
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
      axios.get(`${classsubjectsURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_CLASS_SUBJECT,
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
    axios.patch(`${classsubjectsURL}${id}/`, subject, headers)
        .then(res => {
            dispatch({
                type: EDIT_CLASS_SUBJECT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

// Get
export const getStudents = (id,token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${classstudentsURL}?id=${id}`, headers)
        .then(res => {
            dispatch({
                type: GET_CLASS_STUDENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}



export const getEnrollments = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(enrollmentsURL, headers)
        .then(res => {
            dispatch({
                type: GET_ENROLLMENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


// Add
export const addEnrollment = (enrollment, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(enrollmentsURL, enrollment, headers)
        .then(res => {
            dispatch({
                type: ADD_ENROLLMENT,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


//Edit
export const editEnrollment = (id, enrollment, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${enrollmentsURL}${id}/`, enrollment, headers)
        .then(res => {
            dispatch({
                type: EDIT_ENROLLMENT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
