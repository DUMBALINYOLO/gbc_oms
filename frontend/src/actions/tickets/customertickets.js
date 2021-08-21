import axios from 'axios';
import {
    GET_CUSTOMER_CLOSED_TICKETS_START,
    GET_CUSTOMER_CLOSED_TICKETS_SUCCESS,
    GET_CUSTOMER_CLOSED_TICKETS_FAIL,
    GET_CUSTOMER_CLOSED_TICKET_START,
    GET_CUSTOMER_CLOSED_TICKET_SUCCESS,
    GET_CUSTOMER_CLOSED_TICKET_FAIL,
    GET_CUSTOMER_REOPENED_TICKETS_START,
    GET_CUSTOMER_REOPENED_TICKETS_SUCCESS,
    GET_CUSTOMER_REOPENED_TICKETS_FAIL,
    GET_CUSTOMER_REOPENED_TICKET_START,
    GET_CUSTOMER_REOPENED_TICKET_SUCCESS,
    GET_CUSTOMER_REOPENED_TICKET_FAIL,
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
import {
    customerclosedticketsURL,
    customerreopenedticketsURL,
    customeropenticketsURL,

} from '../../constants';
import {
  returnErrors
} from '../messages'



//customer closed tickets
const getCustomerClosedTicketListStart = () => {
  return {
    type: GET_CUSTOMER_CLOSED_TICKETS_START
  };
};

const getCustomerClosedTicketListSuccess = customerclosedtickets => {
  return {
    type: GET_CUSTOMER_CLOSED_TICKETS_SUCCESS,
    customerclosedtickets
  };
};

const getCustomerClosedTicketListFail = error => {
  return {
    type: GET_CUSTOMER_CLOSED_TICKETS_FAIL,
    error: error
  };
};

const getCustomerClosedTicketDetailStart = () => {
  return {
    type: GET_CUSTOMER_CLOSED_TICKET_START
  };
};

const getCustomerClosedTicketDetailSuccess = customerclosedticket => {
  return {
    type: GET_CUSTOMER_CLOSED_TICKET_SUCCESS,
    customerclosedticket
  };
};

const getCustomerClosedTicketDetailFail = error => {
  return {
    type: GET_CUSTOMER_CLOSED_TICKET_FAIL,
    error: error
  };
};

const getCustomerReOpenedTicketListStart = () => {
    return {
      type: GET_CUSTOMER_REOPENED_TICKETS_START
    };
  };

  const getCustomerReOpenedTicketListSuccess = customerreopenedtickets => {
    return {
      type: GET_CUSTOMER_REOPENED_TICKETS_SUCCESS,
      customerreopenedtickets
    };
  };

  const getCustomerReOpenedTicketListFail = error => {
    return {
      type: GET_CUSTOMER_REOPENED_TICKETS_FAIL,
      error: error
    };
  };

  const getCustomerReOpenedTicketDetailStart = () => {
    return {
      type: GET_CUSTOMER_REOPENED_TICKET_START
    };
  };

  const getCustomerReOpenedTicketDetailSuccess = customerreopenedticket => {
    return {
      type: GET_CUSTOMER_REOPENED_TICKET_SUCCESS,
      customerreopenedticket
    };
  };

  const getCustomerReOpenedTicketDetailFail = error => {
    return {
      type: GET_CUSTOMER_REOPENED_TICKET_FAIL,
      error: error
    };
  };

  const getCustomerOpenTicketListStart = () => {
    return {
      type: GET_CUSTOMER_OPEN_TICKETS_START
    };
  };

  const getCustomerOpenTicketListSuccess = customeropentickets => {
    return {
      type: GET_CUSTOMER_OPEN_TICKETS_SUCCESS,
      customeropentickets
    };
  };

  const getCustomerOpenTicketListFail = error => {
    return {
      type: GET_CUSTOMER_OPEN_TICKETS_FAIL,
      error: error
    };
  };

  const createCustomerOpenTicketStart = () => {
    return {
      type: CREATE_CUSTOMER_OPEN_TICKET_START
    };
  };


  const createCustomerOpenTicketSuccess = customeropenticket => {
    return {
      type: CREATE_CUSTOMER_OPEN_TICKET_SUCCESS,
      customeropenticket
    };
  };

  const createCustomerOpenTicketFail = error => {
    return {
      type: CREATE_CUSTOMER_OPEN_TICKET_FAIL,
      error: error
    };
  };

  const getCustomerOpenTicketDetailStart = () => {
    return {
      type: GET_CUSTOMER_OPEN_TICKET_START
    };
  };

  const getCustomerOpenTicketDetailSuccess = customeropenticket => {
    return {
      type: GET_CUSTOMER_OPEN_TICKET_SUCCESS,
      customeropenticket
    };
  };

  const getCustomerOpenTicketDetailFail = error => {
    return {
      type: GET_CUSTOMER_OPEN_TICKET_FAIL,
      error: error
    };
  };


const closeTicketStart = () => {
    return {
      type: CLOSE_TICKET_START
    };
};


const closeTicketSuccess = ticket => {
    return {
      type: CLOSE_TICKET_SUCCESS,
      ticket
    };
  };

const closeTicketFail = error => {
    return {
      type: CLOSE_TICKET_FAIL,
      error: error
    };
};


const reopenTicketStart = () => {
    return {
      type: REOPEN_TICKET_START
    };
};


const reopenTicketSuccess = ticket => {
    return {
      type: REOPEN_TICKET_SUCCESS,
      ticket
    };
  };

const reopenTicketFail = error => {
    return {
      type: REOPEN_TICKET_FAIL,
      error: error
    };
};


const closeReopenedTicketStart = () => {
    return {
      type: CLOSE_REOPENED_TICKET_START
    };
};


const closeReopenedTicketSuccess = ticket => {
    return {
      type: CLOSE_REOPENED_TICKET_SUCCESS,
      ticket
    };
};


const closeReopenedTicketFail = error => {
    return {
      type: CLOSE_REOPENED_TICKET_FAIL,
      error: error
    };
};








  export const getCustomerReOpenedTickets = (token) => {
    return dispatch => {
        dispatch(getCustomerReOpenedTicketListStart());
        let headers = axios.defaults.headers = {
          "Content-Type": "application/json",

          Authorization: `Token ${token}`,
        };
        axios
          .get(customerreopenedticketsURL, headers)
          .then(res => {
            const customerreopenedtickets = res.data;
            dispatch(getCustomerReOpenedTicketListSuccess(customerreopenedtickets));
            })
          .catch(err => {
            dispatch(getCustomerReOpenedTicketListStart(err));
          });
      };
  };


export const getCustomerReOpenedTicket = (id, token) => {
    return dispatch => {
        dispatch(getCustomerReOpenedTicketDetailStart());
        let headers = axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        };
        axios
          .get(`${customerreopenedticketsURL}${id}`, headers)
          .then(res => {
            const customerreopenedticket = res.data;
            dispatch(getCustomerReOpenedTicketDetailSuccess(customerreopenedticket));
            })
          .catch(err => {
            dispatch(getCustomerReOpenedTicketDetailFail(err));
          });
      };
};


