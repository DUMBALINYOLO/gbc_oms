import axios from 'axios';
import {
  MAKE_ENQUIRY,
  GET_ENQUIRIES,
  GET_ENQUIRY,
} from '../types/messagingTypes';
import { enquiriesURL } from '../constants';
import { createMessage, returnErrors } from './messages';

// Get
export const getEnquiries = (token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
    axios.get(enquiriesURL, headers)
        .then(res => {
            dispatch({
                type: GET_ENQUIRIES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


// Get
export const getEnquiry = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
    axios.get(`${enquiriesURL}${id}/`, headers)
        .then(res => {
            dispatch({
                type: GET_ENQUIRY,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



// Add
export const createEnquiry = (enquiry, token) => dispatch => {
    axios.post(enquiriesURL, enquiry, token)
        .then(res => {
            dispatch({
                type: MAKE_ENQUIRY,
                payload: res.data
            });
        }).catch(err => {
          dispatch(returnErrors(err.response.data, err.response.status));
        });
}
