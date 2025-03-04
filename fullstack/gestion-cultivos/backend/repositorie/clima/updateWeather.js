import db from '../../config/db.config.js'

export const updateWeather = async () => {
    try {
        const cultivos = await db.cultivoModel.findAll({
            include: [{ model: db.ubicacionModel }],
        })

        for (const cultivo of cultivos) {
            const { latitud, longitud } = cultivo.dataValues.ubicacion.dataValues
            console.log({ latitud, longitud })
            //1- Llamar a la api
            //2- Obtener con temperatura y humedad

            //3- Actualizar los datos del clima
            // await db.condicionesClimaticasModel.create({
            //     cultivo_id: cultivo.dataValues.id,
            //     temperatura,
            //     humedad,
            //     fecha: new Date().toISOString(),
            // })
        }
    } catch (error) {
        console.error("Error actualizando clima:", error.message)
    }
}

updateWeather()