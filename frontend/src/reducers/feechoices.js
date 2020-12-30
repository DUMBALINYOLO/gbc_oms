import { 
    GET_FEE_TARGETS_CHOICES,
    GET_FEE_TYPE_CHOICES,
} from '../types/choiceTypes'

const initialState = {
    feetypechoices: [],
    feetargetschoices: [],
 }
 
 
 export default function (state = initialState, action){
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
         default:
             return state;
     }
 }
 