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
export const getTestRecords = () => dispatch => {
    axios.get(gradingtestrecordsURL)
        .then(res => {
            dispatch({
                type: GET_TEST_RECORDS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAssignmentRecords = () => dispatch => {
    axios.get(gradingasignmentrecordsURL)
        .then(res => {
            dispatch({
                type: GET_ASSIGNMENT_RECORDS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getExcerciseRecords = () => dispatch => {
    axios.get(gradingexcerciserecordsURL)
        .then(res => {
            dispatch({
                type: GET_EXCERCISE_RECORDS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const editTestRecord = (id, grade) => dispatch => {
    JSON.stringify(id, null, 3)
		axios.patch(`${gradingtestrecordsURL}${id}/`, grade)
        .then(res => {
            dispatch({
                type: EDIT_TEST_RECORD,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const editAssignmentRecord = (id, grade) => dispatch => {
    JSON.stringify(id, null, 3)
		axios.patch(`${gradingasignmentrecordsURL}${id}/`, grade)
        .then(res => {
            dispatch({
                type: EDIT_ASSIGNMENT_RECORD,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const editExcerciseRecord = (id, grade) => dispatch => {
    JSON.stringify(id, null, 3)
		axios.patch(`${gradingexcerciserecordsURL}${id}/`, grade)
        .then(res => {
            dispatch({
                type: EDIT_EXCERCISE_RECORD,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


// Get
export const getAdminStudentTests = () => dispatch => {
    axios.get(adminstudenttestsURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDENT_TESTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
export const getAdminStudentExcercises = () => dispatch => {
    axios.get(adminstudentexcercisesURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDENT_EXCERCISES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminStudentAssignments = () => dispatch => {
    axios.get(adminstudentassignmentsURL)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDENT_ASSIGNMENTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

// Get
export const getTeacherStudentTests = () => dispatch => {
    axios.get(teacherstudenttestsURL)
        .then(res => {
            dispatch({
                type: GET_TEACHER_STUDENT_TESTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
export const getTeacherStudentExcercises = () => dispatch => {
    axios.get(teacherstudentexcercisesURL)
        .then(res => {
            dispatch({
                type: GET_TEACHER_STUDENT_EXCERCISES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getTeacherStudentAssignments = () => dispatch => {
    axios.get(teacherstudentassignmentsURL)
        .then(res => {
            dispatch({
                type: GET_TEACHER_STUDENT_ASSIGNMENTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminStudentTest = id => dispatch =>{
	axios.get(`${adminstudenttestsURL}${id}/`)
	  .then(res => {
		  dispatch({
			  type: GET_ADMIN_STUDENT_TEST,
			  payload: res.data
		  });
	  }).catch(err => console.log(err))

}


export const getAdminStudentExcercise = id => dispatch =>{
	axios.get(`${adminstudentexcercisesURL}${id}/`)
	  .then(res => {
		  dispatch({
			  type: GET_ADMIN_STUDENT_EXCERCISE,
			  payload: res.data
		  });
	  }).catch(err => console.log(err))

}


export const getAdminStudentAssignment = id => dispatch =>{
	axios.get(`${adminstudentassignmentsURL}${id}/`)
	  .then(res => {
		  dispatch({
			  type: GET_ADMIN_STUDENT_ASSIGNMENT,
			  payload: res.data
		  });
	  }).catch(err => console.log(err))

}



export const getTeacherStudentTest = id => dispatch =>{
	axios.get(`${teacherstudenttestsURL}${id}/`)
	  .then(res => {
		  dispatch({
			  type: GET_TEACHER_STUDENT_TEST,
			  payload: res.data
		  });
	  }).catch(err => console.log(err))

}


export const getTeacherStudentExcercise = id => dispatch =>{
	axios.get(`${teacherstudentexcercisesURL}${id}/`)
	  .then(res => {
		  dispatch({
			  type: GET_TEACHER_STUDENT_EXCERCISE,
			  payload: res.data
		  });
	  }).catch(err => console.log(err))

}


export const getTeacherStudentAssignment = id => dispatch =>{
	axios.get(`${teacherstudentassignmentsURL}${id}/`)
	  .then(res => {
		  dispatch({
			  type: GET_TEACHER_STUDENT_ASSIGNMENT,
			  payload: res.data
		  });
	  }).catch(err => console.log(err))

}




// Add
export const addGrade = (grade) => dispatch => {
    axios.post(teacherstudenttestsURL, grade)
        .then(res => {
            dispatch({
                type: ADD_STUDENT_GRADE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



//Edit
export const editGrade = (id, grade) => dispatch => {
    JSON.stringify(id, null, 3)
		axios.patch(`${teacherstudentassignmentsURL}${id}/`, grade)
        .then(res => {
            dispatch({
                type: EDIT_STUDENT_GRADE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
