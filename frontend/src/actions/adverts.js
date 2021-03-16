import axios from 'axios';
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
import {courseadvertsURL} from '../constants';
import { createMessage, returnErrors } from './messages';

const getCourseAdvertListStart = () => {
  return {
    type: GET_COURSE_ADVERTS_START
  };
};

const getCourseAdvertListSuccess = courseadverts => {
  return {
    type: GET_COURSE_ADVERTS_SUCCESS,
    courseadverts
  };
};

const getCourseAdvertListFail = error => {
  return {
    type: GET_COURSE_ADVERTS_FAIL,
    error: error
  };
};

const getCourseAdvertDetailStart = () => {
  return {
    type: GET_COURSE_ADVERT_START
  };
};

const getCourseAdvertDetailSuccess = advert => {
  return {
    type: GET_COURSE_ADVERT_SUCCESS,
    advert
  };
};

const getCourseAdvertDetailFail = error => {
  return {
    type: GET_COURSE_ADVERT_FAIL,
    error: error
  };
};

const createCourseAdvertStart = () => {
  return {
    type: CREATE_COURSE_ADVERT_START
  };
};


const createCourseAdvertSuccess = advert => {
  return {
    type: CREATE_COURSE_ADVERT_SUCCESS,
    advert
  };
};

const createCourseAdvertFail = error => {
  return {
    type: CREATE_COURSE_ADVERT_FAIL,
    error: error
  };
};

export const getCourseAdverts = (query, token) => {
  return dispatch => {
      dispatch(getCourseAdvertListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${courseadvertsURL}?q=${query}`, headers)
        .then(res => {
          const courseadverts = res.data;
          dispatch(getCourseAdvertListSuccess(courseadverts));
          })
        .catch(err => {
          dispatch(getCourseAdvertListStart(err));
        });
    };
};


export const getCourseAdvert = (id,token) => {
  return dispatch => {
      dispatch(getCourseAdvertDetailStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${courseadvertsURL}${id}`, headers)
        .then(res => {
          const advert = res.data;
          dispatch(getCourseAdvertDetailSuccess(advert));
          })
        .catch(err => {
          dispatch(getCourseAdvertDetailFail(err));
        });
    };
};

export const addCourseAdvert = (advert, token) => {
  return dispatch => {
      dispatch(createCourseAdvertStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(courseadvertsURL, advert, headers)
        .then(res => {
          dispatch(createCourseAdvertSuccess(advert));
        })
        .catch(err => {
          dispatch(createCourseAdvertFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editCourseAdvert = (id, advert, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${courseadvertsURL}${id}/`, advert, headers)
        .then(res => {
            dispatch({
                type: EDIT_COURSE_ADVERT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
