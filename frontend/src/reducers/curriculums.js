import {
    ADD_CURRICULUM,
    GET_CURRICULUMS,
    DELETE_CURRICULUM,
    GET_CURRICULUM,
    EDIT_CURRICULUM,
    ADD_SUBJECT,
    GET_SUBJECTS,
    DELETE_SUBJECT,
    GET_SUBJECT,
    EDIT_SUBJECT,
} from '../types/curriculumTypes';

const initialState = {
    subjects: [],
    subject: [],
    curriculums: [],
    curriculum: [],
    loading: false
}

export default function (state = initialState, action){
    switch(action.type){
        case GET_SUBJECTS:
            return {
                ...state,
                subjects: action.payload
            };
        case DELETE_SUBJECT:
            return {
                ...state,
                subject: state.subjects.filter(subject=> subject.id !== action.payload)
            };
        case ADD_SUBJECT:
            return {
                ...state,
                subject: [...state.subjects, action.payload]
            }
        case GET_SUBJECT:
            return {
                ...state,
                subject:action.payload
                };
        case EDIT_SUBJECT:
            const subarrayList = state.subjects;
            subarrayList.splice(subarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                subjects: subarrayList,
            };
        case GET_CURRICULUMS:
            return {
                ...state,
                curriculums: action.payload
            };
        case DELETE_CURRICULUM:
            return {
                ...state,
                curriculum: state.curriculums.filter(curriculum=> curriculum.id !== action.payload)
            };
        case ADD_CURRICULUM:
            return {
                ...state,
                curriculum: [...state.curriculums, action.payload]
            }
        case GET_CURRICULUM:
            return {
                ...state,
                curriculum:action.payload
            };
        case EDIT_CURRICULUM:
            const cuarrayList = state.curriculums;
            cuarrayList.splice(cuarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                curriculums: cuarrayList,
            };
        default:
            return state;
    }
}







