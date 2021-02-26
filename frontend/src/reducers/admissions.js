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
    applications: [],
    pendingadmissions: [],
    rejectedadmissions: [],
    meetingadmissions: [],
    acceptedadmissions: [],
    loading: false,
}

export default function admissions(state = initialState, action){
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
            const pearrayList = state.pendingadmissions;
            pearrayList.splice(pearrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                pendingadmissions: pearrayList,
            };
        case EDIT_REJECTED_ADMISSIONS:
            const rejearrayList = state.rejectedadmissions;
            rejearrayList.splice(rejearrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                rejectedadmissions: rejearrayList,
            };
        case EDIT_MEETING_ADMISSIONS:
            const meetarrayList = state.meetingadmissions;
            meetarrayList.splice(meetarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                meetingadmissions: meetarrayList,
            };
        case EDIT_ACCEPTED_ADMISSIONS:
            let acearrayList = state.acceptedadmissions;
            acearrayList.splice(acearrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                acceptedadmissions: acearrayList,
            };
        default:
            return state;
    }
}
