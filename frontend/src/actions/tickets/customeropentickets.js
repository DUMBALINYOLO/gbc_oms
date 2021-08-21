import axios from 'axios';
import {
  GET_CUSTOMER_OPEN_TICKETS_START,
  GET_CUSTOMER_OPEN_TICKETS_SUCCESS,
  GET_CUSTOMER_OPEN_TICKETS_FAIL,
  CREATE_CUSTOMER_OPEN_TICKET_START,
  CREATE_CUSTOMER_OPEN_TICKET_SUCCESS,
  CREATE_CUSTOMER_OPEN_TICKET_FAIL,
  GET_CUSTOMER_OPEN_TICKET_START,
  GET_CUSTOMER_OPEN_TICKET_SUCCESS,
  GET_CUSTOMER_OPEN_TICKET_FAIL,
  EDIT_CUSTOMER_OPEN_TICKET,
} from '../../types/ticketTypes';
import { customeropenticketsURL } from '../../constants';
import { returnErrors } from '../messages';

//customer open tickets
const getCustomerOpenTicketListStart = () => {
  return {
    type: GET_CUSTOMER_OPEN_TICKETS_START
  };
};

const getCustomerOpenTicketListSuccess = customeropentickets => {
  return {
    type: GET_CUSTOMER_OPEN_TICKETS_SUCCESS,
    customeropentickets
  };
};

const getCustomerOpenTicketListFail = error => {
  return {
    type: GET_CUSTOMER_OPEN_TICKETS_FAIL,
    error: error
  };
};

const createCustomerOpenTicketStart = () => {
  return {
    type: CREATE_CUSTOMER_OPEN_TICKET_START
  };
};


const createCustomerOpenTicketSuccess = customeropenticket => {
  return {
    type: CREATE_CUSTOMER_OPEN_TICKET_SUCCESS,
    customeropenticket
  };
};

const createCustomerOpenTicketFail = error => {
  return {
    type: CREATE_CUSTOMER_OPEN_TICKET_FAIL,
    error: error
  };
};

const getCustomerOpenTicketDetailStart = () => {
  return {
    type: GET_CUSTOMER_OPEN_TICKET_START
  };
};

const getCustomerOpenTicketDetailSuccess = customeropenticket => {
  return {
    type: GET_CUSTOMER_OPEN_TICKET_SUCCESS,
    customeropenticket
  };
};

const getCustomerOpenTicketDetailFail = error => {
  return {
    type: GET_CUSTOMER_OPEN_TICKET_FAIL,
    error: error
  };
};

export const getCustomerOpenTickets = (token) => {
  return dispatch => {
      dispatch(getCustomerOpenTicketListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(customeropenticketsURL, headers)
        .then(res => {
          const customeropentickets = res.data;
          dispatch(getCustomerOpenTicketListSuccess(customeropentickets));
          })
        .catch(err => {
          dispatch(getCustomerOpenTicketListStart(err));
        });
    };
};

export const getCustomerOpenTicket = (id, token) => {
  return dispatch => {
      dispatch(getCustomerOpenTicketDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${customeropenticketsURL}${id}`, headers)
        .then(res => {
          const customeropenticket = res.data;
          dispatch(getCustomerOpenTicketDetailSuccess(customeropenticket));
          })
        .catch(err => {
          dispatch(getCustomerOpenTicketDetailFail(err));
        });
    };
};

export const addCustomerOpenTicket = (customeropenticket, token) => {
  return dispatch => {
      dispatch(createCustomerOpenTicketStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(customeropenticketsURL, customeropenticket, headers)
        .then(res => {
          dispatch(createCustomerOpenTicketSuccess(customeropenticket));
        })
        .catch(err => {
          dispatch(createCustomerOpenTicketFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editCustomerOpenTicket = (id, customeropenticket, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${customeropenticketsURL}${id}/`, customeropenticket, headers)
        .then(res => {
            dispatch({
                type: EDIT_CUSTOMER_OPEN_TICKET,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

