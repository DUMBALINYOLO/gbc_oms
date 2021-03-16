import axios from 'axios';
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
	GET_ASSIGNMENT_RECORDS,

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
	studentexcercisesURL,
	studenttestsURL,
	studentassignmentsURL,
} from '../constants';

const getStudentExcerciseListStart = () => {
  return {
    type: GET_STUDENT_EXCERCISES_START
  };
};

const getStudentExcerciseListSuccess = studentexcercises => {
  return {
    type: GET_STUDENT_EXCERCISES_SUCCESS,
    studentexcercises
  };
};

const getStudentExcerciseListFail = error => {
  return {
    type: GET_STUDENT_EXCERCISES_FAIL,
    error: error
  };
};

const getStudentAssignmentListStart = () => {
  return {
    type: GET_STUDENT_ASSIGNMENTS_START
  };
};

const getStudentAssignmentListSuccess = studentassignments => {
  return {
    type: GET_STUDENT_ASSIGNMENTS_SUCCESS,
    studentassignments
  };
};

const getStudentAssignmentListFail = error => {
  return {
    type: GET_STUDENT_ASSIGNMENTS_FAIL,
    error: error
  };
};

const getStudentTestListStart = () => {
  return {
    type: GET_STUDENT_TESTS_START
  };
};

const getStudentTestListSuccess = studenttests => {
  return {
    type: GET_STUDENT_TESTS_SUCCESS,
    studenttests
  };
};

const getStudentTestListFail = error => {
  return {
    type: GET_STUDENT_TESTS_FAIL,
    error: error
  };
};

const getExcerciseRecordListStart = () => {
  return {
    type: GET_EXCERCISE_RECORDS_START
  };
};

const getExcerciseRecordListSuccess = excerciserecords => {
  return {
    type: GET_EXCERCISE_RECORDS_SUCCESS,
    excerciserecords
  };
};

const getExcerciseRecordListFail = error => {
  return {
    type: GET_EXCERCISE_RECORDS_FAIL,
    error: error
  };
};

const getAssignmentRecordListStart = () => {
  return {
    type: GET_ASSIGNMENT_RECORDS_START
  };
};

const getAssignmentRecordListSuccess = asignmentrecords => {
  return {
    type: GET_ASSIGNMENT_RECORDS_SUCCESS,
    asignmentrecords
  };
};

const getAssignmentRecordListFail = error => {
  return {
    type: GET_ASSIGNMENT_RECORDS_FAIL,
    error: error
  };
};

const getTestRecordListStart = () => {
  return {
    type: GET_TEST_RECORDS_START
  };
};

const getTestRecordListSuccess = testrecords => {
  return {
    type: GET_TEST_RECORDS_SUCCESS,
    testrecords
  };
};

const getTestRecordListFail = error => {
  return {
    type: GET_TEST_RECORDS_FAIL,
    error: error
  };
};

const getTeacherStudentTestListStart = () => {
  return {
    type: GET_TEACHER_STUDENT_TESTS_START
  };
};

const getTeacherStudentTestListSuccess = teacherstudenttests => {
  return {
    type: GET_TEACHER_STUDENT_TESTS_SUCCESS,
    teacherstudenttests
  };
};

const getTeacherStudentTestListFail = error => {
  return {
    type: GET_TEACHER_STUDENT_TESTS_FAIL,
    error: error
  };
};

const getTeacherStudentTestDetailStart = () => {
  return {
    type: GET_TEACHER_STUDENT_TEST_START
  };
};

const getTeacherStudentTestDetailSuccess = teacherstudenttest => {
  return {
    type: GET_TEACHER_STUDENT_TEST_SUCCESS,
    teacherstudenttest
  };
};

const getTeacherStudentTestDetailFail = error => {
  return {
    type: GET_TEACHER_STUDENT_TEST_FAIL,
    error: error
  };
};

