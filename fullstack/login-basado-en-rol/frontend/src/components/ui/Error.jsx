import { Link } from 'react-router-dom'

const Errors = ({ statusCode, message }) => {
    return (
        <section className="bg-white h-screen flex justify-center items-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-black ">{statusCode}</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-black md:text-4xl">Something's missing.</p>
                    <p className="mb-4 text-lg font-light  text-gray-800">{message} </p>
                    <Link to={"/"} className="mt-4 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">Back to Homepage</Link>
                </div>
            </div>
        </section>

    )
}

export default Errors