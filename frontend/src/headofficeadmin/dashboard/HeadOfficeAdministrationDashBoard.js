import React from "react";
import HeadOfficeAdministrationLayout from "../layout/HeadOfficeAdministrationLayout";
import { Paper, Grid, makeStyles, Typography } from "@material-ui/core";
import DumbalinyoloChart from "./DumbalinyoloChart";
import DumbalinyoloBarChart from "./DumbalinyoloBarChart";
import DumbalinyoloPieChart from "./DumbalinyoloPieChart";
import SimpleTable from "./SimpleTable";
import CounterIconWidget from './counter/CounterIconWidget';
import clsx from "clsx";


const useStyles = makeStyles((them) => ({
  paddingPaper: {
    padding: "10px 5px 5px 10px",
  },
  mt: {
    marginTop: 13,
  },
  titlePaper: {
    marginBottom: "16px",
  },
  visitorChart: {
    // height: "150px"
  },
}));

const HeadOfficeAdministrationDashBoard = (props) => {
  const { history } = props;
  const classes = useStyles();

  return (
    <HeadOfficeAdministrationLayout>
      <h1>Live Stats</h1>
      <iframe
        title="star repo"
        frameworker="0"
        scrolling="0"
        width="75px"
        height="30px"
        frameBorder="none"
        style={{ marginBottom: "20px" }}
      />
      <Grid container spacing={2}>
        <Grid container >
          <CounterIconWidget />
        </Grid>
        <Grid className={classes.visitorChart} item xs={12}>
          <Paper className={classes.paddingPaper} variant="outlined">
            <Typography className={classes.titlePaper} variant="h5">
              Transactions
            </Typography>
            <DumbalinyoloChart />
          </Paper>
        </Grid>
        <Grid item container xs={12} sm={8}>
          <Grid item xs={12}>
            <Paper
              className={clsx(classes.paddingPaper, classes.mt)}
              variant="outlined"
            >
              <Typography className={classes.titlePaper} variant="h5">
                Acquisitions
              </Typography>
              <SimpleTable />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              className={clsx(classes.paddingPaper, classes.mt)}
              variant="outlined"
            >
              <Typography className={classes.titlePaper} variant="h5">
                Finished Transactions 
              </Typography>
              <DumbalinyoloBarChart />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paddingPaper} variant="outlined">
            <Typography className={classes.titlePaper} variant="h5">
              Customers
            </Typography>
            <DumbalinyoloPieChart />
          </Paper>
        </Grid>
      </Grid>
    </HeadOfficeAdministrationLayout>
  );
};

export default HeadOfficeAdministrationDashBoard;
