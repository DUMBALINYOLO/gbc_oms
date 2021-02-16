import React, { useEffect, useState } from "react"
import InformationTechnologyLayout from "../layout/InformationTechnologyLayout";
import { getHauliers } from '../../actions/hauliers';
import { addHaulier, editHaulier } from '../../actions/hauliers';
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
import AddHaulier from './AddHaulier';
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
  { id: 'code', label: 'Haulier Code' },
  { id: 'name', label: 'Name' },
  { id: 'status', label: 'Status' },
  { id: 'address_one', label: 'First Address' },
  { id: 'address_two', label: 'Second Address' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]





const options = {
  filterType: "checkbox"
};

const HauliersItView = props => {
  const { history } = props;
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [openPopup, setOpenPopup] = useState(false)

  useEffect(() => {
    if(!props.fetched) {
        props.getHauliers();
    }
    console.log('mount it!');

    
  }, []);


  const addOrEdit = (haulier, resetForm) => {
      if (haulier.id > 0)
        props.editHaulier(haulier.id,haulier)    
      else
        props.addHaulier(haulier)
        //   
      resetForm()
      setRecordForEdit(null)
      setOpenPopup(false)
      console.log(haulier)
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
              if (target.value == "")
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
              label="Search Hauliers"
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
                          <TableCell>{item.address_one}</TableCell>
                          <TableCell>{item.address_two}</TableCell>
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
      title="Haulier Form"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      >
        <AddHaulier
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit} 
        />
      </Popup>
    </InformationTechnologyLayout>
  );
};

const mapStateToProps = state =>({
    records: state.hauliers.hauliers
})

export default connect(
  mapStateToProps, 
  {getHauliers, addHaulier, editHaulier} ) 
  (HauliersItView);
