import React from 'react';
import { Reveal } from './ui/Reveal';
import { Clock, Banknote, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Info: React.FC = () => {
  const cards = [
    {
      icon: <Banknote size={32} className="text-nude-800" />,
      title: "Valores",
      text: "O pacote da noiva é fixo e não sofre alterações de valor, garantindo transparência."
    },
    {
      icon: <Clock size={32} className="text-nude-800" />,
      title: "Adicionais",
      text: "Serviços extras são totalmente opcionais e podem ser incluídos conforme seu desejo."
    },
    {
      icon: <CalendarCheck size={32} className="text-nude-800" />,
      title: "Organização",
      text: "Todos os detalhes e horários são alinhados previamente para evitar qualquer imprevisto."
    }
  ];

  return (
    <section id="info" className="py-24 md:py-32 bg-nude-800 text-white">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          <h2 className="font-serif text-3xl text-center mb-16 text-nude-100">Informações Importantes</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <Reveal key={idx} delay={0.2 * idx}>
              <div className="bg-nude-900/50 backdrop-blur-sm p-8 rounded-xl border border-nude-700 hover:border-gold-400 transition-colors duration-300 h-full flex flex-col items-center text-center">
                <motion.div 
                  className="mb-6 p-4 bg-nude-100 rounded-full inline-block"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: idx * 0.8
                  }}
                >
                  {card.icon}
                </motion.div>
                <h3 className="font-serif text-xl mb-4 text-gold-100">{card.title}</h3>
                <p className="text-nude-200 font-light leading-relaxed">
                  {card.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};