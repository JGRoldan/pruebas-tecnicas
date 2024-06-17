import { validateUser } from "../validator/userValidation.js"

const userValidated = (req, res, next) => {
    const userValidated = validateUser(req.body)
    if(!userValidated.success) return res.status(400).json({error: JSON.parse(userValidated.error.message)})
    next()
}

export { userValidated }
