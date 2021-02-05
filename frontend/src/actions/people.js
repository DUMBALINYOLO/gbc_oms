import axios from 'axios';
import {
        GET_ADMIN_STUDENTS,
        GET_ADMIN_STUDENT,
        GET_ADMIN_BURSARS,
        GET_ADMIN_BURSAR,
        GET_ADMIN_PARENTS,
        GET_ADMIN_PARENT,
        GET_ADMIN_PRINCIPALS,
        GET_ADMIN_PRINCIPAL,
        GET_ADMIN_TEACHERS,
        GET_ADMIN_TEACHER,
        CREATE_TEACHER,
        CREATE_BURSAR,
        CREATE_PRINCIPAL,
        GET_BURSAR_PARENTS,
        GET_BURSAR_PARENT,
        GET_BURSAR_STUDENTS,
        GET_BURSAR_STUDENT,
        GET_BURSAR_PROFILES,
        GET_PRINCIPAL_PROFILES,
        GET_TEACHER_PROFILES,
        GET_PARENT_PROFILES,
        GET_STUDENT_PROFILES,

    } from '../types/peopleTypes';
import {
    adminstudentsURL,
    adminprincipalsURL,
    adminteachersURL,
    adminbursarsURL,
    adminparentsURL,
    bursarparentsURL,
    bursarstudentsURL,
    // createstudentURL,
    createbursarURL,
    createprincipalURL,
    createteacherURL,
    parentprofilesURL,
    principalprofilesURL,
    teacherprofilesURL,
    bursarprofilesURL,
    studentprofilesURL,

} from '../constants';
import { createMessage, returnErrors } from './messages';



export const getPrincipalProfiles = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };

    axios.get(principalprofilesURL)
        .then(res => {
            dispatch({
                type: GET_PRINCIPAL_PROFILES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getBursarProfiles = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(bursarprofilesURL)
        .then(res => {
            dispatch({
                type: GET_BURSAR_PROFILES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getTeacherProfiles = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(teacherprofilesURL)
        .then(res => {
            dispatch({
                type: GET_TEACHER_PROFILES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getParentProfiles = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(parentprofilesURL)
        .then(res => {
            dispatch({
                type: GET_PARENT_PROFILES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getStudentProfiles = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(studentprofilesURL)
        .then(res => {
            dispatch({
                type: GET_STUDENT_PROFILES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}



export const getAdminStudents = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(adminstudentsURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminParents = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(adminparentsURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_PARENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminPrincipals = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(adminprincipalsURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_PRINCIPALS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminBursars = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(adminbursarsURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_BURSARS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminTeachers = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(adminteachersURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_TEACHERS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getBursarParents = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(bursarparentsURL)
        .then(res => {
            dispatch({
                type: GET_BURSAR_PARENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getBursarStudents = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(bursarstudentsURL)
        .then(res => {
            dispatch({
                type: GET_BURSAR_STUDENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getAdminStudent = (id, token ) => dispatch =>{
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`http://127.0.0.1:8000/api/people/admin-students/${id}`)
      .then(res => {
          dispatch({
              type: GET_ADMIN_STUDENT,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getBursarStudent = (id, token) => dispatch =>{
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`http://127.0.0.1:8000/api/people/bursar-students/${id}`)
      .then(res => {
          dispatch({
              type: GET_BURSAR_STUDENT,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getAdminParent = (id, token) => dispatch =>{
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`http://127.0.0.1:8000/api/people/admin-parents/${id}`)
      .then(res => {
          dispatch({
              type: GET_ADMIN_PARENT,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getBursarParent = (id, token) => dispatch =>{
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`http://127.0.0.1:8000/api/people/bursar-parents/${id}`)
      .then(res => {
          dispatch({
              type: GET_BURSAR_PARENT,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getAdminBursar = (id, token) => dispatch =>{
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`http://127.0.0.1:8000/api/people/admin-bursars/${id}`)
      .then(res => {
          dispatch({
              type: GET_ADMIN_BURSAR,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getAdminPrincipal = (id, token) => dispatch =>{
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`http://127.0.0.1:8000/api/people/admin-principals/${id}`)
      .then(res => {
          dispatch({
              type: GET_ADMIN_PRINCIPAL,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getAdminTeacher = (id, token) => dispatch =>{
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`http://127.0.0.1:8000/api/people/admin-teachers/${id}`)
      .then(res => {
          dispatch({
              type: GET_ADMIN_TEACHER,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}


// Add
export const addPrincipal = (principal, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.post(createprincipalURL, principal)
        .then(res => {
            dispatch({
                type: CREATE_PRINCIPAL,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addBursar = (bursar, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.post(createbursarURL, bursar)
        .then(res => {
            dispatch({
                type: CREATE_BURSAR,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addTeacher = (teacher, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.post(createteacherURL, teacher)
        .then(res => {
            dispatch({
                type: CREATE_TEACHER,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}
