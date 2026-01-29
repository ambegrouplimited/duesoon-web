import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import WhyChooseUs from '../pages/WhyChooseUs';
import HowItWorks from '../pages/HowItWorks';
import Pricing from '../pages/Pricing';
import Footer from '../component/Footer';
import Download from '../pages/Download';

function LandingPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Pricing />
      <Download />
      <Footer />
    </>
  );
}

export default LandingPage;
