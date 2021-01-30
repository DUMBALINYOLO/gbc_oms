import {
    GET_ADMIN_STUDENTS, 
    GET_ADMIN_STUDENT,
    GET_ADMIN_BURSARS,
    GET_ADMIN_BURSAR, 
    GET_ADMIN_PARENTS,
    GET_ADMIN_PARENT,
    GET_ADMIN_PRINCIPALS, 
    GET_ADMIN_PRINCIPAL,
    GET_ADMIN_TEACHERS,
    GET_ADMIN_TEACHER, 
    CREATE_TEACHER,
    CREATE_BURSAR,
    CREATE_PRINCIPAL,
    GET_BURSAR_PARENTS,
    GET_BURSAR_PARENT,
    GET_BURSAR_STUDENTS,
    GET_BURSAR_STUDENT,
    GET_BURSAR_PROFILES,
    GET_PRINCIPAL_PROFILES,
    GET_TEACHER_PROFILES,
    GET_PARENT_PROFILES,
    GET_STUDENT_PROFILES,

} from '../types/peopleTypes';

const initialState = {
    adminstudents: [],
    adminstudent: {},
    bursarstudents: [],
    bursarstudent: {},
    adminparents: [],
    adminparent: {},
    bursarparents: [],
    bursarparent: {},
    adminprincipals: [],
    adminprincipal: {},
    adminbursars: [],
    adminbursar: {},
    adminteachers: [],
    adminteacher: {},
    bursarprofiles: [],
    principalprofiles: [],
    teacherprofiles: [],
    parentprofiles: [],
    studentprofiles: [],

}

export default function a(state = initialState, action){
    switch(action.type){
        case GET_STUDENT_PROFILES:
            return {
                ...state,
                studentprofiles: action.payload
            };
        case GET_PARENT_PROFILES:
            return {
                ...state,
                parentprofiles: action.payload
            };
        case GET_TEACHER_PROFILES:
            return {
                ...state,
                teacherprofiles: action.payload
            };
        case GET_BURSAR_PROFILES:
            return {
                ...state,
                bursarprofiles: action.payload
            };
        case GET_PRINCIPAL_PROFILES:
            return {
                ...state,
                principalprofiles: action.payload
            };
        case GET_ADMIN_STUDENTS:
            return {
                ...state,
                adminstudents: action.payload
            };
        case GET_ADMIN_STUDENT:
            return {
                ...state,
                adminstudent: action.payload
            };
        case GET_BURSAR_STUDENTS:
            return {
                ...state,
                bursarstudents: action.payload
            };
        case GET_BURSAR_STUDENT:
            return {
                ...state,
                bursarstudent: action.payload
            };
        case GET_ADMIN_PARENTS:
            return {
                ...state,
                adminparents: action.payload
            };
        case GET_ADMIN_PARENT:
            return {
                ...state,
                adminparent: action.payload
            };
        case GET_BURSAR_PARENTS:
            return {
                ...state,
                bursarparents: action.payload
            };
        case GET_BURSAR_PARENT:
            return {
                ...state,
                bursarparent: action.payload
            };
        case GET_ADMIN_PRINCIPALS:
            return {
                ...state,
                adminprincipals: action.payload
            };
        case GET_ADMIN_PRINCIPAL:
            return {
                ...state,
                adminprincipal: action.payload
            };
        case GET_ADMIN_BURSARS:
            return {
                ...state,
                adminbursars: action.payload
            };
        case GET_ADMIN_BURSAR:
            return {
                ...state,
                adminbursar: action.payload
            };
        case GET_ADMIN_TEACHERS:
            return {
                ...state,
                adminteachers: action.payload
            };
        case GET_ADMIN_TEACHER:
            return {
                ...state,
                adminteacher: action.payload
            };
        case CREATE_PRINCIPAL:
            return {
                ...state,
                adminprincipal: [...state.adminprincipals, action.payload]
            }
        case CREATE_BURSAR:
            return {
                ...state,
                adminbursar: [...state.adminbursars, action.payload]
            }
        case CREATE_TEACHER:
            return {
                ...state,
                adminteacher: [...state.adminteachers, action.payload]
            }
        default:
            return state;
    }
}
