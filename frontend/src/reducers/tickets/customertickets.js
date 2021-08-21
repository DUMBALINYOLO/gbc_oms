import {
    GET_CUSTOMER_CLOSED_TICKETS_START,
    GET_CUSTOMER_CLOSED_TICKETS_SUCCESS,
    GET_CUSTOMER_CLOSED_TICKETS_FAIL,
    GET_CUSTOMER_CLOSED_TICKET_START,
    GET_CUSTOMER_CLOSED_TICKET_SUCCESS,
    GET_CUSTOMER_CLOSED_TICKET_FAIL,
    GET_CUSTOMER_OPEN_TICKETS_START,
    GET_CUSTOMER_OPEN_TICKETS_SUCCESS,
    GET_CUSTOMER_OPEN_TICKETS_FAIL,
    CREATE_CUSTOMER_OPEN_TICKET_START,
    CREATE_CUSTOMER_OPEN_TICKET_SUCCESS,
    CREATE_CUSTOMER_OPEN_TICKET_FAIL,
    GET_CUSTOMER_OPEN_TICKET_START,
    GET_CUSTOMER_OPEN_TICKET_SUCCESS,
    GET_CUSTOMER_OPEN_TICKET_FAIL,
    EDIT_CUSTOMER_OPEN_TICKET,
    GET_CUSTOMER_REOPENED_TICKETS_START,
    GET_CUSTOMER_REOPENED_TICKETS_SUCCESS,
    GET_CUSTOMER_REOPENED_TICKETS_FAIL,
    GET_CUSTOMER_REOPENED_TICKET_START,
    GET_CUSTOMER_REOPENED_TICKET_SUCCESS,
    GET_CUSTOMER_REOPENED_TICKET_FAIL,
    CLOSE_TICKET_START,
    CLOSE_TICKET_SUCCESS,
    CLOSE_TICKET_FAIL,
    CLOSE_REOPENED_TICKET_START,
    CLOSE_REOPENED_TICKET_SUCCESS,
    CLOSE_REOPENED_TICKET_FAIL,
    REOPEN_TICKET_START,
    REOPEN_TICKET_SUCCESS,
    REOPEN_TICKET_FAIL,
  } from '../../types/ticketTypes';
  import { updateObject } from "../../utility";
  
  const initialState = {
    customerclosedtickets: [],
    customerclosedticket: {},
    customeropentickets: [],
    customeropenticket: {},
    customerreopenedtickets: [],
    customerreopenedticket: {},
    loading: false,
    error: null,
  }
  
  const getCustomerClosedTicketListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
  };
  
  const getCustomerClosedTicketListSuccess = (state, action) => {
    return updateObject(state, {
      customerclosedtickets: action.customerclosedtickets,
      error: null,
      loading: false
    });
  };
  
  const getCustomerClosedTicketListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
  };
  
  const getCustomerClosedTicketDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
  };
  
const getCustomerClosedTicketDetailSuccess = (state, action) => {
    return updateObject(state, {
      customerclosedticket: action.customerclosedticket,
      error: null,
      loading: false
    });
  };
  
const getCustomerClosedTicketDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};

const getCustomerOpenTicketListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
  };
  
  const getCustomerOpenTicketListSuccess = (state, action) => {
    return updateObject(state, {
      customeropentickets: action.customeropentickets,
      error: null,
      loading: false
    });
  };
  
  const getCustomerOpenTicketListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
  };
  
  const createCustomerOpenTicketStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
  };
  
  const createCustomerOpenTicketSuccess = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: false
    });
  };
  
  const createCustomerOpenTicketFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
  };
  
  const getCustomerOpenTicketDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
  };
  
  const getCustomerOpenTicketDetailSuccess = (state, action) => {
    return updateObject(state, {
      customeropenticket: action.customeropenticket,
      error: null,
      loading: false
    });
  };
  
const getCustomerOpenTicketDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const closeTicketStart = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};
  
  
const closeTicketSuccess = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
  };
  
const closeTicketFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};


const reopenTicketStart = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};
  
  
const reopenTicketSuccess = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
  };
  
const reopenTicketFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};


const closeReopenedTicketStart = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};
  
  
const closeReopenedTicketSuccess = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};
 
  
const closeReopenedTicketFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
      });
};



const getCustomerReOpenedTicketListStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getCustomerReOpenedTicketListSuccess = (state, action) => {
  return updateObject(state, {
    customerreopenedtickets: action.customerreopenedtickets,
    error: action.error,
    loading: false
  });
};

const getCustomerReOpenedTicketListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getCustomerReOpenedTicketDetailStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getCustomerReOpenedTicketDetailSuccess = (state, action) => {
  return updateObject(state, {
    customerreopenedticket: action.customerreopenedticket,
    error: action.error,
    loading: false
  });
};

const getCustomerReOpenedTicketDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};



  
export default function customerclosedtickets(state = initialState, action){
    switch(action.type){
        case GET_CUSTOMER_CLOSED_TICKETS_START:
            return getCustomerClosedTicketListStart(state, action);
        case GET_CUSTOMER_CLOSED_TICKETS_SUCCESS:
            return getCustomerClosedTicketListSuccess(state, action);
        case GET_CUSTOMER_CLOSED_TICKETS_FAIL:
            return getCustomerClosedTicketListFail(state, action);
        case GET_CUSTOMER_CLOSED_TICKET_START:
            return getCustomerClosedTicketDetailStart(state, action);
        case GET_CUSTOMER_CLOSED_TICKET_SUCCESS:
            return getCustomerClosedTicketDetailSuccess(state, action);
        case GET_CUSTOMER_CLOSED_TICKET_FAIL:
            return getCustomerClosedTicketDetailFail(state, action);
        case GET_CUSTOMER_OPEN_TICKETS_START:
            return getCustomerOpenTicketListStart(state, action);
        case GET_CUSTOMER_OPEN_TICKETS_SUCCESS:
            return getCustomerOpenTicketListSuccess(state, action);
        case GET_CUSTOMER_OPEN_TICKETS_FAIL:
            return getCustomerOpenTicketListFail(state, action);
        case GET_CUSTOMER_OPEN_TICKET_START:
            return getCustomerOpenTicketDetailStart(state, action);
        case GET_CUSTOMER_OPEN_TICKET_SUCCESS:
            return getCustomerOpenTicketDetailSuccess(state, action);
        case GET_CUSTOMER_OPEN_TICKET_FAIL:
            return getCustomerOpenTicketDetailFail(state, action);
        case CREATE_CUSTOMER_OPEN_TICKET_START:
            return createCustomerOpenTicketStart(state, action);
        case CREATE_CUSTOMER_OPEN_TICKET_SUCCESS:
            return createCustomerOpenTicketSuccess(state, action);
        case CREATE_CUSTOMER_OPEN_TICKET_FAIL:
            return createCustomerOpenTicketFail(state, action);
        case GET_CUSTOMER_REOPENED_TICKETS_START:
            return getCustomerReOpenedTicketListStart(state, action);
        case GET_CUSTOMER_REOPENED_TICKETS_SUCCESS:
            return getCustomerReOpenedTicketListSuccess(state, action);
        case GET_CUSTOMER_REOPENED_TICKETS_FAIL:
            return getCustomerReOpenedTicketListFail(state, action);
        case GET_CUSTOMER_REOPENED_TICKET_START:
            return getCustomerReOpenedTicketDetailStart(state, action);
        case GET_CUSTOMER_REOPENED_TICKET_SUCCESS:
            return getCustomerReOpenedTicketDetailSuccess(state, action);
        case GET_CUSTOMER_REOPENED_TICKET_FAIL:
            return getCustomerReOpenedTicketDetailFail(state, action);
        case CLOSE_TICKET_START:
            return closeTicketStart(state, action);
        case CLOSE_TICKET_SUCCESS:
            return closeTicketSuccess(state, action);
        case CLOSE_TICKET_FAIL:
            return closeTicketFail(state, action);
        case REOPEN_TICKET_START:
            return reopenTicketStart(state, action);
        case REOPEN_TICKET_SUCCESS:
            return reopenTicketSuccess(state, action);
        case REOPEN_TICKET_FAIL:
            return reopenTicketFail(state, action);
        case CLOSE_REOPENED_TICKET_START:
            return closeReopenedTicketStart(state, action);
        case CLOSE_REOPENED_TICKET_SUCCESS:
            return closeReopenedTicketSuccess(state, action);
        case CLOSE_REOPENED_TICKET_FAIL:
            return closeReopenedTicketFail(state, action);



        case EDIT_CUSTOMER_OPEN_TICKET:
            const arrayList = state.customeropentickets;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                customeropentickets: arrayList,
            };
      default:
        return state;
    }
}
  