const getTeacherStudentExcerciseListStart = () => {
  return {
    type: GET_TEACHER_STUDENT_EXCERCISES_START
  };
};

const getTeacherStudentExcerciseListSuccess = teacherstudentexcercises => {
  return {
    type: GET_TEACHER_STUDENT_EXCERCISES_SUCCESS,
    teacherstudentexcercises
  };
};

const getTeacherStudentExcerciseListFail = error => {
  return {
    type: GET_TEACHER_STUDENT_EXCERCISES_FAIL,
    error: error
  };
};

const getTeacherStudentExcerciseDetailStart = () => {
  return {
    type: GET_TEACHER_STUDENT_EXCERCISE_START
  };
};

const getTeacherStudentExcerciseDetailSuccess = teacherstudentexcercise => {
  return {
    type: GET_TEACHER_STUDENT_EXCERCISE_SUCCESS,
    teacherstudentexcercise
  };
};

const getTeacherStudentExcerciseDetailFail = error => {
  return {
    type: GET_TEACHER_STUDENT_EXCERCISE_FAIL,
    error: error
  };
};

const getTeacherStudentAssignmentListStart = () => {
  return {
    type: GET_TEACHER_STUDENT_ASSIGNMENTS_START
  };
};

const getTeacherStudentAssignmentListSuccess = teacherstudentassignments => {
  return {
    type: GET_TEACHER_STUDENT_ASSIGNMENTS_SUCCESS,
    teacherstudentassignments
  };
};

const getTeacherStudentAssignmentListFail = error => {
  return {
    type: GET_TEACHER_STUDENT_ASSIGNMENTS_FAIL,
    error: error
  };
};

const getTeacherStudentAssignmentDetailStart = () => {
  return {
    type: GET_TEACHER_STUDENT_ASSIGNMENT_START
  };
};

const getTeacherStudentAssignmentDetailSuccess = teacherstudentassignment => {
  return {
    type: GET_TEACHER_STUDENT_ASSIGNMENT_SUCCESS,
    teacherstudentassignment
  };
};

const getTeacherStudentAssignmentDetailFail = error => {
  return {
    type: GET_TEACHER_STUDENT_ASSIGNMENT_FAIL,
    error: error
  };
};

const getAdminStudentExcerciseListStart = () => {
  return {
    type: GET_ADMIN_STUDENT_EXCERCISES_START
  };
};

const getAdminStudentExcerciseListSuccess = adminstudentexcercises => {
  return {
    type: GET_ADMIN_STUDENT_EXCERCISES_SUCCESS,
    adminstudentexcercises
  };
};

const getAdminStudentExcerciseListFail = error => {
  return {
    type: GET_ADMIN_STUDENT_EXCERCISES_FAIL,
    error: error
  };
};

const getAdminStudentExcerciseDetailStart = () => {
  return {
    type: GET_ADMIN_STUDENT_EXCERCISE_START
  };
};

const getAdminStudentExcerciseDetailSuccess = adminstudentexcercise => {
  return {
    type: GET_ADMIN_STUDENT_EXCERCISE_SUCCESS,
    adminstudentexcercise
  };
};

const getAdminStudentExcerciseDetailFail = error => {
  return {
    type: GET_ADMIN_STUDENT_EXCERCISE_FAIL,
    error: error
  };
};

const getAdminStudentAssignmentListStart = () => {
  return {
    type: GET_ADMIN_STUDENT_ASSIGNMENTS_START
  };
};

const getAdminStudentAssignmentListSuccess = adminstudentassignments => {
  return {
    type: GET_ADMIN_STUDENT_ASSIGNMENTS_SUCCESS,
    adminstudentassignments
  };
};

const getAdminStudentAssignmentListFail = error => {
  return {
    type: GET_ADMIN_STUDENT_ASSIGNMENTS_FAIL,
    error: error
  };
};

const getAdminStudentAssignmentDetailStart = () => {
  return {
    type: GET_ADMIN_STUDENT_ASSIGNMENT_START
  };
};

