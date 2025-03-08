import cron from "node-cron"
import { updateWeather } from '../repositorie/clima/updateWeather.js'

// Cron job every 1 minuto for testin */1 * * * *
// Cron job every 1 hour for production 0 * * * *
export const startCronJob = () => {
    cron.schedule("0 * * * *", async () => {
        await updateWeather()
    })
}