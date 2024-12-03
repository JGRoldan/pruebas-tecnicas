import { useEffect, useState } from "react"
import useApiRequest from "../auth/useApiRequest"

const URL = import.meta.env.VITE_URL

const useAdmin = () => {
    const { makeRequest, loading, error } = useApiRequest()
    const [data, setUser] = useState([])
    const [role, setRole] = useState([])
    const [logs, setLogs] = useState([])

    const fetchData = async () => {
        try {
            const user = await makeRequest(`${URL}/user`)
            const rol = await makeRequest(`${URL}/rol`)
            const logs = await makeRequest(`${URL}/product-logs`)
            setUser(user)
            setRole(rol)
            setLogs(logs)
        } catch (err) {
            console.error('An error occurred: ', err)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return { data, role, logs, loading, error }
}

export default useAdmin