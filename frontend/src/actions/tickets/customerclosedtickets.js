import axios from 'axios';
import {
  GET_CUSTOMER_CLOSED_TICKETS_START,
  GET_CUSTOMER_CLOSED_TICKETS_SUCCESS,
  GET_CUSTOMER_CLOSED_TICKETS_FAIL,
  GET_CUSTOMER_CLOSED_TICKET_START,
  GET_CUSTOMER_CLOSED_TICKET_SUCCESS,
  GET_CUSTOMER_CLOSED_TICKET_FAIL,
} from '../../types/ticketTypes';
import { customerclosedticketsURL } from '../../constants';

//customer closed tickets
const getCustomerClosedTicketListStart = () => {
  return {
    type: GET_CUSTOMER_CLOSED_TICKETS_START
  };
};

const getCustomerClosedTicketListSuccess = customerclosedtickets => {
  return {
    type: GET_CUSTOMER_CLOSED_TICKETS_SUCCESS,
    customerclosedtickets
  };
};

const getCustomerClosedTicketListFail = error => {
  return {
    type: GET_CUSTOMER_CLOSED_TICKETS_FAIL,
    error: error
  };
};

const getCustomerClosedTicketDetailStart = () => {
  return {
    type: GET_CUSTOMER_CLOSED_TICKET_START
  };
};

const getCustomerClosedTicketDetailSuccess = customerclosedticket => {
  return {
    type: GET_CUSTOMER_CLOSED_TICKET_SUCCESS,
    customerclosedticket
  };
};

const getCustomerClosedTicketDetailFail = error => {
  return {
    type: GET_CUSTOMER_CLOSED_TICKET_FAIL,
    error: error
  };
};

export const getCustomerClosedTickets = (token) => {
  return dispatch => {
      dispatch(getCustomerClosedTicketListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(customerclosedticketsURL, headers)
        .then(res => {
          const customerclosedtickets = res.data;
          dispatch(getCustomerClosedTicketListSuccess(customerclosedtickets));
          })
        .catch(err => {
          dispatch(getCustomerClosedTicketListStart(err));
        });
    };
};

export const getCustomerClosedTicket = (id, token) => {
  return dispatch => {
      dispatch(getCustomerClosedTicketDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${customerclosedticketsURL}${id}`, headers)
        .then(res => {
          const customerclosedticket = res.data;
          dispatch(getCustomerClosedTicketDetailSuccess(customerclosedticket));
          })
        .catch(err => {
          dispatch(getCustomerClosedTicketDetailFail(err));
        });
    };
};
