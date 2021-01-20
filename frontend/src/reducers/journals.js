import {
        GET_JOURNALS,
        DELETE_JOURNAL,
        GET_JOURNAL,
        ADD_JOURNAL,
        EDIT_JOURNAL
    } from '../types/journalTypes';

const initialState = {
    journals: [],
    journal: [],
    loading: false

}

export default function(state = initialState, action){
    switch(action.type){
        case GET_JOURNALS:
            return {
                ...state,
                journals: action.payload
            };
        case DELETE_JOURNAL:
            return {
                ...state,
                journal: state.journals.filter(journal=> journal.id !== action.payload)
            };
        case GET_JOURNAL:
            return {
                ...state,
                journal:action.payload
                };
        case ADD_JOURNAL:
            return {
                ...state,
                journal: [...state.journals, action.payload]
            }
        case EDIT_JOURNAL:
            const arrayList = state.journals;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                journals: arrayList,
            };
        default:
            return state;
    }
}
