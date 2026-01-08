import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { ShoppingBag, X, Trash2, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const { items, removeFromCart, isOpen, toggleCart } = useCart();
  const controls = useAnimation();
  const [prevCount, setPrevCount] = useState(0);

  useEffect(() => {
    if (items.length > prevCount) {
      // Item added - Trigger bounce animation
      controls.start({
        scale: [1, 1.3, 0.9, 1.1, 1],
        rotate: [0, 10, -10, 5, 0],
        transition: { duration: 0.5 }
      });
    }
    setPrevCount(items.length);
  }, [items.length, prevCount, controls]);

  const handleCheckout = () => {
    const header = "Olá! Gostaria de finalizar meu orçamento do Dia da Noiva no Eliana Maria - Ateliê de Beleza.";
    const subHeader = "*ITENS SELECIONADOS:*";
    
    // Construct body with explicit newlines and sanitized formatting
    const body = items.map(item => `- ${item.name}`).join('\n');
    
    const footer = "Aguardo o retorno com os valores e disponibilidade.";
    
    // Use encodeURIComponent to ensure all characters (spaces, accents, emojis) are correctly encoded for the URL
    // We construct the full message first
    const fullMessage = `${header}\n\n${subHeader}\n${body}\n\n${footer}`;
    
    const encodedMessage = encodeURIComponent(fullMessage);
    
    // Use api.whatsapp.com/send which is often more robust for longer texts than wa.me
    window.open(`https://api.whatsapp.com/send?phone=5531999897764&text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      {/* Floating Cart Button - Positioned below menu, same style */}
      <motion.button
        onClick={toggleCart}
        animate={controls}
        initial={{ scale: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-24 right-6 z-40 p-3 bg-nude-900/80 backdrop-blur-md border border-white/10 rounded-full text-white shadow-xl hover:bg-nude-900 transition-colors flex items-center justify-center"
      >
        <ShoppingBag size={24} />
        {items.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-rose-900 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border border-nude-900">
            {items.length}
          </span>
        )}
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleCart}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 bg-nude-900 text-white flex justify-between items-center shadow-md">
                <div className="flex items-center gap-3">
                  <ShoppingBag size={24} className="text-gold-200" />
                  <h2 className="font-serif text-xl">Seu Orçamento</h2>
                </div>
                <button onClick={toggleCart} className="text-white/70 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 bg-nude-50">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-nude-400 text-center opacity-70">
                    <ShoppingBag size={48} className="mb-4 text-nude-300" />
                    <p>Seu carrinho está vazio.</p>
                    <p className="text-sm mt-2">Adicione itens para solicitar um orçamento.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div 
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        key={item.id} 
                        className="bg-white p-4 rounded-lg shadow-sm border border-nude-200 flex justify-between items-center"
                      >
                        <div>
                          <p className="font-serif text-nude-900">{item.name}</p>
                          <span className="text-xs text-nude-400 uppercase tracking-wider font-semibold">
                            {item.category === 'package' ? 'Pacote' : 'Adicional'}
                          </span>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-nude-300 hover:text-rose-400 transition-colors p-2"
                        >
                          <Trash2 size={18} />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="p-6 bg-white border-t border-nude-200">
                <div className="flex justify-between items-center mb-6 text-stone-600">
                  <span className="font-light">Total de itens:</span>
                  <span className="font-bold text-xl text-nude-900">{items.length}</span>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  disabled={items.length === 0}
                  className="w-full py-4 bg-[#25D366] hover:bg-[#128C7E] disabled:bg-stone-300 disabled:cursor-not-allowed text-white rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 group"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  <span className="font-bold tracking-wide">Finalizar no WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};