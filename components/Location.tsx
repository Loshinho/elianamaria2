import React from 'react';
import { Reveal } from './ui/Reveal.tsx';
import { MapPin, Navigation, Church } from 'lucide-react';

export const Location: React.FC = () => {
  const handleOpenMaps = () => {
    window.open("https://maps.app.goo.gl/czAswgELcESe1tiX8", "_blank");
  };

  return (
    <section id="location" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text and Info Side */}
          <div className="lg:w-1/2 space-y-8">
            <Reveal>
              <span className="text-[10px] text-nude-400 font-bold tracking-[0.3em] uppercase block mb-4">Onde Estamos</span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-nude-900 leading-tight">
                Um refúgio de beleza no <br />
                <span className="italic font-light">coração de Santa Maria</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-nude-50 rounded-full">
                    <MapPin className="text-gold-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-nude-800 mb-1">Nosso Endereço</h4>
                    <p className="text-nude-600 font-light leading-relaxed text-sm md:text-base">
                      R. Narcisa, 50 - Centro<br />
                      Santa Maria de Itabira - MG<br />
                      CEP: 35910-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-nude-50 rounded-full">
                    <Church className="text-gold-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-nude-800 mb-1">Localização Privilegiada</h4>
                    <p className="text-nude-600 font-light leading-relaxed text-sm md:text-base">
                      Estamos a menos de 300 metros da <br />
                      <strong>Igreja Matriz de Nossa Senhora do Rosário</strong>.
                    </p>
                  </div>
                </div>

                <button 
                  onClick={handleOpenMaps}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-nude-900 text-white hover:bg-gold-600 transition-all duration-300 uppercase tracking-widest text-xs font-bold group shadow-xl"
                >
                  <Navigation size={18} className="group-hover:translate-x-1 transition-transform" />
                  Abrir no Google Maps
                </button>
              </div>
            </Reveal>

            {/* Non-interactive Vertical Vimeo Video in Loop */}
            <Reveal delay={0.4}>
              <div className="w-full max-w-[300px] rounded-2xl overflow-hidden shadow-2xl border border-nude-100 bg-nude-50">
                <div style={{padding:'177.78% 0 0 0', position:'relative'}}>
                  <iframe 
                    src="https://player.vimeo.com/video/1152745252?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1&controls=0" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', pointerEvents:'none'}} 
                    title="Institucional Localização"
                  ></iframe>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Maps Side - Size reduced by half */}
          <div className="lg:w-1/3 w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-inner-xl border-8 border-nude-50/50">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.13050188172357!2d-43.11473639281328!3d-19.451771055873227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa579910bcab84f%3A0xed69c62f169cb956!2sELIANA%20ATELIE%20DE%20BELEZA%20SMI!5e0!3m2!1spt-BR!2sbr!4v1767929078536!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'contrast(1.1)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Ateliê de Beleza"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};