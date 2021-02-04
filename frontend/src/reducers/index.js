import { combineReducers } from 'redux';
import uiReducer from './ui';
import timelines from './timelines';
import auth from './auth';
import subMenuOpen from './itmenu';
import curriculums from './curriculums';
import adminattendances from './adminattendances';
import teacherattendances from './teacherattendances';
import studentattendances from './studentattendances';
import admissions from './admissions';
import feechoices from './feechoices';
import fees from './fees';
import accounts from './accounts';
import inactiveaccounts from './inactiveaccounts';
import taxes from './taxes';
import currencies from './currencies';
import workbooks from './workbooks';
import ledgers from './ledgers';
import journals from './journals';
import people from './people';
import assets from './assets';
import classes from './classes';
import gradings from './gradings';
import courses from './courses';
import reports from './reports';
import messages from './messages';
import errors from './errors';




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
    feechoices,
    fees,
    accounts,
    inactiveaccounts,
    taxes,
    currencies,
    workbooks,
    ledgers,
    journals,
    people,
    assets,
    classes,
    gradings,
    courses,
    reports,
    messages,
    errors,
});
