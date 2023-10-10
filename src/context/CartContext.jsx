import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            setCart(cart.map((product) => {
                if(product.id === item.id){
                    return {...product, quantity: product.quantity + quantity}
                }else{
                    return product
                }
            }))
        }else{
            setCart([...cart, {...item, quantity}])
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const productsQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const totalCartPrice = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }

    return(
        <CartContext.Provider value={{cart, addToCart, clearCart, removeFromCart,
        productsQuantity, totalCartPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider