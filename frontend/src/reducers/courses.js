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

} from '../types/courseTypes';




const initialState = {
    coursestatuschoices: [],
    adminupcomingcourses: [],
    adminupcomingcourse: {},
    adminongoingcourses: [],
    adminongoingcourse: {},
    adminfinishedcourses: [],
    adminfinishedcourse:{},
    admininactivecourses: [],
    admininactivecourse: {},
    adminreviews: [],
    admintopics: [],
    admintopic: {},
    admintopicobjectives: [],
    admintopicguidelines: [],
    adminsubtopics: [],
    adminsubtopic: {},
    adminstudynotes: [],
    adminstudynote: {},
    adminstudynotesimages: [],
    adminstudynotesvideos: [],
    adminstudynotesfiles: [],
    adminstudynotesnotes: [],
    adminstudynotesreferences: [],
    adminauthors: [],
    adminpublishers: [],
    adminpublishercities: [],
    studentcourseenrollments: [],
    studentcourseenrollment: {},
    studentupcomingcourses: [],
    studentupcomingcourse: {},
    studentongoingcourses: [],
    studentongoingcourse: {},
    loading: false
}

export default function courses(state = initialState, action){
    switch(action.type){
        case GET_STUDENT_UPCOMING_COURSES:
            return {
                ...state,
                studentupcomingcourses : action.payload
            };
        case GET_STUDENT_UPCOMING_COURSE:
            return {
                ...state,
                studentupcomingcourse : action.payload
            };
        case GET_STUDENT_ONGOING_COURSES:
            return {
                ...state,
                studentongoingcourses : action.payload
            };
        case GET_STUDENT_ONGOING_COURSE:
            return {
                ...state,
                studentongoingcourse : action.payload
            };

        case GET_COURSE_STATUS_CHOICES:
            return {
                ...state,
                coursestatuschoices : action.payload
            };

        case GET_UPCOMING_COURSES:
            return {
                ...state,
                adminupcomingcourses : action.payload
            };

        case GET_UPCOMING_COURSE:
            return {
                ...state,
                adminupcomingcourse : action.payload
            };

        case GET_ONGOING_COURSES:
            return {
                ...state,
                adminongoingcourses : action.payload
            };

        case GET_ONGOING_COURSE:
            return {
                ...state,
                adminongoingcourse : action.payload
            };

        case GET_FINISHED_COURSES:
            return {
                ...state,
                adminfinishedcourses : action.payload
            };

        case GET_FINISHED_COURSE:
            return {
                ...state,
                adminfinishedcourse : action.payload
            };

        case GET_INACTIVE_COURSES:
            return {
                ...state,
                admininactivecourses : action.payload
            };

        case GET_INACTIVE_COURSE:
            return {
                ...state,
                admininactivecourse : action.payload
            };

        case ADD_UPCOMING_COURSE:
            return {
                ...state,
                course: [...state.adminupcomingcourses, action.payload]
            }

        case EDIT_UPCOMING_COURSE:
            const eearrayList = state.adminupcomingcourses;
            eearrayList.splice(eearrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                adminupcomingcourses: eearrayList,
            };
        case ADD_FINISHED_COURSE:
        return {
            ...state,
            course: [...state.adminfinishedcourses, action.payload]
        }

        case EDIT_FINISHED_COURSE:
            const jarrayList = state.adminfinishedcourses;
            jarrayList.splice(jarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                adminfinishedcourses: jarrayList,
            };
        case ADD_ONGOING_COURSE:
        return {
            ...state,
            course: [...state.adminongoingcourses, action.payload]
        }
        case EDIT_ONGOING_COURSE:
            const oarrayList = state.adminongoingcourses;
            oarrayList.splice(oarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                adminongoingcourses: oarrayList,
            };
        case ADD_INACTIVE_COURSE:
        return {
            ...state,
            course: [...state.admininactivecourses, action.payload]
        }

        case EDIT_INACTIVE_COURSE:
            const iarrayList = state.admininactivecourses;
            iarrayList.splice(iarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                admininactivecourses: iarrayList,
            };
        case GET_ADMIN_REVIEWS:
            return {
                ...state,
                adminreviews : action.payload
            };

        case GET_ADMIN_TOPICS:
            return {
                ...state,
                admintopics : action.payload
            };

        case GET_ADMIN_TOPIC:
            return {
                ...state,
                admintopic : action.payload
            };

        case ADD_TOPIC:
            return {
                ...state,
                topic: [...state.admintopics, action.payload]
            }

        case EDIT_TOPIC:
            const tarrayList = state.admintopics;
            tarrayList.splice(tarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                admintopics: tarrayList,
            };
        case GET_ADMIN_TOPIC_OBJECTIVES:
            return {
                ...state,
                admintopicobjectives : action.payload
            };

        case ADD_TOPIC_OBJECTIVE:
            return {
                ...state,
                objective: [...state.admintopicobjectives, action.payload]
            }

        case EDIT_TOPIC_OBJECTIVE:
            const oparrayList = state.admintopicobjectives;
            oparrayList.splice(oparrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                admintopicobjectives: oparrayList,
            };
        case GET_ADMIN_TOPIC_GUIDELINES:
            return {
                ...state,
                admintopicguidelines : action.payload
            };

        case ADD_TOPIC_GUIDELINE:
            return {
                ...state,
                guideline: [...state.admintopicguidelines, action.payload]
            }

        case EDIT_TOPIC_GUIDELINE:
            const garrayList = state.admintopicguidelines;
            garrayList.splice(garrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                admintopicobjectives: garrayList,
            };
        case GET_ADMIN_SUBTOPICS:
            return {
                ...state,
                adminsubtopics : action.payload
            };

        case GET_ADMIN_SUBTOPIC:
            return {
                ...state,
                adminsubtopic : action.payload
            };


        case ADD_SUBTOPIC:
            return {
                ...state,
                subtopic: [...state.adminsubtopics, action.payload]
            }

        case EDIT_SUBTOPIC:
            const sarrayList = state.adminsubtopics;
            sarrayList.splice(sarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                adminsubtopics: sarrayList,
            };

        case GET_ADMIN_STUDY_NOTES:
            return {
                ...state,
                adminstudynotes : action.payload
            };

        case GET_ADMIN_STUDY_NOTE:
            return {
                ...state,
                adminstudynote : action.payload
            };


        case ADD_STUDY_NOTE:
            return {
                ...state,
                note: [...state.adminstudynotes, action.payload]
            }

        case EDIT_STUDY_NOTE:
            const starrayList = state.adminstudynotes;
            starrayList.splice(starrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                adminstudynotes: starrayList,
            };

        case GET_ADMIN_STUDY_NOTES_FILES:
            return {
                ...state,
                adminstudynotesfiles : action.payload
            };

        case ADD_STUDY_NOTE_FILE:
            return {
                ...state,
                file: [...state.adminstudynotesfiles, action.payload]
            }

        case EDIT_STUDY_NOTE_FILE:
            const fstarrayList = state.adminstudynotesfiles;
            fstarrayList.splice(fstarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                adminstudynotesfiles: fstarrayList,
            };

        case GET_ADMIN_STUDY_NOTES_NOTES:
            return {
                ...state,
                adminstudynotesnotes : action.payload
            };

        case ADD_STUDY_NOTE_NOTE:
            return {
                ...state,
                file: [...state.adminstudynotesnotes, action.payload]
            }

        case EDIT_STUDY_NOTE_NOTE:
            const fsstarrayList = state.adminstudynotesnotes;
            fsstarrayList.splice(fsstarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                adminstudynotesnotes: fsstarrayList,
            };

        case GET_ADMIN_STUDY_NOTES_VIDEOS:
            return {
                ...state,
                adminstudynotesvideos : action.payload
            };

        case ADD_STUDY_NOTE_VIDEO:
            return {
                ...state,
                video: [...state.adminstudynotesvideos, action.payload]
            }

        case EDIT_STUDY_NOTE_VIDEO:
            const vstarrayList = state.adminstudynotesvideos;
            vstarrayList.splice(vstarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                adminstudynotesvideos: vstarrayList,
            };

        case GET_ADMIN_STUDY_NOTES_IMAGES:
            return {
                ...state,
                adminstudynotesimages : action.payload
            };

        case ADD_STUDY_NOTE_IMAGE:
            return {
                ...state,
                video: [...state.adminstudynotesimages, action.payload]
            }

        case EDIT_STUDY_NOTE_IMAGE:
            const istarrayList = state.adminstudynotesimages;
            istarrayList.splice(istarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                adminstudynotesimages: istarrayList,
            };

        case GET_ADMIN_STUDY_NOTES_REFERENCES:
            return {
                ...state,
                adminstudynotesreferences : action.payload
            };

        case ADD_STUDY_NOTE_REFERENCE:
            return {
                ...state,
                reference: [...state.adminstudynotesreferences, action.payload]
            }

        case EDIT_STUDY_NOTE_REFERENCE:
            const rstarrayList = state.adminstudynotesreferences;
            rstarrayList.splice(rstarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                adminstudynotesreferences: rstarrayList,
            };
        case GET_ADMIN_AUTHORS:
            return {
                ...state,
                adminauthors : action.payload
            };

        case ADD_AUTHOR:
            return {
                ...state,
                author: [...state.adminauthors, action.payload]
            }

        case EDIT_AUTHOR:
            const arstarrayList = state.adminauthors;
            arstarrayList.splice(arstarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                adminauthors: arstarrayList,
            };

        case GET_ADMIN_PUBLISHER_CITIES:
            return {
                ...state,
                adminpublishercities : action.payload
            };

        case ADD_PUBLISHER_CITY:
            return {
                ...state,
                city: [...state.adminpublishercities, action.payload]
            }

        case EDIT_PUBLISHER_CITY:
            const parstarrayList = state.adminpublishercities;
            parstarrayList.splice(parstarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                adminpublishercities: parstarrayList,
            };

        case GET_ADMIN_PUBLISHERS:
            return {
                ...state,
                adminpublishers : action.payload
            };

        case ADD_PUBLISHER:
            return {
                ...state,
                publisher: [...state.adminpublishers, action.payload]
            }

        case EDIT_PUBLISHER:
            const pparstarrayList = state.adminpublishers;
            pparstarrayList.splice(pparstarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                adminpublishers: pparstarrayList,
            };
        case GET_STUDENT_COURSE_ENROLLMENTS:
        return {
            ...state,
            studentcourseenrollments: action.payload
        };
        case ADD_STUDENT_COURSE_ENROLLMENT:
            return {
                ...state,
                studentcourseenrollment: [...state.studentcourseenrollments, action.payload]
            }
        case GET_STUDENT_COURSE_ENROLLMENT:
            return {
                ...state,
                studentcourseenrollment:action.payload
                };
        case EDIT_STUDENT_COURSE_ENROLLMENT:
            const subarrayList = state.studentcourseenrollments;
            subarrayList.splice(subarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                studentcourseenrollments: subarrayList,
            };
        default:
            return state;
    }
}


