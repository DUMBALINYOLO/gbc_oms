import React, { useEffect, useState } from "react"
import InformationTechnologyLayout from "../layout/InformationTechnologyLayout";

import { addCustomer, editCustomer, getCustomers } from '../../actions/customers';
import { connect } from 'react-redux';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import { 
  Paper, 
  makeStyles, 
  TableBody, 
  TableRow, 
  TableCell, 
  Toolbar, 
  InputAdornment } 
from '@material-ui/core';
import AddCustomer from './AddCustomer';
import  Controls  from "../../components/formcontrols/Controls";
import  Popup  from "../../components/formcontrols/Popup";
import  useTable  from "../../components/table/useTable";



const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  }
}))


const headCells = [
  { id: 'id', label: 'ID' },
  { id: 'code', label: 'Code' },
  { id: 'name', label: 'Name' },
  { id: 'status', label: 'Status' },
  { id: 'phone_number', label: 'Phone' },
  { id: 'email', label: 'Email' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]





const options = {
  filterType: "checkbox"
};

const CustomersItView = props => {
  const { history } = props;
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [openPopup, setOpenPopup] = useState(false)

  useEffect(() => {
    if(!props.fetched) {
        props.getCustomers();
    }
    console.log('mount it!');

    
  }, []);


  const addOrEdit = (customer, resetForm) => {
      if (customer.id > 0)
        props.editCustomer(customer.id, customer)    
      else
        props.addCustomer(customer)
        //   
      resetForm()
      setRecordForEdit(null)
      setOpenPopup(false)
      console.log(customer)
  }

  
  
  const {records} = props;

  const {
      TblContainer,
      TblHead,
      TblPagination,
      recordsAfterPagingAndSorting
  } = useTable(records, headCells, filterFn);

  const handleSearch = e => {
      let target = e.target;
      setFilterFn({
          fn: items => {
              if (target.value === "")
                  return items;
              else
                  return items.filter(x => x.name.toLowerCase().includes(target.value))
          }
      })
  }

  const openInPopup = item => {
      setRecordForEdit(item)
      setOpenPopup(true)
  }

  return (
    <InformationTechnologyLayout>
      <Paper className={classes.pageContent}>

      <Toolbar>
          <Controls.Input
              label="Search Customers"
              className={classes.searchInput}
              InputProps={{
                  startAdornment: (<InputAdornment position="start">
                      <Search />
                  </InputAdornment>)
              }}
              onChange={handleSearch}
          />
          <Controls.Button
              text="Add New"
              variant="outlined"
              startIcon={<AddIcon />}
              className={classes.newButton}
              onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
          />
      </Toolbar>
      <TblContainer>
          <TblHead />
          <TableBody>
              {
                  recordsAfterPagingAndSorting().map(item =>
                      (<TableRow key={item.id}>
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.code}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.status}</TableCell>
                          <TableCell>{item.phone_number}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>
                              <Controls.ActionButton
                                  color="primary"
                                  onClick={() => { openInPopup(item) }}>
                                  <EditOutlinedIcon fontSize="small" />
                              </Controls.ActionButton>
                              <Controls.ActionButton
                                  color="secondary">
                                  <CloseIcon fontSize="small" />
                              </Controls.ActionButton>
                          </TableCell>
                      </TableRow>)
                  )
              }
          </TableBody>
      </TblContainer>
      <TblPagination />
      </Paper>
      <Popup
      title="Customer Form"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      >
        <AddCustomer
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit} 
        />
      </Popup>
    </InformationTechnologyLayout>
  );
};

const mapStateToProps = state =>({
    records: state.customers.customers,

})

export default connect(
  mapStateToProps, 
  {getCustomers, addCustomer, editCustomer} ) 
  (CustomersItView);
