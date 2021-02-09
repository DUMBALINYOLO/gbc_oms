import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import AlertTemplate from 'react-alert-template-basic';
import { Provider as AlertProvider } from 'react-alert';
import ThemeWrapper, { AppContext } from './theme/ThemeWrapper';
import LandingPage from './containers/landing/LandingPage'
import BlogPage from './containers/Blog/BlogPage';
import CompanyProfile from './containers/Profile/CompanyProfile';
import InformationTechnologyHome from './it/dashboard/InformationTechnologyHome';
import Fees from './it/fees/Fees';
import Curriculum from './it/curriculum/Curriculum';
import SubjectsAdminView from './it/curriculum/SubjectsAdminView';
import AccountsAdminView from './it/accounting/AccountsAdminView';
import AdminInActiveAccounts from './it/accounting/AdminInactiveAccounts';
import AdminTaxes  from './it/accounting/AdminTaxes';
import AdminCurrencies from './it/accounting/AdminCurrencies';
import AdminWorkBooks from './it/accounting/AdminWorkBooks';
import AdminLedgers from './it/accounting/AdminLedger';
// import JournalsAdminView from './it/accounting/JournalsAdminView';
import AssetsAdminView from './it/accounting/AssetsAdminView';
import AdminClass from './it/classes/AdminClass';
import AdminStream from './it/classes/AdminStream';
import AdminBursars from './it/staff/AdminBursars';
import AdminTeachers from './it/staff/AdminTeachers';
import AdminPrincipals from './it/staff/AdminPrincipals';
import AdminStudents from './it/students/AdminStudents';
import AdminParents from './it/parents/AdminParents';
import AdminAttendances from './it/attendance/AdminAttendances';
import AdminApprovedAdmissions from './it/admissions/AdminApprovedAdmissions';
import AdminMeetingAdmissions from './it/admissions/AdminMeetingAdmissions';
import AdminRejectedAdmissions from './it/admissions/AdminRejectedAdmissions';
import AdminPendingAdmissions from './it/admissions/AdminPendingAdmissions';
import AdminStudentTests from './it/gradings/AdminStudentTests';
import AdminGradingTest from './it/gradings/AdminGradingTest';
import AdminStudentAssignments from './it/gradings/AdminStudentAssignments';
import AdminStudentExcercises from './it/gradings/AdminExcercises';
import StudentProfile from './it/students/StudentProfile';
import AdminAttendance from './it/attendance/AdminAttendance';
import AdminExcercise from './it/gradings/AdminExcercise';
import AdminAssignment from './it/gradings/AdminAssignment';
import BursarLog from './test/BursarLog';
import TeacherLog from './test/TeacherLog';
import Login from './auth/Login';
import TeacherUpcomingCourses from './teacher/courses/courses/TeacherUpcomingCourses';
import TeacherUpcomingCourse from './teacher/courses/courses/TeacherUpcomingCourse';
import TeacherOngoingCourses from './teacher/courses/courses/TeacherOngoingCourses';
import TeacherFinishedCourses from './teacher/courses/courses/TeacherFinishedCourses';
import TeacherInactiveCourses from './teacher/courses/courses/TeacherInactiveCourses';
import TeacherFinishedCourse from './teacher/courses/courses/TeacherFinishedCourse';
import TeacherOngoingCourse from './teacher/courses/courses/TeacherOngoingCourse';
import TeacherInactiveCourse from './teacher/courses/courses/TeacherInactiveCourse';
import TeacherHome from './teacher/dashboard/TeacherHome';
import TeacherAttendances from './teacher/attendance/TeacherAttendances';
import TeacherAttendance from './teacher/attendance/TeacherAttendance';
import TeacherTests from './teacher/gradings/TeacherTests';
import TeacherTest from './teacher/gradings/TeacherTest';
import TeacherAssignments from './teacher/gradings/TeacherAssignments';
import TeacherAssignment from './teacher/gradings/TeacherAssignment';
import TeacherExcercises from './teacher/gradings/TeacherExcercises';
import TeacherExcercise from './teacher/gradings/TeacherExcercise';
import TeacherStudents from './teacher/students/TeacherStudents';
import TeacherStudentProfile from './teacher/students/TeacherStudentProfile';
import AdminUpcomingCourses from './it/courses/courses/AdminUpcomingCourses';
import AdminUpcomingCourse from './it/courses/courses/AdminUpcomingCourse';
import AdminOngoingCourses from './it/courses/courses/AdminOngoingCourses';
import AdminFinishedCourses from './it/courses/courses/AdminFinishedCourses';
import AdminInactiveCourses from './it/courses/courses/AdminInactiveCourses';
import AdminTopic from './it/courses/topics/AdminTopic';
import AdminSubTopic from './it/courses/subtopics/AdminSubTopic';
import AdminStudyNote from './it/courses/notes/AdminStudyNote';
import AdminFinishedCourse from './it/courses/courses/AdminFinishedCourse';
import AdminOngoingCourse from './it/courses/courses/AdminOngoingCourse';
import AdminInactiveCourse from './it/courses/courses/AdminInactiveCourse';
import {authCheckState, loadUser} from './actions/auth';
import TeacherTopic from './teacher/courses/topics/TeacherTopic';
import TeacherSubTopic from './teacher/courses/subtopics/TeacherSubTopic';
import TeacherStudyNote from './teacher/courses/notes/TeacherStudyNote';
import Alerts from './Alert';
import store from './store';
import AdminStudentClass from './it/classes/AdminStudentClass';
import StudentHome from './student/dashboard/StudentHome';
import StudentAttendanceRecords from './student/attendance/StudentAttendanceRecords';
import StudentTestRecords from './student/gradings/StudentTestRecords';
import StudentExcerciseRecords from './student/gradings/StudentExcerciseRecords';
import StudentAssignmentRecords from './student/gradings/StudentAssignmentRecords';
import Error from './errors/Error';
import StudentOngoingCourses from './student/courses/courses/StudentOngoingCourses';
import StudentOngoingCourse from './student/courses/courses/StudentOngoingCourse';
import StudentUpcomingCourses from './student/courses/courses/StudentUpcomingCourses';
import StudentUpcomingCourse from './student/courses/courses/StudentUpcomingCourse';
import StudentTopic from './student/courses/topics/StudentTopic';
import StudentSubTopic from './student/courses/subtopics/StudentSubTopic';
import StudentStudyNote from './student/courses/notes/StudentStudyNote';
import Authors from './it/courses/author/Authors';
import Publishers from './it/courses/publisher/Publishers';
import Cities from './it/courses/publishercity/PublisherCities';
import References from './it/courses/references/References';
import PrivateRoute from "./PrivateRoute"



