import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import { Navigate } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute.jsx"
import App from "../App.jsx"

//Carga diferida de componentes
const Login = lazy(() => import("../pages/Login.jsx"))
const MainPage = lazy(() => import("../pages/Main.jsx"))
const NotFound = lazy(() => import("../pages/NotFound.jsx"))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // App como layout principal
        children: [
            {
                index: true,
                element: <Navigate to="/main" />, // Redirige a /main si está logueado
            },
            {
                path: "main",
                element: <ProtectedRoute />, // Protege todas las rutas hijas
                children: [
                    {
                        index: true,
                        element: <MainPage />, // Ahora sí se renderiza
                    }
                ],
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    }, // Ruta pública para login
    {
        path: "*",
        element: <NotFound />,
    }, // Ruta 404
])
