import { useState, useEffect } from "react"

export default function Main() {
    const [cultivo, setCultivo] = useState([])

    const fetchApi = async () => {
        try {
            const fetchData = await fetch(import.meta.env.VITE_CULTIVOS_URL, {
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            if (!fetchData.ok) {
                throw new Error("Error al autenticar")
            }
            const response = await fetchData.json()
            setCultivo(response)
        } catch (error) {
            console.log(error)
            throw new Error("Error al autenticar")
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <table className="text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th className="px-6 py-3">Nombre</th>
                    <th className="px-6 py-3">Fecha de siembra</th>
                    <th className="px-6 py-3">Rendimiento esperado</th>
                    <th className="px-6 py-3">Ubicación</th>
                </tr>
            </thead>
            <tbody>
                {cultivo.map((cultivo) => {
                    let fecha = new Date(cultivo.fecha_siembre).toLocaleDateString()
                    return (
                        <tr key={cultivo.id} data-id={cultivo.id} className="bg-white border-b border-gray-200">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{cultivo.nombre}</td>
                            <td className="px-6 py-4">{fecha}</td>
                            <td className="px-6 py-4">{cultivo.rendimiento_esperado}</td>
                            <td className="px-6 py-4">{cultivo.ubicacion.nombre}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}