import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { isAdministrator } from '../model/userModel.js'
dotenv.config()

const isAuthenticated = (req, res, next) => {
  try {
    const [, token] = req.header('Authorization').split(' ')
    //console.log({isAuthenticated: token})

    if (!token) return res.status(401).send({message: 'Acceso no autorizado'})

    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).send({message: 'Token inválido'})
  }
}

const isAdmin = async(req, res, next) => {
  const isAdmin = await isAdministrator(req.user.email)
  if (isAdmin) {
    next()
  } else {
    res.status(403).send({message: 'Acceso denegado'})
  }
}

export { isAuthenticated, isAdmin }