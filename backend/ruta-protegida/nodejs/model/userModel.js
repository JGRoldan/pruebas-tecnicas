import db from '../config/db.js'

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

export { registerUser } 