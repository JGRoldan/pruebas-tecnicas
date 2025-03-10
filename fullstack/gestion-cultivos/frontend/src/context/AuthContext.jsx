import { createContext, useState, useContext } from "react"

//1. Creo el contexto
const AuthContext = createContext()

//2. Creo el provider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = async (userData) => {
        try {
            const fetchData = await fetch(import.meta.env.VITE_LOGIN_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData),
                credentials: "include"
            })
            const response = await fetchData.json()
            if (!response.status) {
                throw new Error("Error al autenticar")
            }

            setUser(userData) // Lógica de autenticación
        } catch (error) {
            console.log(error)
            throw new Error("Error al autenticar")
        }
    }

    const logout = () => {
        setUser(null)
    }

    const isAuthenticated = !!user

    //3. Devuelvo el provider con el contexto
    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

//4. Hook para consumir el contexto
export const useAuth = () => useContext(AuthContext)