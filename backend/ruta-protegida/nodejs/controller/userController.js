import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const userRegister = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    
    res.status(200).json('REGISTER')
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