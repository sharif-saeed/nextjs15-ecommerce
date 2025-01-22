"use client"

import { CartContext } from "@/contexts/CartContex"
import { useContext } from "react"


export default function CartClientSide(){

  let {cart, removeFromCart, updateQuantity, getTotal} = useContext(CartContext)

    return(
        <div className="cart">
            <h1>Cart Items</h1>

            {
                cart.length==0?
                <p>No items in cart</p>:
                cart.map(
                    (product)=>(
                        <div key={product.id}>

                            <img src={product.image}  />

                            <div>
                                <h2>{product.title}</h2>
                                <p>{product.price}</p>
                                <input type="number" value={product.quantity}
                                 min="1"
                                onChange={()=>updateQuantity(product.id, Number(event.target.value))}
                                />
                                <button onClick={ ()=>{removeFromCart(product.id)} }>Remove</button>

                            </div>
                        </div>
                    )
                )
            }

            <div>
                <h3>Total price is: {getTotal().toFixed(2)}</h3>
            </div>

        </div>
    )
}