import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="flex-grow">
                <Outlet /> {/* Este es el contenido de la ruta activa */}
            </main>
            <footer className="p-4 text-center font-semibold">Made with ♡ by <a href="https://github.com/JGRoldan/" target='_blank' rel='noopener noreferer' className='text-blue-600'>JGRoldan</a> </footer>
        </div>
    )
}

export default Layout