import { useEffect, Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './store/useAuth'
import Layout from './components/ui/Layout'
import './App.css'

function App() {
  const initializeAuth = useAuth(state => state.initializeAuth)

  useEffect(() => {
    initializeAuth()
  }, [initializeAuth])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Toaster position="top-center" />
      <Layout />
    </Suspense>

  )
}

export default App
