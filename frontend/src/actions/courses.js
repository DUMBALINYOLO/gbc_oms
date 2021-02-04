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
  GET_COURSE_STATUS_CHOICES

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
  adminpublishersURL
} from '../constants';



export const getCourseStatus = () => dispatch => {
    axios.get(coursestatuschoicesURL)
        .then(res => {
            dispatch({
                type: GET_COURSE_STATUS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getAdminUpcomingCourses = () => dispatch => {
    axios.get(adminupcomingcoursesURL)
        .then(res => {
            dispatch({
                type: GET_UPCOMING_COURSES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminUpcomingCourse = (id) => dispatch => {
    axios.get(`${adminupcomingcoursesURL}${id}/`)
        .then(res => {
            dispatch({
                type: GET_UPCOMING_COURSE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminOngoingCourses = () => dispatch => {
    axios.get(adminongoingcoursesURL)
        .then(res => {
            dispatch({
                type: GET_ONGOING_COURSES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminOngoingCourse = (id) => dispatch => {
    axios.get(`${adminongoingcoursesURL}${id}/`)
        .then(res => {
            dispatch({
                type: GET_ONGOING_COURSE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getAdminFinishedCourses = () => dispatch => {
    axios.get(adminfinishedcoursesURL)
        .then(res => {
            dispatch({
                type: GET_FINISHED_COURSES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminFinishedCourse= (id) => dispatch => {
    axios.get(`${adminfinishedcoursesURL}${id}/`)
        .then(res => {
            dispatch({
                type: GET_FINISHED_COURSE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getAdminInactiveCourses = () => dispatch => {
    axios.get(admininactivecoursesURL)
        .then(res => {
            dispatch({
                type: GET_INACTIVE_COURSES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminInactiveCourse= (id) => dispatch => {
    axios.get(`${admininactivecoursesURL}${id}/`)
        .then(res => {
            dispatch({
                type: GET_INACTIVE_COURSE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const addCourse = (course) => dispatch => {
    axios.post(adminupcomingcoursesURL, course)
        .then(res => {
            dispatch({
                type: ADD_COURSE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editCourse = (id, course) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`${adminupcomingcoursesURL}${id}/`, course)
        .then(res => {
            dispatch({
                type: EDIT_COURSE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getAdminTopics = (course_id) => dispatch => {
    axios.get(`${admintopicsURL}?id=${course_id}`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_TOPICS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminTopic= (id) => dispatch => {
    axios.get(`${admintopicsURL}${id}/`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_TOPIC,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const addTopic = (topic) => dispatch => {
    axios.post(admintopicsURL, topic)
        .then(res => {
            dispatch({
                type: ADD_TOPIC,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const editTopic = (id, topic) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`${admintopicsURL}${id}/`, topic)
        .then(res => {
            dispatch({
                type: EDIT_TOPIC,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getAdminReviews = (course_id) => dispatch => {
    axios.get(`${adminreviewsURL}?id=${course_id}`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_REVIEWS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getAdminTopicObjectives = (topic_id) => dispatch => {
    axios.get(`${admintopicobjectivesURL}?id=${topic_id}`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_TOPIC_OBJECTIVES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminTopicObjective = (id) => dispatch => {
    axios.get(`${admintopicobjectivesURL}/${id}/`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_TOPIC_OBJECTIVE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const addTopicObjective = (objective) => dispatch => {
    axios.post(admintopicobjectivesURL, objective)
        .then(res => {
            dispatch({
                type: ADD_TOPIC_OBJECTIVE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editTopicObjective = (id, objective) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`${admintopicobjectivesURL}${id}/`, objective)
        .then(res => {
            dispatch({
                type: EDIT_TOPIC_OBJECTIVE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getAdminTopicGuidelines = (topic_id) => dispatch => {
    axios.get(`${admintopicguidelinesURL}?id=${topic_id}`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_TOPIC_GUIDELINES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminTopicGuideline = (id) => dispatch => {
    axios.get(`${admintopicguidelinesURL}${id}/`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_TOPIC_GUIDELINE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const addTopicGuideLine = (guideline) => dispatch => {
    axios.post(admintopicguidelinesURL, guideline)
        .then(res => {
            dispatch({
                type: ADD_TOPIC_GUIDELINE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editTopicGuideline = (id, guideline) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`${admintopicguidelinesURL}${id}/`, guideline)
        .then(res => {
            dispatch({
                type: EDIT_TOPIC_GUIDELINE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getAdminSubTopics = (topic_id) => dispatch => {
    axios.get(`${adminsubtopicsURL}?id=${topic_id}`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_SUBTOPICS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminSubTopic = (id) => dispatch => {
    axios.get(`${adminsubtopicsURL}${id}/`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_SUBTOPIC,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const addSubTopic = (subtopic) => dispatch => {
    axios.post(adminsubtopicsURL, subtopic)
        .then(res => {
            dispatch({
                type: ADD_SUBTOPIC,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editSubTopic = (id, subtopic) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`${adminsubtopicsURL}${id}/`, subtopic)
        .then(res => {
            dispatch({
                type: EDIT_SUBTOPIC,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getStudyNotes = (topic_id) => dispatch => {
    axios.get(`${adminstudynotesURL}?id=${topic_id}`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getStudyNote = (id) => dispatch => {
    axios.get(`${adminstudynotesURL}${id}/`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const addStudyNote = (note) => dispatch => {
    axios.post(adminstudynotesURL, note)
        .then(res => {
            dispatch({
                type: ADD_STUDY_NOTE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editStudyNote = (id, note) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`${adminstudynotesURL}${id}/`, note)
        .then(res => {
            dispatch({
                type: EDIT_STUDY_NOTE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getStudyNoteVideos = (note_id) => dispatch => {
    axios.get(`${adminstudynotesvideosURL}?id=${note_id}`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTES_VIDEOS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getStudyNoteVideo = (id) => dispatch => {
    axios.get(`http://127.0.0.1:8000/api/courses/admin-study-notes-videos/${id}/`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTE_VIDEO,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const addStudyNoteVideo = (video) => dispatch => {
    axios.post(adminstudynotesvideosURL, video)
        .then(res => {
            dispatch({
                type: ADD_STUDY_NOTE_VIDEO,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editStudyNoteVideo = (id, video) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/courses/admin-study-notes-videos/${id}/`, video)
        .then(res => {
            dispatch({
                type: EDIT_STUDY_NOTE_VIDEO,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getStudyNoteImages = (note_id) => dispatch => {
    axios.get(`${adminstudynotesimagesURL}?id=${note_id}`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTES_IMAGES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getStudyNoteImage = (id) => dispatch => {
    axios.get(`http://127.0.0.1:8000/api/courses/admin-study-notes-images/${id}/`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTE_IMAGE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const addStudyNoteImage = (image) => dispatch => {
    axios.post(adminstudynotesimagesURL, image)
        .then(res => {
            dispatch({
                type: ADD_STUDY_NOTE_IMAGE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editStudyNoteImage = (id, image) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/courses/admin-study-notes-images/${id}/`, image)
        .then(res => {
            dispatch({
                type: EDIT_STUDY_NOTE_IMAGE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getStudyNoteNotes = (note_id) => dispatch => {
    axios.get(`${adminstudynotesnotesURL}?id=${note_id}`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTES_NOTES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getStudyNoteNote = (id) => dispatch => {
    axios.get(`http://127.0.0.1:8000/api/courses/admin-study-notes-notes/${id}/`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTE_NOTE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const addStudyNoteNote = (note) => dispatch => {
    axios.post(adminstudynotesnotesURL, note)
        .then(res => {
            dispatch({
                type: ADD_STUDY_NOTE_NOTE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editStudyNoteNote = (id, note) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/courses/admin-study-notes-notes/${id}/`, note)
        .then(res => {
            dispatch({
                type: EDIT_STUDY_NOTE_NOTE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getStudyNoteFiles = (note_id) => dispatch => {
    axios.get(`${adminstudynotesfilesURL}?id=${note_id}`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTES_FILES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getStudyNoteFile = (id) => dispatch => {
    axios.get(`http://127.0.0.1:8000/api/courses/admin-study-notes-files/${id}/`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTE_FILE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const addStudyNoteFile = (file) => dispatch => {
    axios.post(adminstudynotesfilesURL, file)
        .then(res => {
            dispatch({
                type: ADD_STUDY_NOTE_FILE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editStudyNoteFile = (id, file) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/courses/admin-study-notes-files/${id}/`, file)
        .then(res => {
            dispatch({
                type: EDIT_STUDY_NOTE_FILE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getStudyNoteReferences = (note_id) => dispatch => {
    axios.get(`${adminstudynotesreferencesURL}?id=${note_id}`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTES_REFERENCES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getStudyNoteReference = (id) => dispatch => {
    axios.get(`http://127.0.0.1:8000/api/courses/admin-study-notes-references/${id}/`)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDY_NOTE_REFERENCE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const addStudyNoteReference = (reference) => dispatch => {
    axios.post(adminstudynotesfilesURL, reference)
        .then(res => {
            dispatch({
                type: ADD_STUDY_NOTE_REFERENCE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editStudyNoteReference = (id, reference) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/courses/admin-study-notes-references/${id}/`, reference)
        .then(res => {
            dispatch({
                type: EDIT_STUDY_NOTE_REFERENCE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getAuthors = () => dispatch => {
    axios.get(adminauthorsURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_AUTHORS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const addAuthor = (author) => dispatch => {
    axios.post(adminauthorsURL, author)
        .then(res => {
            dispatch({
                type: ADD_AUTHOR,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editAuthor = (id, author) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/courses/admin-authors/${id}/`, author)
        .then(res => {
            dispatch({
                type: EDIT_AUTHOR,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getPublisherCities = () => dispatch => {
    axios.get(adminpublishercitiesURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_PUBLISHER_CITIES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const addPublisherCity = (city) => dispatch => {
    axios.post(adminpublishercitiesURL, city)
        .then(res => {
            dispatch({
                type: ADD_PUBLISHER_CITY,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editPublisherCity = (id, city) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/courses/admin-publisher-cities/${id}/`, city)
        .then(res => {
            dispatch({
                type: EDIT_PUBLISHER_CITY,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getPublishers= () => dispatch => {
    axios.get(adminpublishersURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_PUBLISHERS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const addPublisher = (publisher) => dispatch => {
    axios.post(adminpublishersURL, publisher)
        .then(res => {
            dispatch({
                type: ADD_PUBLISHER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editPublisher = (id, publisher) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/courses/admin-publishers/${id}/`, publisher)
        .then(res => {
            dispatch({
                type: EDIT_PUBLISHER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
