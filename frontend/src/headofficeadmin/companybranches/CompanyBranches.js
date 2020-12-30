
import React, { useEffect } from "react"
import HeadOfficeAdministrationLayout from "../layout/HeadOfficeAdministrationLayout";
// import DumbalinyoloBreadCrumbs from "../navigations/DumbalinyoloBreadCrumbs";
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import {getCompanyBranches } from '../../actions/configurations';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  my3: {
    margin: "1.3rem 0"
  },
  mb0: {
    marginBottom: 0
  },
  mRight: {
    marginRight: ".85rem"
  },
  p1: {
    padding: ".85rem"
  }
}));




const columns = [
    {
     name: "id",
     label: "ID",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "name",
     label: "Name",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "mobile_number",
     label: "Phone Number",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "phone_number",
     label: "Second Phone Number",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
    name: "email",
    label: "Email",
    options: {
        filter: true,
        sort: false,
    }
    },
   ];
   


const options = {
  filterType: "checkbox"
};

const HeadOfficeAdminCompanyBranches = props => {
  const { history } = props;
  const classes = useStyles();

  useEffect(() => {
    if(!props.fetched) {
        props.getCompanyBranches();
    }
    console.log('mount it!');
}, []);

  return (
    <HeadOfficeAdministrationLayout>
      <Grid container className={classes.my3} alignItems="center">
        <Grid item className={classes.mRight}>
          <Typography variant="h5" component="h1">
            Posts
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => history.push("/companybranches/add")}
            variant="outlined"
            color="primary"
            size="small"
          >
            Add Branch
          </Button>
        </Grid>
      </Grid>
      <MUIDataTable
        title={"Our Branches"}
        data={props.companybranches}
        columns={columns}
        options={options}
      />
    </HeadOfficeAdministrationLayout>
  );
};

const mapStateToProps = state =>({
    companybranches: state.companybranches.companybranches
})

export default connect(mapStateToProps, {getCompanyBranches} ) (HeadOfficeAdminCompanyBranches);
