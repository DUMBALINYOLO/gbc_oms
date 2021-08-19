import React, { Fragment , useEffect} from 'react';

import { Grid, Container } from '@material-ui/core';

import svgImage5 from '../../assets/images/illustrations/experience_design.svg';
import AOS from "aos";
import 'aos/dist/aos.css';

export default function LivePreviewExample() {

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);

  
  return (
    <Fragment>
      <div className="feature-box py-5" data-aos="flip-left">
        <Container className="py-5">
          <Grid item xl={7} md={9} className="px-0">
            <h1 className="display-3 mb-3 font-weight-bold" style={{textAlign: 'center', color: '#33B2FF'}}>
              GERERE VISION
            </h1>
            <p className="font-size-lg " style={{textAlign: 'center', color: '#FFC300'}}>
                To be an African fountain of learning that perpetually excavate
                the subconscious minds of leaders, through mindful
                engagement, by infusing authenticity of youthful leadership
                passion. 
            </p>
          </Grid>
          <Grid container spacing={4}>
            <Grid item md={6} xl={4}>
              <div className="py-2 py-xl-5">
                <div className="d-block pl-0 pl-xl-3 mt-4">
                  <div className="feature-box mb-4 pr-4">
                    <h3 className="font-size-lg font-weight-bold my-3">
                    <h1 className="display-3 mb-3 font-weight-bold" style={{textAlign: 'center', color: '#33B2FF'}}>
                        GERERE VISION MISSION
                    </h1>
                    </h3>
                    <p className=" mb-3" style={{textAlign: 'center', color: '#FFC300'}}>
                        To recreate global, ethical leaders and challenge them to lead
                        with noticeable skills, agility, and competitiveness.
                        <br/>
                        To deploy the best facilitators, recent technology, and futurefocused tools to empower and inspire our learner leaders.
                        <br/>
                        To challenge present and future leaders to lead consciously
                        by escorting them in a journey of self-discovery in conscious
                        and subconscious space.
                        <br/>
                        To prepare a fertile mind through mindful engagements
                        preparing individuals for tough conversations.
                        <br/>
                        To seek endorsement, then unfreeze and re-freeze the agility
                        appreciation to leaders at all levels.
                        <br/>
                        To acknowledge the individual uniqueness by enhancing their
                        positive attributes.

                    </p>
                  </div>
                  <div className="feature-box mb-4 pr-4">
                    <h1 className="display-3 mb-3 font-weight-bold" style={{textAlign: 'center', color: '#33B2FF'}}>
                        GERERE VISION MISSION
                    </h1>
                    <p className=" mb-3" style={{textAlign: 'center', color: '#FFC300'}}>
                        Greatness – we do not settle for known heights!
                        <br/>
                        Robustness – our quality is beyond any situation!
                        <br/>
                        Integrity – we stick to our promises!
                        <br/>
                        Trendsetting – we Lead, we originate and we innovate!
                    </p>
                  </div>
                  
                </div>
              </div>
            </Grid>
            
            <Grid
              item
              md={6}
              xl={8}
              className="d-flex pt-5 pt-xl-0 align-items-start align-items-xl-center">
              <img src={svgImage5} className="img-fluid" alt="..." />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
