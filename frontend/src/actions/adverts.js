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
  GET_UPCOMING_OFFERED_COURSES_START,
  GET_UPCOMING_OFFERED_COURSES_SUCCESS,
  GET_UPCOMING_OFFERED_COURSES_FAIL,
  GET_UPCOMING_OFFERED_COURSE_START,
  GET_UPCOMING_OFFERED_COURSE_SUCCESS,
  GET_UPCOMING_OFFERED_COURSE_FAIL,
  ADD_UPCOMING_OFFERED_COURSE_START,
  ADD_UPCOMING_OFFERED_COURSE_SUCCESS,
  ADD_UPCOMING_OFFERED_COURSE_FAIL,
  GET_ONGOING_OFFERED_COURSES_START,
  GET_ONGOING_OFFERED_COURSES_SUCCESS,
  GET_ONGOING_OFFERED_COURSES_FAIL,
  GET_ONGOING_OFFERED_COURSE_START,
  GET_ONGOING_OFFERED_COURSE_SUCCESS,
  GET_ONGOING_OFFERED_COURSE_FAIL,
  ADD_ONGOING_OFFERED_COURSE_START,
  ADD_ONGOING_OFFERED_COURSE_SUCCESS,
  ADD_ONGOING_OFFERED_COURSE_FAIL,
  GET_COURSE_MODULES_START,
  GET_COURSE_MODULES_SUCCESS,
  GET_COURSE_MODULES_FAIL,
  ADD_COURSE_MODULE_START,
  ADD_COURSE_MODULE_SUCCESS,
  ADD_COURSE_MODULE_FAIL,
  GET_STUDENT_EXIT_PROFILES_START,
  GET_STUDENT_EXIT_PROFILES_SUCCESS,
  GET_STUDENT_EXIT_PROFILES_FAIL,
  ADD_STUDENT_EXIT_PROFILE_START,
  ADD_STUDENT_EXIT_PROFILE_SUCCESS,
  ADD_STUDENT_EXIT_PROFILE_FAIL,
  GET_OFFERED_COURSE_OBJECTIVES_START,
  GET_OFFERED_COURSE_OBJECTIVES_SUCCESS,
  GET_OFFERED_COURSE_OBJECTIVES_FAIL,
  ADD_OFFERED_COURSE_OBJECTIVE_START,
  ADD_OFFERED_COURSE_OBJECTIVE_SUCCESS,
  ADD_OFFERED_COURSE_OBJECTIVE_FAIL,



} from '../types/advertTypes'
import {
  courseadvertsURL,
  upcomingofferedcoursesURL,
  ongoingofferedcoursesURL,
  exitprofilesURL,
  coursetopicsURL,
  courseobjectivesURL,

} from '../constants';
import { createMessage, returnErrors } from './messages';


const getUpcomingOfferedCourseListStart = () => {
  return {
    type: GET_UPCOMING_OFFERED_COURSES_START
  };
};

const getUpcomingOfferedCourseListSuccess = upcomingofferedcourses => {
  return {
    type: GET_UPCOMING_OFFERED_COURSES_SUCCESS,
    upcomingofferedcourses
  };
};

const getUpcomingOfferedCourseListFail = error => {
  return {
    type: GET_UPCOMING_OFFERED_COURSES_FAIL,
    error: error
  };
};

const getUpcomingOfferedCourseDetailStart = () => {
  return {
    type: GET_UPCOMING_OFFERED_COURSE_START
  };
};

const getUpcomingOfferedCourseDetailSuccess = upcomingofferedcourse => {
  return {
    type: GET_UPCOMING_OFFERED_COURSE_SUCCESS,
    upcomingofferedcourse
  };
};

const getUpcomingOfferedCourseDetailFail = error => {
  return {
    type: GET_UPCOMING_OFFERED_COURSE_FAIL,
    error: error
  };
};



const getOngoingOfferedCourseListStart = () => {
  return {
    type: GET_ONGOING_OFFERED_COURSES_START
  };
};

const getOngoingOfferedCourseListSuccess = ongoingofferedcourses => {
  return {
    type: GET_ONGOING_OFFERED_COURSES_SUCCESS,
    ongoingofferedcourses
  };
};

const getOngoingOfferedCourseListFail = error => {
  return {
    type: GET_ONGOING_OFFERED_COURSES_FAIL,
    error: error
  };
};

const getOngoingOfferedCourseDetailStart = () => {
  return {
    type: GET_ONGOING_OFFERED_COURSE_START
  };
};

const getOngoingOfferedCourseDetailSuccess = ongoingofferedcourse => {
  return {
    type: GET_ONGOING_OFFERED_COURSE_SUCCESS,
    ongoingofferedcourse
  };
};