// import {
//   EDIT_COURSE,
//   EDIT_TOPIC,
//   EDIT_SUBTOPIC,
//   EDIT_STUDENT_COURSE_ENROLLMENT,
//   EDIT_TOPIC_OBJECTIVE,
//   EDIT_TOPIC_GUIDELINE,
//   EDIT_STUDY_NOTE,
//   EDIT_STUDY_NOTE_IMAGE,
//   EDIT_STUDY_NOTE_FILE,
//   EDIT_STUDY_NOTE_VIDEO,
//   EDIT_STUDY_NOTE_NOTE,
//   EDIT_STUDY_NOTE_REFERENCE,
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
// import { updateObject } from "../utility";


// const initialState = {
//     coursestatuschoices: [],
//     adminupcomingcourses: [],
//     adminupcomingcourse: {},
//     adminongoingcourses: [],
//     adminongoingcourse: {},
//     adminfinishedcourses: [],
//     adminfinishedcourse:{},
//     admininactivecourses: [],
//     admininactivecourse: {},
//     adminreviews: [],
//     admintopics: [],
//     admintopic: {},
//     admintopicobjectives: [],
//     admintopicguidelines: [],
//     adminsubtopics: [],
//     adminsubtopic: {},
//     adminstudynotes: [],
//     adminstudynote: {},
//     adminstudynotesimages: [],
//     adminstudynotesvideos: [],
//     adminstudynotesfiles: [],
//     adminstudynotesnotes: [],
//     adminstudynotesreferences: [],
//     adminauthors: [],
//     adminpublishers: [],
//     adminpublishercities: [],
//     studentcourseenrollments: [],
//     studentcourseenrollment: {},
//     studentupcomingcourses: [],
//     studentupcomingcourse: {},
//     studentongoingcourses: [],
//     studentongoingcourse: {},
//     loading: false,
//     error: null,
// }

