import axios from 'axios';
import {
        GET_JOURNALS,
        DELETE_JOURNAL,
        GET_JOURNAL,
        ADD_JOURNAL,
        EDIT_JOURNAL,
    } from '../types/journalTypes';
import { journalsURL } from '../constants';

// Get
export const getJournals = () => dispatch => {
    axios.get(journalsURL)
        .then(res => {
            dispatch({
                type: GET_JOURNALS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete
export const deleteJournal = (id) => dispatch => {
    axios.delete(journalsURL, id)
        .then(res => {
            dispatch({
                type: DELETE_JOURNAL,
                payload: id
            });
        }).catch(err => console.log(err))
}

//get
export const getJournal = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/accounting/journals/${id}`)
        .then(res => {
            dispatch({
                type: GET_JOURNAL,
                payload: res.data
            });
        }).catch(err => console.log(err))

}

export const addJournal = (journal) => dispatch => {
    axios.post(journalsURL, journal)
        .then(res => {
            dispatch({
                type: ADD_JOURNAL,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Edit
export const editJournal = (id, journal) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/accounting/journals/${id}/`,journal)
        .then(res => {
            dispatch({
                type: EDIT_JOURNAL,
                payload: res.data
            });
        }).catch(err => console.log(err))
}





