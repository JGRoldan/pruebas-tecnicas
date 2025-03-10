import { Outlet } from "react-router-dom"
import './App.css'

function App() {

  return (
    <div className="flex flex-col min-h-screen items-center justify-between">
      <header>Add header</header>
      <Outlet />
      <footer className="text-center">Designed by <a className="text-sky-500" href="https://github.com/JGRoldan" target="_blank">JGRoldan</a> w/ ❤</footer>
    </div>
  )
}

export default App
