import axios from 'axios';
import {
  GET_COMMENTS_START,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  CREATE_COMMENT_START,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
  GET_COMMENT_START,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAIL,
  EDIT_COMMENT
} from '../../types/ticketTypes';
import { commentsURL } from '../../constants';
import { returnErrors } from '../messages';

//comments
const getCommentListStart = () => {
  return {
    type: GET_COMMENTS_START
  };
};

const getCommentListSuccess = comments => {
  return {
    type: GET_COMMENTS_SUCCESS,
    comments
  };
};

const getCommentListFail = error => {
  return {
    type: GET_COMMENTS_FAIL,
    error: error
  };
};

const createCommentStart = () => {
  return {
    type: CREATE_COMMENT_START
  };
};


const createCommentSuccess = comment => {
  return {
    type: CREATE_COMMENT_SUCCESS,
    comment
  };
};

const createCommentFail = error => {
  return {
    type: CREATE_COMMENT_FAIL,
    error: error
  };
};

const getCommentDetailStart = () => {
  return {
    type: GET_COMMENT_START
  };
};

const getCommentDetailSuccess = comment => {
  return {
    type: GET_COMMENT_SUCCESS,
    comment
  };
};

const getCommentDetailFail = error => {
  return {
    type: GET_COMMENT_FAIL,
    error: error
  };
};

export const getComments = (id, token) => {
  return dispatch => {
      dispatch(getCommentListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };

      axios
        .get(`${commentsURL}?id=${id}`, headers)
        .then(res => {
          const comments = res.data;
          dispatch(getCommentListSuccess(comments));
          })
        .catch(err => {
          dispatch(getCommentListStart(err));
        });
    };
};


export const getComment = (id, token) => {
  return dispatch => {
      dispatch(getCommentDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${commentsURL}${id}`, headers)
        .then(res => {
          const comment = res.data;
          dispatch(getCommentDetailSuccess(comment));
          })
        .catch(err => {
          dispatch(getCommentDetailFail(err));
        });
    };
};

export const addComment = (comment, token) => {
  return dispatch => {
      dispatch(createCommentStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(commentsURL, comment, headers)
        .then(res => {
          dispatch(createCommentSuccess(comment));
        })
        .catch(err => {
          dispatch(createCommentFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editComment = (id, comment, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${commentsURL}${id}/`, comment, headers)
        .then(res => {
            dispatch({
                type: EDIT_COMMENT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
