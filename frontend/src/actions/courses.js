import axios from 'axios';
import {
  GET_UPCOMING_COURSES,
  GET_UPCOMING_COURSE,
  GET_ONGOING_COURSES,
  GET_ONGOING_COURSE,
  GET_FINISHED_COURSES,
  GET_FINISHED_COURSE,
  GET_INACTIVE_COURSES,
  GET_INACTIVE_COURSE,
  EDIT_COURSE,
  ADD_COURSE,
  GET_ADMIN_TOPICS,
  GET_ADMIN_TOPIC,
  ADD_TOPIC,
  EDIT_TOPIC,
  GET_ADMIN_REVIEWS,
  GET_ADMIN_SUBTOPICS,
  GET_ADMIN_SUBTOPIC,
  ADD_SUBTOPIC,
  EDIT_SUBTOPIC,
  GET_ADMIN_TOPIC_OBJECTIVES,
  GET_ADMIN_TOPIC_OBJECTIVE,
  EDIT_TOPIC_OBJECTIVE,
  ADD_TOPIC_OBJECTIVE,
  GET_ADMIN_TOPIC_GUIDELINES,
  GET_ADMIN_TOPIC_GUIDELINE,
  EDIT_TOPIC_GUIDELINE,
  ADD_TOPIC_GUIDELINE,
  GET_ADMIN_STUDY_NOTES,
  GET_ADMIN_STUDY_NOTE,
  EDIT_STUDY_NOTE,
  ADD_STUDY_NOTE,
  GET_ADMIN_STUDY_NOTES_IMAGES,
  GET_ADMIN_STUDY_NOTE_IMAGE,
  EDIT_STUDY_NOTE_IMAGE,
  ADD_STUDY_NOTE_IMAGE,
  GET_ADMIN_STUDY_NOTES_FILES,
  GET_ADMIN_STUDY_NOTE_FILE,
  EDIT_STUDY_NOTE_FILE,
  ADD_STUDY_NOTE_FILE,
  GET_ADMIN_STUDY_NOTES_VIDEOS,
  GET_ADMIN_STUDY_NOTE_VIDEO,
  EDIT_STUDY_NOTE_VIDEO,
  ADD_STUDY_NOTE_VIDEO,
  GET_ADMIN_STUDY_NOTES_NOTES,
  GET_ADMIN_STUDY_NOTE_NOTE,
  EDIT_STUDY_NOTE_NOTE,
  ADD_STUDY_NOTE_NOTE,
  GET_ADMIN_STUDY_NOTES_REFERENCES,
  GET_ADMIN_STUDY_NOTE_REFERENCE,
  EDIT_STUDY_NOTE_REFERENCE,
  ADD_STUDY_NOTE_REFERENCE,
  GET_ADMIN_AUTHORS,
  GET_ADMIN_AUTHOR,
  EDIT_AUTHOR,
  ADD_AUTHOR,
  GET_ADMIN_PUBLISHER_CITIES,
  GET_ADMIN_PUBLISHER_CITY,
  EDIT_PUBLISHER_CITY,
  ADD_PUBLISHER_CITY,
  GET_ADMIN_PUBLISHERS,
  GET_ADMIN_PUBLISHER,
  EDIT_PUBLISHER,
  ADD_PUBLISHER,
  GET_COURSE_STATUS_CHOICES,
  ADD_STUDENT_COURSE_ENROLLMENT,
  GET_STUDENT_COURSE_ENROLLMENTS,
  GET_STUDENT_COURSE_ENROLLMENT,
  EDIT_STUDENT_COURSE_ENROLLMENT,
  GET_STUDENT_UPCOMING_COURSES,
  GET_STUDENT_UPCOMING_COURSE,
  GET_STUDENT_ONGOING_COURSES,
  GET_STUDENT_ONGOING_COURSE,
  ADD_FINISHED_COURSE,
  EDIT_FINISHED_COURSE,
  ADD_ONGOING_COURSE,
  EDIT_ONGOING_COURSE,
  ADD_INACTIVE_COURSE,
  EDIT_INACTIVE_COURSE,
  ADD_UPCOMING_COURSE,
  EDIT_UPCOMING_COURSE,
  GET_COURSE_SLIDES,
  GET_COURSE_SLIDE,
  ADD_COURSE_SLIDE,
  EDIT_COURSE_SLIDE,


} from '../types/courseTypes';
import {
  adminupcomingcoursesURL,
  adminongoingcoursesURL,
  adminfinishedcoursesURL,
  admininactivecoursesURL,
  admintopicsURL,
  adminreviewsURL,
  adminsubtopicsURL,
  admintopicobjectivesURL,
  admintopicguidelinesURL,
  adminstudynotesURL,
  adminstudynotesimagesURL,
  adminstudynotesnotesURL,
  adminstudynotesfilesURL,
  adminstudynotesvideosURL,
  adminstudynotesreferencesURL,
  adminauthorsURL,
  adminpublishercitiesURL,
  coursestatuschoicesURL,
  adminpublishersURL,
  studentcourseenrollmentsURL,
  upcomingstudentcoursesURL,
  ongoingstudentcoursesURL,
  courseslidesURL,
} from '../constants';
import { createMessage, returnErrors } from './messages';


