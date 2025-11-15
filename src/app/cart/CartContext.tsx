'use client';
import React, { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (newItem: CartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === newItem.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
            } else {
                return [...prevCart, newItem];
            }
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const decreaseQuantity = (id: number) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0) // remove only if quantity reaches 0
        );
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
};