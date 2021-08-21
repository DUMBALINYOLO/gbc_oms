import React, {useState, useRef, useEffect } from "react"
import { Toast } from 'primereact/toast';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {
  Paper,
  makeStyles,
  Box,
  Card,
  Button,
  List,
  ListItem,
  Divider,
  Avatar,
  IconButton,
 } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {getCustomerClosedTickets} from '../../actions/tickets/customerclosedtickets';
import AOS from "aos";
import 'aos/dist/aos.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Chart from 'react-apexcharts';
import CountUp from 'react-countup';
import Trend from 'react-trend';


const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
      backgroundColor: '#424242',
  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  },
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}))


function valuetext(value) {
  return `${value}°C`;
}


const CustomerClosedTickets = props => {

  const classes = useStyles();
  const history = useHistory();
  const [seriesDialog, setSeriesDialog] = useState(false);
  const { records, token } = props;

  useEffect(() => {
    if(!props.fetched) {
        props.getCustomerClosedTickets(token)

    }
    console.log('mount it!');
  }, []);

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);

  const handleClick = id =>{
    history.push(`/customer-closed-tickets/${id}`)
  }

  const openNew = () => {
    setSeriesDialog(true);
  }

  const hideDialog = () => {
        setSeriesDialog(false);
  }

  return (
    <>

      <Paper className={classes.pageContent} data-aos="fade-left">
        <Grid
            container
            alignItems="flex-start"
            justify="flex-start"
            direction="row"
            spacing={3}
          >

          {
            records.map((ticket) => {
              return (
                <Grid
                  item
                  xs={12}
                  md={3}
                  key={ticket.id}
                >
                <Card className="mb-4 card-box-hover-rise">
                  <div className="card-header-alt px-4 pt-4 pb-0">
                    <p className="mb-0">
                      <span>{ticket.created}</span> <br/>

                    </p>
                  </div>
                  <div className=" scroll-area-sm ">
                    <PerfectScrollbar>
                      <List>

                        <ListItem className="d-flex justify-content-between align-items-center py-3">
                          <div className="d-flex align-items-center">
                            <div>
                              <a
                                className="font-weight-bold text-black"
                                title="...">
                                SUBJECT
                              </a>
                              <span className=" d-block">
                                {ticket.subject}
                              </span>
                            </div>
                          </div>
                        </ListItem>
                        <Divider className="opacity-6" />
                          <ListItem className="d-flex justify-content-between align-items-center py-3">
                            <div className="d-flex align-items-center">
                              <div>
                                <a
                                  className="font-weight-bold text-black"
                                  title="...">
                                  CATEGORY
                                </a>
                                <span className=" d-block">
                                  {ticket.category}
                                </span>
                              </div>
                            </div>
                          </ListItem>
                          <Divider className="opacity-6" />
                            <ListItem className="d-flex justify-content-between align-items-center py-3">
                              <div className="d-flex align-items-center">
                                <div>
                                  <a
                                    className="font-weight-bold text-black"
                                    title="...">
                                    PRIORITY
                                  </a>
                                  <span className=" d-block">
                                    {ticket.priority}
                                  </span>
                                </div>
                              </div>
                            </ListItem>
                      </List>
                    </PerfectScrollbar>
                  </div>
                  <div className=" p-3  text-center">
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      onClick={() => handleClick(ticket.id)}

                      >
                      <span className="btn-wrapper--label">VIEW ALL COMMENTS</span>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </span>
                    </Button>
                  </div>
                </Card>

                </Grid>
                );
              })
            }

          </Grid>
        </Paper>
    </>
  );
};


const mapStateToProps = state =>({
    records: state.customertickets.customerclosedtickets,
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {
    getCustomerClosedTickets,
  } )
  (CustomerClosedTickets);
