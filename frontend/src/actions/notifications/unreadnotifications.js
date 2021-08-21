import axios from 'axios';
import {
  GET_UNREAD_NOTIFICATIONS_START,
  GET_UNREAD_NOTIFICATIONS_SUCCESS,
  GET_UNREAD_NOTIFICATIONS_FAIL,
  GET_UNREAD_NOTIFICATION_START,
  GET_UNREAD_NOTIFICATION_SUCCESS,
  GET_UNREAD_NOTIFICATION_FAIL,
  READ_NOTIFICATION_START,
  READ_NOTIFICATION_SUCCESS,
  READ_NOTIFICATION_FAIL,

} from '../../types/notificationTypes';
import { unreadnotificationsURL } from '../../constants';

//unread notifications
const getUnReadNotificationListStart = () => {
  return {
    type: GET_UNREAD_NOTIFICATIONS_START
  };
};

const getUnReadNotificationListSuccess = unreadnotifications => {
  return {
    type: GET_UNREAD_NOTIFICATIONS_SUCCESS,
    unreadnotifications
  };
};

const getUnReadNotificationListFail = error => {
  return {
    type: GET_UNREAD_NOTIFICATIONS_FAIL,
    error: error
  };
};

const getUnReadNotificationDetailStart = () => {
  return {
    type: GET_UNREAD_NOTIFICATION_START
  };
};

const getUnReadNotificationDetailSuccess = unreadnotification => {
  return {
    type: GET_UNREAD_NOTIFICATION_SUCCESS,
    unreadnotification
  };
};

const getUnReadNotificationDetailFail = error => {
  return {
    type: GET_UNREAD_NOTIFICATION_FAIL,
    error: error
  };
};


const readNotificationStart = () => {
  return {
    type: READ_NOTIFICATION_START
  };
};


const readNotificationSuccess = notification => {
  return {
    type: READ_NOTIFICATION_SUCCESS,
    notification
  };
};


const readNotificationFail = error => {
  return {
    type: READ_NOTIFICATION_FAIL,
    error: error
  };
};

export const getUnReadNotifications = (token) => {
  return dispatch => {
      dispatch(getUnReadNotificationListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(unreadnotificationsURL, headers)
        .then(res => {
          const unreadnotifications = res.data;
          dispatch(getUnReadNotificationListSuccess(unreadnotifications));
          })
        .catch(err => {
          dispatch(getUnReadNotificationListStart(err));
        });
    };
};

export const getUnReadNotification = (id, token) => {
  return dispatch => {
      dispatch(getUnReadNotificationDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${unreadnotificationsURL}${id}`, headers)
        .then(res => {
          const unreadnotification = res.data;
          dispatch(getUnReadNotificationDetailSuccess(unreadnotification));
          })
        .catch(err => {
          dispatch(getUnReadNotificationDetailFail(err));
        });
    };
};


export const readNotification = (id, notification, token) => {
  return dispatch => {
      dispatch(readNotificationStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(`${unreadnotificationsURL}${id}/read/`, notification, headers)
        .then(res => {
          dispatch(readNotificationSuccess(notification));
        })
        .catch(err => {
          dispatch(readNotificationFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
      });
  };
};
