import React, { Fragment, useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import clsx from 'clsx';
import Corporate from '../layout/StudentLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import classNames from 'classnames';
import {
  Grid,
  Fab,
  IconButton,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  Tooltip,
  TextField
} from '@material-ui/core';

import Comments from './ClosedComments';
import {getComments} from '../../actions/tickets/comments';
import {getCustomerClosedTicket} from '../../actions/tickets/customertickets';

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
        props.getCustomerClosedTicket(props.match.params.id, token)
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
    ticket: state.customertickets.customerclosedticket,
    comments: state.comments.comments,
    token: state.auth.token,
});



const TicketMapped = connect(
    mapStateToProps,
    {
      getCustomerClosedTicket,
      getComments
    }
  )(Ticket);


export default withStyles(styles)(TicketMapped);