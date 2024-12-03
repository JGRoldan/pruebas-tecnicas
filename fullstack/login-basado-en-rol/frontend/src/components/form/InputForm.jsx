import { Controller } from "react-hook-form"

const InputForm = ({ name, control, label, type, autoComplete = null, options = [] }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) =>
                    type === "select" ? (
                        <select
                            id={name}
                            {...field}
                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                        >
                            {options.map(({ id_rol, name }) => (
                                <option key={id_rol} value={id_rol}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <input
                            id={name}
                            type={type}
                            {...field}
                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                            autoComplete={autoComplete}
                            min={0}
                        />
                    )
                }
            />
        </div>
    )
}

export default InputForm