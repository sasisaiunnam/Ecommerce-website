import React, { useState,useEffect } from 'react'
import { createContext } from 'react'

export const cartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // ✅ Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  const addToCart = (product) => {
    const existing = cartItems.find(item => item.id === product.id);
    
    if (existing) {
      setCartItems(
        cartItems.map(item => 
          (item.id === product.id) 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  const removeItem =(id) =>{
    setCartItems(cartItems.filter(items => items.id !== id))
  };

  
  const updateQuantity = (id, type) => {
  setCartItems((prev) =>
    prev.map((item) => {
      if (item.id === id) {
        if (type === 'INC') {
          return { ...item, quantity: item.quantity + 1 };
        }
        if (type === 'DEC' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    })
  );
};

  return (
    <cartContext.Provider value={{ addToCart, cartItems,removeItem,updateQuantity }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider