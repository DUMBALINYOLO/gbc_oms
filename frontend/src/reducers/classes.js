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
      GET_CLASS_SUBJECTS,
      GET_CLASS_STUDENTS
    } from '../types/classTypes';
import { GET_STUDENTS_CLASS_STATUS_CHOICES } from '../types/choiceTypes';
import { updateObject } from "../utility";

const initialState = {
    classes: [],
    classi: [],
    streams: [],
    classi: [],
    subjects: [],
    subject: [],
    student: [],
    students: [],
    stream: [],
    studentclassstatuschoices: [],
    studymodechoices: [],
    loading: false,
    error: null,
    enrollments: [],
    enrollment: []
}

const getClassListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getClassListSuccess = (state, action) => {
  return updateObject(state, {
    classes: action.classes,
    error: null,
    loading: false
  });
};

const getClassListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const getClassDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getClassDetailSuccess = (state, action) => {
  return updateObject(state, {
    classi: action.classi,
    error: null,
    loading: false
  });
};

const getClassDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createClassStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createClassSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createClassFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getSubjectListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getSubjectListSuccess = (state, action) => {
  return updateObject(state, {
    subjects: action.subjects,
    error: null,
    loading: false
  });
};

const getSubjectListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const getSubjectDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getSubjectDetailSuccess = (state, action) => {
  return updateObject(state, {
    subject: action.subject,
    error: null,
    loading: false
  });
};

const getSubjectDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createSubjectStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createSubjectSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createSubjectFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getStudentListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getStudentListSuccess = (state, action) => {
  return updateObject(state, {
    students: action.students,
    error: null,
    loading: false
  });
};

const getStudentListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getStreamListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getStreamListSuccess = (state, action) => {
  return updateObject(state, {
    streams: action.streams,
    error: null,
    loading: false
  });
};

const getStreamListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createStreamStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createStreamSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createStreamFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getEnrollmentListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getEnrollmentListSuccess = (state, action) => {
  return updateObject(state, {
    enrollments: action.enrollments,
    error: null,
    loading: false
  });
};

const getEnrollmentListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createEnrollmentStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createEnrollmentSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createEnrollmentFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function aa(state = initialState, action){
switch(action.type){
    case GET_CLASS_SUBJECTS:
        return {
            ...state,
            subjects: action.payload
        };
    case GET_CLASS_STUDENTS:
        return {
            ...state,
            students: action.payload
        };
    case GET_ENROLLMENTS_START:
        return getEnrollmentListStart(state, action);
    case GET_ENROLLMENTS_SUCCESS:
        return getEnrollmentListSuccess(state, action);
    case GET_ENROLLMENTS_FAIL:
        return getEnrollmentListFail(state, action);
    case CREATE_ENROLLMENT_START:
        return createEnrollmentStart(state, action);
    case CREATE_ENROLLMENT_SUCCESS:
        return createEnrollmentSuccess(state, action);
    case CREATE_ENROLLMENT_FAIL:
        return createEnrollmentFail(state, action);
    case GET_STUDENTS_SUCCESS:
        return getStudentListSuccess(state, action);
    case GET_STUDENTS_FAIL:
        return getStudentListFail(state, action);
    case GET_STREAMS_START:
        return getStreamListStart(state, action);
    case GET_STREAMS_SUCCESS:
        return getStreamListSuccess(state, action);
    case GET_STREAMS_FAIL:
        return getStreamListFail(state, action);
    case CREATE_STREAM_START:
        return createStreamStart(state, action);
    case CREATE_STREAM_SUCCESS:
        return createStreamSuccess(state, action);
    case CREATE_STREAM_FAIL:
        return createStreamFail(state, action);
    case GET_SUBJECTS_SUCCESS:
        return getSubjectListSuccess(state, action);
    case GET_SUBJECTS_FAIL:
        return getSubjectListFail(state, action);
    case GET_SUBJECT_START:
        return getSubjectDetailStart(state, action);
    case GET_SUBJECT_SUCCESS:
        return getSubjectDetailSuccess(state, action);
    case GET_SUBJECT_FAIL:
        return getSubjectDetailFail(state, action);
    case CREATE_SUBJECT_START:
        return createSubjectStart(state, action);
    case CREATE_SUBJECT_SUCCESS:
        return createSubjectSuccess(state, action);
    case CREATE_SUBJECT_FAIL:
        return createSubjectFail(state, action);
    case GET_CLASSES_START:
        return getClassListStart(state, action);
    case GET_CLASSES_SUCCESS:
        return getClassListSuccess(state, action);
    case GET_CLASSES_FAIL:
        return getClassListFail(state, action);
    case GET_CLASS_START:
        return getClassDetailStart(state, action);
    case GET_CLASS_SUCCESS:
        return getClassDetailSuccess(state, action);
    case GET_CLASS_FAIL:
        return getClassDetailFail(state, action);
    case CREATE_CLASS_START:
        return createClassStart(state, action);
    case CREATE_CLASS_SUCCESS:
        return createClassSuccess(state, action);
    case CREATE_CLASS_FAIL:
        return createClassFail(state, action);
    case GET_STUDY_MODE_CHOICES:
        return {
            ...state,
            studymodechoices: action.payload
        };
    case GET_STUDENTS_CLASS_STATUS_CHOICES:
            return {
                ...state,
                studentclassstatuschoices: action.payload
            };
    case EDIT_CLASS:
        const arrayList = state.classes;
        arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
        return {
            ...state,
            classes: arrayList,
        };
    case EDIT_STREAM:
        const sarrayList = state.classes;
        sarrayList.splice(sarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
        return {
            ...state,
            classes: sarrayList,
        };
    case EDIT_CLASS_SUBJECT:
        const jarrayList = state.subjects;
        arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
        return {
            ...state,
            subjects: arrayList,
        };
    default:
        return state;
}
}
