import axios from 'axios';
import {
        GET_IN_ACTIVE_ACCOUNTS,
        DELETE_IN_ACTIVE_ACCOUNT,
        GET_IN_ACTIVE_ACCOUNT,
        EDIT_IN_ACTIVE_ACCOUNT,
        ADD_IN_ACTIVE_ACCOUNT
    } from '../types/inactiveaccountTypes';
import { inactiveaccountsURL } from '../constants';

// Get
export const getInActiveAccounts = () => dispatch => {
    axios.get(inactiveaccountsURL)
        .then(res => {
            dispatch({
                type: GET_IN_ACTIVE_ACCOUNTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete
export const deleteInActiveAccount = (id) => dispatch => {
    axios.delete(inactiveaccountsURL, id)
        .then(res => {
            dispatch({
                type: DELETE_IN_ACTIVE_ACCOUNT,
                payload: id
            });
        }).catch(err => console.log(err))
}

//get
export const getInActiveAccount = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/accounting/in-active-accounts/${id}`)
        .then(res => {
            dispatch({
                type: GET_IN_ACTIVE_ACCOUNT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}



export const editInactiveAccount = (id, account) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/accounting/in-active-accounts/${id}/`, account)
        .then(res => {
            dispatch({
                type: EDIT_IN_ACTIVE_ACCOUNT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

// Add
export const addInActiveAccount = (account) => dispatch => {
    axios.post(inactiveaccountsURL, account)
        .then(res => {
            dispatch({
                type: ADD_IN_ACTIVE_ACCOUNT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}





