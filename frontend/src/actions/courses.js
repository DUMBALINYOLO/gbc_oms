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
  studentcourseenrollmentsURL
} from '../constants';
import { createMessage, returnErrors } from './messages';



export const getCourseStatus = (token) => dispatch => {
    const headers ={
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
    const headers ={
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
    const headers ={
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
    const headers ={
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
    const headers ={
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
    const headers ={
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
    const headers ={
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
    const headers ={
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
    const headers ={
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


export const addCourse = (course, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(adminupcomingcoursesURL, course, headers)
        .then(res => {
            dispatch({
                type: ADD_COURSE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editCourse = (id, course, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${adminupcomingcoursesURL}${id}/`, course, headers)
        .then(res => {
            dispatch({
                type: EDIT_COURSE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getAdminTopics = (course_id, token) => dispatch => {
    const headers ={
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
    const headers ={
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
    const headers ={
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
    const headers ={
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
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getAdminReviews = (course_id, token) => dispatch => {
    const headers ={
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
    const headers ={
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
    const headers ={
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
    const headers ={
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
    const headers ={
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
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}



export const getAdminTopicGuidelines = (topic_id, token) => dispatch => {
    const headers ={
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
    const headers ={
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
    const headers ={
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
    const headers ={
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
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}



export const getAdminSubTopics = (topic_id, token) => dispatch => {
    const headers ={
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
    const headers ={
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
    const headers ={
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
    const headers ={
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
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getStudyNotes = (topic_id, token) => dispatch => {
    const headers ={
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
    const headers ={
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
    const headers ={
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
    const headers ={
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
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getStudyNoteVideos = (note_id, token) => dispatch => {
    const headers ={
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
    const headers ={
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
    const headers ={
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
    const headers ={
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
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getStudyNoteImages = (note_id, token) => dispatch => {
    const headers ={
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
    const headers ={
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
    const headers ={
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
    const headers ={
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
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getStudyNoteNotes = (note_id, token) => dispatch => {
    const headers ={
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
    const headers ={
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
    const headers ={
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
    const headers ={
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
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getStudyNoteFiles = (note_id, token) => dispatch => {
    const headers ={
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
    const headers ={
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
    const headers ={
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
    const headers ={
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
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getStudyNoteReferences = (note_id, token) => dispatch => {
    const headers ={
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
    const headers ={
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
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(adminstudynotesfilesURL, reference, headers)
        .then(res => {
            dispatch({
                type: ADD_STUDY_NOTE_REFERENCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editStudyNoteReference = (id, reference, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${adminstudynotesfilesURL}${id}/`, reference, headers)
        .then(res => {
            dispatch({
                type: EDIT_STUDY_NOTE_REFERENCE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getAuthors = (token) => dispatch => {
    const headers ={
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
    const headers ={
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
    const headers ={
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
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getPublisherCities = (token) => dispatch => {
    const headers ={
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
    const headers ={
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
    const headers ={
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
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const getPublishers= (token) => dispatch => {
    const headers ={
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
    const headers ={
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
    const headers ={
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
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


// Get
export const getStudentCourseEnrollments = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
        };
    axios.get(studentcourseenrollmentsURL, headers)
        .then(res => {
            dispatch({
                type: GET_STUDENT_COURSE_ENROLLMENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Add
export const addStudentCourseEnrollment = (studentcourseenrollment, token) => dispatch => {
    const headers ={
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
      const headers ={
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
    const headers ={
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
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}