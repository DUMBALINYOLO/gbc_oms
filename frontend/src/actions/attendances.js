import axios from 'axios';
import {
        ADD_ATTENDANCE,
        ADD_TEACHER_ATTENDANCE,
        GET_ATTENDANCES,
        DELETE_ATTENDANCE,
        GET_ATTENDANCE,
        EDIT_ATTENDANCE,
        GET_STUDENT_ATTENDANCES,
        ADD_ATTENDANCE_RECORD,
        GET_ATTENDANCE_RECORDS,
        EDIT_ATTENDANCE_RECORD,
    } from '../types/attendanceTypes';
import {
    adminattendancesURL,
    teacherattendancesURL,
    studentattendancesURL,
    studentattendancerecordsURL,
} from '../constants';
import { createMessage, returnErrors } from './messages';


// Get
export const getAdminAttendances = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        };
    axios.get(adminattendancesURL, headers)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Delete
export const deleteAdminAttendance = (id, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.delete(adminattendancesURL, headers)
        .then(res => {
            dispatch({
                type: DELETE_ATTENDANCE,
                payload: id
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Add
export const addAdminAttendance = (attendance, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };

    axios.post(adminattendancesURL, attendance, headers)
        .then(res => {
            dispatch({
                type: ADD_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


//get
export const getAdminAttendance = (id, token) => dispatch =>{
      const headers ={
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
            'Accept': 'application/json',
      };
      axios.get(`${adminattendancesURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Edit
export const editAdminAttendance = (id, attendance, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${adminattendancesURL}${id}/`, attendance, headers)
        .then(res => {
            dispatch({
                type: EDIT_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Get
export const getTeacherAttendances = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(teacherattendancesURL, headers)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Delete
export const deleteTeacherAttendance = (id, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.delete(teacherattendancesURL, id, headers)
        .then(res => {
            dispatch({
                type: DELETE_ATTENDANCE,
                payload: id
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Add
export const addTeacherAttendance = (attendance, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(teacherattendancesURL, attendance, headers)
        .then(res => {
            dispatch({
                type: ADD_TEACHER_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//get
export const getTeacherAttendance = (id, token) => dispatch =>{
      const headers ={
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
            'Accept': 'application/json',
      };
      axios.get(`${teacherattendancesURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

//Edit
export const editTeacherAttendance = (id, attendance, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${teacherattendancesURL}${id}/`, attendance, headers)
        .then(res => {
            dispatch({
                type: EDIT_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Get
export const getStudentAttendances = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(studentattendancesURL, headers)
        .then(res => {
            dispatch({
                type: GET_STUDENT_ATTENDANCES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Get
export const getAdminAttendanceRecords = (attendance_id, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${studentattendancerecordsURL}?id=${attendance_id}`, headers)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCE_RECORDS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Add
export const addAttendanceRecord = (record, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(studentattendancerecordsURL, record, headers)
        .then(res => {
            dispatch({
                type: ADD_ATTENDANCE_RECORD,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Edit
export const editAttendanceRecord = (id, record, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${studentattendancerecordsURL}${id}/`, record, headers)
        .then(res => {
            dispatch({
                type: EDIT_ATTENDANCE_RECORD,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}
