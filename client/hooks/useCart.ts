import { useState, useEffect } from "react";

/**
 * Cart Item Interface
 * Represents a product in the shopping cart
 */
export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

/**
 * Custom Hook: useCart
 * Manages shopping cart state with localStorage persistence
 * Cart data persists across page refreshes
 */
export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("shopping_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to load cart from localStorage:", error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("shopping_cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  /**
   * Add item to cart or increase quantity if already exists
   */
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // Item already in cart, increase quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      // New item, add to cart with quantity 1
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  /**
   * Remove item from cart completely
   */
  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  /**
   * Update item quantity
   */
  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  /**
   * Clear entire cart
   */
  const clearCart = () => {
    setCart([]);
  };

  /**
   * Calculate total price of all items
   */
  const getTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return total + price * item.quantity;
    }, 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    cartItemCount: cart.length,
  };
}
