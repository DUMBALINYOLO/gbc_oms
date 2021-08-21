import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Corporate from '../../containers/Templates/Corporate';
import AOS from "aos";
import 'aos/dist/aos.css';
import OngoingCourses from './OngoingCourses';
import UpcomingCourses from './UpcomingCourses';




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

const Adverts = (props) => {
    const [value, setValue] = useState(0)
    const { classes } = props;




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
                        <Tab label="ONGOING" />
                        <Tab label="UPCOMING" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><OngoingCourses /></TabContainer>}
                {value === 1 && <TabContainer><UpcomingCourses/></TabContainer>}
               
            </div>
        </Corporate>
    );
}






export default withStyles(styles)(Adverts);
