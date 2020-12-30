import React, { useEffect } from "react"
import InformationTechnologyLayout from "../layout/InformationTechnologyLayout";
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import {getProducts } from '../../actions/products';
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
     label: "Product Code",
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
     label: "Status",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "category",
     label: "Category",
     options: {
      filter: true,
      sort: false,
     }
    },
   ];
   


const options = {
  filterType: "checkbox"
};

const ProductsItView = props => {
  const { history } = props;
  const classes = useStyles();

  useEffect(() => {
    if(!props.fetched) {
        props.getProducts();
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
            onClick={() => history.push("/productsitview/add")}
            variant="outlined"
            color="primary"
            size="small"
          >
            Add Product
          </Button>
        </Grid>
      </Grid>
      <OftadehBreadcrumbs path={history} />
      <MUIDataTable
        title={"Products List"}
        data={props.products}
        columns={columns}
        options={options}
      />
    </InformationTechnologyLayout>
  );
};

const mapStateToProps = state =>({
    products: state.products.products
})

export default connect(mapStateToProps, {getProducts} ) (ProductsItView);
