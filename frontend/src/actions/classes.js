import axios from 'axios';
import {
      EDIT_CLASS,
      EDIT_CLASS_SUBJECT,
      EDIT_STREAM,
      EDIT_ENROLLMENT,
      GET_STUDY_MODE_CHOICES,
      GET_CLASSES_START,
      GET_CLASSES_SUCCESS,
      GET_CLASSES_FAIL,
      CREATE_CLASS_START,
      CREATE_CLASS_SUCCESS,
      CREATE_CLASS_FAIL,
      GET_CLASS_START,
      GET_CLASS_SUCCESS,
      GET_CLASS_FAIL,
      GET_SUBJECTS_START,
      GET_SUBJECTS_SUCCESS,
      GET_SUBJECTS_FAIL,
      CREATE_SUBJECT_START,
      CREATE_SUBJECT_SUCCESS,
      CREATE_SUBJECT_FAIL,
      GET_SUBJECT_START,
      GET_SUBJECT_SUCCESS,
      GET_SUBJECT_FAIL,
      GET_STUDENTS_START,
      GET_STUDENTS_SUCCESS,
      GET_STUDENTS_FAIL,
      GET_STREAMS_START,
      GET_STREAMS_SUCCESS,
      GET_STREAMS_FAIL,
      CREATE_STREAM_START,
      CREATE_STREAM_SUCCESS,
      CREATE_STREAM_FAIL,
      GET_ENROLLMENTS_START,
      GET_ENROLLMENTS_SUCCESS,
      GET_ENROLLMENTS_FAIL,
      CREATE_ENROLLMENT_START,
      CREATE_ENROLLMENT_SUCCESS,
      CREATE_ENROLLMENT_FAIL,
      GET_CLASS_STUDENTS,
      GET_CLASS_SUBJECTS,
    } from '../types/classTypes';


import {
    classesURL,
    classstreamsURL,
    classsubjectsURL,
    classstudentsURL,
    enrollmentsURL,
    studymodechoicesURL,
    unenrolledstudentsURL,
} from '../constants';
import { createMessage, returnErrors } from './messages';


//class
const getClassListStart = () => {
  return {
    type: GET_CLASSES_START
  };
};

const getClassListSuccess = classes => {
  return {
    type: GET_CLASSES_SUCCESS,
    classes
  };
};

const getClassListFail = error => {
  return {
    type: GET_CLASSES_FAIL,
    error: error
  };
};

const createClassStart = () => {
  return {
    type: CREATE_CLASS_START
  };
};


const createClassSuccess = classi => {
  return {
    type: CREATE_CLASS_SUCCESS,
    classi
  };
};

const createClassFail = error => {
  return {
    type: CREATE_CLASS_FAIL,
    error: error
  };
};

const getClassDetailStart = () => {
  return {
    type: GET_CLASS_START
  };
};

const getClassDetailSuccess = classi => {
  return {
    type: GET_CLASS_SUCCESS,
    classi
  };
};

const getClassDetailFail = error => {
  return {
    type: GET_CLASS_FAIL,
    error: error
  };
};

//class subject
const getSubjectListStart = () => {
  return {
    type: GET_SUBJECTS_START
  };
};

const getSubjectListSuccess = subjects => {
  return {
    type: GET_SUBJECTS_SUCCESS,
    subjects
  };
};

const getSubjectListFail = error => {
  return {
    type: GET_SUBJECTS_FAIL,
    error: error
  };
};

const createSubjectStart = () => {
  return {
    type: CREATE_SUBJECT_START
  };
};


const createSubjectSuccess = subject => {
  return {
    type: CREATE_SUBJECT_SUCCESS,
    subject
  };
};

const createSubjectFail = error => {
  return {
    type: CREATE_SUBJECT_FAIL,
    error: error
  };
};

const getSubjectDetailStart = () => {
  return {
    type: GET_SUBJECT_START
  };
};

const getSubjectDetailSuccess = subject => {
  return {
    type: GET_SUBJECT_SUCCESS,
    subject
  };
};

const getSubjectDetailFail = error => {
  return {
    type: GET_SUBJECT_FAIL,
    error: error
  };
};

//class student
const getStudentListStart = () => {
  return {
    type: GET_SUBJECTS_START
  };
};

const getStudentListSuccess = students => {
  return {
    type: GET_SUBJECTS_SUCCESS,
    students
  };
};

const getStudentListFail = error => {
  return {
    type: GET_SUBJECTS_FAIL,
    error: error
  };
};

//stream
const getStreamListStart = () => {
  return {
    type: GET_STREAMS_START
  };
};

const getStreamListSuccess = streams => {
  return {
    type: GET_STREAMS_SUCCESS,
    streams
  };
};

const getStreamListFail = error => {
  return {
    type: GET_STREAMS_FAIL,
    error: error
  };
};

const createStreamStart = () => {
  return {
    type: CREATE_STREAM_START
  };
};


const createStreamSuccess = stream => {
  return {
    type: CREATE_STREAM_SUCCESS,
    stream
  };
};

const createStreamFail = error => {
  return {
    type: CREATE_STREAM_FAIL,
    error: error
  };
};

//enrollment
const getEnrollmentListStart = () => {
  return {
    type: GET_ENROLLMENTS_START
  };
};

