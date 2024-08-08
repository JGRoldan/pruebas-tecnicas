import { useState } from 'react';
import './Filters.css';

export function Filters({ changeFilters }) {
    const [minPrice, setMinPrice] = useState(0)

    const handlePriceChange = (event) => {
        setMinPrice(event.target.value)
        changeFilters(prev => (
            {...prev, minPrice: event.target.value}
        ))
    }

    const handleChangeCategory = (event) =>{
        changeFilters(prev => (
            {...prev, category: event.target.value}
        ))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Precio a partir de: </label>
                <input 
                    type="range"
                    id="price" 
                    min={0}
                    max={1000}
                    onChange={handlePriceChange}
                />
                <span>{minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Categorias: </label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Notebooks</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}