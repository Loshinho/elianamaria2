import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  category: 'package' | 'addon';
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  isOpen: boolean;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    // Avoid duplicates for unique items if necessary, but allowing multiple for addons makes sense usually.
    // For simplicity, we assume addons can be added once or checking by ID.
    // Let's allow duplicates but maybe user wants just one of each type usually for Bride day.
    // Let's check existence for simplicity to avoid spamming the cart.
    if (!items.find((i) => i.id === item.id)) {
        setItems((prev) => [...prev, item]);
        // setIsOpen(true); // Removed: User requested not to open automatically
    }
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleCart = () => setIsOpen((prev) => !prev);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, isOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};