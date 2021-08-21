import React from 'react';
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,

} from "@material-ui/icons";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import TrainIcon from '@material-ui/icons/Train';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BuildIcon from '@material-ui/icons/Build';
import CategoryIcon from '@material-ui/icons/Category';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import BusinessIcon from '@material-ui/icons/Business';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import PermIcon from '@material-ui/icons/People';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ClassIcon from '@material-ui/icons/Museum';
import BioIcon from '@material-ui/icons/LocalLibrary';
import CourseIcon from '@material-ui/icons/MenuBook';
import CurrIcon from '@material-ui/icons/PostAdd';
import AttIcon from '@material-ui/icons/Spellcheck';
import SwapIcon from '@material-ui/icons/SwapVerticalCircle';
import AdmIcon from '@material-ui/icons/VpnKey';
import AccountTree from '@material-ui/icons/AccountTree';
import Mail from '@material-ui/icons/Mail';

const navigationConfig = [
  {
    id: "Main",
    type: "group",
    children: [
      {
        id: "users",
        title: "USERS",
        type: "collapse",
        icon: <HowToRegIcon />,
        badge: {
          title: "1",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "operators",
            title: "USERS",
            type: "item",
            url: '/itdashboard/staffs',
            exact: true,
          },
        ],
      },
      {
        id: "classes",
        title: "CLASSES",
        type: "collapse",
        icon: <ClassIcon />,
        badge: {
          title: "2",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "classes",
            title: "CLASSES",
            type: "item",
            url: "/itdashboard/classes",
            exact: true,
          },
        ],
      },
      {
        id: "references",
        title: "BIBLIOGRAPHY",
        type: "collapse",
        icon: <BioIcon />,
        badge: {
          title: "3",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "bio",
            title: "BIBLIOGRAPHY",
            type: "item",
            url: '/itdashboard/bibliography',
            exact: true,
          },
        ],
      },
      {
        id: "courses",
        title: "COURSES",
        type: "collapse",
        icon: <CourseIcon />,
        badge: {
          title: "4",
          bg: "#525E8A",
          fg: "#FFFFFF",
        },
        children: [
          {
            id: "activecourses",
            title: "COURSES",
            type: "item",
            url: '/itdashboard/icourses',
            exact: true,
          },
        ],
      },

      {
        id: "curriculums",
        title: "CURRICULUMS",
        type: "collapse",
        icon: <CurrIcon />,
        badge: {
          title: "5",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "curriculums",
            title: "CURRICULUMS",
            type: "item",
            url: "/itdashboard/curriculums",
            exact: true,
          },
        ],
      },
      {
        id: "attendance",
        title: "ATTENDANCE",
        type: "collapse",
        icon: <AttIcon />,
        badge: {
          title: "6",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "attendance",
            title: "ATTENDANCE",
            type: "item",
            url: "/itdashboard/attendance",
            exact: true,
          },
        ],
      },
      {
        id: "admissions",
        title: "ADMISSION",
        type: "collapse",
        icon: <AdmIcon />,
        badge: {
          title: "7",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "see",
            title: "ADMISSIONS",
            type: "item",
            url: '/itdashboard/admissions',
            exact: true,
          },
        ],
      },
      {
        id: "messaging",
        title: "ENQUIRIES",
        type: "collapse",
        icon: <Mail />,
        badge: {
          title: "8",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "inquiry",
            title: "ENQUIRY",
            type: "item",
            url: "/itdashboard/enquiries",
            exact: true,
          },
        ],
      },
      {
        id: "grading",
        title: "GRADING",
        type: "collapse",
        icon: <SwapIcon />,
        badge: {
          title: "9",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "grading",
            title: "GRADINGS",
            type: "item",
            url: '/itdashboard/gradings',
            exact: true,
          },
        ],
      },
      {
        id: "advertise",
        title: "ADVERTISE",
        type: "collapse",
        icon: <SwapIcon />,
        badge: {
          title: "9",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "advertise",
            title: "ADVERTISE",
            type: "item",
            url: '/itdashboard/ads',
            exact: true,
          },
        ],
      },
      {
        id: "tickets",
        title: "TICKETS",
        type: "collapse",
        icon: <SwapIcon />,
        badge: {
          title: "9",
          bg: "#525E8A",
          fg: "#FFFFFF",

        },
        children: [
          {
            id: "tickets",
            title: "TICKETS",
            type: "item",
            url: '/itdashboard/tickets',
            exact: true,
          },
        ],
      },
    ],
  },
];

export default navigationConfig;
