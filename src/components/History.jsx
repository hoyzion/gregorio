import { motion } from 'framer-motion';

export default function History({ isDark }) {
  return (
    <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">
      
      {/* Imagem da Família com Animação */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 relative"
      >
        <div className="absolute inset-0 bg-dourado rounded-2xl rotate-3 scale-105 opacity-20" />
        {/* Aqui puxamos a foto que você salvou na pasta public */}
        <img 
          src="/familia.jpg" 
          alt="Equipe Gregorioo's" 
          className="relative rounded-2xl shadow-2xl object-cover h-[450px] w-full border border-stone-800 object-top"
        />
      </motion.div>

      {/* Texto da História e Assinatura */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 flex flex-col justify-center"
      >
        <h2 className={`text-3xl sm:text-5xl font-black mb-8 ${isDark ? 'text-stone-100' : 'text-stone-900'}`}>
          A essência do <span className="text-dourado drop-shadow-sm">nosso sabor.</span>
        </h2>
        
        <p className={`text-2xl sm:text-3xl leading-snug mb-10 font-medium italic ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
          "Mais do que um restaurante, uma história de família servida todos os dias com amor, tradição e sabor de verdade."
        </p>
        
        {/* Assinatura Elegante */}
        <div className="mt-4 border-l-4 border-dourado pl-6 py-2">
          <h3 
            className="text-5xl sm:text-6xl text-vinho drop-shadow-sm mb-1" 
            style={{ fontFamily: "'Brush Script MT', 'Great Vibes', 'Dancing Script', cursive" }}
          >
            Gregorioo's
          </h3>
          <p className={`text-sm tracking-[0.2em] uppercase font-black ${isDark ? 'text-stone-500' : 'text-stone-400'}`}>
            LG Restaurante e Marmitaria
          </p>
        </div>
      </motion.div>

    </section>
  );
}