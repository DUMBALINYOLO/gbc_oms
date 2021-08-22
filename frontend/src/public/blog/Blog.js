import React, {useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Corporate from '../../containers/Templates/Corporate';
import { withStyles } from '@material-ui/core/styles';
import AOS from "aos";
import 'aos/dist/aos.css';
import {
  getBlog
} from '../../actions/blogs';
import {
  Grid,
  InputAdornment,
  Box,
  Typography,
  Checkbox,
  Tabs,
  Tab,
  Card,
  Button,
  TextField,
  Divider
} from '@material-ui/core';


import SearchIcon from '@material-ui/icons/Search';




const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'primary',
    paddingTop: '65px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
});


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const Service = (props) => {
  const [value, setValue] = React.useState(0);
  const { classes,blog } = props;

  

  useEffect(() => {
    if(!props.fetched) {
      props.getBlog(props.match.params.id);
    }
    console.log('mount it!');

  }, []);

  useEffect(() =>{
    AOS.init({duration : 3000})

  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Corporate>
      <div className={classes.root} data-aos="zoom-in-up">
        <Card className="card-box mb-4">
        <Grid container spacing={4}>
            <Grid item xs={12} lg={12}>
                <Card className="mb-4">
                <div className="card-badges">
                    <span className="h-auto px-3 py-1 badge badge-warning badge-pill">
                      AUTHOR: {blog.author}
                    </span>
                  </div>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="image-title-overlay"
                    title="...">
                    <div className="image-title-overlay--bottom">
                      <h3 className="display-4 font-weight-bold m-0 text-white">
                        {blog.title}
                      </h3>
                    </div>
                    <img 
                      alt="..." className="card-img-top" 
                      src={blog.image}
                      style={{height: '400px'}}
                    />
                  </a>
                </Card>
              </Grid>
        </Grid>

          <div>
            <div className="d-block p-3 d-md-flex justify-content-between align-items-center text-center text-md-left">
              <div className="d-flex flex-md-row flex-column align-items-center">
                <div className="mx-3 d-none d-md-block">
                  <div className="divider-v position-relative" />
                  <div className="divider-v position-relative" />
                </div>
                <div>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
              </div>
              <div className="d-block d-md-flex align-items-center">
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  className="font-weight-bold px-3">
                  {blog.title}
                </Button>
              </div>
            </div>
            <Divider />
            <Tabs
              value={value}
              indicatorColor="secondary"
              textColor="secondary"
              variant="fullWidth"
              onChange={handleChange}>
              <Tab label="CONTENT" />
            </Tabs>
          </div>
        </Card>
        <TabPanel value={value} index={0}>
          <Grid container spacing={4} data-aos="zoom-in-up">
            
            <Grid item xs={12} md={12}>
              <Card className="card-box mb-4 pt-4" data-aos="zoom-in-up">
                <div className="d-flex align-items-center px-4 mb-3">
                  <div className="w-100">
                    <Button
                        color="primary"
                        className="btn-gradient text-white bg-night-sky text-left px-4 py-3 w-100 rounded-lg">
                      
                        <span className=" d-block pb-1">
                          {blog.content}
                        </span>
                      </Button>
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
      </div>
    </Corporate>
  );
};
const mapStateToProps = state =>({
  blog: state.blogs.blog,

})

const MappedServices = connect(
mapStateToProps,
{getBlog})
(Service);

export default withStyles(styles)(MappedServices);

