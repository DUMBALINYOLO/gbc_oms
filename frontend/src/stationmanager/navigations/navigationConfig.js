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
    title: "...",
    type: "group",
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        type: "item",
        url: "/managerdashboard",
        exact: true,
        icon: <HomeIcon />
      },
      {
        id: "profile",
        title: "Profile",
        type: "item",
        url: "/",
        exact: true,
        icon: <PersonIcon />
      },
      {
        id: "configs",
        title: "Configurations",
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
        title: "Staff Users",
        type: "collapse",
        icon: <HowToRegIcon />,
        badge: {
          title: "2",
          bg: "#525E8A",
          fg: "#FFFFFF",
          
        },
        children: [
          {
            id: "all users",
            title: "All Posts",
            type: "item",
            url: "/pages/posts",
            exact: true,
          },
          {
            id: "add user",
            title: "Add Post",
            type: "item",
            url: "/pages/posts/add-post",
            exact: true,
          },
        ],
      },
      
      {
        id: "products",
        title: "Products",
        type: "collapse",
        icon: <CategoryIcon />,
        badge: {
          title: "4",
          bg: "#525E8A",
          fg: "#FFFFFF",
          
        },
        children: [
          {
            id: "all products",
            title: "All Products",
            type: "item",
            url: "/productsitview",
            exact: true,
          },
          {
            id: "add product",
            title: "Add Product",
            type: "item",
            url: "/productsitview/add",
            exact: true,
          },
        ],
      },
      {
        id: "customers",
        title: "Customers",
        type: "collapse",
        icon: <SupervisorAccountIcon />,
        badge: {
          title: "5",
          bg: "#525E8A",
          fg: "#FFFFFF",
          
        },
        children: [
          {
            id: "all customers",
            title: "Our Customers",
            type: "item",
            url: "/itdashboard/customers",
            exact: true,
          },
          {
            id: "add customer",
            title: "Add Customer",
            type: "item",
            url: "/itdashboard/customers/add",
            exact: true,
          },
        ],
      },
      {
        id: "hauliers",
        title: "Hauliers",
        type: "collapse",
        icon: <LocalCarWashIcon />,
        badge: {
          title: "6",
          bg: "#525E8A",
          fg: "#FFFFFF",
          
        },
        children: [
          {
            id: "all hauliers",
            title: "Hauliers",
            type: "item",
            url: "/itdashboard/hauliers",
            exact: true,
          },
          {
            id: "add haulier",
            title: "Create Haulier",
            type: "item",
            url: "/pages/hauliersitview/add",
            exact: true,
          },
        ],
      },
      {
        id: "transactions",
        title: "Transactions",
        type: "collapse",
        icon: <AccountBalanceIcon />,
        badge: {
          title: "7",
          bg: "#525E8A",
          fg: "#FFFFFF",
          
        },
        children: [
          {
            id: "all transactions",
            title: "All Posts",
            type: "item",
            url: "/pages/posts",
            exact: true,
          },
          {
            id: "add transaction",
            title: "Add Post",
            type: "item",
            url: "/pages/posts/add-post",
            exact: true,
          },
        ],
      },
      {
        id: "vehicles",
        title: "Vehicles",
        type: "collapse",
        icon: <TrainIcon />,
        badge: {
          title: "8",
          bg: "#525E8A",
          fg: "#FFFFFF",
          
        },
        children: [
          {
            id: "all vehicles",
            title: "All Posts",
            type: "item",
            url: "/pages/posts",
            exact: true,
          },
          {
            id: "add vehicle",
            title: "Add Post",
            type: "item",
            url: "/pages/posts/add-post",
            exact: true,
          },
        ],
      },
      {
        id: "tickets",
        title: "Tickets",
        type: "collapse",
        icon: <AttachMoneyIcon />,
        badge: {
          title: "9",
          bg: "#525E8A",
          fg: "#FFFFFF",
          
        },
        children: [
          {
            id: "all tickets",
            title: "All Posts",
            type: "item",
            url: "/pages/posts",
            exact: true,
          },
          {
            id: "add ticket",
            title: "Add Ticket",
            type: "item",
            url: "/pages/posts/add-post",
            exact: true,
          },
        ],
      },
      {
        id: "devices",
        title: "WeighBridge Devices",
        type: "collapse",
        icon: <BuildIcon />,
        badge: {
          title: "10",
          bg: "#525E8A",
          fg: "#FFFFFF",
          
        },
        children: [
          {
            id: "all devices",
            title: "All Devices",
            type: "item",
            url: "/pages/posts",
            exact: true,
          },
          {
            id: "add device",
            title: "Add Post",
            type: "item",
            url: "/pages/posts/add-post",
            exact: true,
          },
        ],
      },
      {
        id: "calendar",
        title: "Calendar",
        type: "item",
        icon: <CalendarTodayIcon/>,
        url: "/pages/calendar",
        exact: true,
      },
    ],
  },
];

export default navigationConfig;



