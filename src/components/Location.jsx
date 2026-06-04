import { motion } from 'framer-motion';

export default function Location({ isDark }) {
  return (
    <section className="relative z-10 py-20 px-6 max-w-6xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`p-6 sm:p-10 rounded-3xl border shadow-2xl flex flex-col lg:flex-row gap-8 items-center ${isDark ? 'bg-stone-900/80 border-stone-800' : 'bg-white/80 border-stone-200'}`}
      >
        
        {/* Lado Esquerdo: Informações e Endereço */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="bg-dourado/10 p-4 rounded-full mb-4 text-dourado border border-dourado/20">
            {/* Ícone de Localização */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${isDark ? 'text-stone-100' : 'text-stone-900'}`}>
            Venha nos <span className="text-dourado">Visitar</span>
          </h2>
          
          <p className={`text-lg sm:text-xl mb-6 font-medium ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>
            Rua Coronel Virgílio Silva, 2322<br/>
            Poços de Caldas - MG
          </p>
          
          {/* Botão extra para Traçar Rota */}
          <a 
            href="https://share.google/OyReemKD2zCb8cHYY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-vinho hover:bg-vinho-escuro text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_10px_20px_rgba(88,17,26,0.2)] hover:scale-105 uppercase tracking-wide text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            Como Chegar
          </a>
        </div>

        {/* Lado Direito: Mapa do Google com Efeito de Clique */}
        <div className={`w-full lg:w-2/3 h-[350px] sm:h-[450px] rounded-2xl overflow-hidden border-2 shadow-inner relative group ${isDark ? 'border-stone-800' : 'border-stone-200'}`}>
          
          {/* O Iframe exato que você mandou */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sbr!4v1780542031624!5m2!1sen!2sbr!6m8!1m7!1sWFuvHUpnujn9k1bW_2TCPw!2m2!1d-21.79052401603177!2d-46.53957508243304!3f116.08908079771004!4f9.681308938908245!5f0.7820865974627469" 
            className="w-full h-full border-0" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* CAMADA MÁGICA: Cobre o mapa e redireciona ao clicar! */}
          <a 
            href="https://share.google/OyReemKD2zCb8cHYY"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center bg-black/0 hover:bg-black/40 transition-all duration-300"
          >
            {/* Esse botão só aparece quando a pessoa passa o mouse por cima do mapa no PC */}
            <span className="opacity-0 group-hover:opacity-100 bg-white text-vinho px-6 py-3 rounded-full font-black shadow-2xl transition-opacity duration-300 flex items-center gap-2 transform scale-90 group-hover:scale-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Abrir no Google Maps
            </span>
          </a>
          
        </div>
      </motion.div>
    </section>
  );
}