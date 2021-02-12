import React, { useEffect, useState } from "react"
import InformationTechnologyLayout from "../layout/InformationTechnologyLayout";
import AddOneTierTransactionIt from './AddOneTierTransactionIt'
import { getTwoTierTransactionsAdminView } from '../../actions/transactions';
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
  { id: 'order_number', label: 'NUMBER' },
  { id: 'status', label: 'Status' },
  { id: 't_type', label: 'TYPE' },
  { id: 'total_gross', label: 'TOTAL GROSS' },
  { id: 'net', label: 'NET' },
  { id: 'actions', label: 'Actions', disableSorting: true }

]



const options = {
  filterType: "checkbox"
};

const PendingTransactionItView= props => {
  const classes = useStyles();
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [openPopup, setOpenPopup] = useState(false)

  useEffect(() => {
    if(!props.fetched) {
        props.getTwoTierTransactionsAdminView();
    }
    console.log('mount it!');

    
  }, []);



  
  
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
      setOpenPopup(true)
  }

  return (
    <InformationTechnologyLayout>
      <Paper className={classes.pageContent}>

      <Toolbar>
          <Controls.Input
              label="Search Transactions"
              className={classes.searchInput}
              InputProps={{
                  startAdornment: (<InputAdornment position="start">
                      <Search />
                  </InputAdornment>)
              }}
              onChange={handleSearch}
          />
          <Controls.Button
              text="Add New Transaction"
              variant="outlined"
              startIcon={<AddIcon />}
              className={classes.newButton}
              onClick={() => { setOpenPopup(true); }}
          />
      </Toolbar>
      <TblContainer>
          <TblHead />
          <TableBody>
              {
                  recordsAfterPagingAndSorting().map(item =>
                      (<TableRow key={item.id}>
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.order_number}</TableCell>
                          <TableCell>{item.status}</TableCell>
                          <TableCell>{item.t_type}</TableCell>
                          <TableCell>{item.total_gross}</TableCell>
                          <TableCell>{item.net}</TableCell>
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
      title="Create Transaction"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      >
          <AddOneTierTransactionIt />
        
      </Popup>
    </InformationTechnologyLayout>
  );
};

const mapStateToProps = state =>({
    records: state.transactions.admintwotiertransactions,
})

export default connect(
  mapStateToProps, 
  {getTwoTierTransactionsAdminView} ) 
  (PendingTransactionItView);



