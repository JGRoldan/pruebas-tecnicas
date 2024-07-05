import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { registerUser, getPassword } from '../model/userModel.js'
dotenv.config()

const userRegister = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const result = await registerUser(req.body)
        res.status(201).json({ message: 'Usuario registrado correctamente.', userID: result })
    } catch (error) {
        console.error('Error during user registration:', error)
        res.status(500).json({ message: error.message })
    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const passwordHash = await getPassword(email)
        const match = await bcrypt.compare(password, passwordHash)

        if(!match){
            res.status(400).json({ message: 'Contraseña Incorrecta.' })
        }

        const token = jwt.sign( { email }, process.env.SECRET_KEY, { expiresIn: '1h' })
        //console.log({userLogin: token})
        
        res.status(200).json({ message: 'Usuario logueado correctamente.'})
        
    } catch (error) {
        console.error('Error during user login:', error)
        res.status(500).json({ message: error.message })
    }
}

const userProfile = async (req, res) => {
    res.status(200).json('Vista solo de USERS.')
}

const adminOnly = async (req, res) => {
    res.status(200).json('Vista solo de ADMIN.')
}

const anyUser = async (req, res) => {
    res.status(200).json('Cualquier persona puede ver esto.')
}

export {userRegister, userLogin, userProfile, adminOnly, anyUser}