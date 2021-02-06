import {
        ADD_CLASS,
        GET_CLASSES,
        GET_CLASS,
        EDIT_CLASS,
        ADD_CLASS_SUBJECT,
        GET_CLASS_SUBJECTS,
        GET_CLASS_SUBJECT,
        EDIT_CLASS_SUBJECT,
        GET_CLASS_STUDENTS,
        GET_CLASS_STUDENT,
        ADD_STREAM,
        GET_STREAMS,
        EDIT_STREAM,
        ADD_ENROLLMENT,
        GET_ENROLLMENTS,
        EDIT_ENROLLMENT,
    } from '../types/classTypes';
import { GET_STUDENTS_CLASS_STATUS_CHOICES } from '../types/choiceTypes';

const initialState = {
    classes: [],
    streams: [],
    classi: [],
    subjects: [],
    subject: [],
    student: [],
    students: [],
    studentclassstatuschoices: [],
    loading: false
}

export default function aa(state = initialState, action){
switch(action.type){
    case GET_CLASSES:
        return {
            ...state,
            classes: action.payload
        };
    case GET_STUDENTS_CLASS_STATUS_CHOICES:
            return {
                ...state,
                studentclassstatuschoices: action.payload
            };
    case GET_CLASS:
        return {
            ...state,
            classi: action.payload
        };
    case ADD_CLASS:
        return {
            ...state,
            classi: [...state.classes, action.payload]
        };
    case EDIT_CLASS:
        const arrayList = state.classes;
        arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
        return {
            ...state,
            classes: arrayList,
        };
    case GET_STREAMS:
        return {
            ...state,
            streams: action.payload
        };
    case ADD_STREAM:
        return {
            ...state,
            stream: [...state.streams, action.payload]
        };
    case EDIT_STREAM:
        const sarrayList = state.classes;
        sarrayList.splice(sarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
        return {
            ...state,
            classes: sarrayList,
        };
    case GET_CLASS_STUDENTS:
        return {
            ...state,
            students: action.payload
        };
    case GET_CLASS_STUDENT:
        return {
            ...state,
            student: action.payload
        };
    case GET_CLASS_SUBJECTS:
        return {
            ...state,
            subjects: action.payload
        };
    case GET_CLASS_SUBJECT:
        return {
            ...state,
            subject: action.payload
        };
    case ADD_CLASS_SUBJECT:
        return {
            ...state,
            subject: [...state.subjects, action.payload]
        };
    case EDIT_CLASS_SUBJECT:
        const jarrayList = state.subjects;
        arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
        return {
            ...state,
            subjects: arrayList,
        };
    default:
        return state;
}
}
