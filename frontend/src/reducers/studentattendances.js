import {
    GET_STUDENT_ATTENDANCES ,


} from '../types/attendanceTypes';

const initialState = {
    studentattendances: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_STUDENT_ATTENDANCES:
            return {
                ...state,
                studentattendances: action.payload
            };
        default:
            return state;
    }
}