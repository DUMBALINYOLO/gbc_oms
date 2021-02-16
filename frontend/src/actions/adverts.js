import axios from 'axios';
import {
GET_COURSE_ADVERTS,
GET_COURSE_ADVERT,
ADD_COURSE_ADVERT,
EDIT_COURSE_ADVERT,
} from '../types/advertTypes'
import {courseadvertsURL} from '../constants';



export const getCourseAdverts = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/adverts/course-adverts/', headers)
        .then(res => {
            dispatch({
                type: GET_COURSE_ADVERTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}




export const addCourseAdvert = (advert, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.post('http://127.0.0.1:8000/api/adverts/course-adverts/', advert, headers)
        .then(res => {
            dispatch({
                type: ADD_COURSE_ADVERT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}




export const editCourseAdvert = (id, advert, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${`http://127.0.0.1:8000/api/adverts/course-adverts/`}${id}/`, advert, headers)
        .then(res => {
            dispatch({
                type: EDIT_COURSE_ADVERT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
