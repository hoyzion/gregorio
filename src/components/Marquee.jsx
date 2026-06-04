import { motion } from 'framer-motion';

export default function Marquee({ isDark }) {
  // O texto que vai ficar rodando
  const text = " O MELHOR RESTAURANTE DE POÇOS DE CALDAS E REGIÃO ✦ INGREDIENTES 100% FRESCOS ✦ RECEITAS EXCLUSIVAS ✦ AMBIENTE PREMIUM ✦";

  return (
    <div className={`relative z-20 w-full overflow-hidden py-3 border-y flex whitespace-nowrap mt-12 ${isDark ? 'bg-vinho border-vinho-escuro text-white' : 'bg-vinho border-vinho-escuro text-white shadow-md'}`}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex gap-4 items-center text-sm sm:text-base font-bold tracking-[0.2em]"
      >
        <span>{text}</span>
        <span>{text}</span> {/* Duplicado para fazer o loop infinito suave */}
        <span>{text}</span>
      </motion.div>
    </div>
  );
}