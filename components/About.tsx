import React from 'react';
import { Reveal } from './ui/Reveal';
import { Sparkles, Heart, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-gold-400" />,
      title: "Exclusividade",
      text: "Um espaço reservado para você brilhar."
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-400" />,
      title: "Acolhimento",
      text: "Cuidado e carinho em cada detalhe."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-stone-400" />,
      title: "Segurança",
      text: "Profissionais experientes e produtos premium."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-nude-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Modified to be centered since image is removed */}
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center md:text-left">
          
          <div className="w-full">
            <Reveal width="100%">
              <div className="flex flex-col md:flex-row items-baseline gap-4 justify-center md:justify-start mb-6">
                <h2 className="font-serif text-3xl md:text-5xl text-nude-900 relative">
                  <span className="relative z-10">O Conceito do Dia da Noiva</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold-300/50"></span>
                </h2>
              </div>
            </Reveal>
            
            <Reveal delay={0.4} width="100%">
              <p className="font-sans text-stone-600 text-lg leading-relaxed mb-12 text-center md:text-left">
                O Dia da Noiva foi cuidadosamente pensado para que você viva um momento único, 
                com conforto, atenção total e serviços de alta qualidade, sem preocupações.
                Entendemos que este dia não é apenas sobre beleza, mas sobre <span className="text-gold-400 font-semibold italic">emoção</span> e <span className="text-gold-400 font-semibold italic">tranquilidade</span>.
              </p>
            </Reveal>

            {/* Background Loop Video */}
            <Reveal delay={0.5} width="100%">
               <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-nude-200 mb-12 pointer-events-none select-none">
                 <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
                    <iframe 
                      src="https://player.vimeo.com/video/1152569500?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=video1&app_id=58479&background=1&autoplay=1&loop=1&muted=1" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                      style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
                      title="Video Conceito"
                    ></iframe>
                 </div>
               </div>
            </Reveal>

            <Reveal delay={0.6} width="100%">
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                {features.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left p-8 bg-white rounded-lg shadow-sm border border-nude-100 hover:shadow-md transition-shadow w-full">
                    <motion.div 
                      className="mb-4 p-3 bg-nude-50 rounded-full"
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: idx * 0.5 
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="font-serif font-semibold text-xl text-nude-800 mb-2">{item.title}</h3>
                    <p className="text-stone-500 leading-relaxed">{item.text}</p>
                  </div>
                ))}
               </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};