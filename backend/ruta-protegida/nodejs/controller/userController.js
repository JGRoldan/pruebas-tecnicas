import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { registerUser } from '../model/userModel.js'
dotenv.config()

const userRegister = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const result = await registerUser(req.body)
        res.status(201).json({ message: 'Usuario registrado correctamente', userID: result })
    } catch (error) {
        console.error('Error during user registration:', error)
        res.status(500).json({ message: error.message })
    }
}

const userLogin = async (req, res) => {
    const { email } = req.body
    /*
    1 - Validar que exista mail en ddbb
    2 - Generar token
    3 - Devolver logueo exitoso
    */
    const token = jwt.sign( { email }, process.env.SECRET_KEY, { expiresIn: '1h' })
    console.log({userLogin: token})

    res.status(200).json('LOGIN')
}

const userProfile = async (req, res) => {
    res.status(200).json('USER LOGIN')
}

const adminOnly = async (req, res) => {
    res.status(200).json('ADMIN LOGIN')
}

export {userRegister, userLogin, userProfile, adminOnly}