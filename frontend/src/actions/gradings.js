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
		const config =  {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
				}
		};
    axios.get(gradingtestrecordsURL,config)
        .then(res => {
            dispatch({
                type: GET_TEST_RECORDS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAssignmentRecords = (token) => dispatch => {
		const config =  {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
				}
		};
    axios.get(gradingasignmentrecordsURL,config)
        .then(res => {
            dispatch({
                type: GET_ASSIGNMENT_RECORDS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getExcerciseRecords = (token) => dispatch => {
		const config =  {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
				}
		};
    axios.get(gradingexcerciserecordsURL,config)
        .then(res => {
            dispatch({
                type: GET_EXCERCISE_RECORDS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const editTestRecord = (id, grade, token) => dispatch => {
		const config =  {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
				}
		};
    JSON.stringify(id, null, 3)
    axios.patch(`${gradingtestrecordsURL}${id}/`, grade,config)
        .then(res => {
            dispatch({
                type: EDIT_TEST_RECORD,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const editAssignmentRecord = (id, grade, token) => dispatch => {
		const config =  {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
				}
		};
    JSON.stringify(id, null, 3)
    axios.patch(`${gradingasignmentrecordsURL}${id}/`, grade,config)
        .then(res => {
            dispatch({
                type: EDIT_ASSIGNMENT_RECORD,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const editExcerciseRecord = (id, grade, token) => dispatch => {
		const config =  {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
				}
		};
    JSON.stringify(id, null, 3)
    axios.patch(`${gradingexcerciserecordsURL}${id}/`, grade,config)
        .then(res => {
            dispatch({
                type: EDIT_EXCERCISE_RECORD,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}


// Get
export const getAdminStudentTests = (token) => dispatch => {
		const config =  {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
				}
		};
    axios.get(adminstudenttestsURL,config)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDENT_TESTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminStudentExcercises = (token) => dispatch => {
		const config =  {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
				}
		};
    axios.get(adminstudentexcercisesURL,config)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDENT_EXCERCISES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminStudentAssignments = (token) => dispatch => {
		const config =  {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
				}
		};
    axios.get(adminstudentassignmentsURL,config)
        .then(res => {
            dispatch({
                type: GET_ADMIN_STUDENT_ASSIGNMENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Get
export const getTeacherStudentTests = (token) => dispatch => {
		const config =  {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
				}
		};
    axios.get(teacherstudenttestsURL,config)
        .then(res => {
            dispatch({
                type: GET_TEACHER_STUDENT_TESTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}
export const getTeacherStudentExcercises = (token) => dispatch => {
		const config =  {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
				}
		};
    axios.get(teacherstudentexcercisesURL,config)
        .then(res => {
            dispatch({
                type: GET_TEACHER_STUDENT_EXCERCISES,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getTeacherStudentAssignments = (token) => dispatch => {
		const config =  {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
				}
		};
    axios.get(teacherstudentassignmentsURL,config)
        .then(res => {
            dispatch({
                type: GET_TEACHER_STUDENT_ASSIGNMENTS,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getAdminStudentTest = (id, token) => dispatch =>{
	const config =  {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Token ${token}`,
				'Accept': 'application/json',
			}
	};
	axios.get(`${adminstudenttestsURL}${id}/`,config)
	  .then(res => {
		  dispatch({
			  type: GET_ADMIN_STUDENT_TEST,
			  payload: res.data
		  });
	  }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}


export const getAdminStudentExcercise = (id,token) => dispatch =>{
	const config =  {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Token ${token}`,
				'Accept': 'application/json',
			}
	};
	axios.get(`${adminstudentexcercisesURL}${id}/`,config)
	  .then(res => {
		  dispatch({
			  type: GET_ADMIN_STUDENT_EXCERCISE,
			  payload: res.data
		  });
	  }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}


export const getAdminStudentAssignment = (id, token) => dispatch =>{
	const config =  {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Token ${token}`,
				'Accept': 'application/json',
			}
	};
	axios.get(`${adminstudentassignmentsURL}${id}/`, config)
	  .then(res => {
		  dispatch({
			  type: GET_ADMIN_STUDENT_ASSIGNMENT,
			  payload: res.data
		  });
	  }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}



export const getTeacherStudentTest = (id, token) => dispatch =>{
	const config =  {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Token ${token}`,
				'Accept': 'application/json',
			}
	};
	axios.get(`${teacherstudenttestsURL}${id}/`,config)
	  .then(res => {
		  dispatch({
			  type: GET_TEACHER_STUDENT_TEST,
			  payload: res.data
		  });
	  }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}


export const getTeacherStudentExcercise = (id,token) => dispatch =>{
	const config =  {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Token ${token}`,
				'Accept': 'application/json',
			}
	};
	axios.get(`${teacherstudentexcercisesURL}${id}/`,config)
	  .then(res => {
		  dispatch({
			  type: GET_TEACHER_STUDENT_EXCERCISE,
			  payload: res.data
		  });
	  }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}


export const getTeacherStudentAssignment = (id,token) => dispatch =>{
	const config =  {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Token ${token}`,
				'Accept': 'application/json',
			}
	};
	axios.get(`${teacherstudentassignmentsURL}${id}/`,config)
	  .then(res => {
		  dispatch({
			  type: GET_TEACHER_STUDENT_ASSIGNMENT,
			  payload: res.data
		  });
	  }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

}




// Add
export const addGrade = (grade,token) => dispatch => {
		const config =  {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
				}
		};
    axios.post(teacherstudenttestsURL, grade,config)
        .then(res => {
            dispatch({
                type: ADD_STUDENT_GRADE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}



//Edit
export const editGrade = (id, grade,token) => dispatch => {
		const config =  {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
				}
		};
    JSON.stringify(id, null, 3)
    axios.patch(`${teacherstudentassignmentsURL}${id}/`, grade,config)
        .then(res => {
            dispatch({
                type: EDIT_STUDENT_GRADE,
                payload: res.data
            });
        }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}
