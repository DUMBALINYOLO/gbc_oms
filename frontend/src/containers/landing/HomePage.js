import React from 'react';
import Banner from '../../components/landing/Banner';
import Feature from '../../public/feature/Feature';
import Showcase from '../../components/landing/Showcase';
import Testimonials from '../../components/landing/Testimonials';
import Technology from '../../components/landing/Technology';
import Pricing from '../../components/landing/Pricing';
import Contact from '../../components/landing/Contact';
import HelpSupport from '../HelpSupport';
import Hero from '../../public/hero/Hero';
import ServivesOne from '../../public/services/ServicesOne';


class HomePage extends React.Component {
  render() {
    return (
      <div>
        <section id="banner">
          <Hero />
        </section>
        <section id="showcase">
          <Feature />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="testicles">
          <ServivesOne />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    );
  }
}

export default HomePage;
