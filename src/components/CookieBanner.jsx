import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner({ isDark }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('gregorios_cookie_accepted');
    
    // Se o cliente já tinha aceitado antes, nós avisamos o Google logo de cara
    if (cookieAccepted) {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          'ad_storage': 'granted',
          'analytics_storage': 'granted'
        });
      }
    } else {
      // Se não aceitou, mostra o banner
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('gregorios_cookie_accepted', 'true');
    setIsVisible(false);
    
    // A MÁGICA: Avisa o Google Analytics na mesma hora que o botão foi clicado!
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className={`fixed bottom-4 left-4 right-4 sm:left-auto sm:right-8 sm:w-96 z-[999] p-6 rounded-2xl shadow-2xl border ${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'}`}
        >
          <div className="flex flex-col gap-4">
            <div>
              <h4 className={`font-bold text-lg mb-2 flex items-center gap-2 ${isDark ? 'text-stone-100' : 'text-stone-900'}`}>
                <span>🍪</span> Sua privacidade
              </h4>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                Nós utilizamos cookies para garantir que você tenha a melhor experiência e para melhorar nosso desempenho. Ao continuar navegando, você concorda com o uso de cookies.
              </p>
            </div>
            
            <button
              onClick={acceptCookies}
              className="w-full bg-vinho hover:bg-vinho-escuro text-white font-bold py-3 rounded-xl transition-all hover:scale-[1.02] active:scale-95"
            >
              Entendi e Aceito
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}