window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const alertOptions = {
	timeout: 30000,
	position: 'top center'
}

class App extends React.Component {
	constructor(props) {
    super(props);
  }




  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    const {user} = this.props;

    console.log(user);
    return (
      <ThemeWrapper>
        <AppContext.Consumer>
            {(changeMode) => (
            <AlertProvider template={AlertTemplate} {...alertOptions} >
              <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/itdashboard' component={InformationTechnologyHome} />
                <Route exact path='/bursardashboard' component={BursarLog} />
				<Route exact path='/studentdashboard' component={StudentHome} />
				<Route exact path='/studentdashboard/attendance' component={StudentAttendanceRecords} />
				<Route exact path='/studentdashboard/tests' component={StudentTestRecords} />
				<Route exact path='/studentdashboard/excercises' component={StudentExcerciseRecords} />
				<Route exact path='/studentdashboard/assignments' component={StudentAssignmentRecords} />
				<Route exact path='/studentdashboard/ongoingcourses' component={StudentOngoingCourses} />
				<Route exact path='/studentdashboard/ongoingcourses/:id' component={StudentOngoingCourse} />
				<Route exact path='/studentdashboard/upcomingcourses' component={StudentUpcomingCourses} />
				<Route exact path='/studentdashboard/upcomingcourses/:id' component={StudentUpcomingCourse} />
				<Route exact path='/studentdashboard/topics/:id' component={StudentTopic} />
				<Route exact path='/studentdashboard/subtopics/:id' component={StudentSubTopic} />
				<Route exact path='/studentdashboard/notes/:id' component={StudentStudyNote} />
                <Route exact path='/wa' component={TeacherLog} />
                <Route exact path='/teacherdashboard' component={TeacherHome} />
                <Route exact path='/teacherdashboard/attendance' component={TeacherAttendances} />
                <Route exact path='/teacherdashboard/attendance/:id' component={TeacherAttendance} />
                <Route exact path='/teacherdashboard/tests' component={TeacherTests} />
                <Route exact path='/teacherdashboard/tests/:id' component={TeacherTest} />
                <Route exact path='/teacherdashboard/excercises' component={TeacherExcercises} />
                <Route exact path='/teacherdashboard/excercises/:id' component={TeacherExcercise} />
                <Route exact path='/teacherdashboard/assignments' component={TeacherAssignments} />
                <Route exact path='/teacherdashboard/assignments/:id' component={TeacherAssignment} />
                <Route exact path='/teacherdashboard/students' component={TeacherStudents} />
                <Route exact path='/teacherdashboard/students/:id' component={TeacherStudentProfile} />
                <Route exact path='/teacherdashboard/topics/:id' component={TeacherTopic} />
                <Route exact path='/teacherdashboard/subtopics/:id' component={TeacherSubTopic} />
                <Route exact path='/teacherdashboard/notes/:id' component={TeacherStudyNote} />
                <Route exact path='/teacherdashboard/ongoingcourses' component={TeacherOngoingCourses} />
                <Route exact path='/teacherdashboard/ongoingcourses/:id' component={TeacherOngoingCourse} />
                <Route exact path='/teacherdashboard/finishedcourses' component={TeacherFinishedCourses} />
                <Route exact path='/teacherdashboard/finishedcourses/:id' component={TeacherFinishedCourse} />
                <Route exact path='/teacherdashboard/inactivecourses' component={TeacherInactiveCourses} />
                <Route exact path='/teacherdashboard/inactivecourses/:id' component={TeacherInactiveCourse} />
                <Route exact path='/teacherdashboard/upcomingcourses' component={TeacherUpcomingCourses} />
                <Route exact path='/teacherdashboard/upcomingcourses/:id' component={TeacherUpcomingCourse} />
                <Route exact path='/itdashboard/fees' component={Fees} />
                <Route exact path='/itdashboard/curriculums' component={Curriculum} />
                <Route exact path='/itdashboard/taxes' component={AdminTaxes} />
                <Route exact path='/itdashboard/bursars' component={AdminBursars} />
                <Route exact path='/itdashboard/parents' component={AdminParents} />
                <Route exact path='/itdashboard/teachers' component={AdminTeachers} />
                <Route exact path='/itdashboard/approved-admissions' component={AdminApprovedAdmissions} />
                <Route exact path='/itdashboard/pending-admissions' component={AdminPendingAdmissions} />
                <Route exact path='/itdashboard/meeting-admissions' component={AdminMeetingAdmissions} />
                <Route exact path='/itdashboard/rejected-admissions' component={AdminRejectedAdmissions} />
                <Route exact path='/itdashboard/students' component={AdminStudents} />
				<Route exact path='/itdashboard/authors' component={Authors} />
				<Route exact path='/itdashboard/publishers' component={Publishers} />
				<Route exact path='/itdashboard/cities' component={Cities} />
                <Route exact path='/itdashboard/references' component={References} />
                <Route exact path="/itdashboard/students/:id" component={StudentProfile} />
                <Route exact path='/itdashboard/tests' component={AdminStudentTests} />
                <Route exact path='/itdashboard/tests/:id' component={AdminGradingTest} />
                <Route exact path='/itdashboard/excercises' component={AdminStudentExcercises} />
                <Route exact path='/itdashboard/excercises/:id' component={AdminExcercise} />
                <Route exact path='/itdashboard/assignments' component={AdminStudentAssignments} />
                <Route exact path='/itdashboard/assignments/:id' component={AdminAssignment} />
                <Route exact path='/itdashboard/attendance' component={AdminAttendances} />
                <Route exact path='/itdashboard/attendance/:id' component={AdminAttendance} />
                <Route exact path='/itdashboard/principals' component={AdminPrincipals} />
                <Route exact path='/itdashboard/streams' component={AdminStream} />
                <Route exact path='/itdashboard/classes' component={AdminClass} />
				<Route exact path='/itdashboard/classes/:id' component={AdminStudentClass} />
                <Route exact path='/itdashboard/ledgers' component={AdminLedgers} />
                <Route exact path='/itdashboard/workbooks' component={AdminWorkBooks} />
                <Route exact path='/itdashboard/currencies' component={AdminCurrencies} />
                <Route exact path='/itdashboard/assets' component={AssetsAdminView} />
                <Route exact path='/itdashboard/subjects' component={SubjectsAdminView} />
                <Route exact path='/itdashboard/upcomingcourses' component={AdminUpcomingCourses} />
                <Route exact path='/itdashboard/upcomingcourses/:id' component={AdminUpcomingCourse} />
                <Route exact path='/itdashboard/topics/:id' component={AdminTopic} />
                <Route exact path='/itdashboard/subtopics/:id' component={AdminSubTopic} />
                <Route exact path='/itdashboard/notes/:id' component={AdminStudyNote} />
                <Route exact path='/itdashboard/ongoingcourses' component={AdminOngoingCourses} />
                <Route exact path='/itdashboard/ongoingcourses/:id' component={AdminOngoingCourse} />
                <Route exact path='/itdashboard/finishedcourses' component={AdminFinishedCourses} />
                <Route exact path='/itdashboard/finishedcourses/:id' component={AdminFinishedCourse} />
                <Route exact path='/itdashboard/inactivecourses' component={AdminInactiveCourses} />
                <Route exact path='/itdashboard/inactivecourses/:id' component={AdminInactiveCourse} />
                <Route exact path='/itdashboard/active-accounts' component={AccountsAdminView} />
                <Route exact path='/itdashboard/inactive-accounts' component={AdminInActiveAccounts} />
                <Route exact path='/blog' component={BlogPage} />
                <Route exact path='/profile' component={CompanyProfile} />
				<Route component={Error} />
              </Switch>
            </AlertProvider>
          )}
        </AppContext.Consumer>
      </ThemeWrapper>
    );
  }
}


const mapStateToProps = state => {
  return {
    token: state.auth.token,
		user: state.auth.user,
		email: state.auth.email,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
