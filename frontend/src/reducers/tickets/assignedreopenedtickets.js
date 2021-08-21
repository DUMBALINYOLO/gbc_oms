import {
  GET_ASSIGNED_REOPENED_TICKETS_START,
  GET_ASSIGNED_REOPENED_TICKETS_SUCCESS,
  GET_ASSIGNED_REOPENED_TICKETS_FAIL,
  GET_ASSIGNED_REOPENED_TICKET_START,
  GET_ASSIGNED_REOPENED_TICKET_SUCCESS,
  GET_ASSIGNED_REOPENED_TICKET_FAIL,
} from '../../types/ticketTypes';
import { updateObject } from "../../utility";

const initialState = {
  assignedreopenedtickets: [],
  assignedreopenedticket: {},
  loading: false,
  error: null,
}

const getAssignedReOpenedTicketListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAssignedReOpenedTicketListSuccess = (state, action) => {
  return updateObject(state, {
    assignedreopenedtickets: action.assignedreopenedtickets,
    error: null,
    loading: false
  });
};

const getAssignedReOpenedTicketListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAssignedReOpenedTicketDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAssignedReOpenedTicketDetailSuccess = (state, action) => {
  return updateObject(state, {
    assignedreopenedticket: action.assignedreopenedticket,
    error: null,
    loading: false
  });
};

const getAssignedReOpenedTicketDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function assignedreopenedtickets(state = initialState, action){
  switch(action.type){
    case GET_ASSIGNED_REOPENED_TICKETS_START:
      return getAssignedReOpenedTicketListStart(state, action);
    case GET_ASSIGNED_REOPENED_TICKETS_SUCCESS:
      return getAssignedReOpenedTicketListSuccess(state, action);
    case GET_ASSIGNED_REOPENED_TICKETS_FAIL:
      return getAssignedReOpenedTicketListFail(state, action);
    case GET_ASSIGNED_REOPENED_TICKET_START:
      return getAssignedReOpenedTicketDetailStart(state, action);
    case GET_ASSIGNED_REOPENED_TICKET_SUCCESS:
      return getAssignedReOpenedTicketDetailSuccess(state, action);
    case GET_ASSIGNED_REOPENED_TICKET_FAIL:
      return getAssignedReOpenedTicketDetailFail(state, action);
    default:
      return state;
  }
}
