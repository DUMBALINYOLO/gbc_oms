import React, { useEffect, useState } from "react"
import {
  addComment,
} from '../../../actions/tickets/comments';
import { withStyles } from '@material-ui/core/styles'
import CustomizedExpansionPanels from './CustomExpansion';
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
  InputAdornment,
  TextField,
  Button,

}
from '@material-ui/core';


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




const Comments = props => {
  let tick = {
    comment: '',
    ticket_id: props.data.id,
  }
  const classes = useStyles();
  const {id} =props.data;
  const {token} = props;
  const [record, setRecord]  = useState(tick)
  const [expanded, setExpanded] = useState('panel_0')

  const saveComment = (e) => {
      e.preventDefault();
      let _record = {...record};
      if (record.id) {
          return;
      }
      else {
          props.addComment(_record, token)
      }
      props.getComments(id, token);
      setRecord(tick)
  }
  const onInputChange = (e, name) => {
      const val = (e.target && e.target.value) || '';
      let _record = {...record};
      _record[`${name}`] = val;
      setRecord(_record);
  }


  return (

      <Paper className={classes.pageContent}>
          <div>
              {props.comments.map((note, i) => CustomizedExpansionPanels(note, i, expanded, setExpanded))}
          </div>

          <div  style={{paddingTop: '40px'}}>
             <div>
               <TextField
                 variant="outlined"
                 margin="dense"
                 fullWidth
                 value={record.comment}
                 onChange={(e) => onInputChange(e, 'comment')}
                 placeholder="Write your message and hit enter to send..."
               />
             </div>

             <div className="align-box-row mt-3">
               <div className="ml-auto">
                 <Button
                   size="small"
                   variant="contained"
                   color="primary"
                   onClick={saveComment}
                  >
                   Send
                 </Button>
               </div>
             </div>
         </div>

      </Paper>

  );
};

const mapStateToProps = state =>({
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  { addComment} )
  (Comments);
