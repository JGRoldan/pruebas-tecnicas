import bcrypt from "bcrypt"

const userRegister = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    
    res.status(200).json('REGISTER')
}

const userLogin = async (req, res) => {
    res.status(200).json('LOGIN')
}

export {userRegister, userLogin}