import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import brand from '../../api/dummy/brand';
import Button from '@material-ui/core/Button';
import PrintIcon from '@material-ui/icons/Print';
import ReactToPrint from 'react-to-print';
import PapperBlock  from '../../components/PapperBlock/PapperBlock';
import Template from './Template';
// import InformationTechnologyLayout from "../layout/InformationTechnologyLayout";

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  btnArea: {
    textAlign: 'center'
  },
  wrapper: {
    width: '100%',
    overflow: 'auto'
  }
});

class AddOneTierTransactionIt extends React.Component {
  render() {
    const { classes } = this.props;
    const title = brand.name + ' -Transaction';
    const description = brand.desc;
    return (
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
          </Helmet>
          <PapperBlock title="One Tier Transaction" icon="ios-document-outline" desc="A Transaction that uses Tare Weight">
            <div className={classes.btnArea}>
              <ReactToPrint
                trigger={() => (
                  <Button className={classes.button} size="small" variant="contained" color="secondary">
                    <PrintIcon className={classes.extendedIcon} />
                    Print this out!
                  </Button>
                )}
                content={() => this.componentRef}
              />
            </div>
            <section className={classes.wrapper}>
              <Template ref={(el) => { this.componentRef = el; }} />
            </section>
          </PapperBlock>
        </div>
    );
  }
}

AddOneTierTransactionIt.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddOneTierTransactionIt);


