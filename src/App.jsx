import { useState } from 'react';
import SplashScreen from './components/SplashScreen'; // <-- Importamos a Intro!
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import History from './components/History';
import Menu from './components/Menu';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [showIntro, setShowIntro] = useState(true); // <-- Estado que controla a intro

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      {/* TELA DE INTRODUÇÃO (Fica por cima de tudo) */}
      {showIntro && <SplashScreen onFinish={() => setShowIntro(false)} />}

      {/* SITE PRINCIPAL (Fica travado enquanto a intro rola) */}
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
      </div>
    </>
  );
}