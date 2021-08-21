import axios from 'axios';
import {
  GET_REOPENED_TICKETS_START,
  GET_REOPENED_TICKETS_SUCCESS,
  GET_REOPENED_TICKETS_FAIL,
  GET_REOPENED_TICKET_START,
  GET_REOPENED_TICKET_SUCCESS,
  GET_REOPENED_TICKET_FAIL,
  REASSIGN_REOPENED_TICKET_START,
  REASSIGN_REOPENED_TICKET_SUCCESS,
  REASSIGN_REOPENED_TICKET_FAIL,
} from '../../types/ticketTypes';
import { reopenedticketsURL } from '../../constants';
import {
  returnErrors
} from '../messages'

//reopened tickets
const getReOpenedTicketListStart = () => {
  return {
    type: GET_REOPENED_TICKETS_START
  };
};

const getReOpenedTicketListSuccess = reopenedtickets => {
  return {
    type: GET_REOPENED_TICKETS_SUCCESS,
    reopenedtickets
  };
};

const getReOpenedTicketListFail = error => {
  return {
    type: GET_REOPENED_TICKETS_FAIL,
    error: error
  };
};

const getReOpenedTicketDetailStart = () => {
  return {
    type: GET_REOPENED_TICKET_START
  };
};

const getReOpenedTicketDetailSuccess = reopenedticket => {
  return {
    type: GET_REOPENED_TICKET_SUCCESS,
    reopenedticket
  };
};

const getReOpenedTicketDetailFail = error => {
  return {
    type: GET_REOPENED_TICKET_FAIL,
    error: error
  };
};


const reassignReopenedTicketStart = () => {
  return {
    type: REASSIGN_REOPENED_TICKET_START
  };
};


const reassignReopenedTicketSuccess = ticket => {
  return {
    type: REASSIGN_REOPENED_TICKET_SUCCESS,
    ticket
  };
};


const reassignReopenedTicketFail = error => {
  return {
    type: REASSIGN_REOPENED_TICKET_FAIL,
    error: error
  };
};



export const getReOpenedTickets = (token) => {
  return dispatch => {
      dispatch(getReOpenedTicketListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(reopenedticketsURL, headers)
        .then(res => {
          const reopenedtickets = res.data;
          dispatch(getReOpenedTicketListSuccess(reopenedtickets));
          })
        .catch(err => {
          dispatch(getReOpenedTicketListStart(err));
        });
    };
};

export const getReOpenedTicket = (id, token) => {
  return dispatch => {
      dispatch(getReOpenedTicketDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${reopenedticketsURL}${id}`, headers)
        .then(res => {
          const reopenedticket = res.data;
          dispatch(getReOpenedTicketDetailSuccess(reopenedticket));
          })
        .catch(err => {
          dispatch(getReOpenedTicketDetailFail(err));
        });
    };
};

export const reassignReopenedTicket = (id, ticket, token) => {
  return dispatch => {
      dispatch(reassignReopenedTicketStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${reopenedticketsURL}${id}/reassign/`, ticket, headers)
        .then(res => {
          dispatch(reassignReopenedTicketSuccess(ticket));
        })
        .catch(err => {
          dispatch(reassignReopenedTicketFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
      });
  };
};
