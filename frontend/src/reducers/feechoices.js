import { 
    GET_FEE_TARGETS_CHOICES,
    GET_FEE_TYPE_CHOICES,
    GET_ACCOUNT_STATUS_CHOICES,
    GET_ACCOUNT_BALANCE_SHEET_CATEGORIES_CHOICES,
    GET_ACCOUNT_TYPE_CHOICES,
} from '../types/choiceTypes'

const initialState = {
    feetypechoices: [],
    feetargetschoices: [],
    accountstatuschoices: [],
    accountbalancesheetcategorieschoices : [],
    accounttypechoices : [],
 }
 
 
 export default function a(state = initialState, action){
     switch(action.type){
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
         default:
             return state;
     }
 }
 