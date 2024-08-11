import { useId } from 'react';
import './Filters.css';
import { useFilters } from '../../hooks/useFilters.jsx';

export function Filters() {
    const { filters, setFilters }  = useFilters()

    const minProceFilterId = useId()
    const categoryFilterId = useId()

    const handlePriceChange = (event) => {
        setFilters(prev => (
            {...prev, minPrice: event.target.value}
        ))
    }

    const handleChangeCategory = (event) =>{
        setFilters(prev => (
            {...prev, category: event.target.value}
        ))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minProceFilterId}>Precio a partir de: </label>
                <input 
                    type="range"
                    id={minProceFilterId} 
                    min={0}
                    max={1000}
                    onChange={handlePriceChange}
                    value={filters.minPrice} 
                />
                <span>{filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categorias: </label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Notebooks</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}