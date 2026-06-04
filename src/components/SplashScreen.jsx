import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen({ onFinish }) {
  const [phase, setPhase] = useState('text'); // As fases: 'text' -> 'logo' -> 'done'

  useEffect(() => {
    // Fase 1: Mostra o texto por 3.5 segundos, depois muda para a logo
    const timer1 = setTimeout(() => setPhase('logo'), 3500);
    
    // Fase 2: Mostra a logo por mais 3 segundos, depois avisa o site pra aparecer
    const timer2 = setTimeout(() => {
      setPhase('done');
      setTimeout(onFinish, 800); // Dá um tempinho pra animação de saída terminar
    }, 6500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }} // Sai desfocando, muito chique!
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-stone-950 px-6 text-center"
        >
          <AnimatePresence mode="wait">
            
            {/* ETAPA 1: O TEXTO */}
            {phase === 'text' && (
              <motion.p
                key="text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-2xl sm:text-4xl md:text-5xl font-medium text-stone-200 max-w-4xl leading-relaxed italic"
                style={{ fontFamily: "serif" }}
              >
                "O melhor da comida caseira, com sabor de tradição e carinho de família, você encontra aqui."
              </motion.p>
            )}
            
            {/* ETAPA 2: A LOGO */}
            {phase === 'logo' && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                {/* Aquele glow no fundo pra logo destacar no escuro */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] blur-md" />
                <img 
                  src="/logo.png" 
                  alt="Gregorioo's Restaurante" 
                  className="relative h-40 sm:h-56 object-contain drop-shadow-2xl z-10"
                />
              </motion.div>
            )}

          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}