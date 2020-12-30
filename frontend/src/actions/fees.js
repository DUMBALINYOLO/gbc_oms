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

// Get


export const getReceipts = () => dispatch => {
    axios.get(adminreceiptsURL)
        .then(res => {
            dispatch({
                type: GET_RECEIPTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const getReceipt = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/fees/admin-receipts/${id}`)
        .then(res => {
            dispatch({
                type: GET_RECEIPT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}


export const getStudentReceipts = () => dispatch => {
    axios.get(studentreceiptsURL)
        .then(res => {
            dispatch({
                type: GET_STUDENT_RECEIPTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const getStudentReceipt = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/fees/student-receipts/${id}`)
        .then(res => {
            dispatch({
                type: GET_STUDENT_RECEIPT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}


export const getStudentInvoices = () => dispatch => {
    axios.get(studentinvoicesURL)
        .then(res => {
            dispatch({
                type: GET_STUDENT_INVOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const getStudentInvoice = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/fees/student-invoices/${id}`)
        .then(res => {
            dispatch({
                type: GET_STUDENT_INVOICE,
                payload: res.data
            });
        }).catch(err => console.log(err))

}




export const getFees = () => dispatch => {
    axios.get(feesURL)
        .then(res => {
            dispatch({
                type: GET_FEES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const addFee= (fee) => dispatch => {
    axios.post(feesURL, fee)
        .then(res => {
            dispatch({
                type: ADD_FEE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}




export const getFeesConfig = () => dispatch => {
    axios.get(feesconfigURL)
        .then(res => {
            dispatch({
                type: GET_FEES_CONFIG,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const addFeeConfig= (fee) => dispatch => {
    axios.post(feesURL, fee)
        .then(res => {
            dispatch({
                type: ADD_FEE_CONFIG,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getPayments = () => dispatch => {
    axios.get(adminpaymentsURL)
        .then(res => {
            dispatch({
                type: GET_PAYMENTS ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete



// Add
export const addPayment = (payment) => dispatch => {
    axios.post(adminpaymentsURL, payment)
        .then(res => {
            dispatch({
                type: ADD_PAYMENT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Get
export const getPayment = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/fees/admin-payments/${id}`)
        .then(res => {
            dispatch({
                type: GET_PAYMENT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}


export const editPayment = (id, payment) => dispatch => {
    axios.put(`http://127.0.0.1:8000/api/fees/admin-payments/${id}`, payment)
        .then(res => {
            dispatch({
                type: EDIT_PAYMENT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}


export const editFee = (id, payment) => dispatch => {
    axios.put(`http://127.0.0.1:8000/api/fees/fees/${id}`, payment)
        .then(res => {
            dispatch({
                type: EDIT_FEE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editFeeConfig = (id, payment) => dispatch => {
    axios.put(`http://127.0.0.1:8000/api/fees/fees-config/${id}`, payment)
        .then(res => {
            dispatch({
                type: EDIT_FEE_CONFIG,
                payload: res.data
            });
        }).catch(err => console.log(err))
}






