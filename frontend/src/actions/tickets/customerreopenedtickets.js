import axios from 'axios';
import {
  GET_CUSTOMER_REOPENED_TICKETS_START,
  GET_CUSTOMER_REOPENED_TICKETS_SUCCESS,
  GET_CUSTOMER_REOPENED_TICKETS_FAIL,
  GET_CUSTOMER_REOPENED_TICKET_START,
  GET_CUSTOMER_REOPENED_TICKET_SUCCESS,
  GET_CUSTOMER_REOPENED_TICKET_FAIL,
} from '../../types/ticketTypes';
import { customerreopenedticketsURL } from '../../constants';

//customer reopened tickets
const getCustomerReOpenedTicketListStart = () => {
  return {
    type: GET_CUSTOMER_REOPENED_TICKETS_START
  };
};

const getCustomerReOpenedTicketListSuccess = customerreopenedtickets => {
  return {
    type: GET_CUSTOMER_REOPENED_TICKETS_SUCCESS,
    customerreopenedtickets
  };
};

const getCustomerReOpenedTicketListFail = error => {
  return {
    type: GET_CUSTOMER_REOPENED_TICKETS_FAIL,
    error: error
  };
};

const getCustomerReOpenedTicketDetailStart = () => {
  return {
    type: GET_CUSTOMER_REOPENED_TICKET_START
  };
};

const getCustomerReOpenedTicketDetailSuccess = customerreopenedticket => {
  return {
    type: GET_CUSTOMER_REOPENED_TICKET_SUCCESS,
    customerreopenedticket
  };
};

const getCustomerReOpenedTicketDetailFail = error => {
  return {
    type: GET_CUSTOMER_REOPENED_TICKET_FAIL,
    error: error
  };
};

export const getCustomerReOpenedTickets = (token) => {
  return dispatch => {
      dispatch(getCustomerReOpenedTicketListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(customerreopenedticketsURL, headers)
        .then(res => {
          const customerreopenedtickets = res.data;
          dispatch(getCustomerReOpenedTicketListSuccess(customerreopenedtickets));
          })
        .catch(err => {
          dispatch(getCustomerReOpenedTicketListStart(err));
        });
    };
};

export const getCustomerReOpenedTicket = (id, token) => {
  return dispatch => {
      dispatch(getCustomerReOpenedTicketDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${customerreopenedticketsURL}${id}`, headers)
        .then(res => {
          const customerreopenedticket = res.data;
          dispatch(getCustomerReOpenedTicketDetailSuccess(customerreopenedticket));
          })
        .catch(err => {
          dispatch(getCustomerReOpenedTicketDetailFail(err));
        });
    };
};
