import { Navigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schemaLogin } from "../../validation/zodValidation.js"
import { useAuth } from "../../store/useAuth"
import { URL, Roles } from "../../constants/const.js"
import Action from "../ui/Action.jsx"
import InputForm from "./InputForm"
import Loading from "../ui/Loading.jsx"
import useApiRequest from "../../hooks/auth/useApiRequest"

const LoginForm = () => {
    const { handleSubmit, formState: { errors }, control, reset } = useForm(
        {
            resolver: zodResolver(schemaLogin),
            defaultValues: {
                username: "",
                password: "",
                role: Roles.USER
            }

        })
    const { makeRequest, loading, error } = useApiRequest()
    const login = useAuth((state) => state.login)
    const isLoggedIn = useAuth((state) => state.isLoggedIn)

    const loginBtn = async (data) => {
        const response = await makeRequest(`${URL}/login`, "POST", data)
        if (response) {
            login()
            window.location.href = "/"
        }
        reset()
    }

    return (
        <>
            <h1 className="text-2xl text-center">Login</h1>
            <form onSubmit={handleSubmit(loginBtn)} className="mx-auto max-w-md">
                <InputForm name="username" control={control} label="Username" type="text" autoComplete={'username'} />
                <InputForm name="password" control={control} label="Password" type="password" autoComplete={'current-password'} />
                {loading
                    ? <Loading />
                    : <Action type={'Login'} />
                }

                {errors.username && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.username.message}</p>}
                {errors.password && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.password.message}</p>}
            </form>

            {isLoggedIn && <Navigate to={"/"} />}
        </>
    )

}

export default LoginForm