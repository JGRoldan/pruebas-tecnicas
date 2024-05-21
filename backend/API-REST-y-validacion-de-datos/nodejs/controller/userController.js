export class UserController {

    constructor ({ userModel }) {
        this.userModel = userModel
    }

    getAll = async (req, res) =>{
        const users = await this.userModel.getAll()
        res.json(users)
    }

    getByID = async (req, res) => {
        const user = await this.userModel.getByID(req.params.id)
        res.json(user)
    }

    create = async (req, res) => {
        const user = await this.userModel.create(req.body)

        res.status(201).json({message: 'User created successfully', userCreated: user})
    }

    update = async (req, res) => {
        const { id } = req.body
        const userUpdated = await this.userModel.update(id, req.body)

        if(userUpdated) return res.status(201).json({message: 'User updated successfully'})

        res.status(404).json({message: 'User not found'})
    }

    deleteByID = async (req, res) => {
        const user = await this.userModel.deleteByID(req.params.id)

        if(!user) res.status(404).json({message: 'User not found'})

        return res.status(200).json({message:'User deleted successfully', userDeleted: user})
    }
    
}