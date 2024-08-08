import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import { Products } from "./components/products/Products.jsx"
import { Header } from './components/header/Header.jsx'
import { useFilters } from './hooks/useFilters.jsx'

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
