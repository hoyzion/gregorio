import { motion } from 'framer-motion';

export default function Menu({ isDark }) {
  // Agora estamos puxando as fotos reais que você colocou na pasta public!
  const feedImages = [
    "/comida1.jpg", 
    "/comida2.jpg",
    "/comida3.jpg",
    "/comida4.jpg"
  ];

  return (
    <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Lado Esquerdo: Texto Elegante e Botão */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 text-vinho font-bold tracking-widest uppercase text-sm mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            Nosso Dia a Dia
          </div>

          <h2 className={`text-4xl sm:text-6xl font-black mb-6 leading-tight ${isDark ? 'text-stone-100' : 'text-stone-900'}`}>
            Acompanhe nosso <br/>
            <span className="text-dourado drop-shadow-sm">Cardápio do Dia</span>
          </h2>
          
          <p className={`text-lg sm:text-xl mb-10 font-medium max-w-xl mx-auto lg:mx-0 ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>
            Nosso tempero muda o seu dia, e o nosso cardápio se renova sempre! 
            Siga-nos para não perder os pratos especiais da marmitaria 
            e os bastidores da nossa cozinha feitos com muito carinho.
          </p>

          <a
            href="https://instagram.com/gregorios_777"
            target="_blank"
            rel="noopener noreferrer"
            translate="no"
            className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-vinho text-vinho hover:bg-vinho hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-sm"
          >
            Siga @gregorios_777
          </a>
        </motion.div>

        {/* Lado Direito: Grid de Fotos Reais da sua pasta public */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-6"
        >
          {feedImages.map((img, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-2xl aspect-square shadow-lg ${i % 2 !== 0 ? 'mt-8 sm:mt-12' : '-mt-8 sm:-mt-12'} ${isDark ? 'border border-stone-800' : ''}`}
            >
              <img 
                src={img} 
                alt={`Foto Real do Buffet Gregorioo's ${i + 1}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}