import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel)

const ExpansionPanelDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails)

const MsgList = [
  {
    id: 1,
    title: "Backup the Database every 30mins",
    subTitle: "December 4, 2020, 1:03:13 pm"
  },
  {
    id: 2,
    title: "Fix the WeighBridge Sensors",
    subTitle: "December 3, 2020, 12:57:11 am"
  },
  {
    id: 3,
    title: "Go to the Rutenga Branch",
    subTitle: "December 4, 2020, 1:03:13 pm"
  }
];



const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary)


export default function CustomizedExpansionPanels(note , id, expanded, setExpanded) {
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }
    const { title, data,  created} = note;


    return (
        <div>
            <ExpansionPanel square expanded={expanded === `panel_${id}`} onChange={handleChange(`panel_${id}`)}>
                <ExpansionPanelSummary aria-controls={`panel_${id}d-content`} id={`panel_${id}d-header`}>
                    <Typography style={{ color: 'teal' }}>{`${title}  ${created}`}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        data={MsgList}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}