// const getStudyNoteReferenceListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getStudyNoteReferenceListSuccess = (state, action) => {
//   return updateObject(state, {
//     adminstudynotesreferences: action.adminstudynotesreferences,
//     error: null,
//     loading: false
//   });
// };

// const getStudyNoteReferenceListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getStudyNoteReferenceDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getStudyNoteReferenceDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     reference: action.reference,
//     error: null,
//     loading: false
//   });
// };

// const getStudyNoteReferenceDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createStudyNoteReferenceStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createStudyNoteReferenceSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createStudyNoteReferenceFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getStudyNoteNoteListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getStudyNoteNoteListSuccess = (state, action) => {
//   return updateObject(state, {
//     adminstudynotesnotes: action.adminstudynotesnotes,
//     error: null,
//     loading: false
//   });
// };

// const getStudyNoteNoteListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getStudyNoteNoteDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getStudyNoteNoteDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     note: action.note,
//     error: null,
//     loading: false
//   });
// };

// const getStudyNoteNoteDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createStudyNoteNoteStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createStudyNoteNoteSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createStudyNoteNoteFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getStudyNoteVideoListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getStudyNoteVideoListSuccess = (state, action) => {
//   return updateObject(state, {
//     adminstudynotesvideos: action.adminstudynotesvideos,
//     error: null,
//     loading: false
//   });
// };

// const getStudyNoteVideoListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getStudyNoteVideoDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getStudyNoteVideoDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     video: action.video,
//     error: null,
//     loading: false
//   });
// };

// const getStudyNoteVideoDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createStudyNoteVideoStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createStudyNoteVideoSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createStudyNoteVideoFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getStudyNoteImageListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getStudyNoteImageListSuccess = (state, action) => {
//   return updateObject(state, {
//     adminstudynotesimages: action.adminstudynotesimages,
//     error: null,
//     loading: false
//   });
// };

// const getStudyNoteImageListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getStudyNoteImageDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getStudyNoteImageDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     image: action.image,
//     error: null,
//     loading: false
//   });
// };

// const getStudyNoteImageDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createStudyNoteImageStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createStudyNoteImageSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createStudyNoteImageFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getStudyNoteFileListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getStudyNoteFileListSuccess = (state, action) => {
//   return updateObject(state, {
//     adminstudynotesfiles: action.adminstudynotesfiles,
//     error: null,
//     loading: false
//   });
// };

// const getStudyNoteFileListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getStudyNoteFileDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getStudyNoteFileDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     file: action.file,
//     error: null,
//     loading: false
//   });
// };

// const getStudyNoteFileDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createStudyNoteFileStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createStudyNoteFileSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createStudyNoteFileFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getStudyNoteListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getStudyNoteListSuccess = (state, action) => {
//   return updateObject(state, {
//     adminstudynotes: action.adminstudynotes,
//     error: null,
//     loading: false
//   });
// };

// const getStudyNoteListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getStudyNoteDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getStudyNoteDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     note: action.note,
//     error: null,
//     loading: false
//   });
// };

// const getStudyNoteDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createStudyNoteStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createStudyNoteSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createStudyNoteFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getAdminTopicGuidelineListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAdminTopicGuidelineListSuccess = (state, action) => {
//   return updateObject(state, {
//     admintopicguidelines: action.admintopicguidelines,
//     error: null,
//     loading: false
//   });
// };

// const getAdminTopicGuidelineListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getAdminTopicGuidelineDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAdminTopicGuidelineDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     guideline: action.guideline,
//     error: null,
//     loading: false
//   });
// };

// const getAdminTopicGuidelineDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createAdminTopicGuidelineStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createAdminTopicGuidelineSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createAdminTopicGuidelineFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getAdminTopicObjectiveListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAdminTopicObjectiveListSuccess = (state, action) => {
//   return updateObject(state, {
//     admintopicobjectives: action.admintopicobjectives,
//     error: null,
//     loading: false
//   });
// };

// const getAdminTopicObjectiveListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getAdminTopicObjectiveDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAdminTopicObjectiveDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     objective: action.objective,
//     error: null,
//     loading: false
//   });
// };

// const getAdminTopicObjectiveDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createAdminTopicObjectiveStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createAdminTopicObjectiveSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createAdminTopicObjectiveFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getAdminSubTopicListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAdminSubTopicListSuccess = (state, action) => {
//   return updateObject(state, {
//     adminsubtopics: action.adminsubtopics,
//     error: null,
//     loading: false
//   });
// };

// const getAdminSubTopicListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getAdminSubTopicDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAdminSubTopicDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     adminsubtopic: action.adminsubtopic,
//     error: null,
//     loading: false
//   });
// };

// const getAdminSubTopicDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createAdminSubTopicStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createAdminSubTopicSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createAdminSubTopicFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getOngoingStudentCourseListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getOngoingStudentCourseListSuccess = (state, action) => {
//   return updateObject(state, {
//     studentongoingcourses: action.studentongoingcourses,
//     error: null,
//     loading: false
//   });
// };

// const getOngoingStudentCourseListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getOngoingStudentCourseDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getOngoingStudentCourseDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     studentupcomingcourse: action.studentupcomingcourse,
//     error: null,
//     loading: false
//   });
// };

// const getOngoingStudentCourseDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getUpcomingStudentCourseListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getUpcomingStudentCourseListSuccess = (state, action) => {
//   return updateObject(state, {
//     studentupcomingcourses: action.studentupcomingcourses,
//     error: null,
//     loading: false
//   });
// };

// const getUpcomingStudentCourseListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getUpcomingStudentCourseDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getUpcomingStudentCourseDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     studentupcomingcourse: action.studentupcomingcourse,
//     error: null,
//     loading: false
//   });
// };

// const getUpcomingStudentCourseDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getStudentCourseEnrollmentListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getStudentCourseEnrollmentListSuccess = (state, action) => {
//   return updateObject(state, {
//     studentcourseenrollments: action.studentcourseenrollments,
//     error: null,
//     loading: false
//   });
// };

// const getStudentCourseEnrollmentListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getStudentCourseEnrollmentDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getStudentCourseEnrollmentDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     studentcourseenrollment: action.studentcourseenrollment,
//     error: null,
//     loading: false
//   });
// };

// const getStudentCourseEnrollmentDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createStudentCourseEnrollmentStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createStudentCourseEnrollmentSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createStudentCourseEnrollmentFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getPublisherListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getPublisherListSuccess = (state, action) => {
//   return updateObject(state, {
//     adminpublishers: action.adminpublishers,
//     error: null,
//     loading: false
//   });
// };

// const getPublisherListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getPublisherDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getPublisherDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     publisher: action.publisher,
//     error: null,
//     loading: false
//   });
// };

// const getPublisherDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createPublisherStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createPublisherSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createPublisherFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getPublisherCityListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getPublisherCityListSuccess = (state, action) => {
//   return updateObject(state, {
//     adminpublishercities: action.adminpublishercities,
//     error: null,
//     loading: false
//   });
// };

// const getPublisherCityListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getPublisherCityDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getPublisherCityDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     city: action.city,
//     error: null,
//     loading: false
//   });
// };

// const getPublisherCityDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createPublisherCityStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createPublisherCitySuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createPublisherCityFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getAuthorListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAuthorListSuccess = (state, action) => {
//   return updateObject(state, {
//     adminauthors: action.adminauthors,
//     error: null,
//     loading: false
//   });
// };

// const getAuthorListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getAuthorDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAuthorDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     author: action.author,
//     error: null,
//     loading: false
//   });
// };

// const getAuthorDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createAuthorStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createAuthorSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createAuthorFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getAdminReviewListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAdminReviewListSuccess = (state, action) => {
//   return updateObject(state, {
//     adminreviews: action.adminreviews,
//     error: null,
//     loading: false
//   });
// };

// const getAdminReviewListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getAdminTopicListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAdminTopicListSuccess = (state, action) => {
//   return updateObject(state, {
//     admintopics: action.admintopics,
//     error: null,
//     loading: false
//   });
// };

// const getAdminTopicListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getAdminTopicDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAdminTopicDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     admintopic: action.admintopic,

//     error: null,
//     loading: false
//   });
// };

// const getAdminTopicDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createAdminTopicStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createAdminTopicSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createAdminTopicFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getAdminInactiveCourseListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAdminInactiveCourseListSuccess = (state, action) => {
//   return updateObject(state, {
//     admininactivecourses: action.admininactivecourses,
//     error: null,
//     loading: false
//   });
// };

// const getAdminInactiveCourseListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getAdminInactiveCourseDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAdminInactiveCourseDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     course: action.course,
//     error: null,
//     loading: false
//   });
// };

// const getAdminInactiveCourseDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createAdminInactiveCourseStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createAdminInactiveCourseSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createAdminInactiveCourseFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getAdminFinishedCourseListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAdminFinishedCourseListSuccess = (state, action) => {
//   return updateObject(state, {
//     adminfinishedcourses: action.adminfinishedcourses,
//     error: null,
//     loading: false
//   });
// };

// const getAdminFinishedCourseListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getAdminFinishedCourseDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAdminFinishedCourseDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     course: action.course,
//     error: null,
//     loading: false
//   });
// };

// const getAdminFinishedCourseDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createAdminFinishedCourseStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createAdminFinishedCourseSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createAdminFinishedCourseFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getAdminOngoingCourseListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAdminOngoingCourseListSuccess = (state, action) => {
//   return updateObject(state, {
//     adminongoingcourses: action.adminongoingcourses,
//     error: null,
//     loading: false
//   });
// };

// const getAdminOngoingCourseListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getAdminOngoingCourseDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAdminOngoingCourseDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     adminongoingcourse: action.adminongoingcourse,
//     error: null,
//     loading: false
//   });
// };

// const getAdminOngoingCourseDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createAdminOngoingCourseStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createAdminOngoingCourseSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createAdminOngoingCourseFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const getAdminUpcomingCourseListStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAdminUpcomingCourseListSuccess = (state, action) => {
//   return updateObject(state, {
//     adminupcomingcourses: action.adminupcomingcourses,
//     error: null,
//     loading: false
//   });
// };

// const getAdminUpcomingCourseListFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };


// const getAdminUpcomingCourseDetailStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const getAdminUpcomingCourseDetailSuccess = (state, action) => {
//   return updateObject(state, {
//     course: action.course,
//     error: null,
//     loading: false
//   });
// };

// const getAdminUpcomingCourseDetailFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// const createAdminUpcomingCourseStart = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: true
//   });
// };

// const createAdminUpcomingCourseSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false
//   });
// };

// const createAdminUpcomingCourseFail = (state, action) => {
//   return updateObject(state, {
//     error: action.error,
//     loading: false
//   });
// };

