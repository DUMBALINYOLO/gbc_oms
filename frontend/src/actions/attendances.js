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


// Get
export const getAdminAttendances = () => dispatch => {
    axios.get(adminattendancesURL)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete
export const deleteAdminAttendance = (id) => dispatch => {
    axios.delete(adminattendancesURL, id)
        .then(res => {
            dispatch({
                type: DELETE_ATTENDANCE,
                payload: id
            });
        }).catch(err => console.log(err))
}

// Add
export const addAdminAttendance = (attendance) => dispatch => {
    axios.post(adminattendancesURL, attendance)
        .then(res => {
            dispatch({
                type: ADD_ATTENDANCE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//get
export const getAdminAttendance = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/attendance/admin-attendances/${id}`)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCE,
                payload: res.data
            });
        }).catch(err => console.log(err))

}

//Edit
export const editAdminAttendance = (id, attendance) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/attendance/admin-attendances/${id}/`, attendance)
        .then(res => {
            dispatch({
                type: EDIT_ATTENDANCE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



// Get
export const getTeacherAttendances = () => dispatch => {
    axios.get(teacherattendancesURL)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete
export const deleteTeacherAttendance = (id) => dispatch => {
    axios.delete(teacherattendancesURL, id)
        .then(res => {
            dispatch({
                type: DELETE_ATTENDANCE,
                payload: id
            });
        }).catch(err => console.log(err))
}

// Add
export const addTeacherAttendance = (attendance) => dispatch => {
    axios.post(teacherattendancesURL, attendance)
        .then(res => {
            dispatch({
                type: ADD_ATTENDANCE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//get
export const getTeacherAttendance = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/attendance/teacher-attendances/${id}`)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCE,
                payload: res.data
            });
        }).catch(err => console.log(err))

}

//Edit
export const editTeacherAttendance = (id, attendance) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/attendance/teacher-attendances/${id}/`, attendance)
        .then(res => {
            dispatch({
                type: EDIT_ATTENDANCE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



// Get
export const getStudentAttendances = () => dispatch => {
    axios.get(studentattendancesURL)
        .then(res => {
            dispatch({
                type: GET_STUDENT_ATTENDANCES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}




// Get
export const getAdminAttendanceRecords = () => dispatch => {
    axios.get(studentattendancerecordsURL)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCE_RECORDS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

// Add
export const addAttendanceRecord = (record) => dispatch => {
    axios.post(studentattendancerecordsURL, record)
        .then(res => {
            dispatch({
                type: ADD_ATTENDANCE_RECORD,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Edit
export const editAttendanceRecord = (id, record) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/attendance/student-attendance-records/${id}/`, record)
        .then(res => {
            dispatch({
                type: EDIT_ATTENDANCE_RECORD,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



















