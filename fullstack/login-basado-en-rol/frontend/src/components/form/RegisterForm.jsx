import Action from '../ui/Action'
import InputForm from './InputForm'
import Loading from '../ui/Loading'
import useRegister from '../../hooks/admin/useRegister'

const RegisterForm = () => {
    const { roles, loading, error, handleSubmit, errors, control, onSubmit } = useRegister()

    return (
        <>
            <h1 className="text-2xl text-center">Register</h1>

            {error && <p className="text-center font-semibold mt-2">{error}</p>}
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md">
                <InputForm name="username" control={control} label="Username" type="text" autoComplete={'username'} />
                <InputForm name="password" control={control} label="Password" type="password" autoComplete={'current-password'} />
                <InputForm name="role" control={control} label="Role" type="select" autoComplete={'role'} options={roles} />
                {loading
                    ? <Loading />
                    : <Action type={'Register'} />
                }

                {errors.username && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.username.message}</p>}
                {errors.password && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.password.message}</p>}
            </form>
        </>

    )
}

export default RegisterForm