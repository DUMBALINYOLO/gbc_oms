import {
  MAKE_ENQUIRY,
  GET_ENQUIRIES,
  GET_ENQUIRY,
} from '../types/messagingTypes';

const initialState = {
  enquiries: [],
  enquiry: {},
  loading: false,
  error: null,
}



export default function messaging(state = initialState, action){
    switch(action.type){
        case GET_ENQUIRIES:
            return {
                ...state,
                enquiries: action.payload
            };
        case MAKE_ENQUIRY:
            return {
                ...state,
                enquiry: [...state.enquiries, action.payload]
            }
        case GET_ENQUIRY:
            return {
                ...state,
                enquiry:action.payload
                };
        default:
            return state;
    }
}
