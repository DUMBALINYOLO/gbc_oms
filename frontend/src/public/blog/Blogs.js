import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Corporate from '../../containers/Templates/Corporate';
import AOS from "aos";
import 'aos/dist/aos.css';
import {
  getBlogs
} from '../../actions/blogs';
import Newsletters from './Newsletters'



function TabContainer(props) {
    const { children } = props;
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        paddingTop: '40px',
        backgroundColor: theme.palette.background.paper,
    },
    tabs: {
        backgroundColor: theme.palette.background.paper
    }
});

const Blogs = (props) => {
    const [value, setValue] = useState(0)
    const { classes } = props;
    const {records} = props;

    useEffect(() => {
    if(!props.fetched) {
        props.getBlogs();
    }
    console.log('mount it!');

  }, []);



    useEffect(() => {
        AOS.init({ duration: 2000 })

    }, []);

    const handleChange = (event, value) => {
        setValue(value);
    };


    return (
        <Corporate>
            <div className={classes.root} data-aos="fade-right">
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="secondary"
                        className={classes.tabs}
                    >
                        <Tab label="GERERE BUSINESS COLLEGE NEWSLETTER" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><Newsletters records={records} /></TabContainer>}
            </div>
        </Corporate>
    );
}





const mapStateToProps = state =>({

  records: state.blogs.blogs,
})



const AttendanceMapped = connect(
  mapStateToProps,
  {getBlogs}
)(Blogs);

export default withStyles(styles)(AttendanceMapped);
