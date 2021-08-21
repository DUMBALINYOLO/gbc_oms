import axios from 'axios';
import {
  GET_ASSIGNED_REOPENED_TICKETS_START,
  GET_ASSIGNED_REOPENED_TICKETS_SUCCESS,
  GET_ASSIGNED_REOPENED_TICKETS_FAIL,
  GET_ASSIGNED_REOPENED_TICKET_START,
  GET_ASSIGNED_REOPENED_TICKET_SUCCESS,
  GET_ASSIGNED_REOPENED_TICKET_FAIL,
} from '../../types/ticketTypes';
import { assignedreopenedticketsURL } from '../../constants';

//assigned reopened tickets
const getAssignedReOpenedTicketListStart = () => {
  return {
    type: GET_ASSIGNED_REOPENED_TICKETS_START
  };
};

const getAssignedReOpenedTicketListSuccess = assignedreopenedtickets => {
  return {
    type: GET_ASSIGNED_REOPENED_TICKETS_SUCCESS,
    assignedreopenedtickets
  };
};

const getAssignedReOpenedTicketListFail = error => {
  return {
    type: GET_ASSIGNED_REOPENED_TICKETS_FAIL,
    error: error
  };
};

const getAssignedReOpenedTicketDetailStart = () => {
  return {
    type: GET_ASSIGNED_REOPENED_TICKET_START
  };
};

const getAssignedReOpenedTicketDetailSuccess = assignedreopenedticket => {
  return {
    type: GET_ASSIGNED_REOPENED_TICKET_SUCCESS,
    assignedreopenedticket
  };
};

const getAssignedReOpenedTicketDetailFail = error => {
  return {
    type: GET_ASSIGNED_REOPENED_TICKET_FAIL,
    error: error
  };
};

export const getAssignedReOpenedTickets = (token) => {
  return dispatch => {
      dispatch(getAssignedReOpenedTicketListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(assignedreopenedticketsURL, headers)
        .then(res => {
          const assignedreopenedtickets = res.data;
          dispatch(getAssignedReOpenedTicketListSuccess(assignedreopenedtickets));
          })
        .catch(err => {
          dispatch(getAssignedReOpenedTicketListStart(err));
        });
    };
};

export const getAssignedReOpenedTicket = (id, token) => {
  return dispatch => {
      dispatch(getAssignedReOpenedTicketDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${assignedreopenedticketsURL}${id}`, headers)
        .then(res => {
          const assignedreopenedticket = res.data;
          dispatch(getAssignedReOpenedTicketDetailSuccess(assignedreopenedticket));
          })
        .catch(err => {
          dispatch(getAssignedReOpenedTicketDetailFail(err));
        });
    };
};
