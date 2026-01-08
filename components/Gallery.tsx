import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549488344-c7079f8501c0?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616166318995-1724c9c18338?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1635863148118-243292419409?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519699047748-40ba5266f2bb?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1508768787810-6adc1f613514?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&w=600&auto=format&fit=crop"
];

const Column = ({ images, duration = 20, yOffset = 0 }: { images: string[], duration?: number, yOffset?: number }) => (
  <div className="relative flex flex-col gap-6 w-full">
    <motion.div
      className="flex flex-col gap-6"
      animate={{ y: ["0%", "-50%"] }} // Moves up by half its height (assuming duplicate list)
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: 0
      }}
      style={{ y: yOffset }}
    >
      {/* Render images twice for seamless loop */}
      {images.map((src, i) => (
        <div key={`a-${i}`} className="w-full aspect-[2/3] overflow-hidden rounded-lg shadow-md">
          <img src={src} alt="Gallery" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
        </div>
      ))}
      {images.map((src, i) => (
        <div key={`b-${i}`} className="w-full aspect-[2/3] overflow-hidden rounded-lg shadow-md">
          <img src={src} alt="Gallery" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
        </div>
      ))}
    </motion.div>
  </div>
);

export const Gallery: React.FC = () => {
  // Split images into 4 columns (3 images each)
  const col1 = images.slice(0, 3);
  const col2 = images.slice(3, 6);
  const col3 = images.slice(6, 9);
  const col4 = images.slice(9, 12);

  return (
    <section className="py-24 md:py-32 bg-nude-50 overflow-hidden">
        {/* Elevator Gallery Container */}
        <div className="relative h-[600px] md:h-[800px] w-full overflow-hidden bg-nude-50">
            {/* Top Gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-nude-50 via-nude-50/80 to-transparent z-20 pointer-events-none"></div>

            {/* Grid Container - Added max-w-7xl to accommodate 4 columns */}
            <div className="container mx-auto px-4 h-full flex gap-4 md:gap-6 justify-center max-w-7xl">
                {/* Column 1 - Slower */}
                <div className="w-1/2 md:w-1/4 pt-12">
                     <Column images={col1} duration={45} />
                </div>

                {/* Column 2 - Faster */}
                <div className="w-1/2 md:w-1/4 -mt-12 md:-mt-24">
                     <Column images={col2} duration={35} />
                </div>

                {/* Column 3 - Slower (Hidden on Mobile) */}
                <div className="hidden md:block md:w-1/4 pt-4">
                     <Column images={col3} duration={50} />
                </div>

                 {/* Column 4 - Faster (Hidden on Mobile) - New Column */}
                 <div className="hidden md:block md:w-1/4 -mt-16">
                     <Column images={col4} duration={40} />
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-nude-50 via-nude-50/80 to-transparent z-20 pointer-events-none"></div>
        </div>
    </section>
  );
};