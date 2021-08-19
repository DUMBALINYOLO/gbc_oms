import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Container,
  Input,
  InputLabel,
  InputAdornment,
  FormControlLabel,
  IconButton,
  Box,
  Typography,
  Checkbox,
  Tabs,
  Tab,
  Card,
  CardContent,
  Button,
  Tooltip,
  TextField,
  FormControl
} from '@material-ui/core';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

import hero9 from './icon.jpg';
import { InputText } from 'primereact/inputtext';
import { NavLink as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Corporate from '../../containers/Templates/Corporate';
import {Password} from 'primereact/password';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: '6px',
    '& > div': {
      maxWidth: 40,
      height: '4px',
      borderRadius: '25px',
      width: '100%',
      backgroundColor: '#000'
    }
  }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: theme.palette.primary[900],
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />);

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

const LivePreviewExample = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [checked1, setChecked1] = React.useState(true);

  const handleChange1 = event => {
    setChecked1(event.target.checked);
  };

  return (
    <Corporate>
      <div className="app-wrapper min-vh-100">
        <div className="app-main min-vh-100">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <Grid container spacing={0} className="min-vh-100">
                    <Grid
                      item
                      xs={12}
                      md={4}
                      lg={5}
                      className="d-flex align-items-center">
                      <div className="hero-wrapper w-100 bg-composed-wrapper min-vh-100">
                        <div className="flex-grow-1 w-100 d-flex align-items-center">
                          <div
                            className="bg-composed-wrapper--image"
                            style={{ backgroundImage: 'url(' + hero9 + ')' }}
                          />
                          <div className="bg-composed-wrapper--bg bg-premium-dark opacity-5" />
                          <div className="bg-composed-wrapper--content p-5">
                            <div className="d-flex align-items-center">
                              <span className="px-4 h-auto py-1 badge badge-second badge-pill">
                                Register page
                              </span>
                              <Tooltip
                                arrow
                                title="Create your own register or login pages using the included elements."
                                placement="right">
                                <span className="text-white-50 pl-3">
                                  <FontAwesomeIcon
                                    icon={['far', 'question-circle']}
                                  />
                                </span>
                              </Tooltip>
                            </div>
                            <div className="text-white mt-3">
                              <h1 className="display-4 my-3 font-weight-bold">
                                Por que você deve criar uma conta?
                              </h1>
                              <p className="font-size-md mb-0 text-white-50">
                                Uma hora livre, quando nosso poder de escolha é ilimitado e nada impede.
                              </p>
                              <div className="divider border-2 my-5 border-light opacity-2 rounded w-25" />
                            </div>
                          </div>
                        </div>
                        <div className="hero-footer pb-4">
                          <Tooltip arrow title="Facebook">
                            <IconButton
                              color="inherit"
                              size="medium"
                              variant="outlined"
                              className="text-white-50">
                              <FontAwesomeIcon
                                icon={['fab', 'facebook']}
                                className="font-size-md"
                              />
                            </IconButton>
                          </Tooltip>
                          <Tooltip arrow title="Twitter">
                            <IconButton
                              color="inherit"
                              size="medium"
                              variant="outlined"
                              className="text-white-50">
                              <FontAwesomeIcon
                                icon={['fab', 'twitter']}
                                className="font-size-md"
                              />
                            </IconButton>
                          </Tooltip>
                          <Tooltip arrow title="Google">
                            <IconButton
                              color="inherit"
                              size="medium"
                              variant="outlined"
                              className="text-white-50">
                              <FontAwesomeIcon
                                icon={['fab', 'google']}
                                className="font-size-md"
                              />
                            </IconButton>
                          </Tooltip>
                          <Tooltip arrow title="Instagram">
                            <IconButton
                              color="inherit"
                              size="medium"
                              variant="outlined"
                              className="text-white-50">
                              <FontAwesomeIcon
                                icon={['fab', 'instagram']}
                                className="font-size-md"
                              />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={8}
                      lg={7}
                      className="d-flex align-items-center">
                      <Container maxWidth="sm">
                        <div className="pt-5 pb-4">
                          <StyledTabs
                            value={value}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={handleChange}>
                            <StyledTab label="Crie a sua Conta" />
                            <StyledTab label="Logar" />
                          </StyledTabs>
                        </div>
                        <TabPanel value={value} index={0}>
                          <TextField
                              label="Email"
                              placeholder='Enter Email'
                              fullWidth required
                              name = "email"
                          />


                        </TabPanel>
                        <TabPanel value={value} index={1}>
                          <h3 className="display-4 mb-2 font-weight-bold">
                            Conta Existente
                          </h3>
                          <p className="font-size-lg mb-5 text-black-50">
                            Você já tem uma conta? Preencha os campos abaixo para fazer o login em seu painel existente.
                          </p>

                          <Card className="mx-0 mt-0 w-100 p-0 mb-4 border-0">
                            <CardContent >
                              <div className="p-fluid p-formgrid p-grid">
                                  <div className="p-field p-col-12 p-md-12">
                                    <label htmlFor="righticon">EMAIL</label>
                                    <span className="p-float-label p-input-icon-right">
                                        <i className="pi pi-spin" />
                                        <InputText
                                            id="name"
                                            name="email"
                                            label="Name"
                                            tooltip="Choose Email"
                                        />
                                    </span>
                                  </div>
                                  <div className="p-field p-col-12 p-md-12">
                                    <label htmlFor="righticon">PASSWORD</label>
                                    <span className="p-float-label p-input-icon-right">
                                        <i className="pi pi-spin" />
                                        <Password
                                          toggleMask
                                        />
                                    </span>
                                  </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabPanel>
                      </Container>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Corporate>
  );
};

export default LivePreviewExample;
