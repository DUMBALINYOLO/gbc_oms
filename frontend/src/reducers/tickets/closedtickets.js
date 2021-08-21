import {
  GET_CLOSED_TICKETS_START,
  GET_CLOSED_TICKETS_SUCCESS,
  GET_CLOSED_TICKETS_FAIL,
  GET_CLOSED_TICKET_START,
  GET_CLOSED_TICKET_SUCCESS,
  GET_CLOSED_TICKET_FAIL,
} from '../../types/ticketTypes';
import { updateObject } from "../../utility";

const initialState = {
  closedtickets: [],
  closedticket: {},
  loading: false,
  error: null,
}

const getClosedTicketListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getClosedTicketListSuccess = (state, action) => {
  return updateObject(state, {
    closedtickets: action.closedtickets,
    error: null,
    loading: false
  });
};

const getClosedTicketListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getClosedTicketDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getClosedTicketDetailSuccess = (state, action) => {
  return updateObject(state, {
    closedticket: action.closedticket,
    error: null,
    loading: false
  });
};

const getClosedTicketDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function closedtickets(state = initialState, action){
  switch(action.type){
    case GET_CLOSED_TICKETS_START:
      return getClosedTicketListStart(state, action);
    case GET_CLOSED_TICKETS_SUCCESS:
      return getClosedTicketListSuccess(state, action);
    case GET_CLOSED_TICKETS_FAIL:
      return getClosedTicketListFail(state, action);
    case GET_CLOSED_TICKET_START:
      return getClosedTicketDetailStart(state, action);
    case GET_CLOSED_TICKET_SUCCESS:
      return getClosedTicketDetailSuccess(state, action);
    case GET_CLOSED_TICKET_FAIL:
      return getClosedTicketDetailFail(state, action);
    default:
      return state;
  }
}
