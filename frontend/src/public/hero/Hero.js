import React, { Fragment, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Container,
  Card,
  CardContent,
  Button,
  Tooltip
} from '@material-ui/core';


import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import svgImage2 from '../../assets/images/illustrations/reading.svg';

import hero6 from './three.jpg';
import AOS from "aos";
import 'aos/dist/aos.css';


export default function LivePreviewExample() {
  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);


  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-white" data-aos="zoom-in-up">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-9"
            style={{ backgroundImage: 'url(' + hero6 + ')' }}
          />
          <div className="bg-composed-wrapper--content py-5">
            <Container className="py-5">
              <Grid container spacing={4}>
                <Grid item xs={12} lg={6}>
                  <div className="d-flex align-items-center">
                    <span className="px-4 h-auto py-1 badge badge-primary badge-pill">
                      We are not a hit and run institution
                    </span>
                    
                    <span className="px-4 h-auto py-1 badge badge-primary badge-pill">
                      
                      we value relationships
                    </span>

                  </div>
                  <div className="text-black mt-3">
                    <h1 className="display-2 mb-3 font-weight-bold">
                      GERERE PROJECTS & SUPPLIES 
                    </h1>
                    <p className="font-size-lg " style={{color: '#FFC300'}}>
                        TRADING AS GERERE BUSINESS COLLEGE

                    </p>
                    <div className="divider border-2 border-dark my-5 border-light opacity-2 rounded-circle w-25" />
                    <div>
                      <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        className="mr-3">
                        <span className="btn-wrapper--label">
                          BELLUM
                          GERERE IN
                          CEREBRUM
                          PAUPERTAS
                        </span>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                        </span>
                      </Button>
                      <Button size="large" variant="outlined" color="secondary">
                        <span>
                          " Waging War Against Brain Poverty "
                        </span>
                      </Button>
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="px-0 d-none d-md-flex align-items-center">
                  <img
                    alt="..."
                    className="w-100 mx-auto d-block img-fluid"
                    src={svgImage2}
                  />
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
        <div className="hero-footer pt-5">
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card className="card-box-hover-rise card-box-hover card-box-alt card-border-top border-warning mb-4 pb-4">
                  <CardContent className="p-3">
                    <h3 className="heading-6 mt-4 mb-3 font-weight-bold" style={{textAlign: 'center', color: '#33B2FF'}}>
                      WE PIONEER
                    </h3>
                    <p className="card-text mb-3" style={{textAlign: 'center', color: '#FFC300'}}>
                        At Gerere Business College, our learners ‘overall best 
                        interest would always come first, and everything we do is guided by our 
                        values and professional ethics. We allocate professional tutors/lectures in all
                        encounters, who are well experienced and
                        passionate in imparting knowledge to learners at various learning ladders.

                    </p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card className="card-box-hover-rise card-box-hover card-box-alt card-border-top border-warning mb-4 pb-4">
                  <CardContent className="p-3">
                    <h3 className="heading-6 mt-4 mb-3 font-weight-bold" style={{textAlign: 'center', color: '#33B2FF'}}>
                      WE ENTERPRISE
                    </h3>
                    <p className="card-text mb-3" style={{textAlign: 'center', color: '#FFC300'}}>
                      We are a solution to small and medium businesses that cannot afford the offers 
                      from lager institutions, yet we surpass any imaginable value. 
                      Our products and services remain vivid in the minds of those we service.
                    </p>
                    
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card className="card-box-hover-rise card-box-hover card-box-alt card-border-top border-warning mb-4 pb-4">
                  <CardContent className="p-3">
                    <h3 className="heading-6 mt-4 mb-3 font-weight-bold" style={{textAlign: 'center', color: '#33B2FF'}}>
                      WE LEAD
                    </h3>
                    <p className="card-text mb-3" style={{textAlign: 'center', color: '#FFC300'}}>
                      Our clients are our lifetime partners, we grow and reach unthinkable heights with them.
                      We help our clients not only to level the play 
                      field but catapult them into trend-setters. We value relationships more than profits!
                    </p>
                    
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}
