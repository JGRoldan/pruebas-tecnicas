import {useState} from 'react'
import { products as initialProducts} from './mocks/products.json'
import { Products } from "./components/products/Products.jsx"

function App() {
  const [products] = useState(initialProducts)
  return (
      <Products products={products} />
  )
}

export default App
