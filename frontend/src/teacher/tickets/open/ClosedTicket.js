import React, { Fragment, useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ManagementLayout from '../../layout/TeacherLayout';
import Comments from './Comments';
import {getComments} from '../../../actions/tickets/comments';
import {getAssignedClosedTicket} from '../../../actions/tickets/assignedclosedtickets';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    paddingTop: '40px',
    backgroundColor: theme.palette.background.paper,
  },
  tabs:{
    backgroundColor: theme.palette.background.paper
  }
});

const Ticket = (props) => {
  const { classes, token } = props;

  useEffect(() => {
    if(!props.fetched) {
        props.getAssignedClosedTicket(props.match.params.id, token)
        props.getComments(props.match.params.id, token)

    }
    console.log('mount it!');
  }, []);



  return (
    <ManagementLayout>
      

        <Comments
          comments={props.comments}
          data={props.ticket}
          getComments={props.getComments}

        />

    </ManagementLayout>
  );
};

const mapStateToProps = state => ({
    ticket: state.assignedclosedtickets.assignedclosedticket,
    comments: state.comments.comments,
    token: state.auth.token,
});



const TicketMapped = connect(
    mapStateToProps,
    {
      getAssignedClosedTicket,
      getComments
    }
  )(Ticket);


export default withStyles(styles)(TicketMapped);
