import axios from 'axios';
import {
    EDIT_PENDING_ADMISSIONS,
    EDIT_REJECTED_ADMISSIONS,
    EDIT_ACCEPTED_ADMISSIONS,
    EDIT_MEETING_ADMISSIONS,
    PROCESS_ADMISSION,
    GET_ADMISSIONS_START,
    GET_ADMISSIONS_SUCCESS,
    GET_ADMISSIONS_FAIL,
    CREATE_ADMISSION_START,
    CREATE_ADMISSION_SUCCESS,
    CREATE_ADMISSION_FAIL,
    GET_PENDING_ADMISSIONS_START,
    GET_PENDING_ADMISSIONS_SUCCESS,
    GET_PENDING_ADMISSIONS_FAIL,
    GET_REJECTED_ADMISSIONS_START,
    GET_REJECTED_ADMISSIONS_SUCCESS,
    GET_REJECTED_ADMISSIONS_FAIL,
    GET_ACCEPTED_ADMISSIONS_START,
    GET_ACCEPTED_ADMISSIONS_SUCCESS,
    GET_ACCEPTED_ADMISSIONS_FAIL,
    GET_MEETING_ADMISSIONS_START,
    GET_MEETING_ADMISSIONS_SUCCESS,
    GET_MEETING_ADMISSIONS_FAIL,

} from '../types/admissionTypes';
import {
    studentadmissionsURL,
    pendingstudentadmissionsURL,
    rejectedstudentadmissionsURL,
    meetingstudentadmissionsURL,
    acceptedstudentadmissionsURL,
    applicationsURL,
} from '../constants';
import { createMessage, returnErrors } from './messages';

//admissions
const getAdmissionListStart = () => {
  return {
    type: GET_ADMISSIONS_START
  };
};

const getAdmissionListSuccess = admissions => {
  return {
    type: GET_ADMISSIONS_SUCCESS,
    admissions
  };
};

const getAdmissionListFail = error => {
  return {
    type: GET_ADMISSIONS_FAIL,
    error: error
  };
};

const createAdmissionStart = () => {
  return {
    type: CREATE_ADMISSION_START
  };
};


const createAdmissionSuccess = admission => {
  return {
    type: CREATE_ADMISSION_SUCCESS,
    admission
  };
};

const createAdmissionFail = error => {
  return {
    type: CREATE_ADMISSION_FAIL,
    error: error
  };
};

//pending admissions
const getPendingAdmissionListStart = () => {
  return {
    type: GET_PENDING_ADMISSIONS_START
  };
};

const getPendingAdmissionListSuccess = pendingadmissions => {
  return {
    type: GET_PENDING_ADMISSIONS_SUCCESS,
    pendingadmissions
  };
};

const getPendingAdmissionListFail = error => {
  return {
    type: GET_PENDING_ADMISSIONS_FAIL,
    error: error
  };
};

//rejected admissions
const getRejectedAdmissionListStart = () => {
  return {
    type: GET_REJECTED_ADMISSIONS_START
  };
};

const getRejectedAdmissionListSuccess = rejectedadmissions => {
  return {
    type: GET_REJECTED_ADMISSIONS_SUCCESS,
    rejectedadmissions
  };
};

const getRejectedAdmissionListFail = error => {
  return {
    type: GET_REJECTED_ADMISSIONS_FAIL,
    error: error
  };
};

//accepted admissions
const getAcceptedAdmissionListStart = () => {
  return {
    type: GET_ACCEPTED_ADMISSIONS_START
  };
};

const getAcceptedAdmissionListSuccess = acceptedadmissions => {
  return {
    type: GET_ACCEPTED_ADMISSIONS_SUCCESS,
    acceptedadmissions
  };
};

const getAcceptedAdmissionListFail = error => {
  return {
    type: GET_ACCEPTED_ADMISSIONS_FAIL,
    error: error
  };
};

