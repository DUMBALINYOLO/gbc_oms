import axios from 'axios';
import {
  GET_ASSIGNED_CLOSED_TICKETS_START,
  GET_ASSIGNED_CLOSED_TICKETS_SUCCESS,
  GET_ASSIGNED_CLOSED_TICKETS_FAIL,
  GET_ASSIGNED_CLOSED_TICKET_START,
  GET_ASSIGNED_CLOSED_TICKET_SUCCESS,
  GET_ASSIGNED_CLOSED_TICKET_FAIL,
} from '../../types/ticketTypes';
import { assignedclosedticketsURL } from '../../constants';

//assigned closed tickets
const getAssignedClosedTicketListStart = () => {
  return {
    type: GET_ASSIGNED_CLOSED_TICKETS_START
  };
};

const getAssignedClosedTicketListSuccess = assignedclosedtickets => {
  return {
    type: GET_ASSIGNED_CLOSED_TICKETS_SUCCESS,
    assignedclosedtickets
  };
};

const getAssignedClosedTicketListFail = error => {
  return {
    type: GET_ASSIGNED_CLOSED_TICKETS_FAIL,
    error: error
  };
};

const getAssignedClosedTicketDetailStart = () => {
  return {
    type: GET_ASSIGNED_CLOSED_TICKET_START
  };
};

const getAssignedClosedTicketDetailSuccess = assignedclosedticket => {
  return {
    type: GET_ASSIGNED_CLOSED_TICKET_SUCCESS,
    assignedclosedticket
  };
};

const getAssignedClosedTicketDetailFail = error => {
  return {
    type: GET_ASSIGNED_CLOSED_TICKET_FAIL,
    error: error
  };
};

export const getAssignedClosedTickets = (token) => {
  return dispatch => {
      dispatch(getAssignedClosedTicketListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(assignedclosedticketsURL, headers)
        .then(res => {
          const assignedclosedtickets = res.data;
          dispatch(getAssignedClosedTicketListSuccess(assignedclosedtickets));
          })
        .catch(err => {
          dispatch(getAssignedClosedTicketListStart(err));
        });
    };
};

export const getAssignedClosedTicket = (id, token) => {
  return dispatch => {
      dispatch(getAssignedClosedTicketDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${assignedclosedticketsURL}${id}`, headers)
        .then(res => {
          const assignedclosedticket = res.data;
          dispatch(getAssignedClosedTicketDetailSuccess(assignedclosedticket));
          })
        .catch(err => {
          dispatch(getAssignedClosedTicketDetailFail(err));
        });
    };
};
