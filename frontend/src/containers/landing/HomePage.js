import React from 'react';
import Banner from '../../components/landing/Banner';
import Feature from '../../components/landing/Feature';
import Showcase from '../../components/landing/Showcase';
import Testimonials from '../../components/landing/Testimonials';
import Technology from '../../components/landing/Technology';
import Pricing from '../../components/landing/Pricing';
import Contact from '../../components/landing/Contact';
import HelpSupport from '../HelpSupport';


class HomePage extends React.Component {
  render() {
    return (
      <div>
        <section id="banner">
          <Banner />
        </section>
        <section id="feature">
          <Feature />
        </section>
        <section id="showcase">
          <Showcase />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="tech">
          <Technology />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faqs">
          <HelpSupport />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    );
  }
}

export default HomePage;