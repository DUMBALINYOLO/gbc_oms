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


const navigationConfig = [
  {
    id: "Main",
    type: "group",
    children: [
      {
        id: "dashboard",
        title: "Home",
        type: "item",
        url: "/itdashboard",
        exact: true,
        icon: <HomeIcon />
      },
      {
        id: "dashes",
        title: "DASHBOARDS",
        type: "collapse",
        icon: <Brightness5Icon />,
        badge: {
          title: "1",
          bg: "#525E8A",
          fg: "#FFFFFF",
          
        },
        children: [
          {
            id: "all stats",
            title: "All Posts",
            type: "item",
            url: "/pages/posts",
            exact: true,
          },
          {
            id: "stats",
            title: "Add Post",
            type: "item",
            url: "/pages/posts/add-post",
            exact: true,
          },
        ],
      },
      {
        id: "configs",
        title: "CONFIGURATIONS",
        type: "collapse",
        icon: <Brightness5Icon />,
        badge: {
          title: "1",
          bg: "#525E8A",
          fg: "#FFFFFF",
          
        },
        children: [
          {
            id: "all configs",
            title: "All Posts",
            type: "item",
            url: "/pages/posts",
            exact: true,
          },
          {
            id: "add config",
            title: "Add Post",
            type: "item",
            url: "/pages/posts/add-post",
            exact: true,
          },
        ],
      },
      {
        id: "users",
        title: "STAFF USERS",
        type: "collapse",
        icon: <HowToRegIcon />,
        badge: {
          title: "2",
          bg: "#525E8A",
          fg: "#FFFFFF",
          
        },
        children: [
          {
            id: "principals",
            title: "ADMINSTRATORS",
            type: "item",
            url: "/itdashboard/principals",
            exact: true,
          },
          {
            id: "bursars",
            title: "BURSARS",
            type: "item",
            url: "/itdashboard/bursars",
            exact: true,
          },
          {
            id: "teachers",
            title: "TEACHERS",
            type: "item",
            url: "/itdashboard/teachers",
            exact: true,
          },
        ],
      },
      {
        id: "classes",
        title: "CLASSES",
        type: "collapse",
        icon: <BusinessIcon />,
        badge: {
          title: "3",
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
          {
            id: "streams",
            title: "LEVEL",
            type: "item",
            url: "/itdashboard/streams",
            exact: true,
          },
        ],
      },
      {
        id: "parents",
        title: "PARENTS",
        type: "collapse",
        icon: <BusinessIcon />,
        badge: {
          title: "3",
          bg: "#525E8A",
          fg: "#FFFFFF",
          
        },
        children: [
          {
            id: "parents",
            title: "PARENTS",
            type: "item",
            url: "/itdashboard/parents",
            exact: true,
          },
        ],
      },
      {
        id: "students",
        title: "STUDENTS",
        type: "collapse",
        icon: <BusinessIcon />,
        badge: {
          title: "3",
          bg: "#525E8A",
          fg: "#FFFFFF",
          
        },
        children: [
          {
            id: "students",
            title: "STUDENTS",
            type: "item",
            url: "/itdashboard/students",
            exact: true,
          },
        ],
      },
      {
        id: "accounting",
        title: "ACCOUNTING",
        type: "collapse",
        icon: <BusinessIcon />,
        badge: {
          title: "3",
          bg: "#525E8A",
          fg: "#FFFFFF",
          
        },
        children: [
          {
            id: "activeaccounts",
            title: "ACTIVE ACCOUNTS",
            type: "item",
            url: "/itdashboard/active-accounts",
            exact: true,
          },
          {
            id: "inactiveaccounts",
            title: "INACTIVE ACCOUNTS",
            type: "item",
            url: "/itdashboard/inactive-accounts",
            exact: true,
          },
          {
            id: "taxes",
            title: "TAXES",
            type: "item",
            url: "/itdashboard/taxes",
            exact: true,
          },
          {
            id: "currencies",
            title: "CURRENCIES",
            type: "item",
            url: "/itdashboard/currencies",
            exact: true,
          },
          {
            id: "assets",
            title: "ASSETS",
            type: "item",
            url: "/itdashboard/assets",
            exact: true,
          },
          {
            id: "workbooks",
            title: "WORKBOOKS",
            type: "item",
            url: "/itdashboard/workbooks",
            exact: true,
          },
          {
            id: "ledgers",
            title: "LEDGERS",
            type: "item",
            url: "/itdashboard/ledgers",
            exact: true,
          },
          {
            id: "journals",
            title: "JOURNALS",
            type: "item",
            url: "/itdashboard/journals",
            exact: true,
          },
        ],
      },
      {
        id: "fees",
        title: "FEES",
        type: "collapse",
        icon: <BusinessIcon />,
        badge: {
          title: "3",
          bg: "#525E8A",
          fg: "#FFFFFF",
          
        },
        children: [
          {
            id: "fees",
            title: "Fees",
            type: "item",
            url: "/itdashboard/fees",
            exact: true,
          },
        ],
      },
      {
        id: "curriculums",
        title: "CURRICULUMS",
        type: "collapse",
        icon: <BusinessIcon />,
        badge: {
          title: "3",
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
          {
            id: "subjects",
            title: "SUBJECTS",
            type: "item",
            url: "/itdashboard/subjects",
            exact: true,
          },
        ],
      },
      {
        id: "attendance",
        title: "ATTENDANCE",
        type: "collapse",
        icon: <BusinessIcon />,
        badge: {
          title: "3",
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
        id: "grading",
        title: "GRADING",
        type: "collapse",
        icon: <BusinessIcon />,
        badge: {
          title: "3",
          bg: "#525E8A",
          fg: "#FFFFFF",
          
        },
        children: [
          {
            id: "tests",
            title: "TESTS",
            type: "item",
            url: "/itdashboard/tests",
            exact: true,
          },
          {
            id: "excercises",
            title: "EXCERCISES",
            type: "item",
            url: "/itdashboard/excercises",
            exact: true,
          },
          {
            id: "assignments",
            title: "ASSIGNMENTS",
            type: "item",
            url: "/itdashboard/assignments",
            exact: true,
          },
        ],
      },
      {
        id: "admissions",
        title: "ADMISSION",
        type: "collapse",
        icon: <BusinessIcon />,
        badge: {
          title: "3",
          bg: "#525E8A",
          fg: "#FFFFFF",
          
        },
        children: [
          {
            id: "accepted",
            title: "ACCEPTED",
            type: "item",
            url: "/itdashboard/approved-admissions",
            exact: true,
          },
          {
            id: "pending",
            title: "PENDING",
            type: "item",
            url: "/itdashboard/pending-admissions",
            exact: true,
          },
          {
            id: "meeting",
            title: "MEETING",
            type: "item",
            url: "/itdashboard/meeting-admissions",
            exact: true,
          },
          {
            id: "rejected",
            title: "REJECTED",
            type: "item",
            url: "/itdashboard/rejected-admissions",
            exact: true,
          },
        ],
      },
      
    ],
  },
];

export default navigationConfig;

