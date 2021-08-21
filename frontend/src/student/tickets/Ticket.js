import React, { Fragment, useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Corporate from '../layout/StudentLayout';
import Comments from './Comments';
import {getComments} from '../../actions/tickets/comments';
import {getCustomerOpenTicket} from '../../actions/tickets/customertickets';

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
        props.getCustomerOpenTicket(props.match.params.id, token)
        props.getComments(props.match.params.id, token)

    }
    console.log('mount it!');
  }, []);




  return (
    <Corporate>


        <Comments
          comments={props.comments}
          data={props.ticket}
          getComments={props.getComments}

        />

    </Corporate>
  );
};

const mapStateToProps = state => ({
    ticket: state.customertickets.customeropenticket,
    comments: state.comments.comments,
    token: state.auth.token,
});



const TicketMapped = connect(
    mapStateToProps,
    {
      getCustomerOpenTicket,
      getComments
    }
  )(Ticket);


export default withStyles(styles)(TicketMapped);
