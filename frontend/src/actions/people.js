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
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };

    axios.get(principalprofilesURL,config)
        .then(res => {
            dispatch({
                type: GET_PRINCIPAL_PROFILES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getBursarProfiles = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(bursarprofilesURL,config)
        .then(res => {
            dispatch({
                type: GET_BURSAR_PROFILES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getTeacherProfiles = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(teacherprofilesURL, config)
        .then(res => {
            dispatch({
                type: GET_TEACHER_PROFILES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getParentProfiles = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(parentprofilesURL,config)
        .then(res => {
            dispatch({
                type: GET_PARENT_PROFILES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getStudentProfiles = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(studentprofilesURL,config)
        .then(res => {
            dispatch({
                type: GET_STUDENT_PROFILES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}



export const getAdminStudents = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(adminstudentsURL,config)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminParents = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(adminparentsURL,config)
        .then(res => {
            dispatch({
                type: GET_ADMIN_PARENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminPrincipals = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(adminprincipalsURL,config)
        .then(res => {
            dispatch({
                type: GET_ADMIN_PRINCIPALS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminBursars = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(adminbursarsURL,config)
        .then(res => {
            dispatch({
                type: GET_ADMIN_BURSARS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminTeachers = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(adminteachersURL,config)
        .then(res => {
            dispatch({
                type: GET_ADMIN_TEACHERS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getBursarParents = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(bursarparentsURL,token)
        .then(res => {
            dispatch({
                type: GET_BURSAR_PARENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getBursarStudents = (token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(bursarstudentsURL,config)
        .then(res => {
            dispatch({
                type: GET_BURSAR_STUDENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getAdminStudent = (id, token ) => dispatch =>{
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(`http://127.0.0.1:8000/api/people/admin-students/${id}`,config)
      .then(res => {
          dispatch({
              type: GET_ADMIN_STUDENT,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getBursarStudent = (id, token) => dispatch =>{
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(`http://127.0.0.1:8000/api/people/bursar-students/${id}`, config)
      .then(res => {
          dispatch({
              type: GET_BURSAR_STUDENT,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getAdminParent = (id, token) => dispatch =>{
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(`http://127.0.0.1:8000/api/people/admin-parents/${id}`,config)
      .then(res => {
          dispatch({
              type: GET_ADMIN_PARENT,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getBursarParent = (id, token) => dispatch =>{
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(`http://127.0.0.1:8000/api/people/bursar-parents/${id}`, config)
      .then(res => {
          dispatch({
              type: GET_BURSAR_PARENT,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getAdminBursar = (id, token) => dispatch =>{
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(`http://127.0.0.1:8000/api/people/admin-bursars/${id}`, config)
      .then(res => {
          dispatch({
              type: GET_ADMIN_BURSAR,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getAdminPrincipal = (id, token) => dispatch =>{
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(`http://127.0.0.1:8000/api/people/admin-principals/${id}`, config)
      .then(res => {
          dispatch({
              type: GET_ADMIN_PRINCIPAL,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const getAdminTeacher = (id, token) => dispatch =>{
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.get(`http://127.0.0.1:8000/api/people/admin-teachers/${id}`, config)
      .then(res => {
          dispatch({
              type: GET_ADMIN_TEACHER,
              payload: res.data
          });
      }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}


// Add
export const addPrincipal = (principal, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.post(createprincipalURL, principal, config)
        .then(res => {
            dispatch({
                type: CREATE_PRINCIPAL,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addBursar = (bursar, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.post(createbursarURL, bursar, config)
        .then(res => {
            dispatch({
                type: CREATE_BURSAR,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addTeacher = (teacher, token) => dispatch => {
    const config =  {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        }
    };
    axios.post(createteacherURL, teacher, config)
        .then(res => {
            dispatch({
                type: CREATE_TEACHER,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}
