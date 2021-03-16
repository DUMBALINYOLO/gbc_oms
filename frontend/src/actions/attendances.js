import axios from 'axios';
import {
        DELETE_ATTENDANCE,
        GET_ATTENDANCE,
        EDIT_ATTENDANCE,
        EDIT_ATTENDANCE_RECORD,
        GET_ATTENDANCES_START,
        GET_ATTENDANCES_SUCCESS,
        GET_ATTENDANCES_FAIL,
        GET_ATTENDANCE_RECORDS_START,
        GET_ATTENDANCE_RECORDS_SUCCESS,
        GET_ATTENDANCE_RECORDS_FAIL,
        CREATE_ATTENDANCE_RECORD_START,
        CREATE_ATTENDANCE_RECORD_SUCCESS,
        CREATE_ATTENDANCE_RECORD_FAIL,
        CREATE_ATTENDANCE_START,
        CREATE_ATTENDANCE_SUCCESS,
        CREATE_ATTENDANCE_FAIL,
        GET_STUDENT_ATTENDANCE_RECORDS,
    } from '../types/attendanceTypes';
import {
    adminattendancesURL,
    teacherattendancesURL,
    studentattendancesURL,
    studentattendancerecordsURL,
} from '../constants';
import { createMessage, returnErrors } from './messages';

//attendance
const getAdminAttendanceListStart = () => {
  return {
    type: GET_ATTENDANCES_START
  };
};

const getAdminAttendanceListSuccess = adminattendances => {
  return {
    type: GET_ATTENDANCES_SUCCESS,
    adminattendances
  };
};

const getAdminAttendanceListFail = error => {
  return {
    type: GET_ATTENDANCES_FAIL,
    error: error
  };
};

//add attendance records
const getAdminAttendanceRecordListStart = () => {
  return {
    type: GET_ATTENDANCE_RECORDS_START
  };
};

const getAdminAttendanceRecordListSuccess = attendandancerecords => {
  return {
    type: GET_ATTENDANCE_RECORDS_SUCCESS,
    attendandancerecords
  };
};

const getAdminAttendanceRecordListFail = error => {
  return {
    type: GET_ATTENDANCE_RECORDS_FAIL,
    error: error
  };
};

const createAdminAttendanceRecordStart = () => {
  return {
    type: CREATE_ATTENDANCE_RECORD_START
  };
};

const createAdminAttendanceRecordSuccess = record => {
  return {
    type: CREATE_ATTENDANCE_RECORD_SUCCESS,
    record
  };
};

const createAdminAttendanceRecordFail = error => {
  return {
    type: CREATE_ATTENDANCE_RECORD_FAIL,
    error: error
  };
};

const createAdminAttendanceStart = () => {
  return {
    type: CREATE_ATTENDANCE_START
  };
};

const createAdminAttendanceSuccess = adminattendance => {
  return {
    type: CREATE_ATTENDANCE_SUCCESS,
    adminattendance
  };
};

const createAdminAttendanceFail = error => {
  return {
    type: CREATE_ATTENDANCE_FAIL,
    error: error
  };
};

const createTeacherAttendanceStart = () => {
  return {
    type: CREATE_ATTENDANCE_START
  };
};

const createTeacherAttendanceSuccess = adminattendance => {
  return {
    type: CREATE_ATTENDANCE_SUCCESS,
    adminattendance
  };
};

const createTeacherAttendanceFail = error => {
  return {
    type: CREATE_ATTENDANCE_FAIL,
    error: error
  };
};

//student attendance
const getStudentAttendanceListStart = () => {
  return {
    type: GET_ATTENDANCES_START
  };
};

const getStudentAttendanceListSuccess = adminattendances => {
  return {
    type: GET_ATTENDANCES_SUCCESS,
    adminattendances
  };
};

const getStudentAttendanceListFail = error => {
  return {
    type: GET_ATTENDANCES_FAIL,
    error: error
  };
};

//teacher attendance
const getTeacherAttendanceListStart = () => {
  return {
    type: GET_ATTENDANCES_START
  };
};

const getTeacherAttendanceListSuccess = adminattendances => {
  return {
    type: GET_ATTENDANCES_SUCCESS,
    adminattendances
  };
};

const getTeacherAttendanceListFail = error => {
  return {
    type: GET_ATTENDANCES_FAIL,
    error: error
  };
};


export const getAdminAttendances = (id, token) => {
  return dispatch => {
      dispatch(getAdminAttendanceListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${adminattendancesURL}?id=${id}`, headers)
        .then(res => {
          const adminattendances = res.data;
          dispatch(getAdminAttendanceListSuccess(adminattendances));
          })
        .catch(err => {
          dispatch(getAdminAttendanceListStart(err));
        });
    };
};

export const addAdminAttendance = (adminattendance, token) => {
  return dispatch => {
      dispatch(createAdminAttendanceStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(adminattendancesURL, adminattendance, headers)
        .then(res => {
          dispatch(createAdminAttendanceSuccess(adminattendance));
        })
        .catch(err => {
          dispatch(createAdminAttendanceFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const getTeacherAttendances = (id, token) => {
  return dispatch => {
      dispatch(getTeacherAttendanceListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${teacherattendancesURL}?id=${id}`, headers)
        .then(res => {
          const adminattendances = res.data;
          dispatch(getTeacherAttendanceListSuccess(adminattendances));
          })
        .catch(err => {
          dispatch(getTeacherAttendanceListStart(err));
        });
    };
};

export const addTeacherAttendance = (adminattendance, token) => {
  return dispatch => {
      dispatch(createTeacherAttendanceStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(teacherattendancesURL, adminattendance, headers)
        .then(res => {
          dispatch(createTeacherAttendanceSuccess(adminattendance));
        })
        .catch(err => {
          dispatch(createTeacherAttendanceFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

// export const getStudentAttendances = (id, token) => {
//   return dispatch => {
//       dispatch(getStudentAttendanceListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${studentattendancesURL}?id=${id}`, headers)
//         .then(res => {
//           const adminattendances = res.data;
//
//           dispatch(getStudentAttendanceListSuccess(adminattendances));
//           })
//         .catch(err => {
//           dispatch(getStudentAttendanceListStart(err));
//         });
//     };
// };

export const getStudentAttendances = (email, token) => dispatch => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`${studentattendancesURL}?email=${email}`, headers)
        .then(res => {
            dispatch({
                type: GET_STUDENT_ATTENDANCE_RECORDS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getAdminAttendanceRecords = (id, token) => {
  return dispatch => {
      dispatch(getAdminAttendanceRecordListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${studentattendancerecordsURL}?id=${id}`, headers)
        .then(res => {
          const attendandancerecords = res.data;
          dispatch(getAdminAttendanceRecordListSuccess(attendandancerecords));
          })
        .catch(err => {
          dispatch(getAdminAttendanceRecordListStart(err));
        });
    };
};


export const addAdminAttendanceRecord = (record, token) => {
  return dispatch => {
      dispatch(createAdminAttendanceRecordStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(studentattendancerecordsURL, record, headers)
        .then(res => {
          dispatch(createAdminAttendanceRecordSuccess(record));
        })
        .catch(err => {
          dispatch(createAdminAttendanceRecordFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

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
        }).catch(err => console.log(err))
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
        }).catch(err => console.log(err))
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
        }).catch(err => console.log(err))
}
