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
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(adminattendancesURL, config)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Delete
export const deleteAdminAttendance = (id, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.delete(adminattendancesURL, config)
        .then(res => {
            dispatch({
                type: DELETE_ATTENDANCE,
                payload: id
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Add
export const addAdminAttendance = (attendance, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };

    axios.post(adminattendancesURL, attendance, config)
        .then(res => {
            dispatch({
                type: ADD_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


//get
export const getAdminAttendance = id => dispatch =>{
      const config =  {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
            'Accept': 'application/json',
          }
      };
      axios.get(`${adminattendancesURL}${id}/`, config)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Edit
export const editAdminAttendance = (id, attendance, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${adminattendancesURL}${id}/`, attendance, config)
        .then(res => {
            dispatch({
                type: EDIT_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Get
export const getTeacherAttendances = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(teacherattendancesURL, config)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Delete
export const deleteTeacherAttendance = (id, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.delete(teacherattendancesURL, id, config)
        .then(res => {
            dispatch({
                type: DELETE_ATTENDANCE,
                payload: id
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Add
export const addTeacherAttendance = (attendance, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.post(teacherattendancesURL, attendance, config)
        .then(res => {
            dispatch({
                type: ADD_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//get
export const getTeacherAttendance = (id, token) => dispatch =>{
      const config =  {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
            'Accept': 'application/json',
          }
      };
      axios.get(`${teacherattendancesURL}${id}/`, config)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

//Edit
export const editTeacherAttendance = (id, attendance, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${teacherattendancesURL}${id}/`, attendance, config)
        .then(res => {
            dispatch({
                type: EDIT_ATTENDANCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Get
export const getStudentAttendances = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(studentattendancesURL, token)
        .then(res => {
            dispatch({
                type: GET_STUDENT_ATTENDANCES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Get
export const getAdminAttendanceRecords = (attendance_id, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(`${studentattendancerecordsURL}?id=${attendance_id}`, config)
        .then(res => {
            dispatch({
                type: GET_ATTENDANCE_RECORDS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Add
export const addAttendanceRecord = (record, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.post(studentattendancerecordsURL, record, config)
        .then(res => {
            dispatch({
                type: ADD_ATTENDANCE_RECORD,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Edit
export const editAttendanceRecord = (id, record, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${studentattendancerecordsURL}${id}/`, record, config)
        .then(res => {
            dispatch({
                type: EDIT_ATTENDANCE_RECORD,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}
