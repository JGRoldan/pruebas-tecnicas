import './Cart.css'
import { useId } from "react"
import { CartIcon, ClearCartIcon } from "../icon/Icons"
import { useCart } from '../../hooks/useCart'

function CartItem({thumnail, price, title, quantity, addToCart}) {
    
    return (
    <li>
        <img src={thumnail} alt="" />
        
        <div>
            <strong>{title}</strong> - ${price}
        </div>
        <footer>
            <small onClick={addToCart}>Cantidad: {quantity}</small>
            <button onClick={addToCart}>+</button>
        </footer>
    </li>
    )
}

export function Cart() {
    const cartCheckBokId = useId()
    const {cart, clearCart, addToCart} = useCart()

    return (
        <>
            <label htmlFor={cartCheckBokId} className="cart-button">
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckBokId} hidden />

            <aside className="cart">
                <ul>
                    {cart.map((product) => (
                        <CartItem 
                        key={product.id}
                        addToCart={() => addToCart(product)}
                        {...product} />
                    ))}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}


