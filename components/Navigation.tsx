import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X, Instagram, Phone } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const menuItems = [
    { title: "Início", href: "#home" },
    { title: "O Conceito", href: "#about" },
    { title: "Dia da Noiva", href: "#package" },
    { title: "Adicionais", href: "#addons" },
    { title: "Madrinhas", href: "#bridesmaids" },
    { title: "Informações", href: "#info" },
    { title: "Contato", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Impede que o navegador tente mudar a URL, evitando o erro 404
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuVariants: Variants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <>
      {/* Toggle Button - Updated for high contrast on all backgrounds */}
      <motion.button
        onClick={toggleOpen}
        className="fixed top-6 right-6 z-50 p-3 bg-nude-900/80 backdrop-blur-md border border-white/10 rounded-full text-white shadow-xl hover:bg-nude-900 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleOpen}
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.nav
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed top-0 right-0 bottom-0 w-80 bg-nude-900/95 backdrop-blur-xl z-40 border-l border-white/10 shadow-2xl flex flex-col justify-center p-10"
      >
        <div className="flex flex-col space-y-6">
          <div className="mb-8 text-center border-b border-white/10 pb-6 flex justify-center">
            {/* Logo Increased 1.5x */}
            <img 
              src="https://i.ibb.co/mrBDG8NX/1.png" 
              alt="Eliana Maria - Ateliê de Beleza" 
              className="h-36 md:h-48 w-auto object-contain"
            />
          </div>

          <ul className="flex flex-col space-y-4">
            {menuItems.map((item, idx) => (
              <motion.li 
                key={idx}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a 
                  href={item.href} 
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-nude-100 font-serif text-xl hover:text-gold-300 transition-colors block"
                >
                  {item.title}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="mt-12 pt-8 border-t border-white/10 flex justify-center gap-6">
            <motion.a 
              href="https://wa.me/5531999897764" 
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="text-nude-300 hover:text-gold-400"
            >
              <Phone size={24} />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/lilica_ateliedebeleza/" 
              target="_blank"
              whileHover={{ scale: 1.2, rotate: -10 }}
              className="text-nude-300 hover:text-rose-400"
            >
              <Instagram size={24} />
            </motion.a>
          </div>
        </div>
      </motion.nav>
    </>
  );
};