const getAdminStudentAssignmentDetailSuccess = adminstudentassignment => {
  return {
    type: GET_ADMIN_STUDENT_ASSIGNMENT_SUCCESS,
    adminstudentassignment
  };
};

const getAdminStudentAssignmentDetailFail = error => {
  return {
    type: GET_ADMIN_STUDENT_ASSIGNMENT_FAIL,
    error: error
  };
};

const getAdminStudentTestListStart = () => {
  return {
    type: GET_ADMIN_STUDENT_TESTS_START
  };
};

const getAdminStudentTestListSuccess = adminstudenttests => {
  return {
    type: GET_ADMIN_STUDENT_TESTS_SUCCESS,
    adminstudenttests
  };
};

const getAdminStudentTestListFail = error => {
  return {
    type: GET_ADMIN_STUDENT_TESTS_FAIL,
    error: error
  };
};

const getAdminStudentTestDetailStart = () => {
  return {
    type: GET_ADMIN_STUDENT_TEST_START
  };
};

const getAdminStudentTestDetailSuccess = adminstudenttest => {
  return {
    type: GET_ADMIN_STUDENT_TEST_SUCCESS,
    adminstudenttest
  };
};

const getAdminStudentTestDetailFail = error => {
  return {
    type: GET_ADMIN_STUDENT_TEST_FAIL,
    error: error
  };
};

const createGradeStart = () => {
  return {
    type: CREATE_STUDENT_GRADE_START
  };
};


const createGradeSuccess = grade => {
  return {
    type: CREATE_STUDENT_GRADE_SUCCESS,
    grade
  };
};

const createGradeFail = error => {
  return {
    type: CREATE_STUDENT_GRADE_FAIL,
    error: error
  };
};

