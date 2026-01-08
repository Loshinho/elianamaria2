import React from 'react';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { MainPackage } from './components/MainPackage.tsx';
import { Addons } from './components/Addons.tsx';
import { Bridesmaids } from './components/Bridesmaids.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Info } from './components/Info.tsx';
import { Contact } from './components/Contact.tsx';
import { Navigation } from './components/Navigation.tsx';
import { CartProvider } from './context/CartContext.tsx';
import { CartDrawer } from './components/CartDrawer.tsx';

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