import {
    ADD_ADMISSION,
    GET_ADMISSIONS,
    GET_PENDING_ADMISSIONS,
    EDIT_PENDING_ADMISSIONS,
    GET_REJECTED_ADMISSIONS,
    EDIT_REJECTED_ADMISSIONS,
    GET_ACCEPTED_ADMISSIONS,
    EDIT_ACCEPTED_ADMISSIONS,
    GET_MEETING_ADMISSIONS,
    EDIT_MEETING_ADMISSIONS
        
} from '../types/admissionTypes';


const initialState = {
    admissions: [],
    pendingadmissions: [],
    rejectedadmissions: [],
    meetingadmissions: [],
    acceptedadmissions: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ADMISSIONS:
            return {
                ...state,
                admissions: action.payload
            };
        case ADD_ADMISSION:
            return {
                ...state,
                admission: [...state.admissions, action.payload]
            }

        case GET_PENDING_ADMISSIONS:
            return {
                ...state,
                pendingadmissions: action.payload
            };
        case GET_REJECTED_ADMISSIONS:
            return {
                ...state,
                rejectedadmissions: action.payload
            };
        case GET_MEETING_ADMISSIONS:
            return {
                ...state,
                meetingadmissions: action.payload
            };
        case GET_ACCEPTED_ADMISSIONS:
            return {
                ...state,
                acceptedadmissions: action.payload
            };

        case EDIT_PENDING_ADMISSIONS:
            const arrayList = state.pendingadmissions;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                pendingadmissions: arrayList,
            };
        case EDIT_REJECTED_ADMISSIONS:
            const arrayList = state.rejectedadmissions;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                rejectedadmissions: arrayList,
            };
        case EDIT_MEETING_ADMISSIONS:
            const arrayList = state.meetingadmissions;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                meetingadmissions: arrayList,
            };
        case EDIT_ACCEPTED_ADMISSIONS:
            const arrayList = state.acceptedadmissions;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                acceptedadmissions: arrayList,
            };
        default:
            return state;
    }
}
