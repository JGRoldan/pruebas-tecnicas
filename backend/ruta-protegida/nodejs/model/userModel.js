import db from '../config/db.js'
import dotenv from 'dotenv'
dotenv.config()

const registerUser = async (data) => {
    try {
        const { email, password, role } = data
        const [result] = await db.query("INSERT INTO users (email, password, role) VALUES (?, ?, ?)", [email, password, role])
        return result
    } catch (error) {
        console.error('Database error:', error)
        throw new Error("Error al crear el usuario.")
    }
}

const getPassword = async (mail) => {
    try {
        const result = await db.query("SELECT password FROM users WHERE email = ?", [mail])
        if (result.length > 0) {
            return result[0][0].password
        } else {
            throw new Error("Usuario no encontrado.")
        }
    } catch (error) {
        console.error('Database error:', error)
        throw new Error("Error al obtener la contraseña.")
    }
}

const isAdministrator = async (mail) => {
    try {
        const result = await db.query("SELECT role FROM users WHERE email = ?", [mail])
        if (result.length > 0 && result[0][0].role === process.env.ROLE) {
            return true
        } else {
            false
        }
    } catch (error) {
        console.error('Database error:', error)
        throw new Error("Error al obtener el rol.")
    }
}

export { registerUser, getPassword, isAdministrator} 