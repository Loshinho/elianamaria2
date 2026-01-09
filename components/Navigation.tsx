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
    { title: "Localização", href: "#location" },
    { title: "Contato", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
      {/* Toggle Button - Reduced size and padding */}
      <motion.button
        onClick={toggleOpen}
        className="fixed top-4 right-4 z-50 p-2.5 bg-nude-900/80 backdrop-blur-md border border-white/10 rounded-full text-white shadow-xl hover:bg-nude-900 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
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
        className="fixed top-0 right-0 bottom-0 w-72 bg-nude-900/95 backdrop-blur-xl z-40 border-l border-white/10 shadow-2xl flex flex-col justify-center p-8"
      >
        <div className="flex flex-col space-y-5">
          <div className="mb-6 text-center border-b border-white/10 pb-5 flex justify-center">
            {/* Logo size reduced */}
            <img 
              src="https://i.ibb.co/mrBDG8NX/1.png" 
              alt="Eliana Maria - Ateliê de Beleza" 
              className="h-24 md:h-32 w-auto object-contain"
            />
          </div>

          <ul className="flex flex-col space-y-3">
            {menuItems.map((item, idx) => (
              <motion.li 
                key={idx}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a 
                  href={item.href} 
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-nude-100 font-serif text-lg hover:text-gold-300 transition-colors block"
                >
                  {item.title}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-white/10 flex justify-center gap-5">
            <motion.a 
              href="https://wa.me/5531999897764" 
              target="_blank"
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="text-nude-300 hover:text-gold-400"
            >
              <Phone size={20} />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/lilica_ateliedebeleza/" 
              target="_blank"
              whileHover={{ scale: 1.1, rotate: -10 }}
              className="text-nude-300 hover:text-rose-400"
            >
              <Instagram size={20} />
            </motion.a>
          </div>
        </div>
      </motion.nav>
    </>
  );
};