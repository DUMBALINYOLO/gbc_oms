import {
  GET_ASSIGNED_OPEN_TICKETS_START,
  GET_ASSIGNED_OPEN_TICKETS_SUCCESS,
  GET_ASSIGNED_OPEN_TICKETS_FAIL,
  GET_ASSIGNED_OPEN_TICKET_START,
  GET_ASSIGNED_OPEN_TICKET_SUCCESS,
  GET_ASSIGNED_OPEN_TICKET_FAIL,
} from '../../types/ticketTypes';
import { updateObject } from "../../utility";

const initialState = {
  assignedopentickets: [],
  assignedopenticket: {},
  loading: false,
  error: null,
}

const getAssignedOpenTicketListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAssignedOpenTicketListSuccess = (state, action) => {
  return updateObject(state, {
    assignedopentickets: action.assignedopentickets,
    error: null,
    loading: false
  });
};

const getAssignedOpenTicketListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAssignedOpenTicketDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAssignedOpenTicketDetailSuccess = (state, action) => {
  return updateObject(state, {
    assignedopenticket: action.assignedopenticket,
    error: null,
    loading: false
  });
};

const getAssignedOpenTicketDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function assignedopentickets(state = initialState, action){
  switch(action.type){
    case GET_ASSIGNED_OPEN_TICKETS_START:
      return getAssignedOpenTicketListStart(state, action);
    case GET_ASSIGNED_OPEN_TICKETS_SUCCESS:
      return getAssignedOpenTicketListSuccess(state, action);
    case GET_ASSIGNED_OPEN_TICKETS_FAIL:
      return getAssignedOpenTicketListFail(state, action);
    case GET_ASSIGNED_OPEN_TICKET_START:
      return getAssignedOpenTicketDetailStart(state, action);
    case GET_ASSIGNED_OPEN_TICKET_SUCCESS:
      return getAssignedOpenTicketDetailSuccess(state, action);
    case GET_ASSIGNED_OPEN_TICKET_FAIL:
      return getAssignedOpenTicketDetailFail(state, action);
    default:
      return state;
  }
}
