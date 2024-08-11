import { createContext, useState } from "react";

//Esto es lo que tenemos que consumir. 
//Solo se crea una  vez
export const FiltersContext = createContext();

//Esto es lo que nos provee el acceso al contexto
export const FiltersProvider = ({ children }) => {
    const [filters, setFilters] = useState({category: 'all', minPrice: 0})

    return (
        <FiltersContext.Provider value={{filters, setFilters}}>
            {children}
        </FiltersContext.Provider>
    )
}