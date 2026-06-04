import { motion } from 'framer-motion';

export default function Header({ isDark, toggleTheme }) {
  return (
    <header className="relative z-20 flex justify-between items-center p-6 lg:px-12 pt-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="/logo.png" 
          alt="Gregorioo's Restaurante" 
          className="relative h-24 sm:h-32 object-contain z-10 drop-shadow-lg"
        />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center gap-6"
      >
        {/* BOTÃO DE TEMA (CLARO/ESCURO) */}
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-full backdrop-blur-md border transition-all hover:scale-110 ${isDark ? 'bg-stone-800 border-stone-700 text-yellow-400' : 'bg-white/80 border-stone-200 text-stone-800'}`}
        >
          {isDark ? (
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          ) : (
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          )}
        </button>

        <a 
          href="https://instagram.com/gregorios_777" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`flex items-center gap-2 transition-all hover:scale-110 hover:text-vinho ${isDark ? 'text-stone-300' : 'text-stone-800'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          <span className="hidden sm:inline font-bold tracking-wide">@gregorios_777</span>
        </a>
      </motion.div>
    </header>
  );
}