import './Cart.css'
import { useId } from "react"
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "../icon/Icons"

export function Cart() {
    const cartCheckBokId = useId()

    return (
        <>
            <label htmlFor={cartCheckBokId} className="cart-button">
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckBokId} hidden />

            <aside className="cart">
                <ul>
                    <li>
                        <img src="https://http2.mlstatic.com/D_NQ_NP_716463-MLU75318989912_032024-O.webp" alt="" />
                        
                        <div>
                            <strong>Algo</strong> - $1449
                        </div>
                        <footer>
                            <small>Cantidad: 1</small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>

                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}


