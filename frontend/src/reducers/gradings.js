import {
	GET_ADMIN_STUDENT_TESTS,
	GET_ADMIN_STUDENT_TEST,
	GET_ADMIN_STUDENT_ASSIGNMENTS,
	GET_ADMIN_STUDENT_ASSIGNMENT,
	GET_ADMIN_STUDENT_EXCERCISES,
	GET_ADMIN_STUDENT_EXCERCISE,
	GET_TEACHER_STUDENT_TESTS,
	GET_TEACHER_STUDENT_TEST,
	GET_TEACHER_STUDENT_ASSIGNMENTS,
	GET_TEACHER_STUDENT_ASSIGNMENT,
	GET_TEACHER_STUDENT_EXCERCISES,
	GET_TEACHER_STUDENT_EXCERCISE,
	ADD_STUDENT_GRADE,
    EDIT_STUDENT_GRADE,
    GET_TEST_RECORDS,
	GET_ASSIGNMENT_RECORDS,
	GET_EXCERCISE_RECORDS,
	EDIT_TEST_RECORD,
	EDIT_ASSIGNMENT_RECORD,
	EDIT_EXCERCISE_RECORD,
} from '../types/gradingTypes';



const initialState = {
    adminstudenttests: [],
    adminstudenttest: {},
    adminstudentexcercises: [],
    adminstudentexcercise: {},
    adminstudentassignments: [],
    adminstudentassignment: {},
    teacherstudenttests: [],
    teacherstudenttest: {},
    teacherstudentexcercises: [],
    teacherstudentexcercise: {},
    teacherstudentassignments: [],
    teacherstudentassignment: {},
    testrecords: [],
    asignmentrecords: [],
    excerciserecords: [],


    loading: false
}

export default function gradings(state = initialState, action){
    switch(action.type){
        case EDIT_EXCERCISE_RECORD:
            const eearrayList = state.excerciserecords;
            eearrayList.splice(eearrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                excerciserecords: eearrayList,
            }; 
        case EDIT_TEST_RECORD:
            const teearrayList = state.testrecords;
            teearrayList.splice(teearrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                testrecords: teearrayList,
            };
        case EDIT_ASSIGNMENT_RECORD:
            const aeearrayList = state.asignmentrecords;
            aeearrayList.splice(aeearrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                asignmentrecords: aeearrayList,
            };
        case GET_TEST_RECORDS:
            return {
                ...state,
                testrecords : action.payload
            };
        case GET_ASSIGNMENT_RECORDS:
            return {
                ...state,
                asignmentrecords : action.payload
            };
        case GET_EXCERCISE_RECORDS:
            return {
                ...state,
                excerciserecords : action.payload
            };
    
        case GET_ADMIN_STUDENT_ASSIGNMENTS:
            return {
                ...state,
                adminstudentassignments : action.payload
            };

        case GET_ADMIN_STUDENT_ASSIGNMENT:
            return {
                ...state,
                adminstudentassignment: action.payload
            };

        case GET_ADMIN_STUDENT_TESTS:
            return {
                ...state,
                adminstudenttests : action.payload
            };

        case GET_ADMIN_STUDENT_TEST:
            return {
                ...state,
                adminstudenttest: action.payload
            };

        case GET_ADMIN_STUDENT_EXCERCISES:
            return {
                ...state,
                adminstudentexcercises : action.payload
            };

        case GET_ADMIN_STUDENT_EXCERCISE:
            return {
                ...state,
                adminstudentexcercise : action.payload
            };
    
        case GET_TEACHER_STUDENT_ASSIGNMENTS:
            return {
                ...state,
                teacherstudentassignments : action.payload
            };

        case GET_TEACHER_STUDENT_ASSIGNMENT:
            return {
                ...state,
                teacherstudentassignment : action.payload
            };
        
        case GET_TEACHER_STUDENT_EXCERCISES:
            return {
                ...state,
                teacherstudentexcercises : action.payload
            };

        case GET_TEACHER_STUDENT_EXCERCISE:
            return {
                ...state,
                teacherstudentexcercise : action.payload
            };
        
        case GET_TEACHER_STUDENT_TESTS:
            return {
                ...state,
                teacherstudenttests : action.payload
            };

        case GET_TEACHER_STUDENT_TEST:
            return {
                ...state,
                teacherstudenttest : action.payload
            };
        
        case ADD_STUDENT_GRADE:
            return {
                ...state,
                grade: [...state.teacherstudenttests, action.payload]
            }

        
        case EDIT_STUDENT_GRADE:
            const feearrayList = state.teacherstudenttests;
            feearrayList.splice(feearrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                teacherstudenttests: feearrayList,
            };     
        default:
            return state;
    }
}
