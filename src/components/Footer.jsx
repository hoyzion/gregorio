import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 py-6 border-t border-stone-800/60 bg-stone-950/80 backdrop-blur-md text-center">
      <div className="flex flex-col items-center gap-1">
        <p className="text-xs text-stone-400 font-medium">
          Todos os direitos reservados por Gregorioo'S restaurante © {new Date().getFullYear()}
        </p>
        <p className="text-xs text-stone-500">
          Site desenvolvido pelo{' '}
          <a 
            href="https://grupozynsa.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-dourado/80 hover:text-dourado font-bold transition-colors"
          >
            grupo zynsa
          </a>
        </p>
      </div>
    </footer>
  );
}