import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Fade out text on scroll

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-stone-900">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/99vV5Bzn/IMG-20260109-WA0133.jpg" 
          alt="Fundo Ateliê" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Dark Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-stone-900/80" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full px-6 md:px-4 max-w-5xl mx-auto text-white flex flex-col items-center justify-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 md:mb-10"
        >
          {/* Logo */}
          <img 
            src="https://i.ibb.co/mrBDG8NX/1.png" 
            alt="Eliana Maria - Ateliê de Beleza" 
            className="h-36 md:h-48 w-auto object-contain drop-shadow-lg"
          />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-tight mb-8 drop-shadow-2xl text-white max-w-2xl mx-auto"
        >
          Seu Dia da Noiva merece ser <br className="md:hidden" />
          <span className="italic text-rose-100 font-light">leve</span>, especial e inesquecível
        </motion.h1>
      </motion.div>
    </div>
  );
};