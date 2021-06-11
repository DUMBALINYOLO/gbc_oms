import {GET_COUNTER_STATS} from '../types/reportTypes';


const initialState = {
    statscounter: {},
}


export default function reports(state = initialState, action){
    switch(action.type){
        case GET_COUNTER_STATS:
            return {
                ...state,
                statscounter: action.payload
            };
        default:
            return state;
    }
}
