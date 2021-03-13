import {
    EDIT_COURSE_ADVERT,
    GET_COURSE_ADVERTS_START,
    GET_COURSE_ADVERTS_SUCCESS,
    GET_COURSE_ADVERTS_FAIL,
    GET_COURSE_ADVERT_START,
    GET_COURSE_ADVERT_SUCCESS,
    GET_COURSE_ADVERT_FAIL,
    CREATE_COURSE_ADVERT_START,
    CREATE_COURSE_ADVERT_SUCCESS,
    CREATE_COURSE_ADVERT_FAIL,
} from '../types/advertTypes'
import { updateObject } from "../utility";


const initialState = {
    courseadverts: [],
    advert: {},
    loading: false,
    error: null,
}

const getCourseAdvertListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getCourseAdvertListSuccess = (state, action) => {
  return updateObject(state, {
    courseadverts: action.courseadverts,
    error: null,
    loading: false
  });
};

const getCourseAdvertListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createCourseAdvertStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createCourseAdvertSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createCourseAdvertFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getCourseAdvertDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getCourseAdvertDetailSuccess = (state, action) => {
  return updateObject(state, {
    advert: action.advert,
    error: null,
    loading: false
  });
};

const getCourseAdvertDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function adverts(state = initialState, action){
    switch(action.type){
        case GET_COURSE_ADVERTS_START:
            return getCourseAdvertListStart(state, action);
        case GET_COURSE_ADVERTS_SUCCESS:
            return getCourseAdvertListSuccess(state, action);
        case GET_COURSE_ADVERTS_FAIL:
            return getCourseAdvertListFail(state, action);
        case CREATE_COURSE_ADVERT_START:
            return createCourseAdvertStart(state, action);
        case CREATE_COURSE_ADVERT_SUCCESS:
            return createCourseAdvertSuccess(state, action);
        case CREATE_COURSE_ADVERT_FAIL:
            return createCourseAdvertFail(state, action);
        case EDIT_COURSE_ADVERT:
            const arrayList = state.courseadverts;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                courseadverts: arrayList,
            };
        default:
            return state;
    }
}
