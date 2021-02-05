import axios from 'axios';
import {
    GET_RECEIPTS,
    GET_RECEIPT,
    GET_STUDENT_RECEIPTS,
    GET_STUDENT_RECEIPT,
    GET_PAYMENTS,
    ADD_PAYMENT,
    GET_PAYMENT,
    EDIT_PAYMENT,
    GET_FEES,
    ADD_FEE,
    EDIT_FEE,
    GET_FEES_CONFIG,
    ADD_FEE_CONFIG,
    EDIT_FEE_CONFIG,
    GET_STUDENT_INVOICES,
    GET_STUDENT_INVOICE,

} from '../types/feeTypes';
import {
    adminpaymentsURL,
    adminreceiptsURL,
    feesURL,
    feesconfigURL,
    studentinvoicesURL,
    studentreceiptsURL,
} from '../constants';
import { createMessage, returnErrors } from './messages';

// Get


export const getReceipts = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(adminreceiptsURL)
        .then(res => {
            dispatch({
                type: GET_RECEIPTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Delete

export const getReceipt = (id, token) => dispatch =>{
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios.get(`http://127.0.0.1:8000/api/fees/admin-receipts/${id}`)
        .then(res => {
            dispatch({
                type: GET_RECEIPT,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}


export const getStudentReceipts = (id, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(studentreceiptsURL)
        .then(res => {
            dispatch({
                type: GET_STUDENT_RECEIPTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Delete

export const getStudentReceipt = (id, token) => dispatch =>{
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios.get(`http://127.0.0.1:8000/api/fees/student-receipts/${id}`)
        .then(res => {
            dispatch({
                type: GET_STUDENT_RECEIPT,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}


export const getStudentInvoices = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(studentinvoicesURL)
        .then(res => {
            dispatch({
                type: GET_STUDENT_INVOICES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Delete

export const getStudentInvoice = (id, token) => dispatch =>{
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios.get(`http://127.0.0.1:8000/api/fees/student-invoices/${id}`)
        .then(res => {
            dispatch({
                type: GET_STUDENT_INVOICE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}




export const getFees = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(feesURL)
        .then(res => {
            dispatch({
                type: GET_FEES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}



export const addFee= (fee, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.post(feesURL, fee)
        .then(res => {
            dispatch({
                type: ADD_FEE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}




export const getFeesConfig = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(feesconfigURL)
        .then(res => {
            dispatch({
                type: GET_FEES_CONFIG,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const addFeeConfig= (fee, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.post(feesURL, fee)
        .then(res => {
            dispatch({
                type: ADD_FEE_CONFIG,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}



export const getPayments = (token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(adminpaymentsURL)
        .then(res => {
            dispatch({
                type: GET_PAYMENTS ,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Delete



// Add
export const addPayment = (payment, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.post(adminpaymentsURL, payment)
        .then(res => {
            dispatch({
                type: ADD_PAYMENT,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Get
export const getPayment = (id, token) => dispatch =>{
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios.get(`http://127.0.0.1:8000/api/fees/admin-payments/${id}`)
        .then(res => {
            dispatch({
                type: GET_PAYMENT,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}


export const editPayment = (id, payment, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.put(`http://127.0.0.1:8000/api/fees/admin-payments/${id}`, payment)
        .then(res => {
            dispatch({
                type: EDIT_PAYMENT,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}


export const editFee = (id, payment, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/fees/fees/${id}/`, payment)
        .then(res => {
            dispatch({
                type: EDIT_FEE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const editFeeConfig = (id, payment, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.put(`http://127.0.0.1:8000/api/fees/fees-config/${id}`, payment)
        .then(res => {
            dispatch({
                type: EDIT_FEE_CONFIG,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}
