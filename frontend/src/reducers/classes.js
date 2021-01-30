import {
    ADD_CLASS,
    GET_CLASSES,
    GET_CLASS,
    EDIT_CLASS,
    ADD_STREAM,
    GET_STREAMS,
    EDIT_STREAM,
} from '../types/classTypes';
import { GET_STUDENTS_CLASS_STATUS_CHOICES } from '../types/choiceTypes';

const initialState = {
    classes: [],
    streams: [],
    classi: [],
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
    default:
        return state;
}
}
