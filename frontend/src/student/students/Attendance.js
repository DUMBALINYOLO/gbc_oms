import React, { useEffect, useState } from "react"
import axios from 'axios';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
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
  { id: 'attendance', label: 'DATE' },
  { id: 'status', label: 'STATUS' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]


const Attendance = props => {
  const classes = useStyles();
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [records, setRecords] = useState([])

  const {id} =props.data


  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/people/attendance-records/?id=${id}`);

            setRecords(res.data);
        }
        catch (err) {

        }
    }

    fetchData();
}, []);


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



  return (
      <Paper className={classes.pageContent}>

      <Toolbar>
          <Controls.Input
              label="Search Attendance"
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
                          <TableCell>{item.attendance}</TableCell>
                          <TableCell>{item.status}</TableCell>
                          <TableCell>
                              <Controls.ActionButton
                                  color="primary"
                                >
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
  );
};


export default Attendance;
