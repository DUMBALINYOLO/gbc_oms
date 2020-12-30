import React, { useEffect } from "react"
import InformationTechnologyLayout from "../layout/InformationTechnologyLayout";
// import DumbalinyoloBreadCrumbs from "../navigations/DumbalinyoloBreadCrumbs";
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import {getCustomers } from '../../actions/customers';
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
     name: "code",
     label: "Customer Code",
     options: {
      filter: true,
      sort: false,
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
     name: "status",
     label: "Is Active?",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "city",
     label: "City",
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
    {
    name: "phone_number",
    label: "Phone Number",
    options: {
        filter: true,
        sort: false,
        }
    },
   ];
   


const options = {
  filterType: "checkbox"
};

const CustomersItView = props => {
  const { history } = props;
  const classes = useStyles();

  useEffect(() => {
    if(!props.fetched) {
        props.getCustomers();
    }
    console.log('mount it!');
}, []);

  return (
    <InformationTechnologyLayout>
      <Grid container className={classes.my3} alignItems="center">
        <Grid item className={classes.mRight}>
          <Typography variant="h5" component="h1">
            Posts
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => history.push("/customersitview/add")}
            variant="outlined"
            color="primary"
            size="small"
          >
            Add Customer
          </Button>
        </Grid>
      </Grid>
      <MUIDataTable
        title={"Our Customers"}
        data={props.customers}
        columns={columns}
        options={options}
      />
    </InformationTechnologyLayout>
  );
};

const mapStateToProps = state =>({
    customers: state.customers.customers
})

export default connect(mapStateToProps, {getCustomers} ) (CustomersItView);
