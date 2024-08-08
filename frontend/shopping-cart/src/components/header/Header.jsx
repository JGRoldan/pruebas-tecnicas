import { Filters } from "../filter/Filters.jsx";


export function Header({ changeFilters }) {
    return (
        <header>
            <h1>Shopping Cart 🛒</h1>
            <Filters changeFilters={changeFilters}/>
        </header>
    )
}