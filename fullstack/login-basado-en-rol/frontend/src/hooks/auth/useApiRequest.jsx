import { useState } from "react"
import toast from "react-hot-toast"

const useApiRequest = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const makeRequest = async (url, method = "GET", payload = null) => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: payload ? JSON.stringify(payload) : null,
                credentials: "include"
            })
            const data = await response.json()

            if (!response.ok) {
                const errorMessage = data.message || `Error ${response.status}: ${response.statusText}`
                throw new Error(errorMessage)
            }
            return data

        } catch (err) {
            setError(err.message)
            toast.error(err.message)
            return null
        } finally {
            setLoading(false)
        }
    }

    return { makeRequest, loading, error }

}

export default useApiRequest