import axios from 'axios';
import {
  GET_CLOSED_TICKETS_START,
  GET_CLOSED_TICKETS_SUCCESS,
  GET_CLOSED_TICKETS_FAIL,
  GET_CLOSED_TICKET_START,
  GET_CLOSED_TICKET_SUCCESS,
  GET_CLOSED_TICKET_FAIL,
} from '../../types/ticketTypes';
import { closedticketsURL } from '../../constants';

//closed tickets
const getClosedTicketListStart = () => {
  return {
    type: GET_CLOSED_TICKETS_START
  };
};

const getClosedTicketListSuccess = closedtickets => {
  return {
    type: GET_CLOSED_TICKETS_SUCCESS,
    closedtickets
  };
};

const getClosedTicketListFail = error => {
  return {
    type: GET_CLOSED_TICKETS_FAIL,
    error: error
  };
};

const getClosedTicketDetailStart = () => {
  return {
    type: GET_CLOSED_TICKET_START
  };
};

const getClosedTicketDetailSuccess = closedticket => {
  return {
    type: GET_CLOSED_TICKET_SUCCESS,
    closedticket
  };
};

const getClosedTicketDetailFail = error => {
  return {
    type: GET_CLOSED_TICKET_FAIL,
    error: error
  };
};

export const getClosedTickets = (token) => {
  return dispatch => {
      dispatch(getClosedTicketListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(closedticketsURL, headers)
        .then(res => {
          const closedtickets = res.data;
          dispatch(getClosedTicketListSuccess(closedtickets));
          })
        .catch(err => {
          dispatch(getClosedTicketListStart(err));
        });
    };
};

export const getClosedTicket = (id, token) => {
  return dispatch => {
      dispatch(getClosedTicketDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${closedticketsURL}${id}`, headers)
        .then(res => {
          const closedticket = res.data;
          dispatch(getClosedTicketDetailSuccess(closedticket));
          })
        .catch(err => {
          dispatch(getClosedTicketDetailFail(err));
        });
    };
};
