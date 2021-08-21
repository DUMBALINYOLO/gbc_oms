import {
  GET_ASSIGNED_CLOSED_TICKETS_START,
  GET_ASSIGNED_CLOSED_TICKETS_SUCCESS,
  GET_ASSIGNED_CLOSED_TICKETS_FAIL,
  GET_ASSIGNED_CLOSED_TICKET_START,
  GET_ASSIGNED_CLOSED_TICKET_SUCCESS,
  GET_ASSIGNED_CLOSED_TICKET_FAIL,
} from '../../types/ticketTypes';
import { updateObject } from "../../utility";

const initialState = {
  assignedclosedtickets: [],
  assignedclosedticket: {},
  loading: false,
  error: null,
}

const getAssignedClosedTicketListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAssignedClosedTicketListSuccess = (state, action) => {
  return updateObject(state, {
    assignedclosedtickets: action.assignedclosedtickets,
    error: null,
    loading: false
  });
};

const getAssignedClosedTicketListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAssignedClosedTicketDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAssignedClosedTicketDetailSuccess = (state, action) => {
  return updateObject(state, {
    assignedclosedticket: action.assignedclosedticket,
    error: null,
    loading: false
  });
};

const getAssignedClosedTicketDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function assignedclosedtickets(state = initialState, action){
  switch(action.type){
    case GET_ASSIGNED_CLOSED_TICKETS_START:
      return getAssignedClosedTicketListStart(state, action);
    case GET_ASSIGNED_CLOSED_TICKETS_SUCCESS:
      return getAssignedClosedTicketListSuccess(state, action);
    case GET_ASSIGNED_CLOSED_TICKETS_FAIL:
      return getAssignedClosedTicketListFail(state, action);
    case GET_ASSIGNED_CLOSED_TICKET_START:
      return getAssignedClosedTicketDetailStart(state, action);
    case GET_ASSIGNED_CLOSED_TICKET_SUCCESS:
      return getAssignedClosedTicketDetailSuccess(state, action);
    case GET_ASSIGNED_CLOSED_TICKET_FAIL:
      return getAssignedClosedTicketDetailFail(state, action);
    default:
      return state;
  }
}
