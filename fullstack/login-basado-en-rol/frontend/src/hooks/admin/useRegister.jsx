import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Roles, URL } from '../../constants/const'
import { schemaRegister } from "../../validation/zodValidation"
import { useAuth } from "../../store/useAuth"
import useApiRequest from "../auth/useApiRequest"
import useAuthValidation from "../auth/useAuthValidation"
import toast from 'react-hot-toast'

const useRegister = () => {
    const [roles, setRoles] = useState([])
    const role = useAuth((state) => state.role)
    const { makeRequest, loading, error } = useApiRequest()
    const { redirectPath, redirectState } = useAuthValidation([Roles.ADMIN])
    const { handleSubmit, formState: { errors }, control, reset } = useForm(
        {
            resolver: zodResolver(schemaRegister),
            defaultValues: {
                username: "",
                password: "",
                role: 3
            }

        })

    const onSubmit = (data) => {
        const modifiedData = {
            ...data,
            role_id: Number(data.role)
        }
        const response = makeRequest(`${URL}/register`, "POST", modifiedData)
        if (!response) {
            toast.error("This didn't work.")
            throw new Error("Error al registrar usuario.")
        }
        reset()
    }

    const getRoles = async () => {
        try {
            const response = await makeRequest(`${URL}/rol`)
            setRoles(response)
            return response
        } catch (error) {
            console.error("Error getRoles:", error)
        }
    }

    useEffect(() => {
        getRoles()
    }, [])

    if (role !== Roles.ADMIN) {
        return (<Navigate to={redirectPath} state={redirectState} />)
    }

    return { roles, loading, error, handleSubmit, errors, control, onSubmit }
}

export default useRegister