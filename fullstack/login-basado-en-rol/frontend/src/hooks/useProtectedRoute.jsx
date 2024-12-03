import { Navigate, Outlet } from "react-router-dom"
import useAuthValidation from "./auth/useAuthValidation"

const ProtectedRoute = ({ allowedRoles }) => {
    const { hasAccess, redirectPath, redirectState } = useAuthValidation(allowedRoles)

    return hasAccess ? (
        <Outlet />
    ) : (
        <Navigate to={redirectPath} state={redirectState} replace />
    )

}

export default ProtectedRoute