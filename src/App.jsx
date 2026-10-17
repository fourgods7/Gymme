import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Workouts from './components/Workouts';
import Pricing from './components/Pricing';
import Community from './components/Community';
import Faq from './components/Faq';
import Join from './components/Join';
import Footer from './components/Footer';
import AuthDemo from './components/AuthDemo';

const App = () => {
  const [authMode, setAuthMode] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 900, delay: 100, once: true });
  }, []);

  const returnHome = () => {
    setAuthMode(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (authMode) {
    return <AuthDemo mode={authMode} onBack={returnHome} onSwitch={setAuthMode} />;
  }

  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Header onAuth={setAuthMode} />
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
};

export default App;