import { createBrowserRouter } from "react-router-dom"
import { lazy } from "react"
import { Roles } from "../constants/const.js"
import App from "../App"
import ProtectedRoute from "../hooks/useProtectedRoute"

const Admin = lazy(() => import('../pages/admin/Admin'))
const Create = lazy(() => import('../pages/admin/Create'))
const Home = lazy(() => import('../pages/user/Home'))
const Login = lazy(() => import('../pages/Login'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Register = lazy(() => import('../pages/admin/Register'))
const UnAuthorized = lazy(() => import('../pages/UnAuthorized'))
const Update = lazy(() => import('../pages/admin/Update'))
const Upload = lazy(() => import('../pages/admin/Upload'))

export const router = createBrowserRouter([
    {
        path: "/admin",
        element: (
            <App /> // Layout principal
        ),
        children: [
            {
                element: <ProtectedRoute allowedRoles={[Roles.ADMIN]} />,
                children: [
                    { path: "update", element: <Update /> },
                    { path: "upload", element: <Upload /> },
                ],
            },
            {
                element: <ProtectedRoute allowedRoles={[Roles.ADMIN, Roles.ADMIN_ASSIST]} />,
                children: [
                    { index: true, element: <Admin /> },
                    { path: "register", element: <Register /> },
                    { path: "create", element: <Create /> }
                ],
            },
            { path: "unauthorized", element: <UnAuthorized /> },
        ],
    },
    {
        path: "/",
        element: <App />, // Layout principal con `Outlet`
        children: [
            { index: true, element: <Home /> },
            { path: "login", element: <Login /> },
        ],
    },
    { path: "*", element: <NotFound /> }, // Ruta 404 pública
])