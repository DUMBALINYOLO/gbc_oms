import {
    EDIT_PENDING_ADMISSIONS,
    EDIT_REJECTED_ADMISSIONS,
    EDIT_ACCEPTED_ADMISSIONS,
    EDIT_MEETING_ADMISSIONS,
    PROCESS_ADMISSION,
    GET_ADMISSIONS_START,
    GET_ADMISSIONS_SUCCESS,
    GET_ADMISSIONS_FAIL,
    CREATE_ADMISSION_START,
    CREATE_ADMISSION_SUCCESS,
    CREATE_ADMISSION_FAIL,
    GET_PENDING_ADMISSIONS_START,
    GET_PENDING_ADMISSIONS_SUCCESS,
    GET_PENDING_ADMISSIONS_FAIL,
    GET_REJECTED_ADMISSIONS_START,
    GET_REJECTED_ADMISSIONS_SUCCESS,
    GET_REJECTED_ADMISSIONS_FAIL,
    GET_ACCEPTED_ADMISSIONS_START,
    GET_ACCEPTED_ADMISSIONS_SUCCESS,
    GET_ACCEPTED_ADMISSIONS_FAIL,
    GET_MEETING_ADMISSIONS_START,
    GET_MEETING_ADMISSIONS_SUCCESS,
    GET_MEETING_ADMISSIONS_FAIL,

} from '../types/admissionTypes';
import { updateObject } from "../utility";

const initialState = {
    admissions: [],
    applications: [],
    pendingadmissions: [],
    rejectedadmissions: [],
    meetingadmissions: [],
    acceptedadmissions: [],
    loading: false,
    error: null,
}

//admissions
const getAdmissionListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAdmissionListSuccess = (state, action) => {
  return updateObject(state, {
    admissions: action.admissions,
    error: null,
    loading: false
  });
};

const getAdmissionListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createAdmissionStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createAdmissionSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createAdmissionFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//pending admissions
const getPendingAdmissionListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getPendingAdmissionListSuccess = (state, action) => {
  return updateObject(state, {
    pendingadmissions: action.pendingadmissions,
    error: null,
    loading: false
  });
};

const getPendingAdmissionListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//rejected admissions
const getRejectedAdmissionListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getRejectedAdmissionListSuccess = (state, action) => {
  return updateObject(state, {
    rejectedadmissions: action.rejectedadmissions,
    error: null,
    loading: false
  });
};

const getRejectedAdmissionListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//accepted admissions
const getAcceptedAdmissionListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAcceptedAdmissionListSuccess = (state, action) => {
  return updateObject(state, {
    acceptedadmissions: action.acceptedadmissions,
    error: null,
    loading: false
  });
};

const getAcceptedAdmissionListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//meeting admissions
const getMeetingAdmissionListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getMeetingAdmissionListSuccess = (state, action) => {
  return updateObject(state, {
    meetingadmissions: action.meetingadmissions,
    error: null,
    loading: false
  });
};

const getMeetingAdmissionListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


export default function admissions(state = initialState, action){
    switch(action.type){
        case PROCESS_ADMISSION:
            return {
                ...state,
                admission: [...state.admissions, action.payload]
            }
        case GET_ADMISSIONS_START:
            return getAdmissionListStart(state, action);
        case GET_ADMISSIONS_SUCCESS:
            return getAdmissionListSuccess(state, action);
        case GET_ADMISSIONS_FAIL:
            return getAdmissionListFail(state, action);
        case CREATE_ADMISSION_START:
            return createAdmissionStart(state, action);
        case CREATE_ADMISSION_SUCCESS:
            return createAdmissionSuccess(state, action);
        case CREATE_ADMISSION_FAIL:
            return createAdmissionFail(state, action);
        case GET_PENDING_ADMISSIONS_START:
            return getPendingAdmissionListStart(state, action);
        case GET_PENDING_ADMISSIONS_SUCCESS:
            return getPendingAdmissionListSuccess(state, action);
        case GET_PENDING_ADMISSIONS_FAIL:
            return getPendingAdmissionListFail(state, action);
        case GET_REJECTED_ADMISSIONS_START:
            return getRejectedAdmissionListStart(state, action);
        case GET_REJECTED_ADMISSIONS_SUCCESS:
            return getRejectedAdmissionListSuccess(state, action);
        case GET_REJECTED_ADMISSIONS_FAIL:
            return getRejectedAdmissionListFail(state, action);
        case GET_ACCEPTED_ADMISSIONS_START:
            return getAcceptedAdmissionListStart(state, action);
        case GET_ACCEPTED_ADMISSIONS_SUCCESS:
            return getAcceptedAdmissionListSuccess(state, action);
        case GET_ACCEPTED_ADMISSIONS_FAIL:
            return getAcceptedAdmissionListFail(state, action);
        case GET_MEETING_ADMISSIONS_START:
            return getMeetingAdmissionListStart(state, action);
        case GET_MEETING_ADMISSIONS_SUCCESS:
            return getMeetingAdmissionListSuccess(state, action);
        case GET_MEETING_ADMISSIONS_FAIL:
            return getMeetingAdmissionListFail(state, action);
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
