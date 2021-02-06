import axios from 'axios';
import {
    ADD_ADMISSION,
    GET_ADMISSIONS,
    GET_PENDING_ADMISSIONS,
    EDIT_PENDING_ADMISSIONS,
    GET_REJECTED_ADMISSIONS,
    EDIT_REJECTED_ADMISSIONS,
    GET_ACCEPTED_ADMISSIONS,
    EDIT_ACCEPTED_ADMISSIONS,
    GET_MEETING_ADMISSIONS,
    EDIT_MEETING_ADMISSIONS

} from '../types/admissionTypes';
import {
    studentadmissionsURL,
    pendingstudentadmissionsURL,
    rejectedstudentadmissionsURL,
    meetingstudentadmissionsURL,
    acceptedstudentadmissionsURL,
} from '../constants';
import { createMessage, returnErrors } from './messages';


// Get
export const getAdmissions = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(studentadmissionsURL, config)
        .then(res => {
            dispatch({
                type: GET_ADMISSIONS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Delete

export const addAdmission = (admission, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.post(studentadmissionsURL, admission, config)
        .then(res => {
            dispatch({
                type: ADD_ADMISSION,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getPendingAdmissions = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(pendingstudentadmissionsURL, config)
        .then(res => {
            dispatch({
                type: GET_PENDING_ADMISSIONS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getRejectedAdmissions = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(rejectedstudentadmissionsURL, config)
        .then(res => {
            dispatch({
                type: GET_REJECTED_ADMISSIONS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getMeetingAdmissions = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(meetingstudentadmissionsURL, config)
        .then(res => {
            dispatch({
                type: GET_MEETING_ADMISSIONS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getAcceptedAdmissions = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(acceptedstudentadmissionsURL, config)
        .then(res => {
            dispatch({
                type: GET_ACCEPTED_ADMISSIONS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


//Edit
export const editPendingAdmission = (id, admission, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    JSON.stringify(id, null, 3)
    axios.put(`http://127.0.0.1:8000/api/admissions/pending-student-admissions/${id}/`, admission, config)
        .then(res => {
            dispatch({
                type: EDIT_PENDING_ADMISSIONS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editRejectedAdmission = (id, admission, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    JSON.stringify(id, null, 3)
    axios.put(`http://127.0.0.1:8000/api/admissions/rejected-student-admissions/${id}/`, admission, config)
        .then(res => {
            dispatch({
                type: EDIT_REJECTED_ADMISSIONS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editMeetingAdmission = (id, admission, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    JSON.stringify(id, null, 3)
    axios.put(`http://127.0.0.1:8000/api/admissions/meeting-student-admissions/${id}/`, admission, config)
        .then(res => {
            dispatch({
                type: EDIT_MEETING_ADMISSIONS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editAcceptedAdmission = (id, admission, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    JSON.stringify(id, null, 3)
    axios.put(`http://127.0.0.1:8000/api/admissions/accepted-student-admissions/${id}/`, admission, config)
        .then(res => {
            dispatch({
                type: EDIT_ACCEPTED_ADMISSIONS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}
