import axios from 'axios';
import {
  GET_OPEN_TICKETS_START,
  GET_OPEN_TICKETS_SUCCESS,
  GET_OPEN_TICKETS_FAIL,
  GET_OPEN_TICKET_START,
  GET_OPEN_TICKET_SUCCESS,
  GET_OPEN_TICKET_FAIL,
  REASSIGN_TICKET_START,
  REASSIGN_TICKET_SUCCESS,
  REASSIGN_TICKET_FAIL,
  ASSIGN_TICKET_START,
  ASSIGN_TICKET_SUCCESS,
  ASSIGN_TICKET_FAIL,
} from '../../types/ticketTypes';
import { openticketsURL } from '../../constants';
import {
  returnErrors
} from '../messages'

//open tickets
const getOpenTicketListStart = () => {
  return {
    type: GET_OPEN_TICKETS_START
  };
};

const getOpenTicketListSuccess = opentickets => {
  return {
    type: GET_OPEN_TICKETS_SUCCESS,
    opentickets
  };
};

const getOpenTicketListFail = error => {
  return {
    type: GET_OPEN_TICKETS_FAIL,
    error: error
  };
};

const getOpenTicketDetailStart = () => {
  return {
    type: GET_OPEN_TICKET_START
  };
};

const getOpenTicketDetailSuccess = openticket => {
  return {
    type: GET_OPEN_TICKET_SUCCESS,
    openticket
  };
};

const getOpenTicketDetailFail = error => {
  return {
    type: GET_OPEN_TICKET_FAIL,
    error: error
  };
};


const assignTicketStart = () => {
  return {
    type: ASSIGN_TICKET_START
  };
};


const assignTicketSuccess = ticket => {
  return {
    type: ASSIGN_TICKET_SUCCESS,
    ticket
  };
};


const assignTicketFail = error => {
  return {
    type: ASSIGN_TICKET_FAIL,
    error: error
  };
};


const reassignTicketStart = () => {
  return {
    type: REASSIGN_TICKET_START
  };
};


const reassignTicketSuccess = ticket => {
  return {
    type: REASSIGN_TICKET_SUCCESS,
    ticket
  };
};


const reassignTicketFail = error => {
  return {
    type: REASSIGN_TICKET_FAIL,
    error: error
  };
};



export const getOpenTickets = (token) => {
  return dispatch => {
      dispatch(getOpenTicketListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(openticketsURL, headers)
        .then(res => {
          const opentickets = res.data;
          dispatch(getOpenTicketListSuccess(opentickets));
          })
        .catch(err => {
          dispatch(getOpenTicketListStart(err));
        });
    };
};

export const getOpenTicket = (id, token) => {
  return dispatch => {
      dispatch(getOpenTicketDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${openticketsURL}${id}`, headers)
        .then(res => {
          const openticket = res.data;
          dispatch(getOpenTicketDetailSuccess(openticket));
          })
        .catch(err => {
          dispatch(getOpenTicketDetailFail(err));
        });
    };
};


export const assignTicket = (id, ticket, token) => {
  return dispatch => {
      dispatch(assignTicketStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${openticketsURL}${id}/assign/`, ticket, headers)
        .then(res => {
          dispatch(assignTicketSuccess(ticket));
        })
        .catch(err => {
          dispatch(assignTicketFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
      });
  };
};



export const reassignTicket = (id, ticket, token) => {
  return dispatch => {
      dispatch(reassignTicketStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${openticketsURL}${id}/reassign/`, ticket, headers)
        .then(res => {
          dispatch(reassignTicketSuccess(ticket));
        })
        .catch(err => {
          dispatch(reassignTicketFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
      });
  };
};
