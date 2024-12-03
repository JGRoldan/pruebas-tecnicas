import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schemaCreateProduct } from "../../validation/zodValidation.js"
import { useAuth } from "../../store/useAuth.js"
import { URL, MAX_PRODUCT_CREATED } from "../../constants/const.js"
import Action from "../ui/Action.jsx"
import InputForm from "./InputForm.jsx"
import Loading from "../ui/Loading.jsx"
import useApiRequest from "../../hooks/auth/useApiRequest.jsx"
import toast from "react-hot-toast"

const CreateForm = () => {
    const { handleSubmit, formState: { errors }, control, reset } = useForm(
        {
            resolver: zodResolver(schemaCreateProduct),
            defaultValues: {
                product_name: "",
                product_description: "",
                product_price: "",
                product_stock: "",
            }

        })
    const { makeRequest, loading, error } = useApiRequest()
    const quantityProductCreated = useAuth((state) => state.quantityProductCreated)
    const incrementProductCreated = useAuth((state) => state.incrementProductCreated)
    const remainingProducts = MAX_PRODUCT_CREATED - quantityProductCreated
    const message = remainingProducts > 0
        ? `You can create ${remainingProducts} more product${remainingProducts > 1 ? 's' : ''}.`
        : "You can't create more products."

    const onHandlerCreate = async (data) => {
        try {
            if (quantityProductCreated >= MAX_PRODUCT_CREATED) {
                throw new Error("You can't create more products.")
            }
            const response = await makeRequest(`${URL}/product/create`, "POST", data)
            if (response) {
                incrementProductCreated()
                toast.success("Product created successfully!")
            }
            reset()
        } catch (err) {
            console.error("Error creating product:", err)
        }
    }

    return (
        <>
            {quantityProductCreated >= MAX_PRODUCT_CREATED
                ? <p className="text-center font-semibold mt-2 text-red-600 dark:text-red-500">You can't create more products.</p>
                :
                <>
                    {error
                        ? <p className="text-center font-semibold mt-2 text-red-600 dark:text-red-500">{error}</p>
                        :
                        <>
                            <h1 className="text-2xl text-center">Create Product</h1>
                            <p className="text-center font-semibold mt-2 text-red-600 dark:text-red-500">{message}</p>
                            <form onSubmit={handleSubmit(onHandlerCreate)} className="mx-auto max-w-md">
                                <InputForm name="product_name" control={control} label="Product name" type="text" autoComplete={'product name'} />
                                <InputForm name="product_description" control={control} label="Product description" type="text" autoComplete={'product description'} />
                                <InputForm name="product_price" control={control} label="Product price" type="number" autoComplete={'product price'} />
                                <InputForm name="product_stock" control={control} label="Product stock" type="number" autoComplete={'product stock'} />
                                {loading ? <Loading /> : <Action type={'Create Product'} />}

                                {errors.product_name && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.product_name.message}</p>}
                                {errors.product_description && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.product_description.message}</p>}
                                {errors.product_price && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.product_price.message}</p>}
                                {errors.product_stock && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.product_stock.message}</p>}
                            </form>

                        </>
                    }

                </>
            }
        </>
    )

}

export default CreateForm