export const getCourseSlides = (id,token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.get(`${courseslidesURL}?id=${id}`, headers)
        .then(res => {
            dispatch({
                type: GET_COURSE_SLIDES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


// Add
export const addCourseSlide = (slide, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.post(courseslidesURL, slide, headers)
        .then(res => {
            dispatch({
                type: ADD_COURSE_SLIDE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


//get
export const getCourseSlide = (id, token) => dispatch =>{
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
      axios.get(`${courseslidesURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_COURSE_SLIDE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Edit
export const editCourseSlide = (id, slide, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${courseslidesURL}${id}/`, slide, headers)
        .then(res => {
            dispatch({
                type: EDIT_COURSE_SLIDE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getUpcomingStudentCourses = (email, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.get(`${upcomingstudentcoursesURL}?email=${email}`, headers)
        .then(res => {
            dispatch({
                type: GET_STUDENT_UPCOMING_COURSES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getStudentUpcomingCourse = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.get(`${upcomingstudentcoursesURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_STUDENT_UPCOMING_COURSE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getOngoingStudentCourses = (email, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.get(`${ongoingstudentcoursesURL}?email=${email}`, headers)
        .then(res => {
            dispatch({
                type: GET_STUDENT_ONGOING_COURSES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getStudentOngoingCourse = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.get(`${ongoingstudentcoursesURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_STUDENT_ONGOING_COURSE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}




export const getCourseStatus = (token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.get(coursestatuschoicesURL, headers)
        .then(res => {
            dispatch({
                type: GET_COURSE_STATUS_CHOICES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getAdminUpcomingCourses = (token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.get(adminupcomingcoursesURL, headers)
        .then(res => {
            dispatch({
                type: GET_UPCOMING_COURSES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminUpcomingCourse = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.get(`${adminupcomingcoursesURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_UPCOMING_COURSE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminOngoingCourses = (token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.get(adminongoingcoursesURL, headers)
        .then(res => {
            dispatch({
                type: GET_ONGOING_COURSES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminOngoingCourse = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.get(`${adminongoingcoursesURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_ONGOING_COURSE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}



export const getAdminFinishedCourses = (token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.get(adminfinishedcoursesURL, headers)
        .then(res => {
            dispatch({
                type: GET_FINISHED_COURSES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminFinishedCourse= (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.get(`${adminfinishedcoursesURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_FINISHED_COURSE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getAdminInactiveCourses = (token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.get(admininactivecoursesURL, headers)
        .then(res => {
            dispatch({
                type: GET_INACTIVE_COURSES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminInactiveCourse= (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.get(`${admininactivecoursesURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_INACTIVE_COURSE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const addUpComingCourse = (course, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.post(adminupcomingcoursesURL, course, headers)
        .then(res => {
            dispatch({
                type: ADD_UPCOMING_COURSE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editUpComingCourse = (id, course, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };    
    JSON.stringify(id, null, 3)
    axios.patch(`${adminupcomingcoursesURL}${id}/`, course, headers)
        .then(res => {
            dispatch({
                type: EDIT_UPCOMING_COURSE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const addFinishedCourse = (course, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.post(adminfinishedcoursesURL, course, headers)
        .then(res => {
            dispatch({
                type: ADD_FINISHED_COURSE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editFinishedCourse = (id, course, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${adminfinishedcoursesURL}${id}/`, course, headers)
        .then(res => {
            dispatch({
                type: EDIT_FINISHED_COURSE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const addOngoingCourse = (course, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    axios.post(adminongoingcoursesURL, course, headers)
        .then(res => {
            dispatch({
                type: ADD_ONGOING_COURSE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editOngoingCourse = (id, course, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };    
    JSON.stringify(id, null, 3)
    axios.patch(`${adminongoingcoursesURL}${id}/`, course, headers)
        .then(res => {
            dispatch({
                type: EDIT_ONGOING_COURSE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const addInactiveCourse = (course, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(admininactivecoursesURL, course, headers)
        .then(res => {
            dispatch({
                type: ADD_INACTIVE_COURSE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editInactiveCourse = (id, course, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${admininactivecoursesURL}${id}/`, course, headers)
        .then(res => {
            dispatch({
                type: EDIT_INACTIVE_COURSE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getAdminTopics = (course_id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${admintopicsURL}?id=${course_id}`, headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_TOPICS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminTopic= (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${admintopicsURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_TOPIC,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const addTopic = (topic, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(admintopicsURL, topic, headers)
        .then(res => {
            dispatch({
                type: ADD_TOPIC,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}



export const editTopic = (id, topic, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${admintopicsURL}${id}/`, topic, headers)
        .then(res => {
            dispatch({
                type: EDIT_TOPIC,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getAdminReviews = (course_id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${adminreviewsURL}?id=${course_id}`,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_REVIEWS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getAdminTopicObjectives = (topic_id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${admintopicobjectivesURL}?id=${topic_id}`, headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_TOPIC_OBJECTIVES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminTopicObjective = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${admintopicobjectivesURL}/${id}/`,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_TOPIC_OBJECTIVE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const addTopicObjective = (objective, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(admintopicobjectivesURL, objective, headers)
        .then(res => {
            dispatch({
                type: ADD_TOPIC_OBJECTIVE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editTopicObjective = (id, objective, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${admintopicobjectivesURL}${id}/`, objective,headers)
        .then(res => {
            dispatch({
                type: EDIT_TOPIC_OBJECTIVE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getAdminTopicGuidelines = (topic_id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${admintopicguidelinesURL}?id=${topic_id}`, headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_TOPIC_GUIDELINES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminTopicGuideline = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${admintopicguidelinesURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_TOPIC_GUIDELINE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const addTopicGuideLine = (guideline, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(admintopicguidelinesURL, guideline, headers)
        .then(res => {
            dispatch({
                type: ADD_TOPIC_GUIDELINE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editTopicGuideline = (id, guideline, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${admintopicguidelinesURL}${id}/`, guideline, headers)
        .then(res => {
            dispatch({
                type: EDIT_TOPIC_GUIDELINE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getAdminSubTopics = (topic_id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${adminsubtopicsURL}?id=${topic_id}`, headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_SUBTOPICS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminSubTopic = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${adminsubtopicsURL}${id}/`,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_SUBTOPIC,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const addSubTopic = (subtopic, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(adminsubtopicsURL, subtopic, headers)
        .then(res => {
            dispatch({
                type: ADD_SUBTOPIC,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editSubTopic = (id, subtopic, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${adminsubtopicsURL}${id}/`, subtopic,headers)
        .then(res => {
            dispatch({
                type: EDIT_SUBTOPIC,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getStudyNotes = (topic_id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${adminstudynotesURL}?id=${topic_id}`, headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getStudyNote = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${adminstudynotesURL}${id}/`,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const addStudyNote = (note, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(adminstudynotesURL, note, headers)
        .then(res => {
            dispatch({
                type: ADD_STUDY_NOTE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editStudyNote = (id, note, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${adminstudynotesURL}${id}/`, note, headers)
        .then(res => {
            dispatch({
                type: EDIT_STUDY_NOTE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getStudyNoteVideos = (note_id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${adminstudynotesvideosURL}?id=${note_id}`, headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTES_VIDEOS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getStudyNoteVideo = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${adminstudynotesvideosURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTE_VIDEO,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const addStudyNoteVideo = (video, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(adminstudynotesvideosURL, video,headers)
        .then(res => {
            dispatch({
                type: ADD_STUDY_NOTE_VIDEO,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editStudyNoteVideo = (id, video, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${adminstudynotesvideosURL}${id}/`, video, headers)
        .then(res => {
            dispatch({
                type: EDIT_STUDY_NOTE_VIDEO,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getStudyNoteImages = (note_id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${adminstudynotesimagesURL}?id=${note_id}`,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTES_IMAGES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getStudyNoteImage = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${adminstudynotesimagesURL}${id}/`,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTE_IMAGE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const addStudyNoteImage = (image, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(adminstudynotesimagesURL, image,headers)
        .then(res => {
            dispatch({
                type: ADD_STUDY_NOTE_IMAGE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editStudyNoteImage = (id, image, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${adminstudynotesimagesURL}${id}/`, image, headers)
        .then(res => {
            dispatch({
                type: EDIT_STUDY_NOTE_IMAGE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getStudyNoteNotes = (note_id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${adminstudynotesnotesURL}?id=${note_id}`,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTES_NOTES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}




export const getStudyNoteNote = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${adminstudynotesnotesURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTE_NOTE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const addStudyNoteNote = (note, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(adminstudynotesnotesURL, note, headers)
        .then(res => {
            dispatch({
                type: ADD_STUDY_NOTE_NOTE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editStudyNoteNote = (id, note, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${adminstudynotesnotesURL}${id}/`, note, headers)
        .then(res => {
            dispatch({
                type: EDIT_STUDY_NOTE_NOTE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getStudyNoteFiles = (note_id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${adminstudynotesfilesURL}?id=${note_id}`,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTES_FILES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getStudyNoteFile = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${adminstudynotesfilesURL}${id}/`,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTE_FILE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const addStudyNoteFile = (file, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(adminstudynotesfilesURL, file,headers)
        .then(res => {
            dispatch({
                type: ADD_STUDY_NOTE_FILE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editStudyNoteFile = (id, file, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${adminstudynotesfilesURL}${id}/`, file,headers)
        .then(res => {
            dispatch({
                type: EDIT_STUDY_NOTE_FILE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getStudyNoteReferences = (note_id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${adminstudynotesreferencesURL}?id=${note_id}`,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTES_REFERENCES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getStudyNoteReference = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${adminstudynotesreferencesURL}${id}/`,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTE_REFERENCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const addStudyNoteReference = (reference, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(adminstudynotesreferencesURL, reference, headers)
        .then(res => {
            dispatch({
                type: ADD_STUDY_NOTE_REFERENCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editStudyNoteReference = (id, reference, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${adminstudynotesreferencesURL}${id}/`, reference, headers)
        .then(res => {
            dispatch({
                type: EDIT_STUDY_NOTE_REFERENCE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getAuthors = (token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(adminauthorsURL,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_AUTHORS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}



export const addAuthor = (author, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(adminauthorsURL, author,headers)
        .then(res => {
            dispatch({
                type: ADD_AUTHOR,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editAuthor = (id, author, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${adminauthorsURL}${id}/`, author,headers)
        .then(res => {
            dispatch({
                type: EDIT_AUTHOR,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getPublisherCities = (token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(adminpublishercitiesURL, headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_PUBLISHER_CITIES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}



export const addPublisherCity = (city, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(adminpublishercitiesURL, city,headers)
        .then(res => {
            dispatch({
                type: ADD_PUBLISHER_CITY,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editPublisherCity = (id, city, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${adminpublishercitiesURL}${id}/`, city,headers)
        .then(res => {
            dispatch({
                type: EDIT_PUBLISHER_CITY,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getPublishers= (token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(adminpublishersURL,headers)
        .then(res => {
            dispatch({
                type: GET_ADMIN_PUBLISHERS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}



export const addPublisher = (publisher, id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(adminpublishersURL, publisher,headers)
        .then(res => {
            dispatch({
                type: ADD_PUBLISHER,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editPublisher = (id, publisher, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${adminpublishersURL}${id}/`, publisher,headers)
        .then(res => {
            dispatch({
                type: EDIT_PUBLISHER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


// Get
export const getStudentCourseEnrollments = (id,token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.get(`${studentcourseenrollmentsURL}?id=${id}`, headers)
        .then(res => {
            dispatch({
                type: GET_STUDENT_COURSE_ENROLLMENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Add
export const addStudentCourseEnrollment = (studentcourseenrollment, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(studentcourseenrollmentsURL, studentcourseenrollment, headers)
        .then(res => {
            dispatch({
                type: ADD_STUDENT_COURSE_ENROLLMENT,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


//get
export const getStudentCourseEnrollment = (id, token) => dispatch =>{
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
      axios.get(`${studentcourseenrollmentsURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_STUDENT_COURSE_ENROLLMENT,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Edit
export const editStudentCourseEnrollment = (id, studentcourseenrollment, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${studentcourseenrollmentsURL}${id}/`, studentcourseenrollment, headers)
        .then(res => {
            dispatch({
                type: EDIT_STUDENT_COURSE_ENROLLMENT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


// import axios from 'axios';
// import {
//   EDIT_COURSE,
//   EDIT_TOPIC,
//   EDIT_SUBTOPIC,
//   EDIT_TOPIC_OBJECTIVE,
//   EDIT_TOPIC_GUIDELINE,
//   EDIT_STUDY_NOTE,
//   EDIT_STUDY_NOTE_IMAGE,
//   EDIT_STUDY_NOTE_FILE,
//   EDIT_STUDY_NOTE_VIDEO,
//   EDIT_STUDY_NOTE_NOTE,
//   EDIT_STUDY_NOTE_REFERENCE,
//   EDIT_STUDENT_COURSE_ENROLLMENT,
//   EDIT_AUTHOR,
//   EDIT_PUBLISHER_CITY,
//   EDIT_PUBLISHER,
//   GET_COURSE_STATUS_CHOICES,
//   EDIT_FINISHED_COURSE,
//   EDIT_ONGOING_COURSE,
//   EDIT_INACTIVE_COURSE,
//   EDIT_UPCOMING_COURSE,
//   GET_UPCOMING_COURSES_START,
//   GET_UPCOMING_COURSES_SUCCESS,
//   GET_UPCOMING_COURSES_FAIL,
//   GET_UPCOMING_COURSE_START,
//   GET_UPCOMING_COURSE_SUCCESS,
//   GET_UPCOMING_COURSE_FAIL,
//   CREATE_UPCOMING_COURSE_START,
//   CREATE_UPCOMING_COURSE_SUCCESS,
//   CREATE_UPCOMING_COURSE_FAIL,
//   GET_ONGOING_COURSES_START,
//   GET_ONGOING_COURSES_SUCCESS,
//   GET_ONGOING_COURSES_FAIL,
//   GET_ONGOING_COURSE_START,
//   GET_ONGOING_COURSE_SUCCESS,
//   GET_ONGOING_COURSE_FAIL,
//   CREATE_ONGOING_COURSE_START,
//   CREATE_ONGOING_COURSE_SUCCESS,
//   CREATE_ONGOING_COURSE_FAIL,
//   GET_FINISHED_COURSES_START,
//   GET_FINISHED_COURSES_SUCCESS,
//   GET_FINISHED_COURSES_FAIL,
//   GET_FINISHED_COURSE_START,
//   GET_FINISHED_COURSE_SUCCESS,
//   GET_FINISHED_COURSE_FAIL,
//   CREATE_FINISHED_COURSE_START,
//   CREATE_FINISHED_COURSE_SUCCESS,
//   CREATE_FINISHED_COURSE_FAIL,
//   GET_INACTIVE_COURSES_START,
//   GET_INACTIVE_COURSES_SUCCESS,
//   GET_INACTIVE_COURSES_FAIL,
//   GET_INACTIVE_COURSE_START,
//   GET_INACTIVE_COURSE_SUCCESS,
//   GET_INACTIVE_COURSE_FAIL,
//   CREATE_INACTIVE_COURSE_START,
//   CREATE_INACTIVE_COURSE_SUCCESS,
//   CREATE_INACTIVE_COURSE_FAIL,
//   GET_ADMIN_TOPICS_START,
//   GET_ADMIN_TOPICS_SUCCESS,
//   GET_ADMIN_TOPICS_FAIL,
//   GET_ADMIN_TOPIC_START,
//   GET_ADMIN_TOPIC_SUCCESS,
//   GET_ADMIN_TOPIC_FAIL,
//   CREATE_ADMIN_TOPIC_START,
//   CREATE_ADMIN_TOPIC_SUCCESS,
//   CREATE_ADMIN_TOPIC_FAIL,
//   GET_ADMIN_REVIEWS_START,
//   GET_ADMIN_REVIEWS_SUCCESS,
//   GET_ADMIN_REVIEWS_FAIL,
//   GET_ADMIN_AUTHORS_START,
//   GET_ADMIN_AUTHORS_SUCCESS,
//   GET_ADMIN_AUTHORS_FAIL,
//   GET_ADMIN_AUTHOR_START,
//   GET_ADMIN_AUTHOR_SUCCESS,
//   GET_ADMIN_AUTHOR_FAIL,
//   CREATE_ADMIN_AUTHOR_START,
//   CREATE_ADMIN_AUTHOR_SUCCESS,
//   CREATE_ADMIN_AUTHOR_FAIL,
//   GET_ADMIN_PUBLISHER_CITIES_START,
//   GET_ADMIN_PUBLISHER_CITIES_SUCCESS,
//   GET_ADMIN_PUBLISHER_CITIES_FAIL,
//   GET_ADMIN_PUBLISHER_CITY_START,
//   GET_ADMIN_PUBLISHER_CITY_SUCCESS,
//   GET_ADMIN_PUBLISHER_CITY_FAIL,
//   CREATE_ADMIN_PUBLISHER_CITY_START,
//   CREATE_ADMIN_PUBLISHER_CITY_SUCCESS,
//   CREATE_ADMIN_PUBLISHER_CITY_FAIL,
//   GET_ADMIN_PUBLISHERS_START,
//   GET_ADMIN_PUBLISHERS_SUCCESS,
//   GET_ADMIN_PUBLISHERS_FAIL,
//   GET_ADMIN_PUBLISHER_START,
//   GET_ADMIN_PUBLISHER_SUCCESS,
//   GET_ADMIN_PUBLISHER_FAIL,
//   CREATE_ADMIN_PUBLISHER_START,
//   CREATE_ADMIN_PUBLISHER_SUCCESS,
//   CREATE_ADMIN_PUBLISHER_FAIL,
//   GET_STUDENT_COURSE_ENROLLMENTS_START,
//   GET_STUDENT_COURSE_ENROLLMENTS_SUCCESS,
//   GET_STUDENT_COURSE_ENROLLMENTS_FAIL,
//   GET_STUDENT_COURSE_ENROLLMENT_START,
//   GET_STUDENT_COURSE_ENROLLMENT_SUCCESS,
//   GET_STUDENT_COURSE_ENROLLMENT_FAIL,
//   CREATE_STUDENT_COURSE_ENROLLMENT_START,
//   CREATE_STUDENT_COURSE_ENROLLMENT_SUCCESS,
//   CREATE_STUDENT_COURSE_ENROLLMENT_FAIL,
//   GET_STUDENT_UPCOMING_COURSES_START,
//   GET_STUDENT_UPCOMING_COURSES_SUCCESS,
//   GET_STUDENT_UPCOMING_COURSES_FAIL,
//   GET_STUDENT_UPCOMING_COURSE_START,
//   GET_STUDENT_UPCOMING_COURSE_SUCCESS,
//   GET_STUDENT_UPCOMING_COURSE_FAIL,
//   GET_STUDENT_ONGOING_COURSES_START,
//   GET_STUDENT_ONGOING_COURSES_SUCCESS,
//   GET_STUDENT_ONGOING_COURSES_FAIL,
//   GET_STUDENT_ONGOING_COURSE_START,
//   GET_STUDENT_ONGOING_COURSE_SUCCESS,
//   GET_STUDENT_ONGOING_COURSE_FAIL,
//   GET_ADMIN_SUBTOPICS_START,
//   GET_ADMIN_SUBTOPICS_SUCCESS,
//   GET_ADMIN_SUBTOPICS_FAIL,
//   GET_ADMIN_SUBTOPIC_START,
//   GET_ADMIN_SUBTOPIC_SUCCESS,
//   GET_ADMIN_SUBTOPIC_FAIL,
//   CREATE_ADMIN_SUBTOPIC_START,
//   CREATE_ADMIN_SUBTOPIC_SUCCESS,
//   CREATE_ADMIN_SUBTOPIC_FAIL,
//   GET_ADMIN_TOPIC_OBJECTIVES_START,
//   GET_ADMIN_TOPIC_OBJECTIVES_SUCCESS,
//   GET_ADMIN_TOPIC_OBJECTIVES_FAIL,
//   GET_ADMIN_TOPIC_OBJECTIVE_START,
//   GET_ADMIN_TOPIC_OBJECTIVE_SUCCESS,
//   GET_ADMIN_TOPIC_OBJECTIVE_FAIL,
//   CREATE_ADMIN_TOPIC_OBJECTIVE_START,
//   CREATE_ADMIN_TOPIC_OBJECTIVE_SUCCESS,
//   CREATE_ADMIN_TOPIC_OBJECTIVE_FAIL,
//   GET_ADMIN_TOPIC_GUIDELINES_START,
//   GET_ADMIN_TOPIC_GUIDELINES_SUCCESS,
//   GET_ADMIN_TOPIC_GUIDELINES_FAIL,
//   GET_ADMIN_TOPIC_GUIDELINE_START,
//   GET_ADMIN_TOPIC_GUIDELINE_SUCCESS,
//   GET_ADMIN_TOPIC_GUIDELINE_FAIL,
//   CREATE_ADMIN_TOPIC_GUIDELINE_START,
//   CREATE_ADMIN_TOPIC_GUIDELINE_SUCCESS,
//   CREATE_ADMIN_TOPIC_GUIDELINE_FAIL,
//   GET_ADMIN_STUDY_NOTES_START,
//   GET_ADMIN_STUDY_NOTES_SUCCESS,
//   GET_ADMIN_STUDY_NOTES_FAIL,
//   GET_ADMIN_STUDY_NOTE_START,
//   GET_ADMIN_STUDY_NOTE_SUCCESS,
//   GET_ADMIN_STUDY_NOTE_FAIL,
//   CREATE_ADMIN_STUDY_NOTE_START,
//   CREATE_ADMIN_STUDY_NOTE_SUCCESS,
//   CREATE_ADMIN_STUDY_NOTE_FAIL,
//   GET_ADMIN_STUDY_NOTES_FILES_START,
//   GET_ADMIN_STUDY_NOTES_FILES_SUCCESS,
//   GET_ADMIN_STUDY_NOTES_FILES_FAIL,
//   GET_ADMIN_STUDY_NOTES_FILE_START,
//   GET_ADMIN_STUDY_NOTES_FILE_SUCCESS,
//   GET_ADMIN_STUDY_NOTES_FILE_FAIL,
//   CREATE_ADMIN_STUDY_NOTES_FILE_START,
//   CREATE_ADMIN_STUDY_NOTES_FILE_SUCCESS,
//   CREATE_ADMIN_STUDY_NOTES_FILE_FAIL,
//   GET_ADMIN_STUDY_NOTES_IMAGES_START,
//   GET_ADMIN_STUDY_NOTES_IMAGES_SUCCESS,
//   GET_ADMIN_STUDY_NOTES_IMAGES_FAIL,
//   GET_ADMIN_STUDY_NOTES_IMAGE_START,
//   GET_ADMIN_STUDY_NOTES_IMAGE_SUCCESS,
//   GET_ADMIN_STUDY_NOTES_IMAGE_FAIL,
//   CREATE_ADMIN_STUDY_NOTES_IMAGE_START,
//   CREATE_ADMIN_STUDY_NOTES_IMAGE_SUCCESS,
//   CREATE_ADMIN_STUDY_NOTES_IMAGE_FAIL,
//   GET_ADMIN_STUDY_NOTES_VIDEOS_START,
//   GET_ADMIN_STUDY_NOTES_VIDEOS_SUCCESS,
//   GET_ADMIN_STUDY_NOTES_VIDEOS_FAIL,
//   GET_ADMIN_STUDY_NOTES_VIDEO_START,
//   GET_ADMIN_STUDY_NOTES_VIDEO_SUCCESS,
//   GET_ADMIN_STUDY_NOTES_VIDEO_FAIL,
//   CREATE_ADMIN_STUDY_NOTES_VIDEO_START,
//   CREATE_ADMIN_STUDY_NOTES_VIDEO_SUCCESS,
//   CREATE_ADMIN_STUDY_NOTES_VIDEO_FAIL,
//   GET_ADMIN_STUDY_NOTES_NOTES_START,
//   GET_ADMIN_STUDY_NOTES_NOTES_SUCCESS,
//   GET_ADMIN_STUDY_NOTES_NOTES_FAIL,
//   GET_ADMIN_STUDY_NOTES_NOTE_START,
//   GET_ADMIN_STUDY_NOTES_NOTE_SUCCESS,
//   GET_ADMIN_STUDY_NOTES_NOTE_FAIL,
//   CREATE_ADMIN_STUDY_NOTES_NOTE_START,
//   CREATE_ADMIN_STUDY_NOTES_NOTE_SUCCESS,
//   CREATE_ADMIN_STUDY_NOTES_NOTE_FAIL,
//   GET_ADMIN_STUDY_NOTES_REFERENCES_START,
//   GET_ADMIN_STUDY_NOTES_REFERENCES_SUCCESS,
//   GET_ADMIN_STUDY_NOTES_REFERENCES_FAIL,
//   GET_ADMIN_STUDY_NOTES_REFERENCE_START,
//   GET_ADMIN_STUDY_NOTES_REFERENCE_SUCCESS,
//   GET_ADMIN_STUDY_NOTES_REFERENCE_FAIL,
//   CREATE_ADMIN_STUDY_NOTES_REFERENCE_START,
//   CREATE_ADMIN_STUDY_NOTES_REFERENCE_SUCCESS,
//   CREATE_ADMIN_STUDY_NOTES_REFERENCE_FAIL,
//   GET_ADMIN_TOPICS,
//   GET_STUDENT_COURSE_ENROLLMENTS,
// } from '../types/courseTypes';
// import {
//   adminupcomingcoursesURL,
//   adminongoingcoursesURL,
//   adminfinishedcoursesURL,
//   admininactivecoursesURL,
//   admintopicsURL,
//   adminreviewsURL,
//   adminsubtopicsURL,
//   admintopicobjectivesURL,
//   admintopicguidelinesURL,
//   adminstudynotesURL,
//   adminstudynotesimagesURL,
//   adminstudynotesnotesURL,
//   adminstudynotesfilesURL,
//   adminstudynotesvideosURL,
//   adminstudynotesreferencesURL,
//   adminauthorsURL,
//   adminpublishercitiesURL,
//   coursestatuschoicesURL,
//   adminpublishersURL,
//   studentcourseenrollmentsURL,
//   upcomingstudentcoursesURL,
//   ongoingstudentcoursesURL
// } from '../constants';
// import { createMessage, returnErrors } from './messages';

// //upcoming courses
// const getAdminUpcomingCourseListStart = () => {
//   return {
//     type: GET_UPCOMING_COURSES_START
//   };
// };

// const getAdminUpcomingCourseListSuccess = adminupcomingcourses => {
//   return {
//     type: GET_UPCOMING_COURSES_SUCCESS,
//     adminupcomingcourses
//   };
// };

// const getAdminUpcomingCourseListFail = error => {
//   return {
//     type: GET_UPCOMING_COURSES_FAIL,
//     error: error
//   };
// };

// const getAdminUpcomingCourseDetailStart = () => {
//   return {
//     type: GET_UPCOMING_COURSE_START
//   };
// };

// const getAdminUpcomingCourseDetailSuccess = adminupcomingcourse => {
//   return {
//     type: GET_UPCOMING_COURSE_SUCCESS,
//     adminupcomingcourse
//   };
// };

// const getAdminUpcomingCourseDetailFail = error => {
//   return {
//     type: GET_UPCOMING_COURSE_FAIL,
//     error: error
//   };
// };

// const createAdminUpcomingCourseStart = () => {
//   return {
//     type: CREATE_UPCOMING_COURSE_START
//   };
// };


// const createAdminUpcomingCourseSuccess = adminupcomingcourse => {
//   return {
//     type: CREATE_UPCOMING_COURSE_SUCCESS,
//     adminupcomingcourse
//   };
// };

// const createAdminUpcomingCourseFail = error => {
//   return {
//     type: CREATE_UPCOMING_COURSE_FAIL,
//     error: error
//   };
// };


// //ongoing courses
// const getAdminOngoingCourseListStart = () => {
//   return {
//     type: GET_ONGOING_COURSES_START
//   };
// };

// const getAdminOngoingCourseListSuccess = adminongoingcourses => {
//   return {
//     type: GET_ONGOING_COURSES_SUCCESS,
//     adminongoingcourses
//   };
// };

// const getAdminOngoingCourseListFail = error => {
//   return {
//     type: GET_ONGOING_COURSES_FAIL,
//     error: error
//   };
// };

// const getAdminOngoingCourseDetailStart = () => {
//   return {
//     type: GET_ONGOING_COURSE_START
//   };
// };

// const getAdminOngoingCourseDetailSuccess = adminongoingcourse => {
//   return {
//     type: GET_ONGOING_COURSE_SUCCESS,
//     adminongoingcourse
//   };
// };

// const getAdminOngoingCourseDetailFail = error => {
//   return {
//     type: GET_ONGOING_COURSE_FAIL,
//     error: error
//   };
// };

// const createAdminOngoingCourseStart = () => {
//   return {
//     type: CREATE_ONGOING_COURSE_START
//   };
// };


// const createAdminOngoingCourseSuccess = adminongoingcourse => {
//   return {
//     type: CREATE_ONGOING_COURSE_SUCCESS,
//     adminongoingcourse
//   };
// };

// const createAdminOngoingCourseFail = error => {
//   return {
//     type: CREATE_ONGOING_COURSE_FAIL,
//     error: error
//   };
// };


// //finished courses
// const getAdminFinishedCourseListStart = () => {
//   return {
//     type: GET_FINISHED_COURSES_START
//   };
// };

// const getAdminFinishedCourseListSuccess = adminfinishedcourses => {
//   return {
//     type: GET_FINISHED_COURSES_SUCCESS,
//     adminfinishedcourses
//   };
// };

// const getAdminFinishedCourseListFail = error => {
//   return {
//     type: GET_FINISHED_COURSES_FAIL,
//     error: error
//   };
// };

// const getAdminFinishedCourseDetailStart = () => {
//   return {
//     type: GET_FINISHED_COURSE_START
//   };
// };

// const getAdminFinishedCourseDetailSuccess = adminfinishedcourse => {
//   return {
//     type: GET_FINISHED_COURSE_SUCCESS,
//     adminfinishedcourse
//   };
// };

// const getAdminFinishedCourseDetailFail = error => {
//   return {
//     type: GET_FINISHED_COURSE_FAIL,
//     error: error
//   };
// };

// const createAdminFinishedCourseStart = () => {
//   return {
//     type: CREATE_FINISHED_COURSE_START
//   };
// };


// const createAdminFinishedCourseSuccess = adminfinishedcourse => {
//   return {
//     type: CREATE_FINISHED_COURSE_SUCCESS,
//     adminfinishedcourse
//   };
// };

// const createAdminFinishedCourseFail = error => {
//   return {
//     type: CREATE_FINISHED_COURSE_FAIL,
//     error: error
//   };
// };


// //inactive courses
// const getAdminInactiveCourseListStart = () => {
//   return {
//     type: GET_INACTIVE_COURSES_START
//   };
// };

// const getAdminInactiveCourseListSuccess = admininactivecourses => {
//   return {
//     type: GET_INACTIVE_COURSES_SUCCESS,
//     admininactivecourses
//   };
// };

// const getAdminInactiveCourseListFail = error => {
//   return {
//     type: GET_INACTIVE_COURSES_FAIL,
//     error: error
//   };
// };

// const getAdminInactiveCourseDetailStart = () => {
//   return {
//     type: GET_INACTIVE_COURSE_START
//   };
// };

// const getAdminInactiveCourseDetailSuccess = admininactivecourse => {
//   return {
//     type: GET_INACTIVE_COURSE_SUCCESS,
//     admininactivecourse
//   };
// };

// const getAdminInactiveCourseDetailFail = error => {
//   return {
//     type: GET_INACTIVE_COURSE_FAIL,
//     error: error
//   };
// };

// const createAdminInactiveCourseStart = () => {
//   return {
//     type: CREATE_INACTIVE_COURSE_START
//   };
// };


// const createAdminInactiveCourseSuccess = admininactivecourse => {
//   return {
//     type: CREATE_INACTIVE_COURSE_SUCCESS,
//     admininactivecourse
//   };
// };

// const createAdminInactiveCourseFail = error => {
//   return {
//     type: CREATE_INACTIVE_COURSE_FAIL,
//     error: error
//   };
// };

// //admin topics
// const getAdminTopicListStart = () => {
//   return {
//     type: GET_ADMIN_TOPICS_START
//   };
// };

// const getAdminTopicListSuccess = admintopics => {
//   return {
//     type: GET_ADMIN_TOPICS_SUCCESS,
//     admintopics
//   };
// };

// const getAdminTopicListFail = error => {
//   return {
//     type: GET_ADMIN_TOPICS_FAIL,
//     error: error
//   };
// };

// const getAdminTopicDetailStart = () => {
//   return {
//     type: GET_ADMIN_TOPIC_START
//   };
// };

// const getAdminTopicDetailSuccess = admintopic => {
//   return {
//     type: GET_ADMIN_TOPIC_SUCCESS,
//     admintopic
//   };
// };

// const getAdminTopicDetailFail = error => {
//   return {
//     type: GET_ADMIN_TOPIC_FAIL,
//     error: error
//   };
// };

// const createAdminTopicStart = () => {
//   return {
//     type: CREATE_ADMIN_TOPIC_START
//   };
// };


// const createAdminTopicSuccess = admintopic => {
//   return {
//     type: CREATE_ADMIN_TOPIC_SUCCESS,
//     admintopic
//   };
// };

// const createAdminTopicFail = error => {
//   return {
//     type: CREATE_ADMIN_TOPIC_FAIL,
//     error: error
//   };
// };

// //admin reviews
// const getAdminReviewListStart = () => {
//   return {
//     type: GET_ADMIN_REVIEWS_START
//   };
// };

// const getAdminReviewListSuccess = adminreviews => {
//   return {
//     type: GET_ADMIN_REVIEWS_SUCCESS,
//     adminreviews
//   };
// };

// const getAdminReviewListFail = error => {
//   return {
//     type: GET_ADMIN_REVIEWS_FAIL,
//     error: error
//   };
// };

// //admin authors
// const getAuthorListStart = () => {
//   return {
//     type: GET_ADMIN_AUTHORS_START
//   };
// };

// const getAuthorListSuccess = adminauthors => {
//   return {
//     type: GET_ADMIN_AUTHORS_SUCCESS,
//     adminauthors
//   };
// };

// const getAuthorListFail = error => {
//   return {
//     type: GET_ADMIN_AUTHORS_FAIL,
//     error: error
//   };
// };

// const getAuthorDetailStart = () => {
//   return {
//     type: GET_ADMIN_AUTHOR_START
//   };
// };

// const getAuthorDetailSuccess = author => {
//   return {
//     type: GET_ADMIN_AUTHOR_SUCCESS,
//     author
//   };
// };

// const getAuthorDetailFail = error => {
//   return {
//     type: GET_ADMIN_AUTHOR_FAIL,
//     error: error
//   };
// };

// const createAuthorStart = () => {
//   return {
//     type: CREATE_ADMIN_AUTHOR_START
//   };
// };


// const createAuthorSuccess = author => {
//   return {
//     type: CREATE_ADMIN_AUTHOR_SUCCESS,
//     author
//   };
// };

// const createAuthorFail = error => {
//   return {
//     type: CREATE_ADMIN_AUTHOR_FAIL,
//     error: error
//   };
// };

// //admin publisher cities
// const getPublisherCityListStart = () => {
//   return {
//     type: GET_ADMIN_PUBLISHER_CITIES_START
//   };
// };

// const getPublisherCityListSuccess = adminpublishercities => {
//   return {
//     type: GET_ADMIN_PUBLISHER_CITIES_SUCCESS,
//     adminpublishercities
//   };
// };

// const getPublisherCityListFail = error => {
//   return {
//     type: GET_ADMIN_PUBLISHER_CITIES_FAIL,
//     error: error
//   };
// };

// const getPublisherCityDetailStart = () => {
//   return {
//     type: GET_ADMIN_PUBLISHER_CITY_START
//   };
// };

// const getPublisherCityDetailSuccess = city => {
//   return {
//     type: GET_ADMIN_PUBLISHER_CITY_SUCCESS,
//     city
//   };
// };

// const getPublisherCityDetailFail = error => {
//   return {
//     type: GET_ADMIN_PUBLISHER_CITY_FAIL,
//     error: error
//   };
// };

// const createPublisherCityStart = () => {
//   return {
//     type: CREATE_ADMIN_PUBLISHER_CITY_START
//   };
// };


// const createPublisherCitySuccess = city => {
//   return {
//     type: CREATE_ADMIN_PUBLISHER_CITY_SUCCESS,
//     city
//   };
// };

// const createPublisherCityFail = error => {
//   return {
//     type: CREATE_ADMIN_PUBLISHER_CITY_FAIL,
//     error: error
//   };
// };

// //admin publishers
// const getPublisherListStart = () => {
//   return {
//     type: GET_ADMIN_PUBLISHERS_START
//   };
// };

// const getPublisherListSuccess = adminpublishers => {
//   return {
//     type: GET_ADMIN_PUBLISHERS_SUCCESS,
//     adminpublishers
//   };
// };

// const getPublisherListFail = error => {
//   return {
//     type: GET_ADMIN_PUBLISHERS_FAIL,
//     error: error
//   };
// };

// const getPublisherDetailStart = () => {
//   return {
//     type: GET_ADMIN_PUBLISHER_START
//   };
// };

// const getPublisherDetailSuccess = publisher => {
//   return {
//     type: GET_ADMIN_PUBLISHER_SUCCESS,
//     publisher
//   };
// };

// const getPublisherDetailFail = error => {
//   return {
//     type: GET_ADMIN_PUBLISHER_FAIL,
//     error: error
//   };
// };

// const createPublisherStart = () => {
//   return {
//     type: CREATE_ADMIN_PUBLISHER_START
//   };
// };


// const createPublisherSuccess = publisher => {
//   return {
//     type: CREATE_ADMIN_PUBLISHER_SUCCESS,
//     publisher
//   };
// };

// const createPublisherFail = error => {
//   return {
//     type: CREATE_ADMIN_PUBLISHER_FAIL,
//     error: error
//   };
// };

// //student course enrollments
// const getStudentCourseEnrollmentListStart = () => {
//   return {
//     type: GET_STUDENT_COURSE_ENROLLMENTS_START
//   };
// };

// const getStudentCourseEnrollmentListSuccess = studentcourseenrollments => {
//   return {
//     type: GET_STUDENT_COURSE_ENROLLMENTS_SUCCESS,
//     studentcourseenrollments
//   };
// };

// const getStudentCourseEnrollmentListFail = error => {
//   return {
//     type: GET_STUDENT_COURSE_ENROLLMENTS_FAIL,
//     error: error
//   };
// };

// const getStudentCourseEnrollmentDetailStart = () => {
//   return {
//     type: GET_STUDENT_COURSE_ENROLLMENT_START
//   };
// };

// const getStudentCourseEnrollmentDetailSuccess = studentcourseenrollment => {
//   return {
//     type: GET_STUDENT_COURSE_ENROLLMENT_SUCCESS,
//     studentcourseenrollment
//   };
// };

// const getStudentCourseEnrollmentDetailFail = error => {
//   return {
//     type: GET_STUDENT_COURSE_ENROLLMENT_FAIL,
//     error: error
//   };
// };

// const createStudentCourseEnrollmentStart = () => {
//   return {
//     type: CREATE_STUDENT_COURSE_ENROLLMENT_START
//   };
// };


// const createStudentCourseEnrollmentSuccess = studentcourseenrollment => {
//   return {
//     type: CREATE_STUDENT_COURSE_ENROLLMENT_SUCCESS,
//     studentcourseenrollment
//   };
// };

// const createStudentCourseEnrollmentFail = error => {
//   return {
//     type: CREATE_STUDENT_COURSE_ENROLLMENT_FAIL,
//     error: error
//   };
// };

// //student upcoming courses
// const getUpcomingStudentCourseListStart = () => {
//   return {
//     type: GET_STUDENT_UPCOMING_COURSES_START
//   };
// };

// const getUpcomingStudentCourseListSuccess = studentupcomingcourses => {
//   return {
//     type: GET_STUDENT_UPCOMING_COURSES_SUCCESS,
//     studentupcomingcourses
//   };
// };

// const getUpcomingStudentCourseListFail = error => {
//   return {
//     type: GET_STUDENT_UPCOMING_COURSES_FAIL,
//     error: error
//   };
// };

// const getUpcomingStudentCourseDetailStart = () => {
//   return {
//     type: GET_STUDENT_UPCOMING_COURSE_START
//   };
// };

// const getUpcomingStudentCourseDetailSuccess = studentupcomingcourse => {
//   return {
//     type: GET_STUDENT_UPCOMING_COURSE_SUCCESS,
//     studentupcomingcourse
//   };
// };

// const getUpcomingStudentCourseDetailFail = error => {
//   return {
//     type: GET_STUDENT_UPCOMING_COURSE_FAIL,
//     error: error
//   };
// };

// //student ongoing courses
// const getOngoingStudentCourseListStart = () => {
//   return {
//     type: GET_STUDENT_ONGOING_COURSES_START
//   };
// };

// const getOngoingStudentCourseListSuccess = studentongoingcourses => {
//   return {
//     type: GET_STUDENT_ONGOING_COURSES_SUCCESS,
//     studentongoingcourses
//   };
// };

// const getOngoingStudentCourseListFail = error => {
//   return {
//     type: GET_STUDENT_ONGOING_COURSES_FAIL,
//     error: error
//   };
// };

// const getOngoingStudentCourseDetailStart = () => {
//   return {
//     type: GET_STUDENT_ONGOING_COURSE_START
//   };
// };

// const getOngoingStudentCourseDetailSuccess = studentongoingcourse => {
//   return {
//     type: GET_STUDENT_ONGOING_COURSE_SUCCESS,
//     studentongoingcourse
//   };
// };

// const getOngoingStudentCourseDetailFail = error => {
//   return {
//     type: GET_STUDENT_ONGOING_COURSE_FAIL,
//     error: error
//   };
// };

// //admin subtopics
// const getAdminSubTopicListStart = () => {
//   return {
//     type: GET_ADMIN_SUBTOPICS_START
//   };
// };

// const getAdminSubTopicListSuccess = adminsubtopics => {
//   return {
//     type: GET_ADMIN_SUBTOPICS_SUCCESS,
//     adminsubtopics
//   };
// };

// const getAdminSubTopicListFail = error => {
//   return {
//     type: GET_ADMIN_SUBTOPICS_FAIL,
//     error: error
//   };
// };

// const getAdminSubTopicDetailStart = () => {
//   return {
//     type: GET_ADMIN_SUBTOPIC_START
//   };
// };

// const getAdminSubTopicDetailSuccess = adminsubtopic => {
//   return {
//     type: GET_ADMIN_SUBTOPIC_SUCCESS,
//     adminsubtopic
//   };
// };

// const getAdminSubTopicDetailFail = error => {
//   return {
//     type: GET_ADMIN_SUBTOPIC_FAIL,
//     error: error
//   };
// };

// const createAdminSubTopicStart = () => {
//   return {
//     type: CREATE_ADMIN_SUBTOPIC_START
//   };
// };


// const createAdminSubTopicSuccess = adminsubtopic => {
//   return {
//     type: CREATE_ADMIN_SUBTOPIC_SUCCESS,
//     adminsubtopic
//   };
// };

// const createAdminSubTopicFail = error => {
//   return {
//     type: CREATE_ADMIN_SUBTOPIC_FAIL,
//     error: error
//   };
// };

// //admin topic objectives
// const getAdminTopicObjectiveListStart = () => {
//   return {
//     type: GET_ADMIN_TOPIC_OBJECTIVES_START
//   };
// };

// const getAdminTopicObjectiveListSuccess = admintopicobjectives => {
//   return {
//     type: GET_ADMIN_TOPIC_OBJECTIVES_SUCCESS,
//     admintopicobjectives
//   };
// };

// const getAdminTopicObjectiveListFail = error => {
//   return {
//     type: GET_ADMIN_TOPIC_OBJECTIVES_FAIL,
//     error: error
//   };
// };

// const getAdminTopicObjectiveDetailStart = () => {
//   return {
//     type: GET_ADMIN_TOPIC_OBJECTIVE_START
//   };
// };

// const getAdminTopicObjectiveDetailSuccess = objective => {
//   return {
//     type: GET_ADMIN_TOPIC_OBJECTIVE_SUCCESS,
//     objective
//   };
// };

// const getAdminTopicObjectiveDetailFail = error => {
//   return {
//     type: GET_ADMIN_TOPIC_OBJECTIVE_FAIL,
//     error: error
//   };
// };

// const createAdminTopicObjectiveStart = () => {
//   return {
//     type: CREATE_ADMIN_TOPIC_OBJECTIVE_START
//   };
// };


// const createAdminTopicObjectiveSuccess = objective => {
//   return {
//     type: CREATE_ADMIN_TOPIC_OBJECTIVE_SUCCESS,
//     objective
//   };
// };

// const createAdminTopicObjectiveFail = error => {
//   return {
//     type: CREATE_ADMIN_TOPIC_OBJECTIVE_FAIL,
//     error: error
//   };
// };

// //admin topic guidelines
// const getAdminTopicGuidelineListStart = () => {
//   return {
//     type: GET_ADMIN_TOPIC_GUIDELINES_START
//   };
// };

// const getAdminTopicGuidelineListSuccess = admintopicguidelines => {
//   return {
//     type: GET_ADMIN_TOPIC_GUIDELINES_SUCCESS,
//     admintopicguidelines
//   };
// };

// const getAdminTopicGuidelineListFail = error => {
//   return {
//     type: GET_ADMIN_TOPIC_GUIDELINES_FAIL,
//     error: error
//   };
// };

// const getAdminTopicGuidelineDetailStart = () => {
//   return {
//     type: GET_ADMIN_TOPIC_GUIDELINE_START
//   };
// };

// const getAdminTopicGuidelineDetailSuccess = guideline => {
//   return {
//     type: GET_ADMIN_TOPIC_GUIDELINE_SUCCESS,
//     guideline
//   };
// };

// const getAdminTopicGuidelineDetailFail = error => {
//   return {
//     type: GET_ADMIN_TOPIC_GUIDELINE_FAIL,
//     error: error
//   };
// };

// const createAdminTopicGuidelineStart = () => {
//   return {
//     type: CREATE_ADMIN_TOPIC_GUIDELINE_START
//   };
// };


// const createAdminTopicGuidelineSuccess = guideline => {
//   return {
//     type: CREATE_ADMIN_TOPIC_GUIDELINE_SUCCESS,
//     guideline
//   };
// };

// const createAdminTopicGuidelineFail = error => {
//   return {
//     type: CREATE_ADMIN_TOPIC_GUIDELINE_FAIL,
//     error: error
//   };
// };

// //admin study notes
// const getStudyNoteListStart = () => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_START
//   };
// };

// const getStudyNoteListSuccess = adminstudynotes => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_SUCCESS,
//     adminstudynotes
//   };
// };

// const getStudyNoteListFail = error => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_FAIL,
//     error: error
//   };
// };

// const getStudyNoteDetailStart = () => {
//   return {
//     type: GET_ADMIN_STUDY_NOTE_START
//   };
// };

// const getStudyNoteDetailSuccess = note => {
//   return {
//     type: GET_ADMIN_STUDY_NOTE_SUCCESS,
//     note
//   };
// };

// const getStudyNoteDetailFail = error => {
//   return {
//     type: GET_ADMIN_STUDY_NOTE_FAIL,
//     error: error
//   };
// };

// const createStudyNoteStart = () => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTE_START
//   };
// };


// const createStudyNoteSuccess = note => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTE_SUCCESS,
//     note
//   };
// };

// const createStudyNoteFail = error => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTE_FAIL,
//     error: error
//   };
// };

// //admin notes files
// const getStudyNoteFileListStart = () => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_FILES_START
//   };
// };

// const getStudyNoteFileListSuccess = adminstudynotesfiles => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_FILES_SUCCESS,
//     adminstudynotesfiles
//   };
// };

// const getStudyNoteFileListFail = error => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_FILES_FAIL,
//     error: error
//   };
// };

// const getStudyNoteFileDetailStart = () => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_FILE_START
//   };
// };

// const getStudyNoteFileDetailSuccess = file => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_FILE_SUCCESS,
//     file
//   };
// };

// const getStudyNoteFileDetailFail = error => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_FILE_FAIL,
//     error: error
//   };
// };

// const createStudyNoteFileStart = () => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTES_FILE_START
//   };
// };


// const createStudyNoteFileSuccess = file => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTES_FILE_SUCCESS,
//     file
//   };
// };

// const createStudyNoteFileFail = error => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTES_FILE_FAIL,
//     error: error
//   };
// };

// //admin study notes images
// const getStudyNoteImageListStart = () => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_IMAGES_START
//   };
// };

// const getStudyNoteImageListSuccess = adminstudynotesimages => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_IMAGES_SUCCESS,
//     adminstudynotesimages
//   };
// };

// const getStudyNoteImageListFail = error => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_IMAGES_FAIL,
//     error: error
//   };
// };

// const getStudyNoteImageDetailStart = () => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_IMAGE_START
//   };
// };

// const getStudyNoteImageDetailSuccess = image => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_IMAGE_SUCCESS,
//     image
//   };
// };

// const getStudyNoteImageDetailFail = error => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_IMAGE_FAIL,
//     error: error
//   };
// };

// const createStudyNoteImageStart = () => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTES_IMAGE_START
//   };
// };


// const createStudyNoteImageSuccess = image => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTES_IMAGE_SUCCESS,
//     image
//   };
// };

// const createStudyNoteImageFail = error => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTES_IMAGE_FAIL,
//     error: error
//   };
// };

// //admin study notes videos
// const getStudyNoteVideoListStart = () => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_VIDEOS_START
//   };
// };

// const getStudyNoteVideoListSuccess = adminstudynotesvideos => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_VIDEOS_SUCCESS,
//     adminstudynotesvideos
//   };
// };

// const getStudyNoteVideoListFail = error => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_VIDEOS_FAIL,
//     error: error
//   };
// };

// const getStudyNoteVideoDetailStart = () => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_VIDEO_START
//   };
// };

// const getStudyNoteVideoDetailSuccess = video => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_VIDEO_SUCCESS,
//     video
//   };
// };

// const getStudyNoteVideoDetailFail = error => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_VIDEO_FAIL,
//     error: error
//   };
// };

// const createStudyNoteVideoStart = () => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTES_VIDEO_START
//   };
// };


// const createStudyNoteVideoSuccess = video => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTES_VIDEO_SUCCESS,
//     video
//   };
// };

// const createStudyNoteVideoFail = error => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTES_VIDEO_FAIL,
//     error: error
//   };
// };

// //admin study notes notes
// const getStudyNoteNoteListStart = () => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_NOTES_START
//   };
// };

// const getStudyNoteNoteListSuccess = adminstudynotesnotes => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_NOTES_SUCCESS,
//     adminstudynotesnotes
//   };
// };

// const getStudyNoteNoteListFail = error => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_NOTES_FAIL,
//     error: error
//   };
// };

// const getStudyNoteNoteDetailStart = () => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_NOTE_START
//   };
// };

// const getStudyNoteNoteDetailSuccess = note => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_NOTE_SUCCESS,
//     note
//   };
// };

// const getStudyNoteNoteDetailFail = error => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_NOTE_FAIL,
//     error: error
//   };
// };

// const createStudyNoteNoteStart = () => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTES_NOTE_START
//   };
// };


// const createStudyNoteNoteSuccess = note => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTES_NOTE_SUCCESS,
//     note
//   };
// };

// const createStudyNoteNoteFail = error => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTES_NOTE_FAIL,
//     error: error
//   };
// };

// //admin study notes reference
// const getStudyNoteReferenceListStart = () => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_REFERENCES_START
//   };
// };

// const getStudyNoteReferenceListSuccess = adminstudynotesreferences => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_REFERENCES_SUCCESS,
//     adminstudynotesreferences
//   };
// };

// const getStudyNoteReferenceListFail = error => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_REFERENCES_FAIL,
//     error: error
//   };
// };

// const getStudyNoteReferenceDetailStart = () => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_REFERENCE_START
//   };
// };

// const getStudyNoteReferenceDetailSuccess = reference => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_REFERENCE_SUCCESS,
//     reference
//   };
// };

// const getStudyNoteReferenceDetailFail = error => {
//   return {
//     type: GET_ADMIN_STUDY_NOTES_REFERENCE_FAIL,
//     error: error
//   };
// };

// const createStudyNoteReferenceStart = () => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTES_REFERENCE_START
//   };
// };


// const createStudyNoteReferenceSuccess = reference => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTES_REFERENCE_SUCCESS,
//     reference
//   };
// };

// const createStudyNoteReferenceFail = error => {
//   return {
//     type: CREATE_ADMIN_STUDY_NOTES_REFERENCE_FAIL,
//     error: error
//   };
// };


// export const getAdminUpcomingCourses = (query, token) => {
//   return dispatch => {
//       dispatch(getAdminUpcomingCourseListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminupcomingcoursesURL}?q=${query}`, headers)
//         .then(res => {
//           const adminupcomingcourses = res.data;
//           dispatch(getAdminUpcomingCourseListSuccess(adminupcomingcourses));
//           })
//         .catch(err => {
//           dispatch(getAdminUpcomingCourseListStart(err));
//         });
//     };
// };

// export const getAdminUpcomingCourse = (id,token) => {
//   return dispatch => {
//       dispatch(getAdminUpcomingCourseDetailStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminupcomingcoursesURL}${id}`, headers)
//         .then(res => {
//           const adminupcomingcourse = res.data;
//           dispatch(getAdminUpcomingCourseDetailSuccess(adminupcomingcourse));
//           })
//         .catch(err => {
//           dispatch(getAdminUpcomingCourseDetailFail(err));
//         });
//     };
// };

// export const addUpComingCourse = (adminupcomingcourse, token) => {
//   return dispatch => {
//       dispatch(createAdminUpcomingCourseStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(adminupcomingcoursesURL, adminupcomingcourse, headers)
//         .then(res => {
//           dispatch(createAdminUpcomingCourseSuccess(adminupcomingcourse));
//         })
//         .catch(err => {
//           dispatch(createAdminUpcomingCourseFail(err));
//         });
//     };
// };

// export const getAdminOngoingCourses = (query, token) => {
//   return dispatch => {
//       dispatch(getAdminOngoingCourseListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminongoingcoursesURL}?q=${query}`, headers)
//         .then(res => {
//           const adminongoingcourses = res.data;
//           dispatch(getAdminOngoingCourseListSuccess(adminongoingcourses));
//           })
//         .catch(err => {
//           dispatch(getAdminOngoingCourseListStart(err));
//         });
//     };
// };

// export const getAdminOngoingCourse = (id,token) => {
//   return dispatch => {
//       dispatch(getAdminOngoingCourseDetailStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminongoingcoursesURL}${id}`, headers)
//         .then(res => {
//           const adminongoingcourse = res.data;
//           console.log(adminongoingcourse)
//           dispatch(getAdminOngoingCourseDetailSuccess(adminongoingcourse));
//           })
//         .catch(err => {
//           dispatch(getAdminOngoingCourseDetailFail(err));
//         });
//     };
// };

// export const addOngoingCourse = (course, token) => {
//   return dispatch => {
//       dispatch(createAdminOngoingCourseStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(adminongoingcoursesURL, course, headers)
//         .then(res => {
//           dispatch(createAdminOngoingCourseSuccess(course));
//         })
//         .catch(err => {
//           dispatch(createAdminOngoingCourseFail(err));
//         });
//     };
// };

// export const getAdminFinishedCourses = (query, token) => {
//   return dispatch => {
//       dispatch(getAdminFinishedCourseListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminfinishedcoursesURL}?q=${query}`, headers)
//         .then(res => {
//           const adminfinishedcourses = res.data;
//           dispatch(getAdminFinishedCourseListSuccess(adminfinishedcourses));
//           })
//         .catch(err => {
//           dispatch(getAdminFinishedCourseListStart(err));
//         });
//     };
// };

// export const getAdminFinishedCourse = (id,token) => {
//   return dispatch => {
//       dispatch(getAdminFinishedCourseDetailStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminfinishedcoursesURL}${id}`, headers)
//         .then(res => {
//           const course = res.data;
//           dispatch(getAdminFinishedCourseDetailSuccess(course));
//           })
//         .catch(err => {
//           dispatch(getAdminFinishedCourseDetailFail(err));
//         });
//     };
// };

// export const addFinishedCourse = (course, token) => {
//   return dispatch => {
//       dispatch(createAdminFinishedCourseStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(adminfinishedcoursesURL, course, headers)
//         .then(res => {
//           dispatch(createAdminFinishedCourseSuccess(course));
//         })
//         .catch(err => {
//           dispatch(createAdminFinishedCourseFail(err));
//         });
//     };
// };

// export const getAdminInactiveCourses = (query, token) => {
//   return dispatch => {
//       dispatch(getAdminInactiveCourseListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${admininactivecoursesURL}?q=${query}`, headers)
//         .then(res => {
//           const admininactivecourses = res.data;
//           dispatch(getAdminInactiveCourseListSuccess(admininactivecourses));
//           })
//         .catch(err => {
//           dispatch(getAdminInactiveCourseListStart(err));
//         });
//     };
// };

// export const getAdminInactiveCourse = (id,token) => {
//   return dispatch => {
//       dispatch(getAdminInactiveCourseDetailStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${admininactivecoursesURL}${id}`, headers)
//         .then(res => {
//           const course = res.data;
//           dispatch(getAdminInactiveCourseDetailSuccess(course));
//           })
//         .catch(err => {
//           dispatch(getAdminInactiveCourseDetailFail(err));
//         });
//     };
// };

// export const addInactiveCourse = (course, token) => {
//   return dispatch => {
//       dispatch(createAdminInactiveCourseStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(admininactivecoursesURL, course, headers)
//         .then(res => {
//           dispatch(createAdminInactiveCourseSuccess(course));
//         })
//         .catch(err => {
//           dispatch(createAdminInactiveCourseFail(err));
//         });
//     };
// };

// // export const getAdminTopics = (course_id, query, token) => {
// //   return dispatch => {
// //       dispatch(getAdminTopicListStart());
// //       const headers = {
// //         "Content-Type": "application/json",
// //         Authorization: `Token ${token}`
// //       };
// //       axios
// //         .get(`${admintopicsURL}?id=${course_id}&q=${query}`, headers)
// //         .then(res => {
// //           const admintopics = res.data;
// //           console.log(admintopics)
// //           dispatch(getAdminTopicListSuccess(admintopics));
// //           })
// //         .catch(err => {
// //           dispatch(getAdminTopicListStart(err));
// //         });
// //     };
// // };

// export const getAdminTopics = (course_id, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     axios.get(`${admintopicsURL}?id=${course_id}`, headers)
//         .then(res => {
//             dispatch({
//                 type: GET_ADMIN_TOPICS,
//                 payload: res.data
//             });
//         }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
// }

// export const getAdminTopic = (id,token) => {
//   return dispatch => {
//       dispatch(getAdminTopicDetailStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${admintopicsURL}${id}`, headers)
//         .then(res => {
//           const admintopic = res.data;
//           console.log(admintopic);
//           dispatch(getAdminTopicDetailSuccess(admintopic));
//           })
//         .catch(err => {
//           dispatch(getAdminTopicDetailFail(err));
//         });
//     };
// };



// export const addTopic = (topic, token) => {
//   return dispatch => {
//       dispatch(createAdminTopicStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(admintopicsURL, topic, headers)
//         .then(res => {
//           dispatch(createAdminTopicSuccess(topic));
//         })
//         .catch(err => {
//           dispatch(createAdminTopicFail(err));
//         });
//     };
// };

// export const getAdminReviews = (course_id, query, token) => {
//   return dispatch => {
//       dispatch(getAdminReviewListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminreviewsURL}?id=${course_id} q=${query}`, headers)
//         .then(res => {
//           const adminreviews = res.data;
//           dispatch(getAdminReviewListSuccess(adminreviews));
//           })
//         .catch(err => {
//           dispatch(getAdminReviewListStart(err));
//         });
//     };
// };

// export const getAuthors = (query, token) => {
//   return dispatch => {
//       dispatch(getAuthorListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminauthorsURL}?q=${query}`, headers)
//         .then(res => {
//           const adminauthors = res.data;
//           dispatch(getAuthorListSuccess(adminauthors));
//           })
//         .catch(err => {
//           dispatch(getAuthorListStart(err));
//         });
//     };
// };

// export const addAuthor = (author, token) => {
//   return dispatch => {
//       dispatch(createAuthorStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(adminauthorsURL, author, headers)
//         .then(res => {
//           dispatch(createAuthorSuccess(author));
//         })
//         .catch(err => {
//           dispatch(createAuthorFail(err));
//         });
//     };
// };

// export const getPublisherCities = (query, token) => {
//   return dispatch => {
//       dispatch(getPublisherCityListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminpublishercitiesURL}?q=${query}`, headers)
//         .then(res => {
//           const adminpublishercities = res.data;
//           dispatch(getPublisherCityListSuccess(adminpublishercities));
//           })
//         .catch(err => {
//           dispatch(getPublisherCityListStart(err));
//         });
//     };
// };

// export const addPublisherCity = (city, token) => {
//   return dispatch => {
//       dispatch(createPublisherCityStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(adminpublishercitiesURL, city, headers)
//         .then(res => {
//           dispatch(createPublisherCitySuccess(city));
//         })
//         .catch(err => {
//           dispatch(createPublisherCityFail(err));
//         });
//     };
// };

// export const getPublishers = (query, token) => {
//   return dispatch => {
//       dispatch(getPublisherListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminpublishersURL}?q=${query}`, headers)
//         .then(res => {
//           const adminpublishers = res.data;
//           dispatch(getPublisherListSuccess(adminpublishers));
//           })
//         .catch(err => {
//           dispatch(getPublisherListStart(err));
//         });
//     };
// };

// export const addPublisher = (publisher, token) => {
//   return dispatch => {
//       dispatch(createPublisherStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(adminpublishersURL, publisher, headers)
//         .then(res => {
//           dispatch(createPublisherSuccess(publisher));
//         })
//         .catch(err => {
//           dispatch(createPublisherFail(err));
//         });
//     };
// };

// // export const getStudentCourseEnrollments = (id, query, token) => {
// //   return dispatch => {
// //       dispatch(getStudentCourseEnrollmentListStart());
// //       const headers = {
// //         "Content-Type": "application/json",
// //         Authorization: `Token ${token}`
// //       };
// //       axios
// //         .get(`${studentcourseenrollmentsURL}?id=${id}&q=${query}`, headers)
// //         .then(res => {
// //           const studentcourseenrollments = res.data;
// //           dispatch(getStudentCourseEnrollmentListSuccess(studentcourseenrollments));
// //           })
// //         .catch(err => {
// //           dispatch(getStudentCourseEnrollmentListStart(err));
// //         });
// //     };
// // };
// export const getStudentCourseEnrollments = (id,token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//         };
//     axios.get(`${studentcourseenrollmentsURL}?id=${id}`, headers)
//         .then(res => {
//             dispatch({
//                 type: GET_STUDENT_COURSE_ENROLLMENTS,
//                 payload: res.data
//             });
//         }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
// }

// export const getStudentCourseEnrollment = (id,token) => {
//   return dispatch => {
//       dispatch(getStudentCourseEnrollmentDetailStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${studentcourseenrollmentsURL}${id}`, headers)
//         .then(res => {
//           const studentcourseenrollment = res.data;
//           dispatch(getStudentCourseEnrollmentDetailSuccess(studentcourseenrollment));
//           })
//         .catch(err => {
//           dispatch(getStudentCourseEnrollmentDetailFail(err));
//         });
//     };
// };

// export const addStudentCourseEnrollment = (studentcourseenrollment, token) => {
//   return dispatch => {
//       dispatch(createStudentCourseEnrollmentStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(studentcourseenrollmentsURL, studentcourseenrollment, headers)
//         .then(res => {
//           dispatch(createStudentCourseEnrollmentSuccess(studentcourseenrollment));
//         })
//         .catch(err => {
//           dispatch(createStudentCourseEnrollmentFail(err));
//         });
//     };
// };

// export const getUpcomingStudentCourses = (email, query, token) => {
//   return dispatch => {
//       dispatch(getUpcomingStudentCourseListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${upcomingstudentcoursesURL}?email=${email} q=${query}`, headers)
//         .then(res => {
//           const studentupcomingcourses = res.data;
//           dispatch(getUpcomingStudentCourseListSuccess(studentupcomingcourses));
//           })
//         .catch(err => {
//           dispatch(getUpcomingStudentCourseListStart(err));
//         });
//     };
// };


// export const getStudentUpcomingCourse = (id,token) => {
//   return dispatch => {
//       dispatch(getUpcomingStudentCourseDetailStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${upcomingstudentcoursesURL}${id}`, headers)
//         .then(res => {
//           const studentupcomingcourse = res.data;
//           dispatch(getUpcomingStudentCourseDetailSuccess(studentupcomingcourse));
//           })
//         .catch(err => {
//           dispatch(getUpcomingStudentCourseDetailFail(err));
//         });
//     };
// };

// export const getOngoingStudentCourses = (email, query, token) => {
//   return dispatch => {
//       dispatch(getOngoingStudentCourseListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${ongoingstudentcoursesURL}?email=${email} q=${query}`, headers)
//         .then(res => {
//           const studentongoingcourses = res.data;
//           dispatch(getOngoingStudentCourseListSuccess(studentongoingcourses));
//           })
//         .catch(err => {
//           dispatch(getOngoingStudentCourseListStart(err));
//         });
//     };
// };


// export const getStudentOngoingCourse = (id,token) => {
//   return dispatch => {
//       dispatch(getOngoingStudentCourseDetailStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${ongoingstudentcoursesURL}${id}`, headers)
//         .then(res => {
//           const studentongoingcourse = res.data;
//           dispatch(getOngoingStudentCourseDetailSuccess(studentongoingcourse));
//           })
//         .catch(err => {
//           dispatch(getOngoingStudentCourseDetailFail(err));
//         });
//     };
// };

// export const getAdminSubTopics = (topic_id, query, token) => {
//   return dispatch => {
//       dispatch(getAdminSubTopicListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminsubtopicsURL}?id=${topic_id} q=${query}`, headers)
//         .then(res => {
//           const adminsubtopics = res.data;
//           dispatch(getAdminSubTopicListSuccess(adminsubtopics));
//           })
//         .catch(err => {
//           dispatch(getAdminSubTopicListStart(err));
//         });
//     };
// };

// export const getAdminSubTopic = (id,token) => {
//   return dispatch => {
//       dispatch(getAdminSubTopicDetailStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminsubtopicsURL}${id}`, headers)
//         .then(res => {
//           const subtopic = res.data;
//           dispatch(getAdminSubTopicDetailSuccess(subtopic));
//           })
//         .catch(err => {
//           dispatch(getAdminSubTopicDetailFail(err));
//         });
//     };
// };

// export const addSubTopic = (subtopic, token) => {
//   return dispatch => {
//       dispatch(createAdminSubTopicStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(adminsubtopicsURL, subtopic, headers)
//         .then(res => {
//           dispatch(createAdminSubTopicSuccess(subtopic));
//         })
//         .catch(err => {
//           dispatch(createAdminSubTopicFail(err));
//         });
//     };
// };

// export const getAdminTopicObjectives = (topic_id, query, token) => {
//   return dispatch => {
//       dispatch(getAdminTopicObjectiveListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${admintopicobjectivesURL}?id=${topic_id} q=${query}`, headers)
//         .then(res => {
//           const admintopicobjectives = res.data;
//           dispatch(getAdminTopicObjectiveListSuccess(admintopicobjectives));
//           })
//         .catch(err => {
//           dispatch(getAdminTopicObjectiveListStart(err));
//         });
//     };
// };

// export const getAdminTopicObjective = (id,token) => {
//   return dispatch => {
//       dispatch(getAdminTopicObjectiveDetailStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${admintopicobjectivesURL}${id}`, headers)
//         .then(res => {
//           const objective = res.data;
//           dispatch(getAdminTopicObjectiveDetailSuccess(objective));
//           })
//         .catch(err => {
//           dispatch(getAdminTopicObjectiveDetailFail(err));
//         });
//     };
// };

// export const addTopicObjective = (objective, token) => {
//   return dispatch => {
//       dispatch(createAdminTopicObjectiveStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(admintopicobjectivesURL, objective, headers)
//         .then(res => {
//           dispatch(createAdminTopicObjectiveSuccess(objective));
//         })
//         .catch(err => {
//           dispatch(createAdminTopicObjectiveFail(err));
//         });
//     };
// };

// export const getAdminTopicGuidelines = (topic_id, query, token) => {
//   return dispatch => {
//       dispatch(getAdminTopicGuidelineListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${admintopicguidelinesURL}?id=${topic_id} q=${query}`, headers)
//         .then(res => {
//           const admintopicguidelines = res.data;
//           dispatch(getAdminTopicGuidelineListSuccess(admintopicguidelines));
//           })
//         .catch(err => {
//           dispatch(getAdminTopicGuidelineListStart(err));
//         });
//     };
// };

// export const getAdminTopicGuideline = (id,token) => {
//   return dispatch => {
//       dispatch(getAdminTopicGuidelineDetailStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${admintopicguidelinesURL}${id}`, headers)
//         .then(res => {
//           const guideline = res.data;
//           dispatch(getAdminTopicGuidelineDetailSuccess(guideline));
//           })
//         .catch(err => {
//           dispatch(getAdminTopicGuidelineDetailFail(err));
//         });
//     };
// };

// export const addTopicGuideLine = (guideline, token) => {
//   return dispatch => {
//       dispatch(createAdminTopicGuidelineStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(admintopicguidelinesURL, guideline, headers)
//         .then(res => {
//           dispatch(createAdminTopicGuidelineSuccess(guideline));
//         })
//         .catch(err => {
//           dispatch(createAdminTopicGuidelineFail(err));
//         });
//     };
// };

// export const getStudyNotes = (topic_id, query, token) => {
//   return dispatch => {
//       dispatch(getStudyNoteListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminstudynotesURL}?id=${topic_id} q=${query}`, headers)
//         .then(res => {
//           const adminstudynotes = res.data;
//           dispatch(getStudyNoteListSuccess(adminstudynotes));
//           })
//         .catch(err => {
//           dispatch(getStudyNoteListStart(err));
//         });
//     };
// };

// export const getStudyNote = (id,token) => {
//   return dispatch => {
//       dispatch(getStudyNoteDetailStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminstudynotesURL}${id}`, headers)
//         .then(res => {
//           const note = res.data;
//           dispatch(getStudyNoteDetailSuccess(note));
//           })
//         .catch(err => {
//           dispatch(getStudyNoteDetailFail(err));
//         });
//     };
// };

// export const addStudyNote = (note, token) => {
//   return dispatch => {
//       dispatch(createStudyNoteStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(adminstudynotesURL, note, headers)
//         .then(res => {
//           dispatch(createStudyNoteSuccess(note));
//         })
//         .catch(err => {
//           dispatch(createStudyNoteFail(err));
//         });
//     };
// };

// export const getStudyNoteFiles = (note_id, query, token) => {
//   return dispatch => {
//       dispatch(getStudyNoteFileListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminstudynotesfilesURL}?id=${note_id} q=${query}`, headers)
//         .then(res => {
//           const adminstudynotesfiles = res.data;
//           dispatch(getStudyNoteFileListSuccess(adminstudynotesfiles));
//           })
//         .catch(err => {
//           dispatch(getStudyNoteFileListStart(err));
//         });
//     };
// };

// export const getStudyNoteFile = (id,token) => {
//   return dispatch => {
//       dispatch(getStudyNoteFileDetailStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminstudynotesfilesURL}${id}`, headers)
//         .then(res => {
//           const file = res.data;
//           dispatch(getStudyNoteFileDetailSuccess(file));
//           })
//         .catch(err => {
//           dispatch(getStudyNoteFileDetailFail(err));
//         });
//     };
// };

// export const addStudyNoteFile = (file, token) => {
//   return dispatch => {
//       dispatch(createStudyNoteFileStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(adminstudynotesfilesURL, file, headers)
//         .then(res => {
//           dispatch(createStudyNoteFileSuccess(file));
//         })
//         .catch(err => {
//           dispatch(createStudyNoteFileFail(err));
//         });
//     };
// };

// export const getStudyNoteImages = (note_id, query, token) => {
//   return dispatch => {
//       dispatch(getStudyNoteImageListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminstudynotesimagesURL}?id=${note_id} q=${query}`, headers)
//         .then(res => {
//           const adminstudynotesimages = res.data;
//           dispatch(getStudyNoteImageListSuccess(adminstudynotesimages));
//           })
//         .catch(err => {
//           dispatch(getStudyNoteImageListStart(err));
//         });
//     };
// };

// export const getStudyNoteImage = (id,token) => {
//   return dispatch => {
//       dispatch(getStudyNoteImageDetailStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminstudynotesimagesURL}${id}`, headers)
//         .then(res => {
//           const image = res.data;
//           dispatch(getStudyNoteImageDetailSuccess(image));
//           })
//         .catch(err => {
//           dispatch(getStudyNoteImageDetailFail(err));
//         });
//     };
// };

// export const addStudyNoteImage = (image, token) => {
//   return dispatch => {
//       dispatch(createStudyNoteImageStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(adminstudynotesimagesURL, image, headers)
//         .then(res => {
//           dispatch(createStudyNoteImageSuccess(image));
//         })
//         .catch(err => {
//           dispatch(createStudyNoteImageFail(err));
//         });
//     };
// };

// export const getStudyNoteVideos = (note_id, query, token) => {
//   return dispatch => {
//       dispatch(getStudyNoteVideoListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminstudynotesvideosURL}?id=${note_id} q=${query}`, headers)
//         .then(res => {
//           const adminstudynotesvideos = res.data;
//           dispatch(getStudyNoteVideoListSuccess(adminstudynotesvideos));
//           })
//         .catch(err => {
//           dispatch(getStudyNoteVideoListStart(err));
//         });
//     };
// };

// export const getStudyNoteVideo = (id,token) => {
//   return dispatch => {
//       dispatch(getStudyNoteVideoDetailStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminstudynotesvideosURL}${id}`, headers)
//         .then(res => {
//           const video = res.data;
//           dispatch(getStudyNoteVideoDetailSuccess(video));
//           })
//         .catch(err => {
//           dispatch(getStudyNoteVideoDetailFail(err));
//         });
//     };
// };

// export const addStudyNoteVideo = (video, token) => {
//   return dispatch => {
//       dispatch(createStudyNoteVideoStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(adminstudynotesvideosURL, video, headers)
//         .then(res => {
//           dispatch(createStudyNoteVideoSuccess(video));
//         })
//         .catch(err => {
//           dispatch(createStudyNoteVideoFail(err));
//         });
//     };
// };

// export const getStudyNoteNotes = (note_id, query, token) => {
//   return dispatch => {
//       dispatch(getStudyNoteNoteListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminstudynotesnotesURL}?id=${note_id} q=${query}`, headers)
//         .then(res => {
//           const adminstudynotesnotes = res.data;
//           dispatch(getStudyNoteNoteListSuccess(adminstudynotesnotes));
//           })
//         .catch(err => {
//           dispatch(getStudyNoteNoteListStart(err));
//         });
//     };
// };

// export const getStudyNoteNote = (id,token) => {
//   return dispatch => {
//       dispatch(getStudyNoteNoteDetailStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminstudynotesnotesURL}${id}`, headers)
//         .then(res => {
//           const note = res.data;
//           dispatch(getStudyNoteNoteDetailSuccess(note));
//           })
//         .catch(err => {
//           dispatch(getStudyNoteNoteDetailFail(err));
//         });
//     };
// };

// export const addStudyNoteNote = (note, token) => {
//   return dispatch => {
//       dispatch(createStudyNoteNoteStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(adminstudynotesnotesURL, note, headers)
//         .then(res => {
//           dispatch(createStudyNoteNoteSuccess(note));
//         })
//         .catch(err => {
//           dispatch(createStudyNoteNoteFail(err));
//         });
//     };
// };

// export const getStudyNoteReferences = (note_id, query, token) => {
//   return dispatch => {
//       dispatch(getStudyNoteReferenceListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminstudynotesreferencesURL}?id=${note_id} q=${query}`, headers)
//         .then(res => {
//           const adminstudynotesreferences = res.data;
//           dispatch(getStudyNoteReferenceListSuccess(adminstudynotesreferences));
//           })
//         .catch(err => {
//           dispatch(getStudyNoteReferenceListStart(err));
//         });
//     };
// };

// export const getStudyNoteReference = (id,token) => {
//   return dispatch => {
//       dispatch(getStudyNoteReferenceDetailStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${adminstudynotesreferencesURL}${id}`, headers)
//         .then(res => {
//           const reference = res.data;
//           dispatch(getStudyNoteReferenceDetailSuccess(reference));
//           })
//         .catch(err => {
//           dispatch(getStudyNoteReferenceDetailFail(err));
//         });
//     };
// };

// export const addStudyNoteReference = (reference, token) => {
//   return dispatch => {
//       dispatch(createStudyNoteReferenceStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .post(adminstudynotesreferencesURL, reference, headers)
//         .then(res => {
//           dispatch(createStudyNoteReferenceSuccess(reference));
//         })
//         .catch(err => {
//           dispatch(createStudyNoteReferenceFail(err));
//         });
//     };
// };


// export const getCourseStatus = (token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     axios.get(coursestatuschoicesURL, headers)
//         .then(res => {
//             dispatch({
//                 type: GET_COURSE_STATUS_CHOICES,
//                 payload: res.data
//             });
//         }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
// }

// export const editUpComingCourse = (id, course, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${adminupcomingcoursesURL}${id}/`, course, headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_UPCOMING_COURSE,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }


// export const editFinishedCourse = (id, course, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${adminfinishedcoursesURL}${id}/`, course, headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_FINISHED_COURSE,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }


// export const editOngoingCourse = (id, course, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${adminongoingcoursesURL}${id}/`, course, headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_ONGOING_COURSE,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }


// export const editInactiveCourse = (id, course, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${admininactivecoursesURL}${id}/`, course, headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_INACTIVE_COURSE,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }

// export const editTopic = (id, topic, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${admintopicsURL}${id}/`, topic, headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_TOPIC,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }

// export const editTopicObjective = (id, objective, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${admintopicobjectivesURL}${id}/`, objective,headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_TOPIC_OBJECTIVE,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }


// export const editTopicGuideline = (id, guideline, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${admintopicguidelinesURL}${id}/`, guideline, headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_TOPIC_GUIDELINE,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }

// export const editSubTopic = (id, subtopic, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${adminsubtopicsURL}${id}/`, subtopic,headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_SUBTOPIC,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }


// export const editStudyNote = (id, note, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${adminstudynotesURL}${id}/`, note, headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_STUDY_NOTE,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }


// export const editStudyNoteVideo = (id, video, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${adminstudynotesvideosURL}${id}/`, video, headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_STUDY_NOTE_VIDEO,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }

// export const editStudyNoteImage = (id, image, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${adminstudynotesimagesURL}${id}/`, image, headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_STUDY_NOTE_IMAGE,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }

// export const editStudyNoteNote = (id, note, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${adminstudynotesnotesURL}${id}/`, note, headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_STUDY_NOTE_NOTE,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }

// export const editStudyNoteFile = (id, file, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${adminstudynotesfilesURL}${id}/`, file,headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_STUDY_NOTE_FILE,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }

// export const editStudyNoteReference = (id, reference, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${adminstudynotesreferencesURL}${id}/`, reference, headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_STUDY_NOTE_REFERENCE,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }

// export const editAuthor = (id, author, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${adminauthorsURL}${id}/`, author,headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_AUTHOR,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }

// export const editPublisherCity = (id, city, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${adminpublishercitiesURL}${id}/`, city,headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_PUBLISHER_CITY,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }

// export const editPublisher = (id, publisher, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${adminpublishersURL}${id}/`, publisher,headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_PUBLISHER,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }

// //Edit
// export const editStudentCourseEnrollment = (id, studentcourseenrollment, token) => dispatch => {
//     const headers ={
//           "Content-Type": "application/json",
//           Authorization: `Token ${token}`,
//           'Accept': 'application/json',
//     };
//     JSON.stringify(id, null, 3)
//     axios.patch(`${studentcourseenrollmentsURL}${id}/`, studentcourseenrollment, headers)
//         .then(res => {
//             dispatch({
//                 type: EDIT_STUDENT_COURSE_ENROLLMENT,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }
