import React from 'react';
import { Reveal } from './ui/Reveal';
import { Instagram, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5531999897764", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/lilica_ateliedebeleza/", "_blank");
  };

  return (
    <footer id="contact" className="bg-nude-800 pt-24 pb-12 border-t border-nude-700 text-nude-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-10 mb-16 max-w-4xl mx-auto">
          
          {/* Brand - Logo Increased 1.5x */}
          <div className="flex flex-col items-center w-full">
            <img 
              src="https://i.ibb.co/mrBDG8NX/1.png" 
              alt="Eliana Maria - Ateliê de Beleza" 
              className="h-36 md:h-48 w-auto mb-6 object-contain"
            />
            <p className="text-nude-200 font-light leading-relaxed max-w-lg mb-10">
              Transformando sonhos em realidade através da beleza, do cuidado e da exclusividade que você merece.
            </p>

            {/* Interactive Vertical Video - Fixed params: autoplay=0, autopause=0 */}
            <div className="w-full max-w-xs mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-nude-700 bg-black">
              <div style={{padding:'177.78% 0 0 0', position:'relative'}}>
                <iframe 
                  src="https://player.vimeo.com/video/1152569567?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=0&player_id=video2&app_id=58479&muted=0" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
                  title="Video Institucional"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Actions - Centered, Side by Side, Subtle */}
          <Reveal>
            <div className="flex flex-row justify-center gap-4 w-full mt-4">
              <button 
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-nude-600 rounded-md hover:bg-nude-700 hover:border-gold-500/50 transition-all group w-40"
              >
                <Phone size={18} className="text-gold-400 group-hover:text-gold-300" />
                <span className="text-xs text-nude-300 uppercase tracking-wider group-hover:text-white">WhatsApp</span>
              </button>

              <button 
                onClick={handleInstagram}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-nude-600 rounded-md hover:bg-nude-700 hover:border-rose-400/50 transition-all group w-40"
              >
                <Instagram size={18} className="text-rose-300 group-hover:text-rose-200" />
                <span className="text-xs text-nude-300 uppercase tracking-wider group-hover:text-white">Instagram</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-nude-700 pt-10 flex flex-col items-center text-center">
          <p className="text-nude-300 text-sm font-light mb-4">
            &copy; 2026 Eliana Maria - Ateliê de Beleza. Todos os direitos reservados.
          </p>
          
          <div className="opacity-60 hover:opacity-100 transition-opacity flex flex-col items-center gap-2">
            <span className="text-[10px] font-light text-nude-400 uppercase tracking-widest">developed by</span>
            <img 
              src="https://i.ibb.co/ZzKY56YQ/galantis-07.png" 
              alt="Galantis" 
              className="h-5 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};