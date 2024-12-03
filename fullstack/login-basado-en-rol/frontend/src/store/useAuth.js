import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { URL } from '../constants/const.js'

export const useAuth = create(persist((set) => ({
    isLoggedIn: false,
    role: "",
    username: "",
    quantityProductCreated: 0,
    incrementProductCreated: () => set((state) => ({ quantityProductCreated: state.quantityProductCreated + 1 })),
    login: () => set({ isLoggedIn: true }),
    logout: async () => {
        await fetch(`${URL}/logout`, { method: 'POST', credentials: 'include' })
        set({ isLoggedIn: false, role: "", username: "", quantityProductCreated: 0 })
    },
    initializeAuth: async () => {
        try {
            const response = await fetch(`${URL}/auth/me`, { credentials: 'include' })
            const productCreated = await fetch(`${URL}/product/created-by-me`, { credentials: 'include' })

            if (response.ok) {
                const { username, role } = await response.json()
                const { result } = await productCreated.json()

                set({ isLoggedIn: true, username, role, quantityProductCreated: result })
            } else {
                set({ isLoggedIn: false, role: "", username: "" })
            }
        } catch (error) {
            console.error("Error initializing auth:", error)
            set({ isLoggedIn: false, role: "", username: "" })
        }
    },

}),
    {
        name: 'auth-storage',
    }
))