const getOngoingOfferedCourseDetailFail = error => {
  return {
    type: GET_ONGOING_OFFERED_COURSE_FAIL,
    error: error
  };
};


const getStudentExitProfileListStart = () => {
  return {
    type: GET_STUDENT_EXIT_PROFILES_START
  };
};

const getStudentExitProfileListSuccess = studentexitprofiles => {
  return {
    type: GET_STUDENT_EXIT_PROFILES_SUCCESS,
    studentexitprofiles
  };
};

const getStudentExitProfileListFail = error => {
  return {
    type: GET_STUDENT_EXIT_PROFILES_FAIL,
    error: error
  };
};



const getOfferedCourseObjectiveListStart = () => {
  return {
    type: GET_OFFERED_COURSE_OBJECTIVES_START
  };
};

const getOfferedCourseObjectiveListSuccess = offeredcourseobjectives => {
  return {
    type: GET_OFFERED_COURSE_OBJECTIVES_SUCCESS,
    offeredcourseobjectives
  };
};

const getOfferedCourseObjectiveListFail = error => {
  return {
    type: GET_OFFERED_COURSE_OBJECTIVES_FAIL,
    error: error
  };
};


const getCourseModuleListStart = () => {
  return {
    type: GET_COURSE_MODULES_START
  };
};

const getCourseModuleListSuccess = coursemodules => {
  return {
    type: GET_COURSE_MODULES_SUCCESS,
    coursemodules
  };
};

const getCourseModuleListFail = error => {
  return {
    type: GET_COURSE_MODULES_FAIL,
    error: error
  };
};


const createOngoingOfferedCourseStart = () => {
  return {
    type: ADD_ONGOING_OFFERED_COURSE_START
  };
};


const createOngoingOfferedCourseSuccess = course => {
  return {
    type: ADD_ONGOING_OFFERED_COURSE_SUCCESS,
    course
  };
};

const createOngoingOfferedCourseFail = error => {
  return {
    type: ADD_ONGOING_OFFERED_COURSE_FAIL,
    error: error
  };
};


const createUpcomingOfferedCourseStart = () => {
  return {
    type: ADD_UPCOMING_OFFERED_COURSE_START
  };
};


const createUpcomingOfferedCourseSuccess = course => {
  return {
    type: ADD_UPCOMING_OFFERED_COURSE_SUCCESS,
    course
  };
};

const createUpcomingOfferedCourseFail = error => {
  return {
    type: ADD_UPCOMING_OFFERED_COURSE_FAIL,
    error: error
  };
};

const createCourseModuleStart = () => {
  return {
    type: ADD_COURSE_MODULE_START
  };
};


const createCourseModuleSuccess = topic => {
  return {
    type: ADD_COURSE_MODULE_SUCCESS,
    topic
  };
};

const createCourseModuleFail = error => {
  return {
    type: ADD_COURSE_MODULE_FAIL,
    error: error
  };
};


const createStudentExitProfileStart = () => {
  return {
    type: ADD_STUDENT_EXIT_PROFILE_START
  };
};


const createStudentExitProfileSuccess = module => {
  return {
    type: ADD_STUDENT_EXIT_PROFILE_SUCCESS,
    module
  };
};

const createStudentExitProfileFail = error => {
  return {
    type: ADD_STUDENT_EXIT_PROFILE_FAIL,
    error: error
  };
};


const createOfferedCourseObjectiveStart = () => {
  return {
    type: ADD_OFFERED_COURSE_OBJECTIVE_START
  };
};


const createOfferedCourseObjectiveSuccess = objective => {
  return {
    type: ADD_OFFERED_COURSE_OBJECTIVE_SUCCESS,
    objective
  };
};

const createOfferedCourseObjectiveFail = error => {
  return {
    type: ADD_OFFERED_COURSE_OBJECTIVE_FAIL,
    error: error
  };
};

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


export const getCourseAdverts = (id, token) => {
  return dispatch => {
      dispatch(getCourseAdvertListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${courseadvertsURL}?id=${id}`, headers)
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
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
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
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
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
    let headers = axios.defaults.headers = {
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


export const getOngoingOfferedCourses = (token) => {
  return dispatch => {
      dispatch(getOngoingOfferedCourseListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(ongoingofferedcoursesURL, headers)
        .then(res => {
          const ongoingofferedcourses = res.data;
          dispatch(getOngoingOfferedCourseListSuccess(ongoingofferedcourses));
          })
        .catch(err => {
          dispatch(getOngoingOfferedCourseListStart(err));
        });
    };
};


export const getOngoingOfferedCourse = (id,token) => {
  return dispatch => {
      dispatch(getOngoingOfferedCourseDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${ongoingofferedcoursesURL}${id}`, headers)
        .then(res => {
          const ongoingofferedcourse = res.data;
          dispatch(getOngoingOfferedCourseDetailSuccess(ongoingofferedcourse));
          })
        .catch(err => {
          dispatch(getOngoingOfferedCourseDetailFail(err));
        });
    };
};