//meeting admissions
const getMeetingAdmissionListStart = () => {
  return {
    type: GET_MEETING_ADMISSIONS_START
  };
};

const getMeetingAdmissionListSuccess = meetingadmissions => {
  return {
    type: GET_MEETING_ADMISSIONS_SUCCESS,
    meetingadmissions
  };
};

const getMeetingAdmissionListFail = error => {
  return {
    type: GET_MEETING_ADMISSIONS_FAIL,
    error: error
  };
};


export const getAdmissions = (query, token) => {
  return dispatch => {
      dispatch(getAdmissionListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${studentadmissionsURL}?q=${query}`, headers)
        .then(res => {
          const admissions = res.data;
          dispatch(getAdmissionListSuccess(admissions));
          })
        .catch(err => {
          dispatch(getAdmissionListStart(err));
        });
    };
};

export const addAdmission = (admission, token) => {
  return dispatch => {
      dispatch(createAdmissionStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(studentadmissionsURL, admission, headers)
        .then(res => {
          dispatch(createAdmissionSuccess(admission));
        })
        .catch(err => {
          dispatch(createAdmissionFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const getPendingAdmissions = (query, token) => {
  return dispatch => {
      dispatch(getPendingAdmissionListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${pendingstudentadmissionsURL}?q=${query}`, headers)
        .then(res => {
          const pendingadmissions = res.data;
          dispatch(getPendingAdmissionListSuccess(pendingadmissions));
          })
        .catch(err => {
          dispatch(getPendingAdmissionListStart(err));
        });
    };
};

export const getRejectedAdmissions = (query, token) => {
  return dispatch => {
      dispatch(getRejectedAdmissionListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${rejectedstudentadmissionsURL}?q=${query}`, headers)
        .then(res => {
          const rejectedadmissions = res.data;
          dispatch(getRejectedAdmissionListSuccess(rejectedadmissions));
          })
        .catch(err => {
          dispatch(getRejectedAdmissionListStart(err));
        });
    };
};

export const getMeetingAdmissions = (query, token) => {
  return dispatch => {
      dispatch(getMeetingAdmissionListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${meetingstudentadmissionsURL}?q=${query}`, headers)
        .then(res => {
          const meetingadmissions = res.data;
          dispatch(getMeetingAdmissionListSuccess(meetingadmissions));
          })
        .catch(err => {
          dispatch(getMeetingAdmissionListStart(err));
        });
    };
};

export const getAcceptedAdmissions = (query, token) => {
  return dispatch => {
      dispatch(getAcceptedAdmissionListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${acceptedstudentadmissionsURL}?q=${query}`, headers)
        .then(res => {
          const acceptedadmissions = res.data;
          dispatch(getAcceptedAdmissionListSuccess(acceptedadmissions));
          })
        .catch(err => {
          dispatch(getAcceptedAdmissionListStart(err));
        });
    };
};

export const processAdmission = (id, admission, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post(`${pendingstudentadmissionsURL}${id}/process_admission/`, admission, headers)
        .then(res => {
            dispatch({
                type: PROCESS_ADMISSION,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Edit
export const editPendingAdmission = (id, admission, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${applicationsURL}${id}/`, admission, headers)
        .then(res => {
            dispatch({
                type: EDIT_PENDING_ADMISSIONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}





export const editRejectedAdmission = (id, admission, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${rejectedstudentadmissionsURL}${id}/`, admission, headers)
        .then(res => {
            dispatch({
                type: EDIT_REJECTED_ADMISSIONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editMeetingAdmission = (id, admission, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${meetingstudentadmissionsURL}${id}/`, admission, headers)
        .then(res => {
            dispatch({
                type: EDIT_MEETING_ADMISSIONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editAcceptedAdmission = (id, admission, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${acceptedstudentadmissionsURL}${id}/`, admission, headers)
        .then(res => {
            dispatch({
                type: EDIT_ACCEPTED_ADMISSIONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
