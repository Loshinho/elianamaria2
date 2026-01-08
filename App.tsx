import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MainPackage } from './components/MainPackage';
import { Addons } from './components/Addons';
import { Bridesmaids } from './components/Bridesmaids';
import { Gallery } from './components/Gallery';
import { Info } from './components/Info';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-nude-50 font-sans text-stone-800 antialiased selection:bg-rose-200 selection:text-rose-900">
        <Navigation />
        <main>
          <Hero />
          <About />
          <MainPackage />
          <Addons />
          <Bridesmaids />
          <Gallery />
          <Info />
          <Contact />
        </main>
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default App;