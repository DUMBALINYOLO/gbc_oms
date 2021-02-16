import {
GET_COURSE_ADVERTS,
GET_COURSE_ADVERT,
ADD_COURSE_ADVERT,
EDIT_COURSE_ADVERT,
} from '../types/advertTypes'



const initialState = {
    courseadverts: [],
    loading: false
}

export default function adverts(state = initialState, action){
    switch(action.type){
        case GET_COURSE_ADVERTS:
            return {
                ...state,
                courseadverts: action.payload
            };
        case ADD_COURSE_ADVERT:
            return {
                ...state,
                advert: [...state.courseadverts, action.payload]
            }
        case EDIT_COURSE_ADVERT:
            const arrayList = state.courseadverts;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                courseadverts: arrayList,
            };
        default:
            return state;
    }
}
