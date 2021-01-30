
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


const initialState = {
    receipts: [],
    receipt: [],
    studentreceipts: [],
    studentreceipt: [],
    payments: [],
    payment: [],
    fees: [],
    fee: [],
    feesconfig: [],
    feeconfig: [],
    studentinvoices: [],
    studentinvoice: [],
    loading: false
}

export default function fees(state = initialState, action){
    switch(action.type){
        case GET_RECEIPTS:
            return {
                ...state,
                receipts : action.payload
            };

        case GET_RECEIPT:
            return {
                ...state,
                receipt : action.payload
            };

        case GET_STUDENT_RECEIPTS:
            return {
                ...state,
                studentreceipts : action.payload
            };

        case GET_STUDENT_RECEIPT:
            return {
                ...state,
                studentreceipt : action.payload
            };

        case GET_STUDENT_INVOICES:
            return {
                ...state,
                studentinvoices : action.payload
            };

        case GET_STUDENT_INVOICE:
            return {
                ...state,
                studentinvoice : action.payload
            };
    

        case GET_FEES:
            return {
                ...state,
                fees : action.payload
            };
        
        case ADD_FEE:
            return {
                ...state,
                fee: [...state.fees, action.payload]
            }

        
        case EDIT_FEE:
            const feearrayList = state.fees;
            feearrayList.splice(feearrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                fees: feearrayList ,
            };

        case GET_FEES_CONFIG:
            return {
                ...state,
                feesconfig : action.payload
            };
        
        case ADD_FEE_CONFIG:
            return {
                ...state,
                feeconfig: [...state.feesconfig, action.payload]
            }   
        case EDIT_FEE_CONFIG:
            const fecarrayList = state.feesconfig;
            feearrayList.splice(fecarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                feesconfig: fecarrayList ,
            };

        case GET_PAYMENTS:
            return {
                ...state,
                payments : action.payload
            };

        case GET_PAYMENT:
            return {
                ...state,
                payment : action.payload
            };

        case ADD_PAYMENT:
            return {
                ...state,
                payment: [...state.payment, action.payload]
            }

        case EDIT_PAYMENT:
            const paarrayList = state.fees;
            paarrayList.splice(paarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                payments: paarrayList ,
            };
        default:
            return state;
    }
}
