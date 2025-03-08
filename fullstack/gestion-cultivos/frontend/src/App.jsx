import { Outlet } from "react-router-dom"
import './App.css'

function App() {

  return (
    <div>
      <Outlet />
      <footer className="text-center">Designed by <a className="text-sky-500" href="https://github.com/JGRoldan" target="_blank">JGRoldan</a> w/ ❤</footer>
    </div>
  )
}

export default App
