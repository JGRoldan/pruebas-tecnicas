import { products as initialProducts } from './mocks/products.json'
import { Products } from "./components/products/Products.jsx"
import { Header } from './components/header/Header.jsx'
import { useFilters } from './hooks/useFilters.jsx'
import { Cart } from './components/cart/Cart.jsx'

function App() {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
