import React, { Fragment , useEffect} from 'react';

import { Grid, Container, Button } from '@material-ui/core';

import svgImage1 from '../../assets/images/illustrations/business_plan.svg';

import svgImage13 from '../../assets/images/illustrations/businesswoman.svg';
import svgImage14 from '../../assets/images/illustrations/powerful.svg';
import AOS from "aos";
import 'aos/dist/aos.css';


export default function LivePreviewExample() {

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);



  return (
    <Fragment>
      <div className="feature-section" data-aos="flip-left">
          <h1 style={{textAlign: 'center', color: '#33B2FF'}}>OUR SERVICES</h1>
        <Container className="pt-5">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <div className="feature-box text-center mb-4">
                <img
                  src={svgImage1}
                  className="w-25 mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-lg font-weight-bold my-3" style={{ color: '#33B2FF'}}>WE REGISTER</h3>
                <Button color="secondary" size="small" title="Learn more">
                    <span>GERERE PROJECTS & SUPPLIES TRADING AS GERERE BUSINESS COLLEGE</span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="feature-box text-center mb-4">
                <img
                  src={svgImage13}
                  className="w-25 mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-lg font-weight-bold my-3" style={{ color: '#33B2FF'}}> 
                    WE FACILITATE
                </h3>
                
                <Button color="secondary" size="small" title="Learn more">
                  <span> AT GERERE PROJECTS & SUPPLIES TRADING AS GERERE BUSINESS COLLEGE</span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="feature-box text-center mb-4">
                <img
                  src={svgImage14}
                  className="w-25 mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-lg font-weight-bold my-3" style={{ color: '#33B2FF'}}>WE MODERATE</h3>
                
                <Button color="secondary" size="small" title="Learn more">
                    <span>AT GERERE PROJECTS & SUPPLIES TRADING AS GERERE BUSINESS COLLEGE</span>
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="feature-section" data-aos="flip-right">
        <Container className="pt-5">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <div className="feature-box text-center mb-4">
                <img
                  src={svgImage1}
                  className="w-25 mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-lg font-weight-bold my-3" style={{ color: '#33B2FF'}}>WE ASSESS</h3>
                <Button color="secondary" size="small" title="Learn more">
                    <span>GERERE PROJECTS & SUPPLIES TRADING AS GERERE BUSINESS COLLEGE</span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="feature-box text-center mb-4">
                <img
                  src={svgImage13}
                  className="w-25 mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-lg font-weight-bold my-3" style={{ color: '#33B2FF'}}>
                    WE DO BUSINESS COACHING
                </h3>
                
                <Button color="secondary" size="small" title="Learn more">
                  <span> AT GERERE PROJECTS & SUPPLIES TRADING AS GERERE BUSINESS COLLEGE</span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="feature-box text-center mb-4">
                <img
                  src={svgImage14}
                  className="w-25 mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-lg font-weight-bold my-3" style={{ color: '#33B2FF'}}>WE ARE CHAMPIONS OF SUSTAINABILITY</h3>
                
                <Button color="secondary" size="small" title="Learn more">
                    <span>AT GERERE PROJECTS & SUPPLIES TRADING AS GERERE BUSINESS COLLEGE</span>
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
