import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import navigationConfig from "./navigationConfig";
import DumbalinyoloNavGroup from "./DumbalinyoloNavGroup";
import DumbalinyoloNavCollapse from "./DumbalinyoloNavCollapse";
import DumbalinyoloNavItem from "./DumbalinyoloNavItem";
import DumbalinyoloNavLink from "./DumbalinyoloNavLink";
import { Typography } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  logoBg: {
    backgroundColor: theme.palette.type !== "dark" && "#18202c",
    // backgroundColor: "#18202c"
  },
  logo: {
    padding: "1rem",
    "& span": {
      display: "block",
      color: "rgba(41, 113, 245, 0.87)",
    },
  },
  navCustom: {
    "& .MuiTypography-root": {
      fontSize: ".85rem",
    },
    "& .MuiListItemIcon-root": {
      minWidth: "35px",
    },
    "& .MuiCollapse-wrapperInner a": {
      paddingLeft: "50px",
    },
  },
}));

const DumbalinyoloNavigation = (props) => {
  const classes = useStyles(props);

  return (
    <div>
      <div className={clsx(classes.toolbar, classes.logoBg)}>
        <Typography
          className={classes.logo}
          variant="h6"
          component="h1"
          align="center"
        >
          &copy; FLEXIWEIGH
        </Typography>
        <iframe
          frameworker="0"
          scrolling="0"
          width="75px"
          height="30px"
          frameBorder="none"
          style={{ margin: "0 0 20px 80px" }}
        />
      </div>
      <Divider />
      <List className={classes.navCustom}>
        {navigationConfig.map((item) => (
          <React.Fragment key={item.id}>
            {item.type === "group" && <DumbalinyoloNavGroup item={item} />}

            {item.type === "collapse" && <DumbalinyoloNavCollapse item={item} />}

            {item.type === "item" && <DumbalinyoloNavItem item={item} />}

            {item.type === "link" && <DumbalinyoloNavLink item={item} />}

            {item.type === "divider" && <Divider className="my-16" />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default DumbalinyoloNavigation;
