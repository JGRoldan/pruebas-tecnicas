import { validateUser, partialValidateUser } from "../validator/userValidation.js"

const userValidated = (req, res, next) => {
    const userValidated = validateUser(req.body)
    if(!userValidated.success) return res.status(400).json({error: JSON.parse(userValidated.error.message)})
    next()
}

const userPartialValidated = (req, res, next) => {
    const userValidated = partialValidateUser(req.body)
    if(!userValidated.success) return res.status(400).json({error: JSON.parse(userValidated.error.message)})
    next()
}

export { userValidated, userPartialValidated }
