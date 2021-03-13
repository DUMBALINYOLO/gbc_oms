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
import { updateObject } from "../utility";

const initialState = {
    subjects: [],
    subject: [],
    curriculums: [],
    curriculum: [],
    loading: false,
    error: null,
}

const getCurriculumListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getCurriculumListSuccess = (state, action) => {
  return updateObject(state, {
    curriculums: action.curriculums,
    error: null,
    loading: false
  });
};

const getCurriculumListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const getCurriculumDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getCurriculumDetailSuccess = (state, action) => {
  return updateObject(state, {
    curriculum: action.curriculum,
    error: null,
    loading: false
  });
};

const getCurriculumDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createCurriculumStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createCurriculumSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createCurriculumFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//
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


export default function (state = initialState, action){
    switch(action.type){
        case GET_CURRICULUMS_START:
            return getCurriculumListStart(state, action);
        case GET_CURRICULUMS_SUCCESS:
            return getCurriculumListSuccess(state, action);
        case GET_CURRICULUMS_FAIL:
            return getCurriculumListFail(state, action);
        case GET_CURRICULUM_START:
            return getCurriculumDetailStart(state, action);
        case GET_CURRICULUM_SUCCESS:
            return getCurriculumDetailSuccess(state, action);
        case GET_CURRICULUM_FAIL:
            return getCurriculumDetailFail(state, action);
        case CREATE_CURRICULUM_START:
            return createCurriculumStart(state, action);
        case CREATE_CURRICULUM_SUCCESS:
            return createCurriculumSuccess(state, action);
        case CREATE_CURRICULUM_FAIL:
            return createCurriculumFail(state, action);
        case GET_SUBJECTS_START:
            return getSubjectListStart(state, action);
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
        case DELETE_SUBJECT:
            return {
                ...state,
                subject: state.subjects.filter(subject=> subject.id !== action.payload)
            };
        case EDIT_SUBJECT:
            const subarrayList = state.subjects;
            subarrayList.splice(subarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                subjects: subarrayList,
            };
        case DELETE_CURRICULUM:
            return {
                ...state,
                curriculum: state.curriculums.filter(curriculum=> curriculum.id !== action.payload)
            };
        case EDIT_CURRICULUM:
            const cuarrayList = state.curriculums;
            cuarrayList.splice(cuarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                curriculums: cuarrayList,
            };
        default:
            return state;
    }
}







