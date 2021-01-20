import {
        GET_IN_ACTIVE_ACCOUNTS,
        DELETE_IN_ACTIVE_ACCOUNT,
        GET_IN_ACTIVE_ACCOUNT,
        EDIT_IN_ACTIVE_ACCOUNT,
        ADD_IN_ACTIVE_ACCOUNT,
    } from '../types/inactiveaccountTypes';

const initialState = {
    inactiveaccounts: [],
    inactiveaccount: [],
    loading: false
}

export default function a(state = initialState, action){
    switch(action.type){
        case GET_IN_ACTIVE_ACCOUNTS:
            return {
                ...state,
                inactiveaccounts: action.payload
            };
        case DELETE_IN_ACTIVE_ACCOUNT:
            return {
                ...state,
                inactiveaccount: state.inactiveaccounts.filter(inactiveaccount=> inactiveaccount.id !== action.payload)
            };
        case ADD_IN_ACTIVE_ACCOUNT:
            return {
                ...state,
                account: [...state.inactiveaccounts, action.payload]
            }
        case GET_IN_ACTIVE_ACCOUNT:
            return {
                ...state,
                inactiveaccount:action.payload
                };
        case EDIT_IN_ACTIVE_ACCOUNT:
            const arrayList = state.inactiveaccounts;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                inactiveaccounts: arrayList,
            };
        default:
            return state;
    }
}
