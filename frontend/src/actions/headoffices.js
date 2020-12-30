import axios from 'axios';
import {
        GET_HEADOFFICES,

    } from '../types/headofficeTypes';
import { headofficeURL } from '../constants';

// Get
export const getHeadOffices = () => dispatch => {
    axios.get(headofficeURL)
        .then(res => {
            dispatch({
                type: GET_HEADOFFICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
