import axios from 'axios';
import {
    DELETE_CURRICULUM,
    EDIT_CURRICULUM,
    DELETE_SUBJECT,
    EDIT_SUBJECT,
    GET_CURRICULUMS_START,
    GET_CURRICULUMS_SUCCESS,
    GET_CURRICULUMS_FAIL,
    GET_CURRICULUM_START,
    GET_CURRICULUM_SUCCESS,
    GET_CURRICULUM_FAIL,
    CREATE_CURRICULUM_START,
    CREATE_CURRICULUM_SUCCESS,
    CREATE_CURRICULUM_FAIL,
    GET_SUBJECTS_START,
    GET_SUBJECTS_SUCCESS,
    GET_SUBJECTS_FAIL,
    GET_SUBJECT_START,
    GET_SUBJECT_SUCCESS,
    GET_SUBJECT_FAIL,
    CREATE_SUBJECT_START,
    CREATE_SUBJECT_SUCCESS,
    CREATE_SUBJECT_FAIL,
} from '../types/curriculumTypes';
import { subjectsURL, curriculumsURL } from '../constants';
import { createMessage, returnErrors } from './messages';

const getCurriculumListStart = () => {
  return {
    type: GET_CURRICULUMS_START,
  };
};

const getCurriculumListSuccess = curriculums => {
  return {
    type: GET_CURRICULUMS_SUCCESS,
    curriculums
  };
};

const getCurriculumListFail = error => {
  return {
    type: GET_CURRICULUMS_FAIL,
    error: error
  };
};

const getCurriculumDetailStart = () => {
  return {
    type: GET_CURRICULUM_START
  };
};

const getCurriculumDetailSuccess = curriculum => {
  return {
    type: GET_CURRICULUM_SUCCESS,
    curriculum
  };
};

const getCurriculumDetailFail = error => {
  return {
    type: GET_CURRICULUM_FAIL,
    error: error
  };
};

const createCurriculumStart = () => {
  return {
    type: CREATE_CURRICULUM_START,
  };
};


const createCurriculumSuccess = curriculum => {
  return {
    type: CREATE_CURRICULUM_SUCCESS,
    curriculum
  };
};

const createCurriculumFail = error => {
  return {
    type: CREATE_CURRICULUM_FAIL,
    error: error
  };
};

//subjects
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

export const getCurriculums = (query, token) => {
  return dispatch => {
      dispatch(getCurriculumListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${curriculumsURL}?q=${query}`, headers)
        .then(res => {
          const curriculums = res.data;
          dispatch(getCurriculumListSuccess(curriculums));
          })
        .catch(err => {
          dispatch(getCurriculumListStart(err));
        });
    };
};

export const getCurriculum = (id,token) => {
  return dispatch => {
      dispatch(getCurriculumDetailStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${curriculumsURL}${id}`, headers)
        .then(res => {
          const curriculum = res.data;
          dispatch(getCurriculumDetailSuccess(curriculum));
          })
        .catch(err => {
          dispatch(getCurriculumDetailFail(err));
        });
    };
};

export const addCurriculum = (curriculum, token) => {
  return dispatch => {
      dispatch(createCurriculumStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(curriculumsURL, curriculum, headers)
        .then(res => {
          dispatch(createCurriculumSuccess(curriculum));
        })
        .catch(err => {
          dispatch(createCurriculumFail(err));
        });
    };
};

//Delete
export const deleteCurriculum = (id, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.delete(curriculumsURL, id, headers)
        .then(res => {
            dispatch({
                type: DELETE_CURRICULUM,
                payload: id
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Edit
export const editCurriculum = (id, curriculum, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${curriculumsURL}${id}/`, curriculum, headers)
        .then(res => {
            dispatch({
                type: EDIT_CURRICULUM,
                payload: res.data
            });
        }).catch(err => console.log(err))

}

export const getSubjects = (query, token) => {
  return dispatch => {
      dispatch(getSubjectListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${subjectsURL}?q=${query}`, headers)
        .then(res => {
          const subjects = res.data;
          dispatch(getSubjectListSuccess(subjects));
          })
        .catch(err => {
          dispatch(getSubjectListStart(err));
        });
    };
};

export const getSubject = (id,token) => {
  return dispatch => {
      dispatch(getSubjectDetailStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${subjectsURL}${id}`, headers)
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
        .post(subjectsURL, subject, headers)
        .then(res => {
          dispatch(createSubjectSuccess(subject));
        })
        .catch(err => {
          dispatch(createSubjectFail(err));
        });
    };
};

//Delete
export const deleteSubject = (id, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.delete(subjectsURL, id, headers)
        .then(res => {
            dispatch({
                type: DELETE_SUBJECT,
                payload: id
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Edit
export const editSubject = (id, subject, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${subjectsURL}${id}/`, subject, headers)
        .then(res => {
            dispatch({
                type: EDIT_SUBJECT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
