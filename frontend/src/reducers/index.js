import { combineReducers } from 'redux';
import uiReducer from './ui';
import timelines from './timelines';
import auth from './auth';
import products from './products';
import subMenuOpen from './itmenu';
import curriculums from './curriculums';
import adminattendances from './adminattendances';
import teacherattendances from './teacherattendances';
import studentattendances from './studentattendances';
import admissions from './admissions';



export default combineReducers({
    ui: uiReducer,
	timelines,
	subMenuOpen,
    auth,
    curriculums,
    teacherattendances,
    studentattendances,
    adminattendances,
    admissions,
});
