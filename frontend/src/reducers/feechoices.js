import {
    GET_FEE_TARGETS_CHOICES,
    GET_FEE_TYPE_CHOICES,
    GET_ACCOUNT_STATUS_CHOICES,
    GET_ACCOUNT_BALANCE_SHEET_CATEGORIES_CHOICES,
    GET_ACCOUNT_TYPE_CHOICES,
    GET_ASSET_TYPES_CHOICES,
    GET_ASSETS_DEPRECIATION_METHOD_CHOICES,
    GET_GENERAL_GRADING_TYPE_CHOICES,
    GET_ATTENDANCE_STATUS_CHOICES,
    GET_INVENTORY_CHECK_FREQUENCY_CHOICES,
    GET_STUDYNOTES_STATUS_CHOICES,
    GET_STUDY_NOTES_APPROVAL_STATUS_CHOICES,
} from '../types/choiceTypes'

const initialState = {
    feetypechoices: [],
    feetargetschoices: [],
    accountstatuschoices: [],
    accountbalancesheetcategorieschoices : [],
    accounttypechoices : [],
    assettypechoices: [],
    assetsdepriciationmethodchoices : [],
    generalgradingtypechoices : [],
    attendancestatuschoices : [],
    studynotesstatuschoices : [],
    studynotesapprovalstatuschoices : [],

 }


 export default function choices(state = initialState, action){
     switch(action.type){
        case GET_STUDYNOTES_STATUS_CHOICES:
            return {
                ...state,
                studynotesstatuschoices: action.payload
            };
        case GET_STUDY_NOTES_APPROVAL_STATUS_CHOICES:
            return {
                ...state,
                studynotesapprovalstatuschoices: action.payload
            };
        case GET_ATTENDANCE_STATUS_CHOICES:
             return {
                 ...state,
                 attendancestatuschoices: action.payload
             };
        case GET_GENERAL_GRADING_TYPE_CHOICES:
             return {
                 ...state,
                 generalgradingtypechoices: action.payload
             };
        case GET_FEE_TARGETS_CHOICES:
             return {
                 ...state,
                 feetargetschoices: action.payload
             };
        case GET_FEE_TYPE_CHOICES:
            return {
                ...state,
                feetypechoices: action.payload
            };
        case GET_ACCOUNT_STATUS_CHOICES:
            return {
                ...state,
                accountstatuschoices: action.payload
            };
        case GET_ACCOUNT_BALANCE_SHEET_CATEGORIES_CHOICES:
            return {
                ...state,
                accountbalancesheetcategorieschoices : action.payload
            };
        case GET_ACCOUNT_TYPE_CHOICES:
            return {
                ...state,
                accounttypechoices : action.payload
            };
        case GET_ASSET_TYPES_CHOICES:
            return {
                ...state,
                assettypechoices : action.payload
            };
        case GET_ASSETS_DEPRECIATION_METHOD_CHOICES:
            return {
                ...state,
                assetsdepriciationmethodchoices : action.payload
            };
         default:
             return state;
     }
 }