export const getCustomerClosedTickets = (token) => {
  return dispatch => {
      dispatch(getCustomerClosedTicketListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(customerclosedticketsURL, headers)
        .then(res => {
          const customerclosedtickets = res.data;
          dispatch(getCustomerClosedTicketListSuccess(customerclosedtickets));
          })
        .catch(err => {
          dispatch(getCustomerClosedTicketListStart(err));
        });
    };
};

export const getCustomerClosedTicket = (id, token) => {
  return dispatch => {
      dispatch(getCustomerClosedTicketDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${customerclosedticketsURL}${id}`, headers)
        .then(res => {
          const customerclosedticket = res.data;
          dispatch(getCustomerClosedTicketDetailSuccess(customerclosedticket));
          })
        .catch(err => {
          dispatch(getCustomerClosedTicketDetailFail(err));
        });
    };
};



export const getCustomerOpenTickets = (token) => {
    return dispatch => {
        dispatch(getCustomerOpenTicketListStart());
        let headers = axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        };
        axios
          .get(customeropenticketsURL, headers)
          .then(res => {
            const customeropentickets = res.data;
            dispatch(getCustomerOpenTicketListSuccess(customeropentickets));
            })
          .catch(err => {
            dispatch(getCustomerOpenTicketListStart(err));
          });
      };
  };

  export const getCustomerOpenTicket = (id, token) => {
    return dispatch => {
        dispatch(getCustomerOpenTicketDetailStart());
        let headers = axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        };
        axios
          .get(`${customeropenticketsURL}${id}`, headers)
          .then(res => {
            const customeropenticket = res.data;
            dispatch(getCustomerOpenTicketDetailSuccess(customeropenticket));
            })
          .catch(err => {
            dispatch(getCustomerOpenTicketDetailFail(err));
          });
      };
  };

  export const addCustomerOpenTicket = (customeropenticket, token) => {
    return dispatch => {
        dispatch(createCustomerOpenTicketStart());
        let headers = axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        };
        axios
          .post(customeropenticketsURL, customeropenticket, headers)
          .then(res => {
            dispatch(createCustomerOpenTicketSuccess(customeropenticket));
          })
          .catch(err => {
            dispatch(createCustomerOpenTicketFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
          });
      };
  };


export const editCustomerOpenTicket = (id, customeropenticket, token) => dispatch => {
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
      JSON.stringify(id, null, 3)
      axios.patch(`${customeropenticketsURL}${id}/`, customeropenticket, headers)
          .then(res => {
              dispatch({
                  type: EDIT_CUSTOMER_OPEN_TICKET,
                  payload: res.data
              });
          }).catch(err => console.log(err))
}


export const closeTicket = (id, ticket, token) => {
    return dispatch => {
        dispatch(closeTicketStart());
        let headers = axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        };
        axios
          .post(`${customeropenticketsURL}${id}/close/`, ticket, headers)
          .then(res => {
            dispatch(closeTicketSuccess(ticket));
          })
          .catch(err => {
            dispatch(closeTicketFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};



export const reopenTicket = (id, ticket, token) => {
    return dispatch => {
        dispatch(reopenTicketStart());
        let headers = axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        };
        axios
          .post(`${customerclosedticketsURL}${id}/reopen/`, ticket, headers)
          .then(res => {
            dispatch(reopenTicketSuccess(ticket));
          })
          .catch(err => {
            dispatch(reopenTicketFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};



export const closeReopenedTicket = (id, ticket, token) => {
    return dispatch => {
        dispatch(closeReopenedTicketStart());
        let headers = axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        };
        axios
          .post(`${customerreopenedticketsURL}${id}/close/`, ticket, headers)
          .then(res => {
            dispatch(closeReopenedTicketSuccess(ticket));
          })
          .catch(err => {
            dispatch(closeReopenedTicketFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};