const getEnrollmentListSuccess = enrollments => {
  return {
    type: GET_ENROLLMENTS_SUCCESS,
    enrollments
  };
};

const getEnrollmentListFail = error => {
  return {
    type: GET_ENROLLMENTS_FAIL,
    error: error
  };
};

const createEnrollmentStart = () => {
  return {
    type: CREATE_ENROLLMENT_START
  };
};


const createEnrollmentSuccess = enrollment => {
  return {
    type: CREATE_ENROLLMENT_SUCCESS,
    enrollment
  };
};

const createEnrollmentFail = error => {
  return {
    type: CREATE_ENROLLMENT_FAIL,
    error: error
  };
};

export const getClasses = (id, token) => {
  return dispatch => {
      dispatch(getClassListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${classesURL}?id=${id}`, headers)
        .then(res => {
          const classes = res.data;
          dispatch(getClassListSuccess(classes));
          })
        .catch(err => {
          dispatch(getClassListStart(err));
        });
    };
};


export const getClass = (id,token) => {
  return dispatch => {
      dispatch(getClassDetailStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${classesURL}${id}`, headers)
        .then(res => {
          const classi = res.data;
          dispatch(getClassDetailSuccess(classi));
          })
        .catch(err => {
          dispatch(getClassDetailFail(err));
        });
    };
};



export const addClass = (classi, token) => {
  return dispatch => {
      dispatch(createClassStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(classesURL, classi, headers)
        .then(res => {
          dispatch(createClassSuccess(classi));
        })
        .catch(err => {
          dispatch(createClassFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const getStreams = (id, token) => {
  return dispatch => {
      dispatch(getStreamListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${classstreamsURL}?id=${id}`, headers)
        .then(res => {
          const streams = res.data;
          dispatch(getStreamListSuccess(streams));
          })
        .catch(err => {
          dispatch(getStreamListStart(err));
        });
    };
};

export const addStream = (stream, token) => {
  return dispatch => {
      dispatch(createStreamStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(classstreamsURL, stream, headers)
        .then(res => {
          dispatch(createStreamSuccess(stream));
        })
        .catch(err => {
          dispatch(createStreamFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

// export const getSubjects = (id, token) => {
//   return dispatch => {
//       dispatch(getSubjectListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${classsubjectsURL}?id=${id}`, headers)
//         .then(res => {
//           const subjects = res.data;
//           dispatch(getSubjectListSuccess(subjects));
//           })
//         .catch(err => {
//           dispatch(getSubjectListStart(err));
//         });
//     };
// };

export const getSubjects = (id, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${classsubjectsURL}?id=${id}`, headers)
        .then(res => {
            dispatch({
                type: GET_CLASS_SUBJECTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getSubject = (id,token) => {
  return dispatch => {
      dispatch(getSubjectDetailStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${classsubjectsURL}${id}`, headers)
        .then(res => {
          const subject = res.data;
          dispatch(getSubjectDetailSuccess(subject));
          })
        .catch(err => {
          dispatch(getSubjectDetailFail(err));
        });
    };
};

export const addSubject = (subject, token) => {
  return dispatch => {
      dispatch(createSubjectStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(classsubjectsURL, subject, headers)
        .then(res => {
          dispatch(createSubjectSuccess(subject));
        })
        .catch(err => {
          dispatch(createSubjectFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const getEnrollments = (id, token) => {
  return dispatch => {
      dispatch(getEnrollmentListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${enrollmentsURL}?id=${id}`, headers)
        .then(res => {
          const enrollments = res.data;
          dispatch(getEnrollmentListSuccess(enrollments));
          })
        .catch(err => {
          dispatch(getEnrollmentListStart(err));
        });
    };
};

export const addEnrollment = (enrollment, token) => {
  return dispatch => {
      dispatch(createEnrollmentStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(enrollmentsURL, enrollment, headers)
        .then(res => {
          dispatch(createEnrollmentSuccess(enrollment));
        })
        .catch(err => {
          dispatch(createEnrollmentFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

// export const getStudents = (id, token) => {
//   return dispatch => {
//       dispatch(getStudentListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${classstudentsURL}?id=${id}`, headers)
//         .then(res => {
//           const students = res.data;
//           dispatch(getStudentListSuccess(students));
//           })
//         .catch(err => {
//           dispatch(getStudentListStart(err));
//         });
//     };
// };

export const getStudents = (id,token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(`${classstudentsURL}?id=${id}`, headers)
        .then(res => {
            dispatch({
                type: GET_CLASS_STUDENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getStudyModeChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(studymodechoicesURL, headers)
        .then(res => {
            dispatch({
                type: GET_STUDY_MODE_CHOICES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Edit
export const editClass = (id, classi, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${classesURL}${id}/`, classi, headers)
        .then(res => {
            dispatch({
                type: EDIT_CLASS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Edit
export const editStream = (id, stream, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${classstreamsURL}${id}/`, stream, headers)
        .then(res => {
            dispatch({
                type: EDIT_STREAM,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Edit
export const editSubject = (id, subject, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${classsubjectsURL}${id}/`, subject, headers)
        .then(res => {
            dispatch({
                type: EDIT_CLASS_SUBJECT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Edit
export const editEnrollment = (id, enrollment, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${enrollmentsURL}${id}/`, enrollment, headers)
        .then(res => {
            dispatch({
                type: EDIT_ENROLLMENT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
