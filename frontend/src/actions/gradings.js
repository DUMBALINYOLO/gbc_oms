import axios from 'axios';
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
import { createMessage, returnErrors } from './messages';

import {
	adminstudenttestsURL,
	adminstudentassignmentsURL,
	adminstudentexcercisesURL,
	teacherstudenttestsURL,
	teacherstudentexcercisesURL,
	teacherstudentassignmentsURL,
	gradingasignmentrecordsURL,
	gradingtestrecordsURL,
	gradingexcerciserecordsURL,
} from '../constants';

// Get
export const getTestRecords = (token) => dispatch => {
		axios.defaults.headers = {
			"Content-Type": "application/json",
			Authorization: `Token ${token}`
		};
    axios.get(gradingtestrecordsURL)
        .then(res => {
            dispatch({
                type: GET_TEST_RECORDS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAssignmentRecords = (token) => dispatch => {
		axios.defaults.headers = {
			"Content-Type": "application/json",
			Authorization: `Token ${token}`
		};
    axios.get(gradingasignmentrecordsURL)
        .then(res => {
            dispatch({
                type: GET_ASSIGNMENT_RECORDS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getExcerciseRecords = (token) => dispatch => {
		axios.defaults.headers = {
			"Content-Type": "application/json",
			Authorization: `Token ${token}`
		};
    axios.get(gradingexcerciserecordsURL)
        .then(res => {
            dispatch({
                type: GET_EXCERCISE_RECORDS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const editTestRecord = (id, grade, token) => dispatch => {
		axios.defaults.headers = {
			"Content-Type": "application/json",
			Authorization: `Token ${token}`
		};
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/grading/grading-test-records/${id}/`, grade)
        .then(res => {
            dispatch({
                type: EDIT_TEST_RECORD,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const editAssignmentRecord = (id, grade, token) => dispatch => {
		axios.defaults.headers = {
			"Content-Type": "application/json",
			Authorization: `Token ${token}`
		};
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/grading/asignment-test-records/${id}/`, grade)
        .then(res => {
            dispatch({
                type: EDIT_ASSIGNMENT_RECORD,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const editExcerciseRecord = (id, grade, token) => dispatch => {
		axios.defaults.headers = {
			"Content-Type": "application/json",
			Authorization: `Token ${token}`
		};
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/grading/grading-excercise-records/${id}/`, grade)
        .then(res => {
            dispatch({
                type: EDIT_EXCERCISE_RECORD,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


// Get
export const getAdminStudentTests = (token) => dispatch => {
		axios.defaults.headers = {
			"Content-Type": "application/json",
			Authorization: `Token ${token}`
		};
    axios.get(adminstudenttestsURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDENT_TESTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}
export const getAdminStudentExcercises = (token) => dispatch => {
		axios.defaults.headers = {
			"Content-Type": "application/json",
			Authorization: `Token ${token}`
		};
    axios.get(adminstudentexcercisesURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDENT_EXCERCISES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminStudentAssignments = (token) => dispatch => {
		axios.defaults.headers = {
			"Content-Type": "application/json",
			Authorization: `Token ${token}`
		};
    axios.get(adminstudentassignmentsURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDENT_ASSIGNMENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Get
export const getTeacherStudentTests = (token) => dispatch => {
		axios.defaults.headers = {
			"Content-Type": "application/json",
			Authorization: `Token ${token}`
		};
    axios.get(teacherstudenttestsURL)
        .then(res => {
            dispatch({
                type: GET_TEACHER_STUDENT_TESTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}
export const getTeacherStudentExcercises = (token) => dispatch => {
		axios.defaults.headers = {
			"Content-Type": "application/json",
			Authorization: `Token ${token}`
		};
    axios.get(teacherstudentexcercisesURL)
        .then(res => {
            dispatch({
                type: GET_TEACHER_STUDENT_EXCERCISES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getTeacherStudentAssignments = (token) => dispatch => {
		axios.defaults.headers = {
			"Content-Type": "application/json",
			Authorization: `Token ${token}`
		};
    axios.get(teacherstudentassignmentsURL)
        .then(res => {
            dispatch({
                type: GET_TEACHER_STUDENT_ASSIGNMENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminStudentTest = (id, token) => dispatch =>{
	axios.defaults.headers = {
		"Content-Type": "application/json",
		Authorization: `Token ${token}`
	};
	axios.get(`http://127.0.0.1:8000/api/grading/admin-student-tests/${id}`)
	  .then(res => {
		  dispatch({
			  type: GET_ADMIN_STUDENT_TEST,
			  payload: res.data
		  });
	  }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}


export const getAdminStudentExcercise = (id,token) => dispatch =>{
	axios.defaults.headers = {
		"Content-Type": "application/json",
		Authorization: `Token ${token}`
	};
	axios.get(`http://127.0.0.1:8000/api/grading/admin-student-excercises/${id}`)
	  .then(res => {
		  dispatch({
			  type: GET_ADMIN_STUDENT_EXCERCISE,
			  payload: res.data
		  });
	  }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}


export const getAdminStudentAssignment = (id, token) => dispatch =>{
	axios.defaults.headers = {
		"Content-Type": "application/json",
		Authorization: `Token ${token}`
	};
	axios.get(`http://127.0.0.1:8000/api/grading/admin-student-assignments/${id}`)
	  .then(res => {
		  dispatch({
			  type: GET_ADMIN_STUDENT_ASSIGNMENT,
			  payload: res.data
		  });
	  }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}



export const getTeacherStudentTest = (id, token) => dispatch =>{
	axios.defaults.headers = {
		"Content-Type": "application/json",
		Authorization: `Token ${token}`
	};
	axios.get(`http://127.0.0.1:8000/api/grading/teacher-student-tests/${id}`)
	  .then(res => {
		  dispatch({
			  type: GET_TEACHER_STUDENT_TEST,
			  payload: res.data
		  });
	  }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}


export const getTeacherStudentExcercise = (id,token) => dispatch =>{
	axios.defaults.headers = {
		"Content-Type": "application/json",
		Authorization: `Token ${token}`
	};
	axios.get(`http://127.0.0.1:8000/api/grading/teacher-student-excercises/${id}`)
	  .then(res => {
		  dispatch({
			  type: GET_TEACHER_STUDENT_EXCERCISE,
			  payload: res.data
		  });
	  }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}


export const getTeacherStudentAssignment = (id,token) => dispatch =>{
	axios.defaults.headers = {
		"Content-Type": "application/json",
		Authorization: `Token ${token}`
	};
	axios.get(`http://127.0.0.1:8000/api/grading/teacher-student-assignments/${id}`)
	  .then(res => {
		  dispatch({
			  type: GET_TEACHER_STUDENT_ASSIGNMENT,
			  payload: res.data
		  });
	  }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}




// Add
export const addGrade = (grade,token) => dispatch => {
		axios.defaults.headers = {
			"Content-Type": "application/json",
			Authorization: `Token ${token}`
		};
    axios.post(teacherstudenttestsURL, grade)
        .then(res => {
            dispatch({
                type: ADD_STUDENT_GRADE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}



//Edit
export const editGrade = (id, grade,token) => dispatch => {
		axios.defaults.headers = {
			"Content-Type": "application/json",
			Authorization: `Token ${token}`
		};
    JSON.stringify(id, null, 3)
    axios.patch(`http://127.0.0.1:8000/api/grading/teacher-student-assignments/${id}/`, grade)
        .then(res => {
            dispatch({
                type: EDIT_STUDENT_GRADE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}
