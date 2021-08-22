import React, { Fragment, useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ManagementLayout from '../../layout/InformationTechnologyLayout';
import Comments from './Comments';
import {getComments} from '../../../actions/tickets/comments';
import {getReOpenedTicket} from '../../../actions/tickets/reopenedtickets';

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
        props.getReOpenedTicket(props.match.params.id, token)
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
    ticket: state.reopenedtickets.reopenedticket,
    comments: state.comments.comments,
    token: state.auth.token,
});



const TicketMapped = connect(
    mapStateToProps,
    {
        getReOpenedTicket,
      getComments
    }
  )(Ticket);


export default withStyles(styles)(TicketMapped);
