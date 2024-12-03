import { useEffect, useState } from 'react'
import Table from './table/Table.jsx'
import useApiRequest from '../hooks/auth/useApiRequest.jsx'
import { URL } from '../constants/const.js'
import Loading from './ui/Loading.jsx'

const Product = () => {
    const { makeRequest, loading, error } = useApiRequest()
    const [data, setData] = useState([])

    const getData = async () => {
        try {
            const response = await makeRequest(`${URL}/product`)
            const { result } = response
            setData(result)
        } catch (error) {
            console.error('Error getting products: ', error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <h1 className='text-xl font-semibold text-center'>Products</h1>
            {loading && <Loading />}
            {!loading && (!data || data.length === 0) && (
                <p className='text-center'>No products found.</p>
            )}
            {!loading && data && data.length > 0 && <Table data={data} />}
        </>
    )
}

export default Product