import axios from 'axios';
import api from "./api";

import {
        ADD_HAULIER,
        GET_HAULIERS,
        DELETE_HAULIER,
        GET_HAULIER,
        EDIT_HAULIER
    } from '../types/haulierTypes';
import { hauliersURL } from '../constants';

// Get
export const getHauliers = () => dispatch => {
    axios.get(hauliersURL)
        .then(res => {
            dispatch({
                type: GET_HAULIERS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete
export const deleteHauiler = (id) => dispatch => {
    axios.delete(hauliersURL, id)
        .then(res => {
            dispatch({
                type: DELETE_HAULIER,
                payload: id
            });
        }).catch(err => console.log(err))
}

// Add
export const addHaulier = (haulier) => dispatch => {
    axios.post(hauliersURL, haulier)
        .then(res => {
            dispatch({
                type: ADD_HAULIER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//get
export const getHaulier = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/hauliers/hauliers/${id}`)
        .then(res => {
            dispatch({
                type: GET_HAULIER,
                payload: res.data
            });
        }).catch(err => console.log(err))

}

//Edit
// export const editHaulier = (id, haulier) => dispatch => {
//     axios.patch(`http://127.0.0.1:8000/api/hauliers/hauliers/${id}/`, haulier)
//         .then(res => {
//             dispatch({
//                 type: EDIT_HAULIER,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))
// }


export const editHaulier = (id, data, onSuccess) => dispatch => {
    api.haulier().update(id, data)
        .then(res => {
            dispatch({
                type: EDIT_HAULIER,
                payload: { id, ...data }
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

