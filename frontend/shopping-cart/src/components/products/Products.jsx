import './Products.css'
import { AddToCartIcon } from '../icon/Icons.jsx'

export function Products({ products }) {
    products.map(product => console.log(product.title))
    return (
        <main className='products'>
            <ul>
                {products.slice(0,10).map(product =>
                    (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.description} />
                            <div>
                                <strong>{product.title}</strong>
                            </div>
                            <button>
                                <AddToCartIcon />
                            </button>
                        </li>
                    )
                )}
            </ul>
        </main>
    )
}