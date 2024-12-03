import { useLocation } from "react-router-dom"
import { useAuth } from "../../store/useAuth"

const useAuthValidation = (allowedRoles) => {
    const location = useLocation()
    const isLoggedIn = useAuth((state) => state.isLoggedIn)
    const userRole = useAuth((state) => state.role)

    const hasAccess = isLoggedIn && allowedRoles.includes(userRole)

    const redirectPath = !isLoggedIn
        ? "/login"
        : "/admin/unauthorized"

    const redirectState = !isLoggedIn
        ? { from: location, message: "You need to login first." }
        : { from: location, message: "You are unauthorized to access this page." }

    return { hasAccess, redirectPath, redirectState }
}

export default useAuthValidation