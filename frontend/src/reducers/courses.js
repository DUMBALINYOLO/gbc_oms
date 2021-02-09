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

        case ADD_COURSE:
            return {
                ...state,
                course: [...state.adminupcomingcourses, action.payload]
            }

        case EDIT_COURSE:
            const eearrayList = state.adminupcomingcourses;
            eearrayList.splice(eearrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                adminupcomingcourses: eearrayList,
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
            const oarrayList = state.admintopicobjectives;
            oarrayList.splice(oarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                admintopicobjectives: oarrayList,
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
