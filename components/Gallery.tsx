import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://i.ibb.co/0pQT02w6/SAU04275.jpg",
  "https://i.ibb.co/C5N9cMZG/SAU04297.jpg",
  "https://i.ibb.co/p61P7Qjf/SAU04307.jpg",
  "https://i.ibb.co/JjStnDXC/SAU04326.jpg",
  "https://i.ibb.co/rgY5HJ4/SAU04329.jpg",
  "https://i.ibb.co/gbKjPXDg/SAU04330.jpg",
  "https://i.ibb.co/d49SpY7T/Whats-App-Image-2026-01-09-at-10-20-25.jpg",
  "https://i.ibb.co/bgnKwBKq/Whats-App-Image-2026-01-09-at-10-20-26-1.jpg",
  "https://i.ibb.co/Y4SpRwWS/Whats-App-Image-2026-01-09-at-10-20-26.jpg",
  "https://i.ibb.co/TMJdM4Zs/0Z4A7717.jpg",
  "https://i.ibb.co/21GzYgrn/0Z4A7952.jpg",
  "https://i.ibb.co/7JP5qNLt/0Z4A7954.jpg",
  "https://i.ibb.co/gL9PwdZW/0Z4A7981.jpg",
  "https://i.ibb.co/ksgHsrnJ/0Z4A7987.jpg",
  "https://i.ibb.co/KpkdD4x7/SAU03739.jpg",
  "https://i.ibb.co/Q31P84QR/SAU03755.jpg",
  "https://i.ibb.co/XZStJBdL/SAU04251.jpg"
];

const Column = ({ images, duration = 20, yOffset = 0 }: { images: string[], duration?: number, yOffset?: number }) => (
  <div className="relative flex flex-col gap-6 w-full">
    <motion.div
      className="flex flex-col gap-6"
      animate={{ y: ["0%", "-50%"] }} 
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: 0
      }}
      style={{ y: yOffset }}
    >
      {images.map((src, i) => (
        <div key={`a-${i}`} className="w-full overflow-hidden rounded-lg shadow-md bg-nude-100/50">
          <img 
            src={src} 
            alt="Gallery item" 
            className="w-full h-auto object-contain opacity-95 hover:opacity-100 transition-opacity duration-500" 
          />
        </div>
      ))}
      {images.map((src, i) => (
        <div key={`b-${i}`} className="w-full overflow-hidden rounded-lg shadow-md bg-nude-100/50">
          <img 
            src={src} 
            alt="Gallery item loop" 
            className="w-full h-auto object-contain opacity-95 hover:opacity-100 transition-opacity duration-500" 
          />
        </div>
      ))}
    </motion.div>
  </div>
);

export const Gallery: React.FC = () => {
  // 17 images total
  const col1 = images.slice(0, 4);
  const col2 = images.slice(4, 9);
  const col3 = images.slice(9, 13);
  const col4 = images.slice(13, 17);

  return (
    <section className="py-24 md:py-32 bg-nude-50 overflow-hidden">
        <div className="relative h-[600px] md:h-[900px] w-full overflow-hidden bg-nude-50">
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-nude-50 via-nude-50/80 to-transparent z-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 h-full flex gap-4 md:gap-6 justify-center max-w-7xl">
                <div className="w-1/2 md:w-1/4 pt-12">
                     <Column images={col1} duration={50} />
                </div>

                <div className="w-1/2 md:w-1/4 -mt-12 md:-mt-24">
                     <Column images={col2} duration={40} />
                </div>

                <div className="hidden md:block md:w-1/4 pt-4">
                     <Column images={col3} duration={55} />
                </div>

                 <div className="hidden md:block md:w-1/4 -mt-16">
                     <Column images={col4} duration={45} />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-nude-50 via-nude-50/80 to-transparent z-20 pointer-events-none"></div>
        </div>
    </section>
  );
};