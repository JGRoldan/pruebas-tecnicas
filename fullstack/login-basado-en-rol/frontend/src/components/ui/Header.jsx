import { Link } from "react-router-dom"
import { navLinksByRole } from "../../constants/const"
import { useAuth } from "../../store/useAuth"

const renderNavLinks = (role) => {
    const links = navLinksByRole[role] || []
    return links.map((link, index) => (
        <Link key={index} to={link.to} className="hover:underline">{link.label}</Link>
    ))
}

const Header = () => {
    const isLogged = useAuth(state => state.isLoggedIn)
    const logout = useAuth(state => state.logout)
    const userName = useAuth(state => state.username)
    const role = useAuth(state => state.role)

    const handleLogout = async () => {
        await logout()
        window.location.href = '/'
    }

    return (
        <header className="flex justify-between items-center p-2">
            <span><img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/4230/4230963.png" alt="Imagen de un usuario random para mostrar su perfil." /></span>
            <nav className="flex gap-6 p-1 items-center">
                <Link to='/' className="hover:underline">Home</Link>
                {
                    !isLogged
                        ? <Link to='/login'>Login</Link>
                        : (
                            <>
                                {isLogged && renderNavLinks(role)}
                                <div className="z-10 group relative">
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <img className="w-8 h-8 rounded-full" src="https://cdn-icons-png.freepik.com/512/3682/3682323.png" alt="Profile" />
                                            <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                                        </div>
                                        <div className="font-medium">
                                            <div>{userName}</div>
                                            <div className="text-sm text-gray-500">{role}</div>
                                        </div>
                                    </div>
                                    <Link
                                        to='/'
                                        onClick={handleLogout}
                                        className="absolute left-0 top-9 mt-2 hidden w-28 bg-white border border-gray-200 rounded shadow-lg group-hover:block p-2 overflow-hidden"
                                    >
                                        Logout
                                    </Link>
                                </div>
                            </>
                        )
                }
            </nav>

        </header>
    )
}

export default Header