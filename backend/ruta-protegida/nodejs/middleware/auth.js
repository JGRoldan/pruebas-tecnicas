import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const isAuthenticated = (req, res, next) => {
  try {
    const [, token] = req.header('Authorization').split(' ')
    console.log({isAuthenticated: token})

    if (!token) return res.status(401).send({message: 'Acceso no autorizado'})

    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).send({message: 'Token inválido'})
  }
}

const isAdmin = (req, res, next) => {
  if (req.user && req.user.email === process.env.ADMIN_MAIL) {
    next()
  } else {
    res.status(403).send({message: 'Acceso denegado'})
  }
}

export { isAuthenticated, isAdmin }