import React, { useEffect, useState } from "react"
import TeacherLayout from "../layout/TeacherLayout";
import { getAdminStudents, addBursar } from '../../actions/people';
import { connect } from 'react-redux';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { useHistory } from 'react-router-dom';
import { Search } from "@material-ui/icons";
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
  { id: 'username', label: 'USERNAME' },
  { id: 'email', label: 'EMAIL' },
  { id: 'type', label: 'POSITION' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]





const options = {
  filterType: "checkbox"
};

const TeacherStudents = props => {
  const history = useHistory();
  const classes = useStyles();
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const {token} = props;

  useEffect(() => {
    if(!props.fetched) {
        props.getAdminStudents(token);
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




  const handleClick = id =>{
    history.push(`/teacherdashboard/students/${id}`)
  }

  return (
    <TeacherLayout>
      <Paper className={classes.pageContent}>

      <Toolbar>
          <Controls.Input
              label="Search Student"
              className={classes.searchInput}
              InputProps={{
                  startAdornment: (<InputAdornment position="start">
                      <Search />
                  </InputAdornment>)
              }}
          />
      </Toolbar>
      <TblContainer>
          <TblHead />
          <TableBody>
              {
                  recordsAfterPagingAndSorting().map(item =>
                      (<TableRow key={item.id}>
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.username}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>
                              <Controls.ActionButton
                                  color="primary"
                                >
                                  <EditOutlinedIcon fontSize="small" />
                              </Controls.ActionButton>
                              <Controls.ActionButton
                                  color="secondary"
                                  onClick={() => { handleClick(item.id) }}
                                >
                                  <PermIdentityIcon fontSize="small" />
                              </Controls.ActionButton>
                          </TableCell>
                      </TableRow>)
                  )
              }
          </TableBody>
      </TblContainer>
      <TblPagination />
      </Paper>
    </TeacherLayout>
  );
};

const mapStateToProps = state =>({
    records: state.people.adminstudents,
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {getAdminStudents, addBursar} )
  (TeacherStudents);
