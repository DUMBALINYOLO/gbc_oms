import {
	EDIT_STUDENT_GRADE,
    EDIT_TEST_RECORD,
    EDIT_ASSIGNMENT_RECORD,
    EDIT_EXCERCISE_RECORD,
    GET_STUDENT_EXCERCISES_START,
    GET_STUDENT_EXCERCISES_SUCCESS,
    GET_STUDENT_EXCERCISES_FAIL,
    GET_STUDENT_ASSIGNMENTS_START,
    GET_STUDENT_ASSIGNMENTS_SUCCESS,
    GET_STUDENT_ASSIGNMENTS_FAIL,
    GET_STUDENT_TESTS_START,
    GET_STUDENT_TESTS_SUCCESS,
    GET_STUDENT_TESTS_FAIL,
    GET_EXCERCISE_RECORDS_START,
    GET_EXCERCISE_RECORDS_SUCCESS,
    GET_EXCERCISE_RECORDS_FAIL,
    GET_ASSIGNMENT_RECORDS_START,
    GET_ASSIGNMENT_RECORDS_SUCCESS,
    GET_ASSIGNMENT_RECORDS_FAIL,
    GET_TEST_RECORDS_START,
    GET_TEST_RECORDS_SUCCESS,
    GET_TEST_RECORDS_FAIL,
    GET_TEACHER_STUDENT_TESTS_START,
    GET_TEACHER_STUDENT_TESTS_SUCCESS,
    GET_TEACHER_STUDENT_TESTS_FAIL,
    GET_TEACHER_STUDENT_TEST_START,
    GET_TEACHER_STUDENT_TEST_SUCCESS,
    GET_TEACHER_STUDENT_TEST_FAIL,
    GET_TEACHER_STUDENT_EXCERCISES_START,
    GET_TEACHER_STUDENT_EXCERCISES_SUCCESS,
    GET_TEACHER_STUDENT_EXCERCISES_FAIL,
    GET_TEACHER_STUDENT_EXCERCISE_START,
    GET_TEACHER_STUDENT_EXCERCISE_SUCCESS,
    GET_TEACHER_STUDENT_EXCERCISE_FAIL,
    GET_TEACHER_STUDENT_ASSIGNMENTS_START,
    GET_TEACHER_STUDENT_ASSIGNMENTS_SUCCESS,
    GET_TEACHER_STUDENT_ASSIGNMENTS_FAIL,
    GET_TEACHER_STUDENT_ASSIGNMENT_START,
    GET_TEACHER_STUDENT_ASSIGNMENT_SUCCESS,
    GET_TEACHER_STUDENT_ASSIGNMENT_FAIL,
    GET_ADMIN_STUDENT_EXCERCISES_START,
    GET_ADMIN_STUDENT_EXCERCISES_SUCCESS,
    GET_ADMIN_STUDENT_EXCERCISES_FAIL,
    GET_ADMIN_STUDENT_EXCERCISE_START,
    GET_ADMIN_STUDENT_EXCERCISE_SUCCESS,
    GET_ADMIN_STUDENT_EXCERCISE_FAIL,
    GET_ADMIN_STUDENT_ASSIGNMENTS_START,
    GET_ADMIN_STUDENT_ASSIGNMENTS_SUCCESS,
    GET_ADMIN_STUDENT_ASSIGNMENTS_FAIL,
    GET_ADMIN_STUDENT_ASSIGNMENT_START,
    GET_ADMIN_STUDENT_ASSIGNMENT_SUCCESS,
    GET_ADMIN_STUDENT_ASSIGNMENT_FAIL,
    GET_ADMIN_STUDENT_TESTS_START,
    GET_ADMIN_STUDENT_TESTS_SUCCESS,
    GET_ADMIN_STUDENT_TESTS_FAIL,
    GET_ADMIN_STUDENT_TEST_START,
    GET_ADMIN_STUDENT_TEST_SUCCESS,
    GET_ADMIN_STUDENT_TEST_FAIL,
    CREATE_STUDENT_GRADE_START,
    CREATE_STUDENT_GRADE_SUCCESS,
    CREATE_STUDENT_GRADE_FAIL,
} from '../types/gradingTypes';
import { updateObject } from "../utility";



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
		studenttests: [],
		studentassignments: [],
		studentexcercises: [],
    loading: false,
    error: null,
}


const getAdminStudentTestListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAdminStudentTestListSuccess = (state, action) => {
  return updateObject(state, {
    adminstudenttests: action.adminstudenttests,
    error: null,
    loading: false
  });
};

const getAdminStudentTestListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const getAdminStudentTestDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAdminStudentTestDetailSuccess = (state, action) => {
  return updateObject(state, {
    adminstudenttest: action.adminstudenttest,
    error: null,
    loading: false
  });
};

const getAdminStudentTestDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAdminStudentAssignmentListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAdminStudentAssignmentListSuccess = (state, action) => {
  return updateObject(state, {
    adminstudentassignments: action.adminstudentassignments,
    error: null,
    loading: false
  });
};

const getAdminStudentAssignmentListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const getAdminStudentAssignmentDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAdminStudentAssignmentDetailSuccess = (state, action) => {
  return updateObject(state, {
    adminstudentassignment: action.adminstudentassignment,
    error: null,
    loading: false
  });
};

const getAdminStudentAssignmentDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAdminStudentExcerciseListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAdminStudentExcerciseListSuccess = (state, action) => {
  return updateObject(state, {
    adminstudentexcercises: action.adminstudentexcercises,
    error: null,
    loading: false
  });
};

const getAdminStudentExcerciseListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const getAdminStudentExcerciseDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAdminStudentExcerciseDetailSuccess = (state, action) => {
  return updateObject(state, {
    adminstudentexcercise: action.adminstudentexcercise,
    error: null,
    loading: false
  });
};

const getAdminStudentExcerciseDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getTeacherStudentAssignmentListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getTeacherStudentAssignmentListSuccess = (state, action) => {
  return updateObject(state, {
    teacherstudentassignments: action.teacherstudentassignments,
    error: null,
    loading: false
  });
};

const getTeacherStudentAssignmentListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const getTeacherStudentAssignmentDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getTeacherStudentAssignmentDetailSuccess = (state, action) => {
  return updateObject(state, {
    teacherstudentassignment: action.teacherstudentassignment,
    error: null,
    loading: false
  });
};

const getTeacherStudentAssignmentDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getTeacherStudentExcerciseListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getTeacherStudentExcerciseListSuccess = (state, action) => {
  return updateObject(state, {
    teacherstudentexcercises: action.teacherstudentexcercises,
    error: null,
    loading: false
  });
};

const getTeacherStudentExcerciseListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const getTeacherStudentExcerciseDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getTeacherStudentExcerciseDetailSuccess = (state, action) => {
  return updateObject(state, {
    teacherstudentexcercise: action.teacherstudentexcercise,
    error: null,
    loading: false
  });
};

const getTeacherStudentExcerciseDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getTeacherStudentTestListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getTeacherStudentTestListSuccess = (state, action) => {
  return updateObject(state, {
    teacherstudenttests: action.teacherstudenttests,
    error: null,
    loading: false
  });
};

const getTeacherStudentTestListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const getTeacherStudentTestDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getTeacherStudentTestDetailSuccess = (state, action) => {
  return updateObject(state, {
    teacherstudenttest: action.teacherstudenttest,
    error: null,
    loading: false
  });
};

const getTeacherStudentTestDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getTestRecordListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getTestRecordListSuccess = (state, action) => {
  return updateObject(state, {
    testrecords: action.testrecords,
    error: null,
    loading: false
  });
};

const getTestRecordListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAssignmentRecordListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAssignmentRecordListSuccess = (state, action) => {
  return updateObject(state, {
    asignmentrecords: action.asignmentrecords,
    error: null,
    loading: false
  });
};

const getAssignmentRecordListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getExcerciseRecordListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getExcerciseRecordListSuccess = (state, action) => {
  return updateObject(state, {
    excerciserecords: action.excerciserecords,
    error: null,
    loading: false
  });
};

const getExcerciseRecordListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getStudentTestListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getStudentTestListSuccess = (state, action) => {
  return updateObject(state, {
    studenttests: action.studenttests,
    error: null,
    loading: false
  });
};

const getStudentTestListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getStudentAssignmentListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getStudentAssignmentListSuccess = (state, action) => {
  return updateObject(state, {
    studentassignments: action.studentassignments,
    error: null,
    loading: false
  });
};

const getStudentAssignmentListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getStudentExcerciseListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getStudentExcerciseListSuccess = (state, action) => {
  return updateObject(state, {
    studentexcercises: action.studentexcercises,
    error: null,
    loading: false
  });
};

const getStudentExcerciseListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createGradeStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createGradeSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createGradeFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function gradings(state = initialState, action){
    switch(action.type){
        case GET_STUDENT_EXCERCISES_START:
            return getStudentExcerciseListStart(state, action);
        case GET_STUDENT_EXCERCISES_SUCCESS:
            return getStudentExcerciseListSuccess(state, action);
        case GET_STUDENT_EXCERCISES_FAIL:
            return getStudentExcerciseListFail(state, action);
        case GET_STUDENT_ASSIGNMENTS_START:
            return getStudentAssignmentListStart(state, action);
        case GET_STUDENT_ASSIGNMENTS_SUCCESS:
            return getStudentAssignmentListSuccess(state, action);
        case GET_STUDENT_ASSIGNMENTS_FAIL:
            return getStudentAssignmentListFail(state, action);
        case GET_STUDENT_TESTS_START:
            return getStudentTestListStart(state, action);
        case GET_STUDENT_TESTS_SUCCESS:
            return getStudentTestListSuccess(state, action);
        case GET_STUDENT_TESTS_FAIL:
            return getStudentTestListFail(state, action);
        case CREATE_STUDENT_GRADE_START:
            return createGradeStart(state, action);
        case CREATE_STUDENT_GRADE_SUCCESS:
            return createGradeSuccess(state, action);
        case CREATE_STUDENT_GRADE_FAIL:
            return createGradeFail(state, action);
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
        case GET_TEST_RECORDS_START:
            return getTestRecordListStart(state, action);
        case GET_TEST_RECORDS_SUCCESS:
            return getTestRecordListSuccess(state, action);
        case GET_TEST_RECORDS_FAIL:
            return getTestRecordListFail(state, action);
        case GET_ASSIGNMENT_RECORDS_START:
            return getAssignmentRecordListStart(state, action);
        case GET_ASSIGNMENT_RECORDS_SUCCESS:
            return getAssignmentRecordListSuccess(state, action);
        case GET_ASSIGNMENT_RECORDS_FAIL:
          return getAssignmentRecordListFail(state, action);
        case GET_EXCERCISE_RECORDS_START:
            return getExcerciseRecordListStart(state, action);
        case GET_EXCERCISE_RECORDS_SUCCESS:
            return getExcerciseRecordListSuccess(state, action);
        case GET_EXCERCISE_RECORDS_FAIL:
            return getExcerciseRecordListFail(state, action);
        case GET_ADMIN_STUDENT_ASSIGNMENTS_START:
            return getAdminStudentAssignmentListStart(state, action);
        case GET_ADMIN_STUDENT_ASSIGNMENTS_SUCCESS:
            return getAdminStudentAssignmentListSuccess(state, action);
        case GET_ADMIN_STUDENT_ASSIGNMENTS_FAIL:
            return getAdminStudentAssignmentListFail(state, action);
        case GET_ADMIN_STUDENT_ASSIGNMENT_START:
            return getAdminStudentAssignmentDetailStart(state, action);
        case GET_ADMIN_STUDENT_ASSIGNMENT_SUCCESS:
            return getAdminStudentAssignmentDetailSuccess(state, action);
        case GET_ADMIN_STUDENT_ASSIGNMENT_FAIL:
            return getAdminStudentAssignmentDetailFail(state, action);
        case GET_ADMIN_STUDENT_TESTS_START:
            return getAdminStudentTestListStart(state, action);
        case GET_ADMIN_STUDENT_TESTS_SUCCESS:
            return getAdminStudentTestListSuccess(state, action);
        case GET_ADMIN_STUDENT_TESTS_FAIL:
            return getAdminStudentTestListFail(state, action);
        case GET_ADMIN_STUDENT_TEST_START:
            return getAdminStudentTestDetailStart(state, action);
        case GET_ADMIN_STUDENT_TEST_SUCCESS:
            return getAdminStudentTestDetailSuccess(state, action);
        case GET_ADMIN_STUDENT_TEST_FAIL:
            return getAdminStudentTestDetailFail(state, action);
        case GET_ADMIN_STUDENT_EXCERCISES_START:
            return getAdminStudentExcerciseListStart(state, action);
        case GET_ADMIN_STUDENT_EXCERCISES_SUCCESS:
            return getAdminStudentExcerciseListSuccess(state, action);
        case GET_ADMIN_STUDENT_EXCERCISES_FAIL:
            return getAdminStudentExcerciseListFail(state, action);
        case GET_ADMIN_STUDENT_EXCERCISE_START:
            return getAdminStudentExcerciseDetailStart(state, action);
        case GET_ADMIN_STUDENT_EXCERCISE_SUCCESS:
            return getAdminStudentExcerciseDetailSuccess(state, action);
        case GET_ADMIN_STUDENT_EXCERCISE_FAIL:
            return getAdminStudentExcerciseDetailFail(state, action);
        case GET_TEACHER_STUDENT_ASSIGNMENTS_START:
            return getTeacherStudentAssignmentListStart(state, action);
        case GET_TEACHER_STUDENT_ASSIGNMENTS_SUCCESS:
            return getTeacherStudentAssignmentListSuccess(state, action);
        case GET_TEACHER_STUDENT_ASSIGNMENTS_FAIL:
            return getTeacherStudentAssignmentListFail(state, action);
        case GET_TEACHER_STUDENT_ASSIGNMENT_START:
            return getTeacherStudentAssignmentDetailStart(state, action);
        case GET_TEACHER_STUDENT_ASSIGNMENT_SUCCESS:
            return getTeacherStudentAssignmentDetailSuccess(state, action);
        case GET_TEACHER_STUDENT_ASSIGNMENT_FAIL:
            return getTeacherStudentAssignmentDetailFail(state, action);
        case GET_TEACHER_STUDENT_EXCERCISES_START:
            return getTeacherStudentExcerciseListStart(state, action);
        case GET_TEACHER_STUDENT_EXCERCISES_SUCCESS:
            return getTeacherStudentExcerciseListSuccess(state, action);
        case GET_TEACHER_STUDENT_EXCERCISES_FAIL:
            return getTeacherStudentExcerciseListFail(state, action);
        case GET_TEACHER_STUDENT_EXCERCISE_START:
            return getTeacherStudentExcerciseDetailStart(state, action);
        case GET_TEACHER_STUDENT_EXCERCISE_SUCCESS:
            return getTeacherStudentExcerciseDetailSuccess(state, action);
        case GET_TEACHER_STUDENT_EXCERCISE_FAIL:
            return getTeacherStudentExcerciseDetailFail(state, action);
        case GET_TEACHER_STUDENT_TESTS_START:
            return getTeacherStudentTestListStart(state, action);
        case GET_TEACHER_STUDENT_TESTS_SUCCESS:
            return getTeacherStudentTestListSuccess(state, action);
        case GET_TEACHER_STUDENT_TESTS_FAIL:
            return getTeacherStudentTestListFail(state, action);
        case GET_TEACHER_STUDENT_TEST_START:
            return getTeacherStudentTestDetailStart(state, action);
        case GET_TEACHER_STUDENT_TEST_SUCCESS:
            return getTeacherStudentTestDetailSuccess(state, action);
        case GET_TEACHER_STUDENT_TEST_FAIL:
            return getTeacherStudentTestDetailFail(state, action);
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
