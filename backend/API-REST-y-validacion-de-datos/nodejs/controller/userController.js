export class UserController {

    constructor ({ userModel }) {
        this.userModel = userModel
    }

    getAll = async (req, res) =>{

        try {
            const users = await this.userModel.getAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    }

    getByID = async (req, res) => {
        try {
            const user = await this.userModel.getByID(req.params.id)
            res.json(user)
        } catch (error) {
            if (error.message === 'Usuario no encontrado.') {
                res.status(404).json({ error: error.message });
            } else {
                res.status(500).json({ error: error.message });
            }
        }
    }

    create = async (req, res) => {
        try {
            const user = await this.userModel.create(req.body)
            res.status(201).json({message: 'Usuario creado correctamente', userID: user.insertId})            
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    update = async (req, res) => {
        try {
            const userUpdated = await this.userModel.update(req.params.id, req.body)
            
            if(userUpdated) res.status(201).json({message: 'Usuario actualizado correctamente.'})
            
        } catch (error) {
            if (error.message === 'Usuario no encontrado.') {
                res.status(404).json({ error: error.message });
            } else {
                res.status(500).json({ error: error.message });
            }
        }
    }

    deleteByID = async (req, res) => {
        try {
            const user = await this.userModel.deleteByID(req.params.id)
            if(user) res.status(200).json({message:'Usuario borrado correctamente', userDeleted: user})

        } catch (error) {
            if (error.message === "Usuario no encontrado.") {
                res.status(404).json({ error: error.message });
            } else {
                res.status(500).json({ error: error.message });
            }
        }

    }
    
}