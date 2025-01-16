"use client"

import { createContext, useState }  from "react";

export const CartContext = createContext()

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    function addToCart(product){
        setCart(prev => [...prev, product])
    }

    function removeFromCart(producId){
        setCart(prev => prev.filter((product)=>product.id != producId))
    }

    return(
        <CartContext.Provider value={ {cart, addToCart, removeFromCart} }>
            {children}
        </CartContext.Provider>
    )
}