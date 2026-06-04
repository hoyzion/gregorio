import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import History from './components/History';
import Menu from './components/Menu';
import Location from './components/Location';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner'; // <-- Importamos o Cookie!

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [showIntro, setShowIntro] = useState(true); 

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      {showIntro && <SplashScreen onFinish={() => setShowIntro(false)} />}

      <div 
        className={`min-h-screen font-sans flex flex-col transition-colors duration-700 
        ${isDark ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'} 
        ${showIntro ? 'h-screen overflow-hidden' : 'overflow-x-hidden'}`}
      >
        <Background isDark={isDark} />
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <Hero isDark={isDark} />
        <Marquee isDark={isDark} />
        <History isDark={isDark} />
        <Menu isDark={isDark} />
        <Location isDark={isDark} />
        <Footer isDark={isDark} />
        
        {/* Adicionamos o componente do banner aqui embaixo */}
        <CookieBanner isDark={isDark} />
      </div>
    </>
  );
}