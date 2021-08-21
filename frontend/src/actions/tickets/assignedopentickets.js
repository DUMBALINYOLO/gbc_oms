import axios from 'axios';
import {
  GET_ASSIGNED_OPEN_TICKETS_START,
  GET_ASSIGNED_OPEN_TICKETS_SUCCESS,
  GET_ASSIGNED_OPEN_TICKETS_FAIL,
  GET_ASSIGNED_OPEN_TICKET_START,
  GET_ASSIGNED_OPEN_TICKET_SUCCESS,
  GET_ASSIGNED_OPEN_TICKET_FAIL,
} from '../../types/ticketTypes';
import { assignedopenticketsURL } from '../../constants';

//assigned open tickets
const getAssignedOpenTicketListStart = () => {
  return {
    type: GET_ASSIGNED_OPEN_TICKETS_START
  };
};

const getAssignedOpenTicketListSuccess = assignedopentickets => {
  return {
    type: GET_ASSIGNED_OPEN_TICKETS_SUCCESS,
    assignedopentickets
  };
};

const getAssignedOpenTicketListFail = error => {
  return {
    type: GET_ASSIGNED_OPEN_TICKETS_FAIL,
    error: error
  };
};

const getAssignedOpenTicketDetailStart = () => {
  return {
    type: GET_ASSIGNED_OPEN_TICKET_START
  };
};

const getAssignedOpenTicketDetailSuccess = assignedopenticket => {
  return {
    type: GET_ASSIGNED_OPEN_TICKET_SUCCESS,
    assignedopenticket
  };
};

const getAssignedOpenTicketDetailFail = error => {
  return {
    type: GET_ASSIGNED_OPEN_TICKET_FAIL,
    error: error
  };
};

export const getAssignedOpenTickets = (token) => {
  return dispatch => {
      dispatch(getAssignedOpenTicketListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(assignedopenticketsURL, headers)
        .then(res => {
          const assignedopentickets = res.data;
          dispatch(getAssignedOpenTicketListSuccess(assignedopentickets));
          })
        .catch(err => {
          dispatch(getAssignedOpenTicketListStart(err));
        });
    };
};

export const getAssignedOpenTicket = (id, token) => {
  return dispatch => {
      dispatch(getAssignedOpenTicketDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${assignedopenticketsURL}${id}`, headers)
        .then(res => {
          const assignedopenticket = res.data;
          dispatch(getAssignedOpenTicketDetailSuccess(assignedopenticket));
          })
        .catch(err => {
          dispatch(getAssignedOpenTicketDetailFail(err));
        });
    };
};
