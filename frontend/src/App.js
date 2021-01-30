import React from 'react';
import {Switch, Route} from 'react-router-dom';
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
import JournalsAdminView from './it/accounting/JournalsAdminView';
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
import StudentLog from './test/StudentLog';
import Login from './auth/Login';
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



window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function App() {
  return (
    <ThemeWrapper>
      <AppContext.Consumer>
          {(changeMode) => (
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/itdashboard' component={InformationTechnologyHome} />
            <Route exact path='/bursardashboard' component={BursarLog} />
            <Route exact path='/studentdashboard' component={StudentLog} />
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
            <Route exact path='/itdashboard/ledgers' component={AdminLedgers} />
            <Route exact path='/itdashboard/workbooks' component={AdminWorkBooks} />
            <Route exact path='/itdashboard/currencies' component={AdminCurrencies} />
            <Route exact path='/itdashboard/assets' component={AssetsAdminView} />
            <Route exact path='/itdashboard/subjects' component={SubjectsAdminView} />
            <Route exact path='/itdashboard/journals' component={JournalsAdminView} />
            <Route exact path='/itdashboard/active-accounts' component={AccountsAdminView} />
            <Route exact path='/itdashboard/inactive-accounts' component={AdminInActiveAccounts} />
            <Route exact path='/blog' component={BlogPage} />
            <Route exact path='/profile' component={CompanyProfile} />
          </Switch>
        )}
      </AppContext.Consumer>
    </ThemeWrapper>
  );
}




export default App;
