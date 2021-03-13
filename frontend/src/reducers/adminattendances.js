import {
    DELETE_ATTENDANCE,
    GET_ATTENDANCE,
    EDIT_ATTENDANCE,
    EDIT_ATTENDANCE_RECORD,
    GET_ATTENDANCES_START,
    GET_ATTENDANCES_SUCCESS,
    GET_ATTENDANCES_FAIL,
    GET_ATTENDANCE_RECORDS_START,
    GET_ATTENDANCE_RECORDS_SUCCESS,
    GET_ATTENDANCE_RECORDS_FAIL,
    CREATE_ATTENDANCE_RECORD_START,
    CREATE_ATTENDANCE_RECORD_SUCCESS,
    CREATE_ATTENDANCE_RECORD_FAIL,
    CREATE_ATTENDANCE_START,
    CREATE_ATTENDANCE_SUCCESS,
    CREATE_ATTENDANCE_FAIL,
} from '../types/attendanceTypes';
import { updateObject } from "../utility";


const initialState = {
    adminattendances: [],
    adminattendance: {},
    attendandancerecords: [],
    record: {},
    loading: false,
    error: null,
}

const getAdminAttendanceListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAdminAttendanceListSuccess = (state, action) => {
  return updateObject(state, {
    adminattendances: action.adminattendances,
    error: null,
    loading: false
  });
};

const getAdminAttendanceListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAdminAttendanceRecordListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAdminAttendanceRecordListSuccess = (state, action) => {
  return updateObject(state, {
    attendandancerecords: action.attendandancerecords,
    error: null,
    loading: false
  });
};

const getAdminAttendanceRecordListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createAdminAttendanceRecordStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createAdminAttendanceRecordSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createAdminAttendanceRecordFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createAdminAttendanceStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createAdminAttendanceSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createAdminAttendanceFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getStudentAttendanceListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getStudentAttendanceListSuccess = (state, action) => {
  return updateObject(state, {
    adminattendances: action.adminattendances,
    error: null,
    loading: false
  });
};

const getStudentAttendanceListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getTeacherAttendanceListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getTeacherAttendanceListSuccess = (state, action) => {
  return updateObject(state, {
    adminattendances: action.adminattendances,
    error: null,
    loading: false
  });
};

const getTeacherAttendanceListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


export default function a(state = initialState, action){
    switch(action.type){
        case GET_ATTENDANCE_RECORDS_START:
            return getAdminAttendanceRecordListStart(state, action);
        case GET_ATTENDANCE_RECORDS_SUCCESS:
            return getAdminAttendanceRecordListSuccess(state, action);
        case GET_ATTENDANCE_RECORDS_FAIL:
            return getAdminAttendanceRecordListFail(state, action);
        case CREATE_ATTENDANCE_RECORD_START:
            return createAdminAttendanceRecordStart(state, action);
        case CREATE_ATTENDANCE_RECORD_SUCCESS:
            return createAdminAttendanceRecordSuccess(state, action);
        case CREATE_ATTENDANCE_RECORD_FAIL:
            return createAdminAttendanceRecordFail(state, action);
        case EDIT_ATTENDANCE_RECORD:
            const zarrayList = state.attendandancerecords;
            zarrayList.splice(zarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                attendandancerecords: zarrayList,
            };
        case GET_ATTENDANCES_START:
            return getAdminAttendanceListStart(state, action);
        case GET_ATTENDANCES_SUCCESS:
            return getAdminAttendanceListSuccess(state, action);
        case GET_ATTENDANCES_FAIL:
            return getAdminAttendanceListFail(state, action);
        case DELETE_ATTENDANCE:
            return {
                ...state,
                adminattendance: state.adminattendances.filter(account=> account.id !== action.payload)
            };
        case CREATE_ATTENDANCE_START:
            return createAdminAttendanceStart(state, action);
        case CREATE_ATTENDANCE_SUCCESS:
            return createAdminAttendanceSuccess(state, action);
        case CREATE_ATTENDANCE_FAIL:
            return createAdminAttendanceFail(state, action);
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
