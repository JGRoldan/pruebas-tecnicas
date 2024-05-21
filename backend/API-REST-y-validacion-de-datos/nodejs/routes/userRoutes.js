import { Router } from 'express'
import { UserController } from '../controller/userController.js'

export const createUserRoutes = ({ userModel }) => {
  const userRouter = Router()
  const userController = new UserController({ userModel })

  userRouter
    .get('/', userController.getAll)
    .get('/:id', userController.getByID)
    .post('/', userController.create)
    .patch('/:id', userController.update)
    .delete('/:id', userController.deleteByID)

  return userRouter
}
