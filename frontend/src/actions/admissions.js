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

// Get
export const getAdmissions = () => dispatch => {
    axios.get(studentadmissionsURL)
        .then(res => {
            dispatch({
                type: GET_ADMISSIONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const addAdmission = (admission) => dispatch => {
    axios.post(studentadmissionsURL, admission)
        .then(res => {
            dispatch({
                type: ADD_ADMISSION,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getPendingAdmissions = () => dispatch => {
    axios.get(pendingstudentadmissionsURL)
        .then(res => {
            dispatch({
                type: GET_PENDING_ADMISSIONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getRejectedAdmissions = () => dispatch => {
    axios.get(rejectedstudentadmissionsURL)
        .then(res => {
            dispatch({
                type: GET_REJECTED_ADMISSIONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getMeetingAdmissions = () => dispatch => {
    axios.get(meetingstudentadmissionsURL)
        .then(res => {
            dispatch({
                type: GET_MEETING_ADMISSIONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getAcceptedAdmissions = () => dispatch => {
    axios.get(acceptedstudentadmissionsURL)
        .then(res => {
            dispatch({
                type: GET_ACCEPTED_ADMISSIONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


//Edit
export const editPendingAdmission = (id, admission) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`${pendingstudentadmissionsURL}${id}/`, admission)
        .then(res => {
            dispatch({
                type: EDIT_PENDING_ADMISSIONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const editRejectedAdmission = (id, admission) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`${rejectedstudentadmissionsURL}${id}/`, admission)
        .then(res => {
            dispatch({
                type: EDIT_REJECTED_ADMISSIONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editMeetingAdmission = (id, admission) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`${meetingstudentadmissionsURL}${id}/`, admission)
        .then(res => {
            dispatch({
                type: EDIT_MEETING_ADMISSIONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editAcceptedAdmission = (id, admission) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`${acceptedstudentadmissionsURL}${id}/`, admission)
        .then(res => {
            dispatch({
                type: EDIT_ACCEPTED_ADMISSIONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
