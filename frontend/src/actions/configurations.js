import axios from 'axios';
import {
        ADD_COMPANY_BRANCH,
        GET_COMPANY_BRANCHES,
        DELETE_COMPANY_BRANCH,
        GET_COMPANY_BRANCH,
        EDIT_COMPANY_BRANCH
    } from '../types/configurationsTypes';
import { configurationsURL } from '../constants';

// Get
export const getCompanyBranches = () => dispatch => {
    axios.get(configurationsURL)
        .then(res => {
            dispatch({
                type: GET_COMPANY_BRANCHES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete
export const deleteCompanyBranch = (id) => dispatch => {
    axios.delete(configurationsURL, id)
        .then(res => {
            dispatch({
                type: DELETE_COMPANY_BRANCH,
                payload: id
            });
        }).catch(err => console.log(err))
}

// Add
export const addCompanyBranch = (branch) => dispatch => {
    axios.post(configurationsURL, branch)
        .then(res => {
            dispatch({
                type: ADD_COMPANY_BRANCH,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//get
export const getCompanyBranch = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/setup/headoffice-companies-view/${id}`)
        .then(res => {
            dispatch({
                type: GET_COMPANY_BRANCH,
                payload: res.data
            });
        }).catch(err => console.log(err))

}

//Edit
export const editCompanyBranch = (id, branch) => dispatch => {
    axios.put(`http://127.0.0.1:8000/api/setup/headoffice-companies-view/${id}`, branch)
        .then(res => {
            dispatch({
                type: EDIT_COMPANY_BRANCH,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
