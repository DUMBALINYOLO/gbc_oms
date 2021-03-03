import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Edit';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LocalPhone from '@material-ui/icons/LocalPhone';
import Email from '@material-ui/icons/Email';
import Smartphone from '@material-ui/icons/Smartphone';
import LocationOn from '@material-ui/icons/LocationOn';
import Work from '@material-ui/icons/Work';
import Language from '@material-ui/icons/Language';
import Divider from '@material-ui/core/Divider';
import styles from './profile-jss';
import {getBursarProfile, editBursarProfile} from "../../../actions/people";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {editAction} from '../../../actions/uiactions';
import  Popup  from "../../../components/formcontrols/Popup";
import ProfileForm from './ProfileForm';
import WhatsApp from '@material-ui/icons/WhatsApp';
import People from '@material-ui/icons/People';
import School from '@material-ui/icons/School';
import Fingerprint from '@material-ui/icons/Fingerprint';
import AccountBox from '@material-ui/icons/AccountBox';
import Person from '@material-ui/icons/Person';
import Filter1 from '@material-ui/icons/Filter1';
import Filter2 from '@material-ui/icons/Filter2';
import Filter3 from '@material-ui/icons/Filter3';


const ITEM_HEIGHT = 48;

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      anchorElOpt: null,
      showMobileDetail: false,
      recordForEdit: null,
      openPopup: false,
    };
    this.openInPopup = this.openInPopup.bind(this);
    this.setOpenPopup = this.setOpenPopup.bind(this);
    this.setRecordForEdit = this.setRecordForEdit.bind(this);
    this.addOrEdit= this.addOrEdit.bind(this);
}


  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.getBursarProfile(this.props.id, this.props.token);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getBursarProfile(this.props.id, newProps.token);
      }
    }
  }

  openInPopup = (item) => {
      this.setState({recordForEdit: item})
      this.setState({openPopup: true})
  }

  setOpenPopup = () => {
      this.setState({openPopup: false})
  }

  setRecordForEdit = ()  => {
    this.setState({recordForEdit: null})
  }



  addOrEdit = (profile, resetForm) => {
    this.props.editBursarProfile(this.props.id, profile, this.props.token);
    resetForm();
    this.setRecordForEdit(null);
    this.setOpenPopup(false);
    this.props.getBursarProfile(this.props.id, this.props.token);
  }



  render() {
    const {
      classes,
      edit,
      hideDetail,
      profile,
    } = this.props;
    const { anchorElOpt, recordForEdit, openPopup } = this.state;

    return (
      <main className={classNames(classes.content, this.state.showMobileDetail ? classes.detailPopup : '')}>
        <section className={classes.cover}>
          <div className={classes.opt}>
            <IconButton aria-label="Edit" onClick={() => this.openInPopup(profile)}>
              <Edit />
            </IconButton>
          </div>
          <IconButton
            onClick={hideDetail}
            className={classes.navIconHide}
            aria-label="Back"
          >
            <ArrowBack />
          </IconButton>
        </section>
        <div>
          <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.blueIcon}>
                    <AccountBox />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={profile.id} secondary="ID" />
              </ListItem>
              <Divider variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.blueIcon}>
                    <School />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={profile.title} secondary="TITLE" />
              </ListItem>
              <Divider variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.blueIcon}>
                    <Fingerprint />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={profile.id_number} secondary="NATIONAL IDENTITY NUMBER" />
              </ListItem>
              <Divider variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.blueIcon}>
                    <Person />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={profile.name} secondary="USERNAME" />
              </ListItem>
              <Divider variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.blueIcon}>
                    <Filter1 />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={profile.first_name} secondary="FIRST NAME" />
              </ListItem>
              <Divider variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.blueIcon}>
                    <Filter2 />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={profile.middle_name} secondary="MIDDLE NAME" />
              </ListItem>
              <Divider variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.blueIcon}>
                    <Filter3 />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={profile.last_name} secondary="LAST NAME" />
              </ListItem>
              <Divider variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.blueIcon}>
                    <People />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={profile.gender} secondary="GENDER" />
              </ListItem>
              <Divider variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.blueIcon}>
                    <LocalPhone />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={profile.phone_number} secondary="PHONE" />
              </ListItem>
              <Divider variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.blueIcon}>
                    <WhatsApp />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={profile.whatsapp_number} secondary="WHATSAPP" />
              </ListItem>
          </List>
        </div>
        <Popup
        title="Bursar Form"
        openPopup={openPopup}
        setOpenPopup={this.setOpenPopup}
        >
          <ProfileForm
              recordForEdit={recordForEdit}
              addOrEdit={this.addOrEdit}

          />
        </Popup>
      </main>
    );
  }
}


const mapStateToProps = state => {
  return {
    profile: state.people.bursarprofile,
    token: state.auth.token,
  };
};

const constDispatchToProps = dispatch => ({
  getBursarProfile: bindActionCreators(getBursarProfile, dispatch),
  editBursarProfile: bindActionCreators(editBursarProfile, dispatch),
  edit: bindActionCreators(editAction, dispatch),

});


const ProfileMapped = connect(
  mapStateToProps,
  constDispatchToProps
)(Profile);


export default withStyles(styles)(ProfileMapped);
