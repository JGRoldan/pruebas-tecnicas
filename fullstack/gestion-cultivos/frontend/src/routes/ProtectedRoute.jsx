import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext.jsx"

export default function ProtectedRoute() {
    const { isAuthenticated } = useAuth()
    console.log({ isAuthenticated })

    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace />
    )
}