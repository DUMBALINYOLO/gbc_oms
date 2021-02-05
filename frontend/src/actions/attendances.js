import axios from 'axios';
import {
        ADD_ATTENDANCE,
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
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(adminattendancesURL)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Delete
export const deleteAdminAttendance = (id, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.delete(adminattendancesURL, id)
        .then(res => {
            dispatch({
                type: DELETE_ATTENDANCE,
                payload: id
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Add
export const addAdminAttendance = (attendance, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };

    axios.post(adminattendancesURL, attendance)
        .then(res => {
            dispatch({
                type: ADD_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//get
export const getAdminAttendance = (id, token) => dispatch =>{
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios.get(`http://127.0.0.1:8000/api/attendance/admin-attendances/${id}`)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

//Edit
export const editAdminAttendance = (id, attendance, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/attendance/admin-attendances/${id}/`, attendance)
        .then(res => {
            dispatch({
                type: EDIT_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}



// Get
export const getTeacherAttendances = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(teacherattendancesURL)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Delete
export const deleteTeacherAttendance = (id, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.delete(teacherattendancesURL, id)
        .then(res => {
            dispatch({
                type: DELETE_ATTENDANCE,
                payload: id
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Add
export const addTeacherAttendance = (attendance, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.post(teacherattendancesURL, attendance)
        .then(res => {
            dispatch({
                type: ADD_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//get
export const getTeacherAttendance = (id, token) => dispatch =>{
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios.get(`http://127.0.0.1:8000/api/attendance/teacher-attendances/${id}`)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

//Edit
export const editTeacherAttendance = (id, attendance, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/attendance/teacher-attendances/${id}/`, attendance)
        .then(res => {
            dispatch({
                type: EDIT_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}



// Get
export const getStudentAttendances = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(studentattendancesURL)
        .then(res => {
            dispatch({
                type: GET_STUDENT_ATTENDANCES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}




// Get
export const getAdminAttendanceRecords = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(studentattendancerecordsURL)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCE_RECORDS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Add
export const addAttendanceRecord = (record, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.post(studentattendancerecordsURL, record)
        .then(res => {
            dispatch({
                type: ADD_ATTENDANCE_RECORD,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Edit
export const editAttendanceRecord = (id, record, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/attendance/student-attendance-records/${id}/`, record)
        .then(res => {
            dispatch({
                type: EDIT_ATTENDANCE_RECORD,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}
