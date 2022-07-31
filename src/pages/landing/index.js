import { Container } from '@mui/material';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Banner from './sections/Banner';
import Benefits from './sections/Benefits';
import HowItWorks from './sections/HowItWorks';
import Plans from './sections/Plans';
import WhatsInsideYourBox from './sections/WhatsInsideYourBox';
import AlVinhoBot from '../../components/chatBot';

function Landing() {
  return (
    <>
      <Header />
      <Banner />
      <Container component="main">
        <HowItWorks />
        <AlVinhoBot />
        <WhatsInsideYourBox />
        <Plans />
        <Benefits />
      </Container>
        <Benefits headingToggle />
      </main>
      <Footer />
    </>
  );
}

export default Landing;