// export default function courses(state = initialState, action){
//     switch(action.type){
//         case GET_ADMIN_TOPICS:
//             return {
//                 ...state,
//                 admintopics : action.payload
//             };
//         case GET_STUDENT_COURSE_ENROLLMENTS:
//           return {
//               ...state,
//               studentcourseenrollments: action.payload
//         };
//         case GET_ADMIN_STUDY_NOTES_REFERENCES_START:
//             return getStudyNoteReferenceListStart(state, action);
//         case GET_ADMIN_STUDY_NOTES_REFERENCES_SUCCESS:
//             return getStudyNoteReferenceListSuccess(state, action);
//         case GET_ADMIN_STUDY_NOTES_REFERENCES_FAIL:
//             return getStudyNoteReferenceListFail(state, action);
//         case GET_ADMIN_STUDY_NOTES_REFERENCE_START:
//             return getStudyNoteReferenceDetailStart(state, action);
//         case GET_ADMIN_STUDY_NOTES_REFERENCE_SUCCESS:
//             return getStudyNoteReferenceDetailSuccess(state, action);
//         case GET_ADMIN_STUDY_NOTES_REFERENCE_FAIL:
//             return getStudyNoteReferenceDetailFail(state, action);
//         case CREATE_ADMIN_STUDY_NOTES_REFERENCE_START:
//             return createStudyNoteReferenceStart(state, action);
//         case CREATE_ADMIN_STUDY_NOTES_REFERENCE_SUCCESS:
//             return createStudyNoteReferenceSuccess(state, action);
//         case CREATE_ADMIN_STUDY_NOTES_REFERENCE_FAIL:
//             return createStudyNoteReferenceFail(state, action);
//         case GET_ADMIN_STUDY_NOTES_NOTES_START:
//             return getStudyNoteNoteListStart(state, action);
//         case GET_ADMIN_STUDY_NOTES_NOTES_SUCCESS:
//             return getStudyNoteNoteListSuccess(state, action);
//         case GET_ADMIN_STUDY_NOTES_NOTES_FAIL:
//             return getStudyNoteNoteListFail(state, action);
//         case GET_ADMIN_STUDY_NOTES_NOTE_START:
//             return getStudyNoteNoteDetailStart(state, action);
//         case GET_ADMIN_STUDY_NOTES_NOTE_SUCCESS:
//             return getStudyNoteNoteDetailSuccess(state, action);
//         case GET_ADMIN_STUDY_NOTES_NOTE_FAIL:
//             return getStudyNoteNoteDetailFail(state, action);
//         case CREATE_ADMIN_STUDY_NOTES_NOTE_START:
//             return createStudyNoteNoteStart(state, action);
//         case CREATE_ADMIN_STUDY_NOTES_NOTE_SUCCESS:
//             return createStudyNoteNoteSuccess(state, action);
//         case CREATE_ADMIN_STUDY_NOTES_NOTE_FAIL:
//             return createStudyNoteNoteFail(state, action);
//         case GET_ADMIN_STUDY_NOTES_VIDEOS_START:
//             return getStudyNoteVideoListStart(state, action);
//         case GET_ADMIN_STUDY_NOTES_VIDEOS_SUCCESS:
//             return getStudyNoteVideoListSuccess(state, action);
//         case GET_ADMIN_STUDY_NOTES_VIDEOS_FAIL:
//             return getStudyNoteVideoListFail(state, action);
//         case GET_ADMIN_STUDY_NOTES_VIDEO_START:
//             return getStudyNoteVideoDetailStart(state, action);
//         case GET_ADMIN_STUDY_NOTES_VIDEO_SUCCESS:
//             return getStudyNoteVideoDetailSuccess(state, action);
//         case GET_ADMIN_STUDY_NOTES_VIDEO_FAIL:
//             return getStudyNoteVideoDetailFail(state, action);
//         case CREATE_ADMIN_STUDY_NOTES_VIDEO_START:
//             return createStudyNoteVideoStart(state, action);
//         case CREATE_ADMIN_STUDY_NOTES_VIDEO_SUCCESS:
//             return createStudyNoteVideoSuccess(state, action);
//         case CREATE_ADMIN_STUDY_NOTES_VIDEO_FAIL:
//             return createStudyNoteVideoFail(state, action);
//         case GET_ADMIN_STUDY_NOTES_IMAGES_START:
//             return getStudyNoteImageListStart(state, action);
//         case GET_ADMIN_STUDY_NOTES_IMAGES_SUCCESS:
//             return getStudyNoteImageListSuccess(state, action);
//         case GET_ADMIN_STUDY_NOTES_IMAGES_FAIL:
//             return getStudyNoteImageListFail(state, action);
//         case GET_ADMIN_STUDY_NOTES_IMAGE_START:
//             return getStudyNoteImageDetailStart(state, action);
//         case GET_ADMIN_STUDY_NOTES_IMAGE_SUCCESS:
//             return getStudyNoteImageDetailSuccess(state, action);
//         case GET_ADMIN_STUDY_NOTES_IMAGE_FAIL:
//             return getStudyNoteImageDetailFail(state, action);
//         case CREATE_ADMIN_STUDY_NOTES_IMAGE_START:
//             return createStudyNoteImageStart(state, action);
//         case CREATE_ADMIN_STUDY_NOTES_IMAGE_SUCCESS:
//             return createStudyNoteImageSuccess(state, action);
//         case CREATE_ADMIN_STUDY_NOTES_IMAGE_FAIL:
//             return createStudyNoteImageFail(state, action);
//         case GET_ADMIN_STUDY_NOTES_FILES_START:
//             return getStudyNoteFileListStart(state, action);
//         case GET_ADMIN_STUDY_NOTES_FILES_SUCCESS:
//             return getStudyNoteFileListSuccess(state, action);
//         case GET_ADMIN_STUDY_NOTES_FILES_FAIL:
//             return getStudyNoteFileListFail(state, action);
//         case GET_ADMIN_STUDY_NOTES_FILE_START:
//             return getStudyNoteFileDetailStart(state, action);
//         case GET_ADMIN_STUDY_NOTES_FILE_SUCCESS:
//             return getStudyNoteFileDetailSuccess(state, action);
//         case GET_ADMIN_STUDY_NOTES_FILE_FAIL:
//             return getStudyNoteFileDetailFail(state, action);
//         case CREATE_ADMIN_STUDY_NOTES_FILE_START:
//             return createStudyNoteFileStart(state, action);
//         case CREATE_ADMIN_STUDY_NOTES_FILE_SUCCESS:
//             return createStudyNoteFileSuccess(state, action);
//         case CREATE_ADMIN_STUDY_NOTES_FILE_FAIL:
//             return createStudyNoteFileFail(state, action);
//         case GET_ADMIN_STUDY_NOTES_START:
//             return getStudyNoteListStart(state, action);
//         case GET_ADMIN_STUDY_NOTES_SUCCESS:
//             return getStudyNoteListSuccess(state, action);
//         case GET_ADMIN_STUDY_NOTES_FAIL:
//             return getStudyNoteListFail(state, action);
//         case GET_ADMIN_STUDY_NOTE_START:
//             return getStudyNoteDetailStart(state, action);
//         case GET_ADMIN_STUDY_NOTE_SUCCESS:
//             return getStudyNoteDetailSuccess(state, action);
//         case GET_ADMIN_STUDY_NOTE_FAIL:
//             return getStudyNoteDetailFail(state, action);
//         case CREATE_ADMIN_STUDY_NOTE_START:
//             return createStudyNoteStart(state, action);
//         case CREATE_ADMIN_STUDY_NOTE_SUCCESS:
//             return createStudyNoteSuccess(state, action);
//         case CREATE_ADMIN_STUDY_NOTE_FAIL:
//             return createStudyNoteFail(state, action);
//         case GET_ADMIN_TOPIC_GUIDELINES_START:
//             return getAdminTopicGuidelineListStart(state, action);
//         case GET_ADMIN_TOPIC_GUIDELINES_SUCCESS:
//             return getAdminTopicGuidelineListSuccess(state, action);
//         case GET_ADMIN_TOPIC_GUIDELINES_FAIL:
//             return getAdminTopicGuidelineListFail(state, action);
//         case GET_ADMIN_TOPIC_GUIDELINE_START:
//             return getAdminTopicGuidelineDetailStart(state, action);
//         case GET_ADMIN_TOPIC_GUIDELINE_SUCCESS:
//             return getAdminTopicGuidelineDetailSuccess(state, action);
//         case GET_ADMIN_TOPIC_GUIDELINE_FAIL:
//             return getAdminTopicGuidelineDetailFail(state, action);
//         case CREATE_ADMIN_TOPIC_GUIDELINE_START:
//             return createAdminTopicGuidelineStart(state, action);
//         case CREATE_ADMIN_TOPIC_GUIDELINE_SUCCESS:
//             return createAdminTopicGuidelineSuccess(state, action);
//         case CREATE_ADMIN_TOPIC_GUIDELINE_FAIL:
//             return createAdminTopicGuidelineFail(state, action);
//         case GET_ADMIN_TOPIC_OBJECTIVES_START:
//             return getAdminTopicObjectiveListStart(state, action);
//         case GET_ADMIN_TOPIC_OBJECTIVES_SUCCESS:
//             return getAdminTopicObjectiveListSuccess(state, action);
//         case GET_ADMIN_TOPIC_OBJECTIVES_FAIL:
//             return getAdminTopicObjectiveListFail(state, action);
//         case GET_ADMIN_TOPIC_OBJECTIVE_START:
//             return getAdminTopicObjectiveDetailStart(state, action);
//         case GET_ADMIN_TOPIC_OBJECTIVE_SUCCESS:
//             return getAdminTopicObjectiveDetailSuccess(state, action);
//         case GET_ADMIN_TOPIC_OBJECTIVE_FAIL:
//             return getAdminTopicObjectiveDetailFail(state, action);
//         case CREATE_ADMIN_TOPIC_OBJECTIVE_START:
//             return createAdminTopicObjectiveStart(state, action);
//         case CREATE_ADMIN_TOPIC_OBJECTIVE_SUCCESS:
//             return createAdminTopicObjectiveSuccess(state, action);
//         case CREATE_ADMIN_TOPIC_OBJECTIVE_FAIL:
//             return createAdminTopicObjectiveFail(state, action);
//         case GET_ADMIN_SUBTOPICS_START:
//             return getAdminSubTopicListStart(state, action);
//         case GET_ADMIN_SUBTOPICS_SUCCESS:
//             return getAdminSubTopicListSuccess(state, action);
//         case GET_ADMIN_SUBTOPICS_FAIL:
//             return getAdminSubTopicListFail(state, action);
//         case GET_ADMIN_SUBTOPIC_START:
//             return getAdminSubTopicDetailStart(state, action);
//         case GET_ADMIN_SUBTOPIC_SUCCESS:
//             return getAdminSubTopicDetailSuccess(state, action);
//         case GET_ADMIN_SUBTOPIC_FAIL:
//             return getAdminSubTopicDetailFail(state, action);
//         case CREATE_ADMIN_SUBTOPIC_START:
//             return createAdminSubTopicStart(state, action);
//         case CREATE_ADMIN_SUBTOPIC_SUCCESS:
//             return createAdminSubTopicSuccess(state, action);
//         case CREATE_ADMIN_SUBTOPIC_FAIL:
//             return createAdminSubTopicFail(state, action);
//         case GET_STUDENT_ONGOING_COURSES_START:
//           return getOngoingStudentCourseListStart(state, action);
//         case GET_STUDENT_ONGOING_COURSES_SUCCESS:
//             return getOngoingStudentCourseListSuccess(state, action);
//         case GET_STUDENT_ONGOING_COURSES_FAIL:
//             return getOngoingStudentCourseListFail(state, action);
//         case GET_STUDENT_ONGOING_COURSE_START:
//             return getOngoingStudentCourseDetailStart(state, action);
//         case GET_STUDENT_ONGOING_COURSE_SUCCESS:
//             return getOngoingStudentCourseDetailSuccess(state, action);
//         case GET_STUDENT_ONGOING_COURSE_FAIL:
//             return getOngoingStudentCourseDetailFail(state, action);
//         case GET_STUDENT_UPCOMING_COURSES_START:
//           return getUpcomingStudentCourseListStart(state, action);
//         case GET_STUDENT_UPCOMING_COURSES_SUCCESS:
//             return getUpcomingStudentCourseListSuccess(state, action);
//         case GET_STUDENT_UPCOMING_COURSES_FAIL:
//             return getUpcomingStudentCourseListFail(state, action);
//         case GET_STUDENT_UPCOMING_COURSE_START:
//             return getUpcomingStudentCourseDetailStart(state, action);
//         case GET_STUDENT_UPCOMING_COURSE_SUCCESS:
//             return getUpcomingStudentCourseDetailSuccess(state, action);
//         case GET_STUDENT_UPCOMING_COURSE_FAIL:
//             return getUpcomingStudentCourseDetailFail(state, action);
//         case GET_STUDENT_COURSE_ENROLLMENTS_START:
//           return getStudentCourseEnrollmentListStart(state, action);
//         case GET_STUDENT_COURSE_ENROLLMENTS_SUCCESS:
//             return getStudentCourseEnrollmentListSuccess(state, action);
//         case GET_STUDENT_COURSE_ENROLLMENTS_FAIL:
//             return getStudentCourseEnrollmentListFail(state, action);
//         case GET_STUDENT_COURSE_ENROLLMENT_START:
//             return getStudentCourseEnrollmentDetailStart(state, action);
//         case GET_STUDENT_COURSE_ENROLLMENT_SUCCESS:
//             return getStudentCourseEnrollmentDetailSuccess(state, action);
//         case GET_STUDENT_COURSE_ENROLLMENT_FAIL:
//             return getStudentCourseEnrollmentDetailFail(state, action);
//         case CREATE_STUDENT_COURSE_ENROLLMENT_SUCCESS:
//             return createStudentCourseEnrollmentSuccess(state, action);
//         case CREATE_STUDENT_COURSE_ENROLLMENT_FAIL:
//             return createStudentCourseEnrollmentFail(state, action);
//         case GET_ADMIN_PUBLISHERS_START:
//             return getPublisherListStart(state, action);
//         case GET_ADMIN_PUBLISHERS_SUCCESS:
//             return getPublisherListSuccess(state, action);
//         case GET_ADMIN_PUBLISHERS_FAIL:
//             return getPublisherListFail(state, action);
//         case CREATE_ADMIN_PUBLISHER_START:
//             return createPublisherStart(state, action);
//         case CREATE_ADMIN_PUBLISHER_SUCCESS:
//             return createPublisherSuccess(state, action);
//         case CREATE_ADMIN_PUBLISHER_FAIL:
//             return createPublisherFail(state, action);
//         case GET_ADMIN_PUBLISHER_CITIES_START:
//             return getPublisherCityListStart(state, action);
//         case GET_ADMIN_PUBLISHER_CITIES_SUCCESS:
//             return getPublisherCityListSuccess(state, action);
//         case GET_ADMIN_PUBLISHER_CITIES_FAIL:
//             return getPublisherCityListFail(state, action);
//         case CREATE_ADMIN_PUBLISHER_CITY_START:
//             return createPublisherCityStart(state, action);
//         case CREATE_ADMIN_PUBLISHER_CITY_SUCCESS:
//             return createPublisherCitySuccess(state, action);
//         case CREATE_ADMIN_PUBLISHER_CITY_FAIL:
//             return createPublisherCityFail(state, action);
//         case GET_ADMIN_AUTHORS_START:
//             return getAuthorListStart(state, action);
//         case GET_ADMIN_AUTHORS_SUCCESS:
//             return getAuthorListSuccess(state, action);
//         case GET_ADMIN_AUTHORS_FAIL:
//             return getAuthorListFail(state, action);
//         case CREATE_ADMIN_AUTHOR_START:
//             return createAuthorStart(state, action);
//         case CREATE_ADMIN_AUTHOR_SUCCESS:
//             return createAuthorSuccess(state, action);
//         case CREATE_ADMIN_AUTHOR_FAIL:
//             return createAuthorFail(state, action);
//         case GET_ADMIN_REVIEWS_START:
//             return getAdminReviewListStart(state, action);
//         case GET_ADMIN_REVIEWS_SUCCESS:
//             return getAdminReviewListSuccess(state, action);
//         case GET_ADMIN_REVIEWS_FAIL:
//             return getAdminReviewListFail(state, action);
//         case GET_ADMIN_TOPICS_SUCCESS:
//             return getAdminTopicListSuccess(state, action);
//         case GET_ADMIN_TOPICS_FAIL:
//             return getAdminTopicListFail(state, action);
//         case GET_ADMIN_TOPIC_START:
//             return getAdminTopicDetailStart(state, action);
//         case GET_ADMIN_TOPIC_SUCCESS:
//             return getAdminTopicDetailSuccess(state, action);
//         case GET_ADMIN_TOPIC_FAIL:
//             return getAdminTopicDetailFail(state, action);
//         case CREATE_ADMIN_TOPIC_START:
//             return createAdminTopicStart(state, action);
//         case CREATE_ADMIN_TOPIC_SUCCESS:
//             return createAdminTopicSuccess(state, action);
//         case CREATE_ADMIN_TOPIC_FAIL:
//             return createAdminTopicFail(state, action);
//         case GET_INACTIVE_COURSES_START:
//             return getAdminInactiveCourseListStart(state, action);
//         case GET_INACTIVE_COURSES_SUCCESS:
//             return getAdminInactiveCourseListSuccess(state, action);
//         case GET_INACTIVE_COURSES_FAIL:
//             return getAdminInactiveCourseListFail(state, action);
//         case GET_INACTIVE_COURSE_START:
//             return getAdminInactiveCourseDetailStart(state, action);
//         case GET_INACTIVE_COURSE_SUCCESS:
//             return getAdminInactiveCourseDetailSuccess(state, action);
//         case GET_INACTIVE_COURSE_FAIL:
//             return getAdminInactiveCourseDetailFail(state, action);
//         case CREATE_INACTIVE_COURSE_START:
//             return createAdminInactiveCourseStart(state, action);
//         case CREATE_INACTIVE_COURSE_SUCCESS:
//             return createAdminInactiveCourseSuccess(state, action);
//         case CREATE_INACTIVE_COURSE_FAIL:
//             return createAdminInactiveCourseFail(state, action);
//         case GET_FINISHED_COURSES_START:
//             return getAdminFinishedCourseListStart(state, action);
//         case GET_FINISHED_COURSES_SUCCESS:
//             return getAdminFinishedCourseListSuccess(state, action);
//         case GET_FINISHED_COURSES_FAIL:
//             return getAdminFinishedCourseListFail(state, action);
//         case GET_FINISHED_COURSE_START:
//             return getAdminFinishedCourseDetailStart(state, action);
//         case GET_FINISHED_COURSE_SUCCESS:
//             return getAdminFinishedCourseDetailSuccess(state, action);
//         case GET_FINISHED_COURSE_FAIL:
//             return getAdminFinishedCourseDetailFail(state, action);
//         case CREATE_FINISHED_COURSE_START:
//             return createAdminFinishedCourseStart(state, action);
//         case CREATE_FINISHED_COURSE_SUCCESS:
//             return createAdminFinishedCourseSuccess(state, action);
//         case CREATE_FINISHED_COURSE_FAIL:
//             return createAdminFinishedCourseFail(state, action);
//         case GET_ONGOING_COURSES_START:
//             return getAdminOngoingCourseListStart(state, action);
//         case GET_ONGOING_COURSES_SUCCESS:
//             return getAdminOngoingCourseListSuccess(state, action);
//         case GET_ONGOING_COURSES_FAIL:
//             return getAdminOngoingCourseListFail(state, action);
//         case GET_ONGOING_COURSE_START:
//             return getAdminOngoingCourseDetailStart(state, action);
//         case GET_ONGOING_COURSE_SUCCESS:
//             return getAdminOngoingCourseDetailSuccess(state, action);
//         case GET_ONGOING_COURSE_FAIL:
//             return getAdminOngoingCourseDetailFail(state, action);
//         case CREATE_ONGOING_COURSE_START:
//             return createAdminOngoingCourseStart(state, action);
//         case CREATE_ONGOING_COURSE_SUCCESS:
//             return createAdminOngoingCourseSuccess(state, action);
//         case CREATE_ONGOING_COURSE_FAIL:
//             return createAdminOngoingCourseFail(state, action);
//         case GET_UPCOMING_COURSES_START:
//             return getAdminUpcomingCourseListStart(state, action);
//         case GET_UPCOMING_COURSES_SUCCESS:
//             return getAdminUpcomingCourseListSuccess(state, action);
//         case GET_UPCOMING_COURSES_FAIL:
//             return getAdminUpcomingCourseListFail(state, action);
//         case GET_UPCOMING_COURSE_START:
//             return getAdminUpcomingCourseDetailStart(state, action);
//         case GET_UPCOMING_COURSE_SUCCESS:
//             return getAdminUpcomingCourseDetailSuccess(state, action);
//         case GET_UPCOMING_COURSE_FAIL:
//             return getAdminUpcomingCourseDetailFail(state, action);
//         case CREATE_UPCOMING_COURSE_START:
//             return createAdminUpcomingCourseStart(state, action);
//         case CREATE_UPCOMING_COURSE_SUCCESS:
//             return createAdminUpcomingCourseSuccess(state, action);
//         case CREATE_UPCOMING_COURSE_FAIL:
//             return createAdminUpcomingCourseFail(state, action);
//         case GET_COURSE_STATUS_CHOICES:
//             return {
//                 ...state,
//                 coursestatuschoices : action.payload
//             };