export const addGrade = (grade, token) => {
  return dispatch => {
      dispatch(createGradeStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(teacherstudenttestsURL, grade, headers)
        .then(res => {
          dispatch(createGradeSuccess(grade));
        })
        .catch(err => {
          dispatch(createGradeFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const getStudentTests = (email, token) => {
  return dispatch => {
      dispatch(getStudentTestListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${studenttestsURL}?email=${email}`, headers)
        .then(res => {
          const studenttests = res.data;
          dispatch(getStudentTestListSuccess(studenttests));
          })
        .catch(err => {
          dispatch(getStudentTestListStart(err));
        });
    };
};

export const getStudentAssignments = (email, token) => {
  return dispatch => {
      dispatch(getStudentAssignmentListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${studentassignmentsURL}?email=${email}`, headers)
        .then(res => {
          const studentassignments = res.data;
          dispatch(getStudentAssignmentListSuccess(studentassignments));
          })
        .catch(err => {
          dispatch(getStudentAssignmentListStart(err));
        });
    };
};

export const getStudentExcercises = (email, token) => {
  return dispatch => {
      dispatch(getStudentExcerciseListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${studentexcercisesURL}?email=${email}`, headers)
        .then(res => {
          const studentexcercises = res.data;
          dispatch(getStudentExcerciseListSuccess(studentexcercises));
          })
        .catch(err => {
          dispatch(getStudentExcerciseListStart(err));
        });
    };
};

export const getTestRecords = (id, token) => {
  return dispatch => {
      dispatch(getTestRecordListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${gradingtestrecordsURL}?id=${id}`, headers)
        .then(res => {
          const testrecords = res.data;
          dispatch(getTestRecordListSuccess(testrecords));
          })
        .catch(err => {
          dispatch(getTestRecordListStart(err));
        });
    };
};

// export const getAssignmentRecords = (id, token) => {
//   return dispatch => {
//       dispatch(getAssignmentRecordListStart());
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Token ${token}`
//       };
//       axios
//         .get(`${gradingasignmentrecordsURL}?id=${id}`, headers)
//         .then(res => {
//           const asignmentrecords = res.data;
//           dispatch(getAssignmentRecordListSuccess(asignmentrecords));
//           })
//         .catch(err => {
//           dispatch(getAssignmentRecordListStart(err));
//         });
//     };
// };

export const getAssignmentRecords = (id, token) => dispatch => {
		const headers = {
			"Content-Type": "application/json",
			Authorization: `Token ${token}`
		};
    axios.get(`${gradingasignmentrecordsURL}?id=${id}`, headers)
        .then(res => {
            dispatch({
                type: GET_ASSIGNMENT_RECORDS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getExcerciseRecords = (id, token) => {
  return dispatch => {
      dispatch(getExcerciseRecordListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${gradingexcerciserecordsURL}?id=${id}`, headers)
        .then(res => {
          const excerciserecords = res.data;
          dispatch(getExcerciseRecordListSuccess(excerciserecords));
          })
        .catch(err => {
          dispatch(getExcerciseRecordListStart(err));
        });
    };
};


export const editTestRecord = (id, grade, token) => dispatch => {
		const headers ={
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
		};
    JSON.stringify(id, null, 3)
    axios.patch(`${gradingtestrecordsURL}${id}/`, grade,headers)
        .then(res => {
            dispatch({
                type: EDIT_TEST_RECORD,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const editAssignmentRecord = (id, grade, token) => dispatch => {
		const headers ={
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
		};
    JSON.stringify(id, null, 3)
    axios.patch(`${gradingasignmentrecordsURL}${id}/`, grade,headers)
        .then(res => {
            dispatch({
                type: EDIT_ASSIGNMENT_RECORD,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const editExcerciseRecord = (id, grade, token) => dispatch => {
		const headers ={
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
		};
    JSON.stringify(id, null, 3)
    axios.patch(`${gradingexcerciserecordsURL}${id}/`, grade,headers)
        .then(res => {
            dispatch({
                type: EDIT_EXCERCISE_RECORD,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAdminStudentTests = (query, token) => {
  return dispatch => {
      dispatch(getAdminStudentTestListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${adminstudenttestsURL}?q=${query}`, headers)
        .then(res => {
          const adminstudenttests = res.data;
          dispatch(getAdminStudentTestListSuccess(adminstudenttests));
          })
        .catch(err => {
          dispatch(getAdminStudentTestListStart(err));
        });
    };
};

export const getAdminStudentTest = (id,token) => {
  return dispatch => {
      dispatch(getAdminStudentTestDetailStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${adminstudenttestsURL}${id}`, headers)
        .then(res => {
          const adminstudenttest = res.data;
          dispatch(getAdminStudentTestDetailSuccess(adminstudenttest));
          })
        .catch(err => {
          dispatch(getAdminStudentTestDetailFail(err));
        });
    };
};

export const getAdminStudentExcercises = (query, token) => {
  return dispatch => {
      dispatch(getAdminStudentExcerciseListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${adminstudentexcercisesURL}?q=${query}`, headers)
        .then(res => {
          const adminstudentexcercises = res.data;
          dispatch(getAdminStudentExcerciseListSuccess(adminstudentexcercises));
          })
        .catch(err => {
          dispatch(getAdminStudentExcerciseListStart(err));
        });
    };
};


export const getAdminStudentExcercise = (id,token) => {
  return dispatch => {
      dispatch(getAdminStudentExcerciseDetailStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${adminstudentexcercisesURL}${id}`, headers)
        .then(res => {
          const adminstudentexcercise = res.data;
          dispatch(getAdminStudentExcerciseDetailSuccess(adminstudentexcercise));
          })
        .catch(err => {
          dispatch(getAdminStudentExcerciseDetailFail(err));
        });
    };
};

export const getAdminStudentAssignments = (query, token) => {
  return dispatch => {
      dispatch(getAdminStudentAssignmentListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${adminstudentassignmentsURL}?q=${query}`, headers)
        .then(res => {
          const adminstudentassignments = res.data;
          dispatch(getAdminStudentAssignmentListSuccess(adminstudentassignments));
          })
        .catch(err => {
          dispatch(getAdminStudentAssignmentListStart(err));
        });
    };
};


export const getAdminStudentAssignment = (id,token) => {
  return dispatch => {
      dispatch(getAdminStudentAssignmentDetailStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${adminstudentassignmentsURL}${id}`, headers)
        .then(res => {
          const adminstudentassignment = res.data;
          dispatch(getAdminStudentAssignmentDetailSuccess(adminstudentassignment));
          })
        .catch(err => {
          dispatch(getAdminStudentAssignmentDetailFail(err));
        });
    };
};

export const getTeacherStudentTests = (query, token) => {
  return dispatch => {
      dispatch(getTeacherStudentTestListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${teacherstudenttestsURL}?q=${query}`, headers)
        .then(res => {
          const teacherstudenttests = res.data;
          dispatch(getTeacherStudentTestListSuccess(teacherstudenttests));
          })
        .catch(err => {
          dispatch(getTeacherStudentTestListStart(err));
        });
    };
};


export const getTeacherStudentTest = (id,token) => {
  return dispatch => {
      dispatch(getTeacherStudentTestDetailStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${teacherstudenttestsURL}${id}`, headers)
        .then(res => {
          const teacherstudenttest = res.data;
          dispatch(getTeacherStudentTestDetailSuccess(teacherstudenttest));
          })
        .catch(err => {
          dispatch(getTeacherStudentTestDetailFail(err));
        });
    };
};

export const getTeacherStudentExcercises = (query, token) => {
  return dispatch => {
      dispatch(getTeacherStudentExcerciseListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${teacherstudentexcercisesURL}?q=${query}`, headers)
        .then(res => {
          const teacherstudentexcercises = res.data;
          dispatch(getTeacherStudentExcerciseListSuccess(teacherstudentexcercises));
          })
        .catch(err => {
          dispatch(getTeacherStudentExcerciseListStart(err));
        });
    };
};


export const getTeacherStudentExcercise = (id,token) => {
  return dispatch => {
      dispatch(getTeacherStudentExcerciseDetailStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${teacherstudentexcercisesURL}${id}`, headers)
        .then(res => {
          const teacherstudentexcercise = res.data;
          dispatch(getTeacherStudentExcerciseDetailSuccess(teacherstudentexcercise));
          })
        .catch(err => {
          dispatch(getTeacherStudentExcerciseDetailFail(err));
        });
    };
};

export const getTeacherStudentAssignments = (query, token) => {
  return dispatch => {
      dispatch(getTeacherStudentAssignmentListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${teacherstudentassignmentsURL}?q=${query}`, headers)
        .then(res => {
          const teacherstudentassignments = res.data;
          dispatch(getTeacherStudentAssignmentListSuccess(teacherstudentassignments));
          })
        .catch(err => {
          dispatch(getTeacherStudentAssignmentListStart(err));
        });
    };
};


export const getTeacherStudentAssignment = (id,token) => {
  return dispatch => {
      dispatch(getTeacherStudentAssignmentDetailStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${teacherstudentassignmentsURL}${id}`, headers)
        .then(res => {
          const teacherstudentassignment = res.data;
          dispatch(getTeacherStudentAssignmentDetailSuccess(teacherstudentassignment));
          })
        .catch(err => {
          dispatch(getTeacherStudentAssignmentDetailFail(err));
        });
    };
};

//Edit
export const editGrade = (id, grade,token) => dispatch => {
		const headers ={
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
					'Accept': 'application/json',
		};
    JSON.stringify(id, null, 3)
    axios.patch(`${teacherstudentassignmentsURL}${id}/`, grade,headers)
        .then(res => {
            dispatch({
                type: EDIT_STUDENT_GRADE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
