import db from '../config/db.js'

export class UserModel{
    static getAll = async () => {
    try {
        const [rows] = await db.query("SELECT * FROM user")
        return rows
    } catch (error) {
        throw new Error("Error al obtener usuarios.")
    }

    }

    static getByID = async (id) => {
        try {
            const [result] = await db.query("SELECT * FROM user WHERE id_user = ?", [id])
            if (result.length === 0) {
                throw new Error("Usuario no encontrado.")
            }
            return result[0]
        } catch (error) {
            if (error.message === 'Usuario no encontrado.') {
                throw error 
            } else {
                throw new Error(`Error al obtener el usuario.`)
            }
            
        }
    }

    static create = async (user) => {
        try {
            const { name, email, edad } = user
            const [result] = await db.query("INSERT INTO user (name, email, edad) VALUES (?, ?, ?)", [name, email, edad])

            return result
        } catch (error) {
            throw new Error("Error al crear el usuario.")
        }

    }

    static update = async (id, user) => {
        try {
            const { name, email, edad } = user
            const [result] = await db.query("UPDATE user SET name = ?, email = ?, edad = ? WHERE id_user = ?", [name, email, edad, id])            
            
            if (result.affectedRows === 0) {
                throw new Error("Usuario no encontrado.")
            }
            return result
        } catch (error) {
            if (error.message === 'Usuario no encontrado.') {
                throw error 
            } else {
                throw new Error('Error al borrar un usuario.') 
            }
        }
    }

    static deleteByID = async (id) =>  {
        try {
            const [result] = await db.query("DELETE FROM user WHERE id_user = ?", [id])
            if (result.affectedRows === 0) {
                throw new Error("Usuario no encontrado.")
            }
            return result
        } catch (error) {
            if (error.message === 'Usuario no encontrado.') {
                throw error 
            } else {
                throw new Error('Error al borrar un usuario.') 
            }
        }
    }
}