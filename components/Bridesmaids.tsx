import React from 'react';
import { Reveal } from './ui/Reveal';
import { Users } from 'lucide-react';

export const Bridesmaids: React.FC = () => {
  return (
    <section id="bridesmaids" className="py-24 md:py-32 bg-nude-50">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          {/* Removed rounded-3xl and increased shadow to shadow-2xl to match MainPackage */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-nude-50 to-white p-8 md:p-16 border border-nude-200 text-center shadow-2xl relative overflow-hidden">
             {/* Decorative Background Icon */}
            <Users className="absolute -top-10 -right-10 w-64 h-64 text-nude-100 opacity-50 pointer-events-none" />

            <h2 className="font-serif text-3xl md:text-4xl text-nude-900 mb-8 relative z-10">
              Madrinhas e Acompanhantes
            </h2>
            
            <div className="space-y-6 text-stone-600 font-light text-lg relative z-10">
              <p>
                Sabemos o quanto é especial compartilhar este momento com quem amamos.
                Oferecemos pacotes especiais para grupos a partir de <strong className="text-gold-500 font-normal">5 madrinhas</strong>.
              </p>
              <p>
                Para garantir a tranquilidade e a exclusividade da noiva, os serviços e valores das acompanhantes 
                são definidos separadamente e o atendimento é organizado para não interferir no cronograma da noiva.
              </p>
            </div>

            <div className="mt-10 relative z-10">
                <span className="inline-block px-6 py-2 bg-gold-100 text-gold-500 rounded-full text-sm font-semibold tracking-wide">
                    CONSULTE VALORES PARA GRUPOS
                </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};