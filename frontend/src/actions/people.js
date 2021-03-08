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
        CREATE_STUDENT,
        CREATE_PARENT,
        GET_STUDENT_PROFILE,
        EDIT_STUDENT_PROFILE,
        GET_TEACHER_PROFILE,
        EDIT_TEACHER_PROFILE,
        GET_PARENT_PROFILE,
        EDIT_PARENT_PROFILE,
        GET_PRINCIPAL_PROFILE,
        EDIT_PRINCIPAL_PROFILE,
        GET_BURSAR_PROFILE,
        EDIT_BURSAR_PROFILE

    } from '../types/peopleTypes';
import {
    adminstudentsURL,
    adminprincipalsURL,
    adminteachersURL,
    adminbursarsURL,
    adminparentsURL,
    bursarparentsURL,
    bursarstudentsURL,
    createstudentURL,
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
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };

    axios.get(principalprofilesURL,headers)
        .then(res => {
            dispatch({
                type: GET_PRINCIPAL_PROFILES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getBursarProfiles = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(bursarprofilesURL,headers)
        .then(res => {
            dispatch({
                type: GET_BURSAR_PROFILES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getTeacherProfiles = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(teacherprofilesURL, headers)
        .then(res => {
            dispatch({
                type: GET_TEACHER_PROFILES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getParentProfiles = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(parentprofilesURL,headers)
        .then(res => {
            dispatch({
                type: GET_PARENT_PROFILES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getStudentProfiles = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(studentprofilesURL,headers)
        .then(res => {
            dispatch({
                type: GET_STUDENT_PROFILES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getStudentProfile = (id,token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${adminstudentsURL}${id}/profile/`, headers)
        .then(res => {
            dispatch({
                type: GET_STUDENT_PROFILE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const editStudentProfile = (id, profile, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(`${adminstudentsURL}${id}/edit_profile/`, profile, headers)
        .then(res => {
            dispatch({
                type: EDIT_STUDENT_PROFILE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminStudents = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        };
    axios.get(adminstudentsURL,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getTeacherProfile = (id,token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${adminteachersURL}${id}/profile/`, headers)
        .then(res => {
            dispatch({
                type: GET_TEACHER_PROFILE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const editTeacherProfile = (id, profile, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(`${adminteachersURL}${id}/edit_profile/`, profile, headers)
        .then(res => {
            dispatch({
                type: EDIT_TEACHER_PROFILE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getParentProfile = (id,token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${adminparentsURL}${id}/profile/`, headers)
        .then(res => {
            dispatch({
                type: GET_PARENT_PROFILE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const editParentProfile = (id, profile, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(`${adminparentsURL}${id}/edit_profile/`, profile, headers)
        .then(res => {
            dispatch({
                type: EDIT_PARENT_PROFILE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getPrincipalProfile = (id,token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${adminprincipalsURL}${id}/profile/`, headers)
        .then(res => {
            dispatch({
                type: GET_PRINCIPAL_PROFILE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const editPrincipalProfile = (id, profile, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(`${adminprincipalsURL}${id}/edit_profile/`, profile, headers)
        .then(res => {
            dispatch({
                type: EDIT_PRINCIPAL_PROFILE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getBursarProfile = (id,token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${adminbursarsURL}${id}/profile/`, headers)
        .then(res => {
            dispatch({
                type: GET_BURSAR_PROFILE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const editBursarProfile = (id, profile, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(`${adminbursarsURL}${id}/edit_profile/`, profile, headers)
        .then(res => {
            dispatch({
                type: EDIT_BURSAR_PROFILE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminParents = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(adminparentsURL,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_PARENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminPrincipals = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(adminprincipalsURL,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_PRINCIPALS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminBursars = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(adminbursarsURL,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_BURSARS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminTeachers = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(adminteachersURL,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_TEACHERS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getBursarParents = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(bursarparentsURL,headers)
        .then(res => {
            dispatch({
                type: GET_BURSAR_PARENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getBursarStudents = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(bursarstudentsURL,headers)
        .then(res => {
            dispatch({
                type: GET_BURSAR_STUDENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getAdminStudent = (id, token ) => dispatch =>{
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${adminstudentsURL}${id}/`,headers)
      .then(res => {
          dispatch({
              type: GET_ADMIN_STUDENT,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getBursarStudent = (id, token) => dispatch =>{
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${bursarstudentsURL}${id}/`, headers)
      .then(res => {
          dispatch({
              type: GET_BURSAR_STUDENT,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getAdminParent = (id, token) => dispatch =>{
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${adminparentsURL}${id}/`,headers)
      .then(res => {
          dispatch({
              type: GET_ADMIN_PARENT,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getBursarParent = (id, token) => dispatch =>{
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${bursarparentsURL}${id}/`, headers)
      .then(res => {
          dispatch({
              type: GET_BURSAR_PARENT,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getAdminBursar = (id, token) => dispatch =>{
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${adminbursarsURL}${id}/`, headers)
      .then(res => {
          dispatch({
              type: GET_ADMIN_BURSAR,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getAdminPrincipal = (id, token) => dispatch =>{
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${adminprincipalsURL}${id}/`, headers)
      .then(res => {
          dispatch({
              type: GET_ADMIN_PRINCIPAL,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getAdminTeacher = (id, token) => dispatch =>{
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${adminteachersURL}${id}/`, headers)
      .then(res => {
          dispatch({
              type: GET_ADMIN_TEACHER,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}


// Add
export const addPrincipal = (principal, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(createprincipalURL, principal, headers)
        .then(res => {
            dispatch({
                type: CREATE_PRINCIPAL,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addBursar = (bursar, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(createbursarURL, bursar, headers)
        .then(res => {
            dispatch({
                type: CREATE_BURSAR,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const addStudent = (bursar) => dispatch => {
    axios.post(createstudentURL, bursar)
        .then(res => {
            dispatch({
                type: CREATE_STUDENT,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}



export const addTeacher = (teacher, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(createteacherURL, teacher, headers)
        .then(res => {
            dispatch({
                type: CREATE_TEACHER,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addParent = (parent, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(adminparentsURL, parent, headers)
        .then(res => {
            dispatch({
                type: CREATE_PARENT,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}