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
import { updateObject } from "../../utility";

const initialState = {
  opentickets: [],
  openticket: {},
  loading: false,
  error: null,
}

const getOpenTicketListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getOpenTicketListSuccess = (state, action) => {
  return updateObject(state, {
    opentickets: action.opentickets,
    error: null,
    loading: false
  });
};

const getOpenTicketListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getOpenTicketDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getOpenTicketDetailSuccess = (state, action) => {
  return updateObject(state, {
    openticket: action.openticket,
    error: null,
    loading: false
  });
};

const getOpenTicketDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const assignTicketStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const assignTicketSuccess = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const assignTicketFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const reassignTicketStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const reassignTicketSuccess = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const reassignTicketFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function opentickets(state = initialState, action){
  switch(action.type){
    case GET_OPEN_TICKETS_START:
      return getOpenTicketListStart(state, action);
    case GET_OPEN_TICKETS_SUCCESS:
      return getOpenTicketListSuccess(state, action);
    case GET_OPEN_TICKETS_FAIL:
      return getOpenTicketListFail(state, action);
    case GET_OPEN_TICKET_START:
      return getOpenTicketDetailStart(state, action);
    case GET_OPEN_TICKET_SUCCESS:
      return getOpenTicketDetailSuccess(state, action);
    case GET_OPEN_TICKET_FAIL:
      return getOpenTicketDetailFail(state, action);
    case ASSIGN_TICKET_START:
      return assignTicketStart(state, action);
    case ASSIGN_TICKET_SUCCESS:
      return assignTicketSuccess(state, action);
    case ASSIGN_TICKET_FAIL:
      return assignTicketFail(state, action);
    case REASSIGN_TICKET_START:
      return reassignTicketStart(state, action);
    case REASSIGN_TICKET_SUCCESS:
      return reassignTicketSuccess(state, action);
    case REASSIGN_TICKET_FAIL:
      return reassignTicketFail(state, action);
    default:
      return state;
  }
}