export const addOngoingOfferedCourse = (advert, token) => {
  return dispatch => {
      dispatch(createOngoingOfferedCourseStart());
      let headers = axios.defaults.headers ={
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
    };


      axios
        .post(ongoingofferedcoursesURL, advert, headers)
        .then(res => {
          dispatch(createOngoingOfferedCourseSuccess(advert));
        })
        .catch(err => {
          dispatch(createOngoingOfferedCourseFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};



export const getUpcomingOfferedCourses = (token) => {
  return dispatch => {
      dispatch(getUpcomingOfferedCourseListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(upcomingofferedcoursesURL, headers)
        .then(res => {
          const upcomingofferedcourses = res.data;
          dispatch(getUpcomingOfferedCourseListSuccess(upcomingofferedcourses));
          })
        .catch(err => {
          dispatch(getUpcomingOfferedCourseListStart(err));
        });
    };
};


export const getUpcomingOfferedCourse = (id,token) => {
  return dispatch => {
      dispatch(getUpcomingOfferedCourseDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${upcomingofferedcoursesURL}${id}`, headers)
        .then(res => {
          const upcomingofferedcourse = res.data;
          dispatch(getUpcomingOfferedCourseDetailSuccess(upcomingofferedcourse));
          })
        .catch(err => {
          dispatch(getUpcomingOfferedCourseDetailFail(err));
        });
    };
};


export const addUpcomingOfferedCourse = (advert, token) => {
  return dispatch => {
      dispatch(createUpcomingOfferedCourseStart());
      let headers = axios.defaults.headers ={
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
    };

      axios
        .post(upcomingofferedcoursesURL, advert, headers)
        .then(res => {
          dispatch(createUpcomingOfferedCourseSuccess(advert));
        })
        .catch(err => {
          dispatch(createUpcomingOfferedCourseFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};



export const getCourseModules = (id, token) => {
  return dispatch => {
      dispatch(getCourseModuleListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${coursetopicsURL}?id=${id}`, headers)
        .then(res => {
          const coursemodules = res.data;
          dispatch(getCourseModuleListSuccess(coursemodules));
          })
        .catch(err => {
          dispatch(getCourseModuleListStart(err));
        });
    };
};


export const addCourseModule = (topic, token) => {
  return dispatch => {
      dispatch(createCourseModuleStart());
      let headers = axios.defaults.headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
      };

      axios
        .post(coursetopicsURL, topic, headers)
        .then(res => {
          dispatch(createCourseModuleSuccess(topic));
        })
        .catch(err => {
          dispatch(createCourseModuleFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const getStudentExitProfiles = (id, token) => {
  return dispatch => {
      dispatch(getCourseModuleListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${exitprofilesURL}?id=${id}`, headers)
        .then(res => {
          const studentexitprofiles = res.data;
          dispatch(getStudentExitProfileListSuccess(studentexitprofiles));
          })
        .catch(err => {
          dispatch(getStudentExitProfileListStart(err));
        });
    };
};


export const addStudentExitProfile = (profile, token) => {
  return dispatch => {
      dispatch(createCourseModuleStart());
      let headers = axios.defaults.headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
      };

      axios
        .post(exitprofilesURL, profile, headers)
        .then(res => {
          dispatch(createStudentExitProfileSuccess(profile));
        })
        .catch(err => {
          dispatch(createStudentExitProfileFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};



export const getOfferedCourseObjectives = (id, token) => {
  return dispatch => {
      dispatch(getOfferedCourseObjectiveListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${courseobjectivesURL}?id=${id}`, headers)
        .then(res => {
          const studentexitprofiles = res.data;
          dispatch(getOfferedCourseObjectiveListSuccess(studentexitprofiles));
          })
        .catch(err => {
          dispatch(getOfferedCourseObjectiveListStart(err));
        });
    };
};


export const addOfferedCourseObjective = (profile, token) => {
  return dispatch => {
      dispatch(createOfferedCourseObjectiveStart());
      let headers = axios.defaults.headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
      };

      axios
        .post(courseobjectivesURL, profile, headers)
        .then(res => {
          dispatch(createOfferedCourseObjectiveSuccess(profile));
        })
        .catch(err => {
          dispatch(createOfferedCourseObjectiveFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};
