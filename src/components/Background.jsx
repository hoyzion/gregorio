import { motion } from 'framer-motion';

export default function Background({ isDark }) {
  // Troca a imagem de fundo dependendo do tema
  const bgImage = isDark 
    ? "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2000&auto=format&fit=crop" 
    : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop";

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-700">
      
      <motion.div 
        key={isDark ? "dark" : "light"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-[-5%] bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      
      {/* Degradê dinâmico */}
      <div className={`absolute inset-0 bg-gradient-to-b transition-colors duration-700 ${isDark ? 'from-stone-950/90 via-stone-950/70 to-stone-950' : 'from-stone-50/90 via-stone-50/70 to-stone-50'}`} />

      {/* Partículas flutuantes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: "110vh", x: `${Math.random() * 100}vw`, scale: Math.random() * 0.5 + 0.5 }}
          animate={{ opacity: [0, 0.5, 0], y: "-10vh", x: `${Math.random() * 100}vw` }}
          transition={{ duration: Math.random() * 15 + 15, repeat: Infinity, delay: Math.random() * 10, ease: "linear" }}
          className={`absolute bottom-0 rounded-full blur-[2px] ${isDark ? 'bg-orange-500' : 'bg-dourado'}`}
          style={{ width: 12, height: 12 }}
        />
      ))}
    </div>
  );
}