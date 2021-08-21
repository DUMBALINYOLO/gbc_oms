import React, { Fragment, useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import clsx from 'clsx';
import ManagementLayout from '../../layout/InformationTechnologyLayout';
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

import Comments from './Comments';
import {getComments} from '../../../actions/tickets/comments';
import {getOpenTicket} from '../../../actions/tickets/opentickets';

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
        props.getOpenTicket(props.match.params.id, token)
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
    ticket: state.opentickets.openticket,
    comments: state.comments.comments,
    token: state.auth.token,
});



const TicketMapped = connect(
    mapStateToProps,
    {
      getOpenTicket,
      getComments
    }
  )(Ticket);


export default withStyles(styles)(TicketMapped);
