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
    CREATE_STUDENT,
    GET_STUDENT_PROFILE,
    EDIT_STUDENT_PROFILE,
    GET_TEACHER_PROFILE,
    EDIT_TEACHER_PROFILE,
    GET_PARENT_PROFILE,
    EDIT_PARENT_PROFILE,
    GET_PRINCIPAL_PROFILE,
    EDIT_PRINCIPAL_PROFILE,
    GET_BURSAR_PROFILE,
    EDIT_BURSAR_PROFILE,
    GET_STAFF_USERS

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
    bursarprofile: {},
    principalprofiles: [],
    principalprofile: {},
    teacherprofiles: [],
    teacherprofile: {},
    parentprofiles: [],
    parentprofile: {},
    studentprofiles: [],
    studentprofile: {},
    staffusers: [],
}

export default function a(state = initialState, action){
    switch(action.type){
        case EDIT_BURSAR_PROFILE:
            return {
                ...state,
                bursarprofile: [...state.bursarprofiles, action.payload]
            };
        case GET_BURSAR_PROFILE:
            return {
                ...state,
                bursarprofile: action.payload
            };
        case EDIT_PRINCIPAL_PROFILE:
            return {
                ...state,
                principalprofile: [...state.principalprofiles, action.payload]
            };
        case GET_PRINCIPAL_PROFILE:
            return {
                ...state,
                principalprofile: action.payload
            };
        case EDIT_PARENT_PROFILE:
            return {
                ...state,
                parentprofile: [...state.parentprofiles, action.payload]
            };
        case GET_PARENT_PROFILE:
            return {
                ...state,
                parentprofile: action.payload
            };
        case EDIT_TEACHER_PROFILE:
            return {
                ...state,
                teacherprofile: [...state.teacherprofiles, action.payload]
            };
        case GET_TEACHER_PROFILE:
            return {
                ...state,
                teacherprofile: action.payload
            };
        case EDIT_STUDENT_PROFILE:
            return {
                ...state,
                studentprofile: [...state.studentprofiles, action.payload]
            };
        case GET_STUDENT_PROFILE:
            return {
                ...state,
                studentprofile: action.payload
            };
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
        case GET_STAFF_USERS:
            return {
                ...state,
                staffusers: action.payload
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
        case CREATE_STUDENT:
            return {
                ...state,
                adminstudent: [...state.adminstudents, action.payload]
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
