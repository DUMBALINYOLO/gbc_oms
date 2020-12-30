import {
    ADD_ATTENDANCE,
    GET_ATTENDANCES ,
    DELETE_ATTENDANCE,
    GET_ATTENDANCE,
    EDIT_ATTENDANCE,


} from '../types/attendanceTypes';

const initialState = {
    adminattendances: [],
    adminattendance: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ATTENDANCES:
            return {
                ...state,
                adminattendances: action.payload
            };
        case DELETE_ATTENDANCE:
            return {
                ...state,
                adminattendance: state.adminattendances.filter(account=> account.id !== action.payload)
            };
        case ADD_ATTENDANCE:
            return {
                ...state,
                adminattendance: [...state.adminattendances, action.payload]
            }
        case GET_ATTENDANCE:
            return {
                ...state,
                adminattendance:action.payload
                };
        case EDIT_ATTENDANCE:
            const arrayList = state.adminattendances;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                adminattendances: arrayList,
            };
        default:
            return state;
    }
}
