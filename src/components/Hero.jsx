import { motion } from 'framer-motion';

export default function Hero({ isDark }) {
  return (
    <main className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 mt-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="max-w-4xl"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-block px-4 py-1.5 rounded-full border border-dourado text-dourado text-xs sm:text-sm font-bold tracking-widest mb-6 uppercase bg-stone-900/10 backdrop-blur-sm"
        >
          A Experiência Definitiva
        </motion.div>

        <h1 className={`text-4xl sm:text-7xl font-black mb-6 leading-tight drop-shadow-md ${isDark ? 'text-stone-100' : 'text-stone-900'}`}>
          Legado, Sabor e <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-dourado to-yellow-600">
            Tradição.
          </span>
        </h1>
        
        <p className={`text-lg sm:text-2xl mb-12 max-w-2xl mx-auto font-medium ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>
          Mais do que uma refeição, um momento viciante. Desperte seus sentidos com a melhor gastronomia da região.
        </p>

        {/* NOVO BOTÃO WHATSAPP - DEGRADÊ ANIMADO */}
        <motion.a 
          href="https://wa.me/5535999067266?text=Olá! Gostaria de conhecer o cardápio e fazer um pedido."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            boxShadow: ["0px 0px 0px rgba(34,197,94,0)", "0px 0px 30px rgba(34,197,94,0.6)", "0px 0px 0px rgba(34,197,94,0)"]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="bg-gradient-to-r from-green-400 via-emerald-600 to-green-500 bg-[length:200%_auto] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-lg sm:text-xl transition-all uppercase tracking-wide flex items-center justify-center gap-3 mx-auto w-fit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Peça pelo nosso WhatsApp
        </motion.a>
        
        <p className="mt-4 text-xs font-bold text-stone-500 uppercase tracking-widest">
          Atendimento rápido e personalizado
        </p>
      </motion.div>
    </main>
  );
}