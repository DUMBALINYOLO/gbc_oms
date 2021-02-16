import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import  PapperBlock  from '../../components/PapperBlock/PapperBlock';
import styles from './helpSupport-jss';

class Qna extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <PapperBlock title="TESTIMONIALS" icon="ios-help-circle-outline" whiteBg desc="HERE IS WHAT OUR SATISFIED CLIENTS SAY">
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Which parts of the programme did you really like?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              “The openness of the instructor, and manner at which each question is 
              treated makes one want to ask more, because the response will be more 
              than what was asked. Everyone in class is made to feel important and relevant. 
              This is very encouraging.”
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>What is your message for Management/the company now that you have done the programme?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              “Change management should be highlighted especially where potential traumatic events are taking place.“
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>What are the specific benefits you believe the team have gained from the programme?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              “The most obvious is engaging with colleagues and peers outside of the normal 
              working environment, expanding your network, getting to know people in a 
              different environment and realising that we all have similar experiences and 
              challenges that we have to deal with, that requires additional and different 
              skills. The programme also made me realise that albeit the basic tenets of 
              management have remained the same, it has adapted to align with our current 
              working reality and that continuous learning, refresher training is extremely 
              important so that one is not left behind”
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </PapperBlock>
    );
  }
}

Qna.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Qna);
