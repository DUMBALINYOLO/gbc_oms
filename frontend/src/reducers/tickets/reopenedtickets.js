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
import { updateObject } from "../../utility";

const initialState = {
  reopenedtickets: [],
  reopenedticket: {},
  loading: false,
  error: null,
}

const getReOpenedTicketListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getReOpenedTicketListSuccess = (state, action) => {
  return updateObject(state, {
    reopenedtickets: action.reopenedtickets,
    error: null,
    loading: false
  });
};

const getReOpenedTicketListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getReOpenedTicketDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getReOpenedTicketDetailSuccess = (state, action) => {
  return updateObject(state, {
    reopenedticket: action.reopenedticket,
    error: null,
    loading: false
  });
};

const getReOpenedTicketDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const reassignReopenedTicketStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const reassignReopenedTicketSuccess = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const reassignReopenedTicketFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};



export default function reopenedtickets(state = initialState, action){
  switch(action.type){
    case GET_REOPENED_TICKETS_START:
      return getReOpenedTicketListStart(state, action);
    case GET_REOPENED_TICKETS_SUCCESS:
      return getReOpenedTicketListSuccess(state, action);
    case GET_REOPENED_TICKETS_FAIL:
      return getReOpenedTicketListFail(state, action);
    case GET_REOPENED_TICKET_START:
      return getReOpenedTicketDetailStart(state, action);
    case GET_REOPENED_TICKET_SUCCESS:
      return getReOpenedTicketDetailSuccess(state, action);
    case GET_REOPENED_TICKET_FAIL:
      return getReOpenedTicketDetailFail(state, action);
    case REASSIGN_REOPENED_TICKET_START:
      return reassignReopenedTicketStart(state, action);
    case REASSIGN_REOPENED_TICKET_SUCCESS:
      return reassignReopenedTicketSuccess(state, action);
    case REASSIGN_REOPENED_TICKET_FAIL:
      return reassignReopenedTicketFail(state, action);
    default:
      return state;
  }
}