//         case EDIT_UPCOMING_COURSE:
//             const eearrayList = state.adminupcomingcourses;
//             eearrayList.splice(eearrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 adminupcomingcourses: eearrayList,
//             };
//         case EDIT_FINISHED_COURSE:
//             const jarrayList = state.adminfinishedcourses;
//             jarrayList.splice(jarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 adminfinishedcourses: jarrayList,
//             };
//         case EDIT_ONGOING_COURSE:
//             const oarrayList = state.adminongoingcourses;
//             oarrayList.splice(oarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 adminongoingcourses: oarrayList,
//             };
//         case EDIT_INACTIVE_COURSE:
//             const iarrayList = state.admininactivecourses;
//             iarrayList.splice(iarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 admininactivecourses: iarrayList,
//             };
//         case EDIT_TOPIC:
//             const tarrayList = state.admintopics;
//             tarrayList.splice(tarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 admintopics: tarrayList,
//             };
//         case EDIT_TOPIC_OBJECTIVE:
//             const oparrayList = state.admintopicobjectives;
//             oparrayList.splice(oparrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 admintopicobjectives: oparrayList,
//             };
//         case EDIT_TOPIC_GUIDELINE:
//             const garrayList = state.admintopicguidelines;
//             garrayList.splice(garrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 admintopicobjectives: garrayList,
//             };
//         case EDIT_SUBTOPIC:
//             const sarrayList = state.adminsubtopics;
//             sarrayList.splice(sarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 adminsubtopics: sarrayList,
//             };
//         case EDIT_STUDY_NOTE:
//             const starrayList = state.adminstudynotes;
//             starrayList.splice(starrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 adminstudynotes: starrayList,
//             };
//         case EDIT_STUDY_NOTE_FILE:
//             const fstarrayList = state.adminstudynotesfiles;
//             fstarrayList.splice(fstarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 adminstudynotesfiles: fstarrayList,
//             };
//         case EDIT_STUDY_NOTE_NOTE:
//             const fsstarrayList = state.adminstudynotesnotes;
//             fsstarrayList.splice(fsstarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 adminstudynotesnotes: fsstarrayList,
//             };
//         case EDIT_STUDY_NOTE_VIDEO:
//             const vstarrayList = state.adminstudynotesvideos;
//             vstarrayList.splice(vstarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 adminstudynotesvideos: vstarrayList,
//             };

