import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './helpSupport-jss';
import {
  makeStyles,
  Paper,
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),


  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  }
}))


const About =(props) => {
  const [expanded, setExpanded] = useState('panel1')


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel:false);
  };

    const { classes } = props;
    const cecisa = useStyles();


    return (
      <Paper className={cecisa.pageContent}>

        <ExpansionPanel  className='card-box-hover-rise-alt bg-royal' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>COMPANY NAME</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              GERERE PROJECTS AND SUPPLIES
              TRADING AS GERERE BUSINESS COLLEGE
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  className='card-box-hover-rise-alt bg-royal' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>MISSION</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                To recreate global, ethical leaders and challenge them to lead with noticeable skills, agility, and competitiveness. To deploy the best facilitators, recent technology, and future-focused tools to empower and inspire our learner leaders. To challenge present and future leaders to lead consciously by escorting them in a journey of self-discovery in conscious and subconscious space.o prepare a fertile mind through mindful engagements preparing individuals for tough conversations. To seek endorsement, then unfreeze and re-freeze the agility appreciation to leaders at all levels. To acknowledge the individual uniqueness by enhancing their positive attributes.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className='card-box-hover-rise-alt bg-royal' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              WHY CHOOSE GERERE BUSINESS COLLEGE
          </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>
                Our clients are our lifetime partners, we grow and reach unthinkable heights with them.
                We help our clients not only to
                level the play field but catapult them into trend-setters. We value relationships more
                than profits!
                At Gerere   Business College, our learners ‘overall best interest would always come first,
                and everything
                we do is guided by our values and professional ethics. We allocate professional tutors/lectures in all encounters, who are well experienced and passionate in imparting knowledge to learners at various learning ladders.
                We hold ourselves accountable to the highest standards, by meeting our learners’
                needs precisely and completely. We cultivate a working environment that provides a humane,
                sustainable approach to earning a living, and living in our world, for our partners, employees and for our students.
                We are a solution to small and medium businesses that cannot afford the offers from lager
                institutions, yet we surpass any imaginable value.
                Our products and services remain vivid in the minds of those we service.

              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className='card-box-hover-rise-alt bg-royal' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading} style={{textAlign: 'center'}}>VALUES</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>
                Greatness – we do not settle for known heights!  <br />
                Robustness – our quality is beyond any situation! <br />
                Integrity – we stick to our promises! <br />
                Trendsetting – we Lead, we originate and we innovate! <br />

              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className='card-box-hover-rise-alt bg-royal' expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>OUR TEACHING MODEL – CHANGING MINDSETS</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>
                The Whole Brain Thinking is a methodology designed to help leaders and their teams,
                individuals and entrepreneurs, teams, and
                organisations to a better way, to benefit from all the thinking available to them.
                It recognises that while diverse tasks require different intellectual processes and
                different people favour different kinds of discerning, organisations tend to get better
                results when they can deliberately leverage the full spectrum of thinking at their disposal.
                With better and diverse thinking, organisations and groups get improved results and the
                competitive advantage that comes with this. This kind of success is leveraged
                through an agile and smarter thinking while organisations can fulfil their critical
                objectives quicker and reap a return on their efforts. We help organisations get an
                upper hand with immediate results before their competitors, through the Whole Brain
                Thinking approach, when doing business. We assist leaders understand their thinking styles
                as individuals, and this set them apart from those who do not take advantage of teamwork.
                We put into perspective, people’s insights into their approach across thinking preferences.
                Our input and coaching services convert the culture of a company from a mere recitation to a

              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className='card-box-hover-rise-alt bg-royal' expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>TEACHING METHODOLOGY</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
             Presentation of the programmes take the form of online, virtual as well as class
             presentations while observing social distancing protocol.
             The client’s wish is our command. Presentations are characterised by
             case studies, real-time challenges in a form of in-class sharing and
             immediate application back at the workplace that are supported by assignments
             in a form of proof of evidence. So, return on investment is immediate and easy to measure.
              Learners will access the learning material online and they may print out copies thereof.
              More information is supplied on registration. Course content may include videos and online
              case studies.

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className='card-box-hover-rise-alt bg-royal' expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>SERVICES</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                We provide the following services with utmost professionalism and with product quality in mind.
                  (1) Publishing <br />
                  (2) Translation <br />
                  (3)  Book editing <br />
                  (4)    Proof reading <br />
                  (5)    Book Reviews <br />
                  (6)        Professional online profiling <br />
                  (7)          Book cover designs <br />
                  (8)            Bulk printing <br />
                  (9)      Typesetting <br />
                  (10)      ISBN allocation <br />
                  (11)          Book launch & venue arrangements <br />
                  (12)        Online book marketing and selling <br />
                  (13)    Special dedications <br />
                  (14)      Writer mentorship <br />

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
  );
}



export default withStyles(styles)(About);
