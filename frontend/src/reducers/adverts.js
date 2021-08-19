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
import { updateObject } from "../utility";


const initialState = {
    courseadverts: [],
    advert: {},
    upcomingofferedcourses: [],
    upcomingofferedcourse: {},
    ongoingofferedcourses: [],
    ongoingofferedcourse: {},
    coursemodules: [],
    studentexitprofiles: [],
    offeredcourseobjectives: [],
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



const getUpcomingOfferedCourseListStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getUpcomingOfferedCourseListSuccess = (state, action) => {
  return updateObject(state, {
    upcomingofferedcourses: action.upcomingofferedcourses,
    error: action.error,
    loading: false
  });
};

const getUpcomingOfferedCourseListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getUpcomingOfferedCourseDetailStart =(state, action)=> {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getUpcomingOfferedCourseDetailSuccess = (state, action) => {
  return updateObject(state, {
    upcomingofferedcourse: action.upcomingofferedcourse,
    error: action.error,
    loading: false
  });
};

const getUpcomingOfferedCourseDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};



const getOngoingOfferedCourseListStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getOngoingOfferedCourseListSuccess = (state, action) => {
  return updateObject(state, {
    ongoingofferedcourses: action.ongoingofferedcourses,
    error: action.error,
    loading: false
  });
};

const getOngoingOfferedCourseListFail = (state, action)=> {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getOngoingOfferedCourseDetailStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getOngoingOfferedCourseDetailSuccess = (state, action) => {
  return updateObject(state, {
    ongoingofferedcourse: action.ongoingofferedcourse,
    error: action.error,
    loading: false
  });
};

const getOngoingOfferedCourseDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const getStudentExitProfileListStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getStudentExitProfileListSuccess = (state, action) => {
  return updateObject(state, {
    studentexitprofiles: action.studentexitprofiles,
    error: action.error,
    loading: false
  });
};

const getStudentExitProfileListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};



const getOfferedCourseObjectiveListStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getOfferedCourseObjectiveListSuccess = (state, action) => {
  return updateObject(state, {
    offeredcourseobjectives: action.offeredcourseobjectives,
    error: action.error,
    loading: false
  });
};

const getOfferedCourseObjectiveListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const getCourseModuleListStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getCourseModuleListSuccess = (state, action) => {
  return updateObject(state, {
    coursemodules: action.coursemodules,
    error: action.error,
    loading: false
  });
};

const getCourseModuleListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const createOngoingOfferedCourseStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const createOngoingOfferedCourseSuccess = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createOngoingOfferedCourseFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const createUpcomingOfferedCourseStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const createUpcomingOfferedCourseSuccess = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createUpcomingOfferedCourseFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createCourseModuleStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const createCourseModuleSuccess = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createCourseModuleFail = (state, action)=> {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const createStudentExitProfileStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const createStudentExitProfileSuccess = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createStudentExitProfileFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const createOfferedCourseObjectiveStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const createOfferedCourseObjectiveSuccess = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createOfferedCourseObjectiveFail = (state, action)=> {
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

        case GET_UPCOMING_OFFERED_COURSES_START:
            return getUpcomingOfferedCourseListStart(state, action);
        case GET_UPCOMING_OFFERED_COURSES_SUCCESS:
            return getUpcomingOfferedCourseListSuccess(state, action);
        case GET_UPCOMING_OFFERED_COURSES_FAIL:
            return getUpcomingOfferedCourseListFail(state, action);
        case GET_UPCOMING_OFFERED_COURSE_START:
            return getUpcomingOfferedCourseDetailStart(state, action);
        case GET_UPCOMING_OFFERED_COURSE_SUCCESS:
            return getUpcomingOfferedCourseDetailSuccess(state, action);
        case GET_UPCOMING_OFFERED_COURSE_FAIL:
            return getUpcomingOfferedCourseDetailFail(state, action);
        case ADD_UPCOMING_OFFERED_COURSE_START:
            return createUpcomingOfferedCourseStart(state, action);
        case ADD_UPCOMING_OFFERED_COURSE_SUCCESS:
            return createUpcomingOfferedCourseSuccess(state, action);
        case ADD_UPCOMING_OFFERED_COURSE_FAIL:
            return createUpcomingOfferedCourseFail(state, action);

        case GET_ONGOING_OFFERED_COURSES_START:
            return getOngoingOfferedCourseListStart(state, action);
        case GET_ONGOING_OFFERED_COURSES_SUCCESS:
            return getOngoingOfferedCourseListSuccess(state, action);
        case GET_ONGOING_OFFERED_COURSES_FAIL:
            return getOngoingOfferedCourseListFail(state, action);
        case GET_ONGOING_OFFERED_COURSE_START:
            return getOngoingOfferedCourseDetailStart(state, action);
        case GET_ONGOING_OFFERED_COURSE_SUCCESS:
            return getOngoingOfferedCourseDetailSuccess(state, action);
        case GET_ONGOING_OFFERED_COURSE_FAIL:
            return getOngoingOfferedCourseDetailFail(state, action);
        case ADD_ONGOING_OFFERED_COURSE_START:
            return createOngoingOfferedCourseStart(state, action);
        case ADD_ONGOING_OFFERED_COURSE_SUCCESS:
            return createOngoingOfferedCourseSuccess(state, action);
        case ADD_ONGOING_OFFERED_COURSE_FAIL:
            return createOngoingOfferedCourseFail(state, action);

        case GET_COURSE_MODULES_START:
            return getCourseModuleListStart(state, action);
        case GET_COURSE_MODULES_SUCCESS:
            return getCourseModuleListSuccess(state, action);
        case GET_COURSE_MODULES_FAIL:
            return getCourseModuleListFail(state, action);
        case ADD_COURSE_MODULE_START:
            return createCourseModuleStart(state, action);
        case ADD_COURSE_MODULE_SUCCESS:
            return createCourseModuleSuccess(state, action);
        case ADD_COURSE_MODULE_FAIL:
            return createCourseModuleFail(state, action);

        case GET_STUDENT_EXIT_PROFILES_START:
            return getStudentExitProfileListStart(state, action);
        case GET_STUDENT_EXIT_PROFILES_SUCCESS:
            return getStudentExitProfileListSuccess(state, action);
        case GET_STUDENT_EXIT_PROFILES_FAIL:
            return getStudentExitProfileListFail(state, action);
        case ADD_STUDENT_EXIT_PROFILE_START:
            return createStudentExitProfileStart(state, action);
        case ADD_STUDENT_EXIT_PROFILE_SUCCESS:
            return createStudentExitProfileSuccess(state, action);
        case ADD_STUDENT_EXIT_PROFILE_FAIL:
            return createStudentExitProfileFail(state, action);

        case GET_OFFERED_COURSE_OBJECTIVES_START:
            return getOfferedCourseObjectiveListStart(state, action);
        case GET_OFFERED_COURSE_OBJECTIVES_SUCCESS:
            return getOfferedCourseObjectiveListSuccess(state, action);
        case GET_OFFERED_COURSE_OBJECTIVES_FAIL:
            return getOfferedCourseObjectiveListFail(state, action);
        case ADD_OFFERED_COURSE_OBJECTIVE_START:
            return createOfferedCourseObjectiveStart(state, action);
        case ADD_OFFERED_COURSE_OBJECTIVE_SUCCESS:
            return createOfferedCourseObjectiveSuccess(state, action);
        case ADD_OFFERED_COURSE_OBJECTIVE_FAIL:
            return createOfferedCourseObjectiveFail(state, action);


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
