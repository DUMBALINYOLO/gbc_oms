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
import { updateObject } from "../../utility";

const initialState = {
  comments: [],
  comment: {},
  loading: false,
  error: null,
}

const getCommentListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getCommentListSuccess = (state, action) => {
  return updateObject(state, {
    comments: action.comments,
    error: null,
    loading: false
  });
};

const getCommentListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createCommentStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createCommentSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createCommentFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getCommentDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getCommentDetailSuccess = (state, action) => {
  return updateObject(state, {
    comment: action.comment,
    error: null,
    loading: false
  });
};

const getCommentDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function comments(state = initialState, action){
  switch(action.type){
    case GET_COMMENTS_START:
      return getCommentListStart(state, action);
    case GET_COMMENTS_SUCCESS:
      return getCommentListSuccess(state, action);
    case GET_COMMENTS_FAIL:
      return getCommentListFail(state, action);
    case GET_COMMENT_START:
      return getCommentDetailStart(state, action);
    case GET_COMMENT_SUCCESS:
      return getCommentDetailSuccess(state, action);
    case GET_COMMENT_FAIL:
      return getCommentDetailFail(state, action);
    case CREATE_COMMENT_START:
      return createCommentStart(state, action);
    case CREATE_COMMENT_SUCCESS:
      return createCommentSuccess(state, action);
    case CREATE_COMMENT_FAIL:
      return createCommentFail(state, action);
    case EDIT_COMMENT:
      const arrayList = state.comments;
      arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
          ...state,
          comments: arrayList,
      };
    default:
      return state;
  }
}
