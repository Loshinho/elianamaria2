import React from 'react';
import { Reveal } from './ui/Reveal';
import { AlertCircle, Plus, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export const Addons: React.FC = () => {
  const { addToCart, items } = useCart();

  const services = [
    "Design de sobrancelhas",
    "Manicure e pedicure",
    "Massagem relaxante",
    "Teste de maquiagem",
    "Teste de penteado",
    "Produção para casamento civil",
    "Acompanhamento até a igreja",
    "Acompanhamento até a festa (retoques)",
    "Produção de daminhas",
    "Pacote promocional para madrinhas"
  ];

  const handleAdd = (serviceName: string) => {
    addToCart({
      id: serviceName.toLowerCase().replace(/\s/g, '-'),
      name: serviceName,
      category: 'addon'
    });
  };

  const isAdded = (name: string) => {
    const id = name.toLowerCase().replace(/\s/g, '-');
    return items.some(item => item.id === id);
  };

  return (
    <section id="addons" className="py-24 md:py-32 bg-nude-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-nude-900 mb-4">Procedimentos Adicionais</h2>
            <div className="w-16 h-0.5 bg-gold-300 mx-auto mb-6"></div>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Personalize sua experiência adicionando serviços extras ao seu orçamento.
            </p>
          </div>
        </Reveal>

        <Reveal width="100%" delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {services.map((service, idx) => {
              const added = isAdded(service);
              return (
                <div key={idx} className={`flex items-center justify-between p-4 bg-white rounded-lg border ${added ? 'border-gold-300 bg-gold-50/30' : 'border-nude-100'} shadow-sm hover:shadow-md transition-all group`}>
                  <div className="flex items-center">
                    <motion.span 
                      whileHover={{ scale: 1.5 }}
                      className={`w-2 h-2 rounded-full mr-4 transition-transform ${added ? 'bg-gold-500' : 'bg-nude-300'}`}
                    ></motion.span>
                    <span className={`font-light text-lg ${added ? 'text-nude-900 font-normal' : 'text-stone-700'}`}>{service}</span>
                  </div>
                  
                  <button 
                    onClick={() => handleAdd(service)}
                    disabled={added}
                    className={`p-2 rounded-full transition-colors flex items-center justify-center ${added ? 'text-gold-500 cursor-default' : 'bg-nude-100 text-nude-400 hover:bg-gold-400 hover:text-white'}`}
                    aria-label={`Adicionar ${service} ao carrinho`}
                  >
                    {added ? <Check size={20} /> : <Plus size={20} />}
                  </button>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal width="100%" delay={0.6}>
          <div className="mt-12 bg-rose-50 border border-rose-100 rounded-xl p-6 flex items-start gap-4">
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <AlertCircle className="text-rose-400 w-6 h-6 flex-shrink-0 mt-1" />
            </motion.div>
            <p className="text-rose-900 text-sm md:text-base font-light">
              <strong>Atenção:</strong> Serviços adicionais possuem valores individuais. Adicione ao seu carrinho para solicitar o orçamento completo via WhatsApp.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};