import axios from 'axios';
import {
  GET_READ_NOTIFICATIONS_START,
  GET_READ_NOTIFICATIONS_SUCCESS,
  GET_READ_NOTIFICATIONS_FAIL,
  GET_READ_NOTIFICATION_START,
  GET_READ_NOTIFICATION_SUCCESS,
  GET_READ_NOTIFICATION_FAIL,
} from '../../types/notificationTypes';
import { readnotificationsURL } from '../../constants';

//read notifications
const getReadNotificationListStart = () => {
  return {
    type: GET_READ_NOTIFICATIONS_START
  };
};

const getReadNotificationListSuccess = readnotifications => {
  return {
    type: GET_READ_NOTIFICATIONS_SUCCESS,
    readnotifications
  };
};

const getReadNotificationListFail = error => {
  return {
    type: GET_READ_NOTIFICATIONS_FAIL,
    error: error
  };
};

const getReadNotificationDetailStart = () => {
  return {
    type: GET_READ_NOTIFICATION_START
  };
};

const getReadNotificationDetailSuccess = readnotification => {
  return {
    type: GET_READ_NOTIFICATION_SUCCESS,
    readnotification
  };
};

const getReadNotificationDetailFail = error => {
  return {
    type: GET_READ_NOTIFICATION_FAIL,
    error: error
  };
};

export const getReadNotifications = (token) => {
  return dispatch => {
      dispatch(getReadNotificationListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(readnotificationsURL, headers)
        .then(res => {
          const readnotifications = res.data;
          dispatch(getReadNotificationListSuccess(readnotifications));
          })
        .catch(err => {
          dispatch(getReadNotificationListStart(err));
        });
    };
};

export const getReadNotification = (id, token) => {
  return dispatch => {
      dispatch(getReadNotificationDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${readnotificationsURL}${id}`, headers)
        .then(res => {
          const readnotification = res.data;
          dispatch(getReadNotificationDetailSuccess(readnotification));
          })
        .catch(err => {
          dispatch(getReadNotificationDetailFail(err));
        });
    };
};
