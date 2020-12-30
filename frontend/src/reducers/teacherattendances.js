import {
    ADD_ATTENDANCE,
    GET_ATTENDANCES ,
    DELETE_ATTENDANCE,
    GET_ATTENDANCE,
    EDIT_ATTENDANCE,


} from '../types/attendanceTypes';

const initialState = {
    teacherattendances: [],
    teacherattendance: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ATTENDANCES:
            return {
                ...state,
                teacherattendances: action.payload
            };
        case DELETE_ATTENDANCE:
            return {
                ...state,
                teacherattendance: state.teacherattendances.filter(account=> account.id !== action.payload)
            };
        case ADD_ATTENDANCE:
            return {
                ...state,
                teacherattendance: [...state.teacherattendances, action.payload]
            }
        case GET_ATTENDANCE:
            return {
                ...state,
                teacherattendance:action.payload
                };
        case EDIT_ATTENDANCE:
            const arrayList = state.teacherattendances;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                teacherattendances: arrayList,
            };
        default:
            return state;
    }
}