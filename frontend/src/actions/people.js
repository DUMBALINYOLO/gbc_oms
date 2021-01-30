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


export const getPrincipalProfiles = () => dispatch => {
    axios.get(principalprofilesURL)
        .then(res => {
            dispatch({
                type: GET_PRINCIPAL_PROFILES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getBursarProfiles = () => dispatch => {
    axios.get(bursarprofilesURL)
        .then(res => {
            dispatch({
                type: GET_BURSAR_PROFILES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getTeacherProfiles = () => dispatch => {
    axios.get(teacherprofilesURL)
        .then(res => {
            dispatch({
                type: GET_TEACHER_PROFILES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getParentProfiles = () => dispatch => {
    axios.get(parentprofilesURL)
        .then(res => {
            dispatch({
                type: GET_PARENT_PROFILES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getStudentProfiles = () => dispatch => {
    axios.get(studentprofilesURL)
        .then(res => {
            dispatch({
                type: GET_STUDENT_PROFILES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getAdminStudents = () => dispatch => {
    axios.get(adminstudentsURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDENTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminParents = () => dispatch => {
    axios.get(adminparentsURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_PARENTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminPrincipals = () => dispatch => {
    axios.get(adminprincipalsURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_PRINCIPALS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminBursars = () => dispatch => {
    axios.get(adminbursarsURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_BURSARS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminTeachers = () => dispatch => {
    axios.get(adminteachersURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_TEACHERS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getBursarParents = () => dispatch => {
    axios.get(bursarparentsURL)
        .then(res => {
            dispatch({
                type: GET_BURSAR_PARENTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getBursarStudents = () => dispatch => {
    axios.get(bursarstudentsURL)
        .then(res => {
            dispatch({
                type: GET_BURSAR_STUDENTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getAdminStudent = id => dispatch =>{
    axios.get(`http://127.0.0.1:8000/api/people/admin-students/${id}`)
      .then(res => {
          dispatch({
              type: GET_ADMIN_STUDENT,
              payload: res.data
          });
      }).catch(err => console.log(err))

}

export const getBursarStudent = id => dispatch =>{
    axios.get(`http://127.0.0.1:8000/api/people/bursar-students/${id}`)
      .then(res => {
          dispatch({
              type: GET_BURSAR_STUDENT,
              payload: res.data
          });
      }).catch(err => console.log(err))

}

export const getAdminParent = id => dispatch =>{
    axios.get(`http://127.0.0.1:8000/api/people/admin-parents/${id}`)
      .then(res => {
          dispatch({
              type: GET_ADMIN_PARENT,
              payload: res.data
          });
      }).catch(err => console.log(err))

}

export const getBursarParent = id => dispatch =>{
    axios.get(`http://127.0.0.1:8000/api/people/bursar-parents/${id}`)
      .then(res => {
          dispatch({
              type: GET_BURSAR_PARENT,
              payload: res.data
          });
      }).catch(err => console.log(err))

}

export const getAdminBursar = id => dispatch =>{
    axios.get(`http://127.0.0.1:8000/api/people/admin-bursars/${id}`)
      .then(res => {
          dispatch({
              type: GET_ADMIN_BURSAR,
              payload: res.data
          });
      }).catch(err => console.log(err))

}

export const getAdminPrincipal = id => dispatch =>{
    axios.get(`http://127.0.0.1:8000/api/people/admin-principals/${id}`)
      .then(res => {
          dispatch({
              type: GET_ADMIN_PRINCIPAL,
              payload: res.data
          });
      }).catch(err => console.log(err))

}

export const getAdminTeacher = id => dispatch =>{
    axios.get(`http://127.0.0.1:8000/api/people/admin-teachers/${id}`)
      .then(res => {
          dispatch({
              type: GET_ADMIN_TEACHER,
              payload: res.data
          });
      }).catch(err => console.log(err))

}


// Add
export const addPrincipal = (principal) => dispatch => {
    axios.post(createprincipalURL, principal)
        .then(res => {
            dispatch({
                type: CREATE_PRINCIPAL,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const addBursar = (bursar) => dispatch => {
    axios.post(createbursarURL, bursar)
        .then(res => {
            dispatch({
                type: CREATE_BURSAR,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const addTeacher = (teacher) => dispatch => {
    axios.post(createteacherURL, teacher)
        .then(res => {
            dispatch({
                type: CREATE_TEACHER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}