//         case EDIT_STUDY_NOTE_IMAGE:
//             const istarrayList = state.adminstudynotesimages;
//             istarrayList.splice(istarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 adminstudynotesimages: istarrayList,
//             };
//         case EDIT_STUDY_NOTE_REFERENCE:
//             const rstarrayList = state.adminstudynotesreferences;
//             rstarrayList.splice(rstarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 adminstudynotesreferences: rstarrayList,
//             };
//         case EDIT_AUTHOR:
//             const arstarrayList = state.adminauthors;
//             arstarrayList.splice(arstarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 adminauthors: arstarrayList,
//             };
//         case EDIT_PUBLISHER_CITY:
//             const parstarrayList = state.adminpublishercities;
//             parstarrayList.splice(parstarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 adminpublishercities: parstarrayList,
//             };
//         case EDIT_PUBLISHER:
//             const pparstarrayList = state.adminpublishers;
//             pparstarrayList.splice(pparstarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 adminpublishers: pparstarrayList,
//             };
//         case EDIT_STUDENT_COURSE_ENROLLMENT:
//             const subarrayList = state.studentcourseenrollments;
//             subarrayList.splice(subarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
//             return {
//                 ...state,
//                 studentcourseenrollments: subarrayList,
//             };
//         default:
//             return state;
//     }
// }
