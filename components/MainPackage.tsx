import React from 'react';
import { Reveal } from './ui/Reveal.tsx';
import { CheckCircle2, Star, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext.tsx';

export const MainPackage: React.FC = () => {
  const { addToCart, items } = useCart();
  
  const includes = [
    "Maquiagem profissional da noiva",
    "Penteado profissional da noiva",
    "Lanche especial durante a produção",
    "Auxílio completo para vestir",
    "Atendimento exclusivo no salão"
  ];

  const handleAddToCart = () => {
    addToCart({
      id: 'pacote-principal',
      name: 'Dia da Noiva',
      category: 'package'
    });
  };

  const isAdded = items.some(i => i.id === 'pacote-principal');

  return (
    <section id="package" className="py-24 md:py-32 bg-nude-50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Reveal width="100%">
            {/* Removed rounded-[2rem] to make it sharp (no corners) as requested */}
            <div className="bg-white shadow-2xl overflow-hidden border border-nude-200 relative">
              
              <div className="flex flex-col md:flex-row h-full">
                
                {/* Visual Side */}
                <div className="md:w-5/12 bg-nude-800 relative overflow-hidden h-72 md:h-auto group">
                  <img 
                    src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&crop" 
                    alt="Maquiagem de Noiva" 
                    className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nude-900 via-nude-800/30 to-transparent"></div>
                  
                  <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                    <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-gold-400/20 backdrop-blur-sm border border-gold-400/30 rounded-full">
                       <Star className="text-gold-200 fill-gold-200" size={14} />
                       <span className="uppercase tracking-widest text-[10px] font-bold text-gold-100">Mais Procurado</span>
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl text-nude-50 mb-2">Dia da Noiva</h3>
                    <p className="text-nude-200 font-light text-sm tracking-wide">A escolha perfeita para o seu grande dia.</p>
                  </div>
                </div>

                {/* Details Side */}
                <div className="md:w-7/12 p-8 md:p-14 flex flex-col justify-center bg-white relative z-10">
                  <ul className="space-y-5 mb-12">
                    {includes.map((item, index) => (
                      <li key={index} className="flex items-start text-stone-700 group">
                        <CheckCircle2 className="w-5 h-5 text-nude-400 mt-1 mr-4 flex-shrink-0 group-hover:text-gold-400 transition-colors" />
                        <span className="font-light text-lg text-nude-900">{item}</span>
                      </li>
                    ))}
                    {/* New Investment item following the same style but with specific color */}
                    <li className="flex items-start text-[#262626] group">
                      <CheckCircle2 className="w-5 h-5 text-nude-400 mt-1 mr-4 flex-shrink-0 group-hover:text-gold-400 transition-colors" />
                      <span className="font-medium text-lg">Investimento para essa experiência: R$ 1.200,00</span>
                    </li>
                  </ul>

                  <p className="text-nude-400 text-sm italic mb-8 border-l-2 border-nude-200 pl-4 py-1 leading-relaxed">
                    “Todo o atendimento é realizado com atenção total à noiva, respeitando horários, conforto e excelência.”
                  </p>

                  <button 
                    onClick={handleAddToCart}
                    disabled={isAdded}
                    className={`w-full py-4 rounded-none transition-all uppercase tracking-widest text-sm font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 flex items-center justify-center gap-3
                      ${isAdded 
                        ? 'bg-nude-100 text-nude-400 border border-nude-200 cursor-default' 
                        : 'bg-nude-900 text-nude-50 hover:bg-nude-800 border border-transparent'}`
                    }
                  >
                    {isAdded ? (
                      <>
                        <CheckCircle2 size={20} />
                        Item Adicionado
                      </>
                    ) : (
                      <>
                        <Plus size={20} />
                        Adicionar ao Orçamento
                      </>
                    )}
                  </button>
                </div>

              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};